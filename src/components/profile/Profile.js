import React, { useEffect, useState } from "react";
import "./profile.scss";
import { useWeb3React } from "@web3-react/core";
import { API_URL } from "../../utils/ApiUrl";
import NFTS from "./components/nfts";
import { toast } from "react-toastify";
import Loader from "../../hooks/loader";
import axios from "axios";
import DumImage from "../../Assets/profile1.png"

const Profile = () => {
  const { account } = useWeb3React();
  const [mynfts, setMynfts] = useState([]);
  const [loaderMain, setLoaderMain] = useState(false);
  const [selectedImg, setSelectedImg] = useState(DumImage);
  const [image, setimage] = useState(DumImage);
  const [myFiles, setMyFiles] = useState();
  const [tab, setTab] = useState(0);
  const [inputs, setInputs] = useState({
    name: '',
    bio: '',
  });

  const { name, bio } = inputs;

  const handleChange1 = (e) => {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  const handleFileSelect = (evt) => {
    if (evt.target.files) {
      const filesarray = Array.from(evt.target.files).map((file) =>
        URL.createObjectURL(file)
      );

      setSelectedImg(filesarray[0]);
      // Array.from(evt.target.files).map((file) => URL.createObjectURL(file))
    }
    var files = evt.target.files;
    var file = files[0];
    setMyFiles(file);
  };

  const contract_address = "0xe8d9f14c67232d0b9F0CC20dfd745c3a9FBb5c8D";

  const getMyNfts = async () => {
    setLoaderMain(true);
    if (account) {
      var config = {
        method: "get",
        url: `https://deep-index.moralis.io/api/v2/${account}/nft/${contract_address}?chain=rinkeby&format=decimal`,
        headers: {
          "x-api-key":
            "8PhWxNHdk3lT8nBPqwYO93tpqCDqHPUbGrPTxxEWcEk3yHaMVyDs5qvVQ7bLEsav",
        },
      };
      axios(config)
        .then(function (response) {
          setLoaderMain(false);
          setMynfts(response.data.result);
        })
        .catch(function (error) {
          setLoaderMain(false);
          console.log(error);
        });
    }
  };

  const remove = () => {
    setSelectedImg("");
    setMyFiles("");
  };

  const renderPhotos = (source) => {
    return (
      <img
        src={source}
        alt=""
        className="rounded-circle img-fluid"
        width="200"
        height="200"
      />
    );
  };

  const EditProfile = async (event) => {
    setLoaderMain(true);
    event.preventDefault();
    const data = new FormData();
    if (myFiles) {
      data.append("picture", myFiles);
    }
    data.append("name", inputs.name);
    data.append("bio", inputs.bio);
    data.append("walletAddress", account);

    if (myFiles != "" && inputs.name != "" && inputs.bio != "" && account) {
      axios
        .post(API_URL + "v1/users/editUser", data, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((response) => {
          setLoaderMain(false);
          toast.success("User Edit Successfully", {
            position: "top-center",
            autoClose: 2000,
          });
          setInputs({
            name: "",
            bio: "",
          });
          setSelectedImg("");
          getUser();
        })
        .catch((err) => {
          setLoaderMain(false);
          toast.error(err.response.data.msg, {
            position: "top-center",
            autoClose: 2000,
          });
        });
    } else {
      setLoaderMain(false);
      toast.error("Field cannot be empty", {
        position: "top-center",
        autoClose: 2000,
      });
    }
  };

  const getUser = async (event) => {
    setLoaderMain(true);
    axios
      .post(API_URL + "v1/users/getUser", { walletAddress: account })
      .then((response) => {
        setInputs(response.data.user);
        setimage(response.data.user.picture);
        setSelectedImg(response.data.user.picture)
        setLoaderMain(false);
      })
      .catch((err) => {
        setLoaderMain(false);;
        toast.error(err.response.data.msg, {
          position: "top-center",
          autoClose: 2000,
        });
      });
  };

  useEffect(() => {
    if (account) {
      getUser();
      getMyNfts();
    } else {
      setInputs({
        name: "",
        bio: "",
      });
      setSelectedImg("");
      setimage('')
    }
  }, [account]);

  return (
    <>
      {loaderMain && <Loader />}
      <section className="main-profile ptb">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="inner-content text-center">
                <a className="ptb20">
                  {image ? (
                      <img
                      src={image}
                      alt=""
                      className="rounded-circle img-fluid"
                      width={200}
                      height={200}
                    />
                  ) : (
                    <img
                    src={DumImage}
                    alt=""
                    className="rounded-circle img-fluid"
                    width={200}
                    height={200}
                  />
                  )}
                </a>
                <h6 className="black ptb20">
                  <strong>
                    {account ? <>{account.slice(0, 26) + "..."}</> : ""}
                  </strong>
                </h6>

                <ul className="list-inline ptb20">
                  <li className="list-inline-item">
                    <button
                      onClick={() => setTab(0)}
                      className="btn-common2 cursor-pointer"
                    >
                      Owned
                    </button>
                  </li>
                  <li className="list-inline-item">
                    <button
                      onClick={() => setTab(1)}
                      className="btn-common2 cursor-pointer"
                    >
                      My Bids
                    </button>
                  </li>
                  <li className="list-inline-item">
                    <button
                      onClick={() => setTab(5)}
                      className="btn-common2 cursor-pointer"
                    >
                      On Auction
                    </button>
                  </li>
                  <li className="list-inline-item">
                    <button
                      onClick={() => setTab(3)}
                      className="btn-common2 cursor-pointer"
                    >
                      Sold
                    </button>
                  </li>
                  <li className="list-inline-item">
                    <button
                      onClick={() => setTab(4)}
                      className="btn-common2 cursor-pointer"
                    >
                      UnSold
                    </button>
                  </li>
                  <li className="list-inline-item">
                    <button
                      onClick={() => setTab(2)}
                      className="btn-common2 cursor-pointer"
                    >
                      Edit Profile
                    </button>
                  </li>
               
               
                </ul>
              </div>
            </div>
          </div>
          {tab === 0 && (
            <div className="row ptb20">
              {account ? (
                <>
                  {mynfts.map((item, index) => {
                    return <NFTS key={index} index={index} item={item} />;
                  })}
                </>
              ) : (
                <h3 className="text-center w-100">Please connect your wallet</h3>
              )}
            </div>
          )}
          {tab === 2 && (
            <div className="row ptb">
              <div className="col-sm-3 d-block d-sm-none d-md-none d-lg-none d-xl-none">
                <div className="inner-upload text-center">
                  <a className="ptb20 rounded-circle">
                    {selectedImg ? (
                      renderPhotos(selectedImg)
                    ) : (
                      <img
                        src="\wordnftgenerator-assets\profile\profile.png"
                        className="img-fluid"
                      />
                    )}
                  </a>

                  <ul className="list-inline ptb20">
                    <li className="list-inline-item">
                      <label htmlFor="imagefile" className="btn-common">
                        Change
                      </label>
                      <div className="choose-filessss">
                        {/* <p>Drag & drop or <span></span></p> */}
                        <form>
                          {" "}
                          <input
                            type="file"
                            id="imagefile"
                            name="image"
                            className={"form-control invisible d-none"}
                            onChange={handleFileSelect}
                            accept="image/gif, image/jpeg, image/png"
                          />
                          {/* <h4 style={{ fontWeight: "bold" }}>{myFiles[0].name}</h4> */}
                          {/* {myFiles[0]} */}
                        </form>
                      </div>
                    </li>
                    <li className="list-inline-item">
                      <button className="btn-common2 common" onClick={remove}>
                        Remove
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-8">
                <div className="inner-form">
                  <h3 className="">Edit Profile</h3>
                  <div className="brdr-all"></div>
                  <form>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1" className="grey">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={inputs.name}
                        onChange={handleChange1}
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter Your Name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1" className="grey">
                        Wallet Address
                      </label>
                      <input
                        value={account ? account : "Connect Your Wallet"}
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Connect Your Wallet"
                        readOnly
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleFormControlTextarea1" className="grey">
                        Bio
                      </label>
                      <textarea
                        className="form-control"
                        type="text"
                        name="bio"
                        value={inputs.bio}
                        onChange={handleChange1}
                        id="exampleFormControlTextarea1"
                        placeholder="Enter Your Bio"
                        rows="3"
                      ></textarea>
                    </div>
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <button
                          type="submit"
                          className="btn-common"
                          onClick={EditProfile}
                        >
                          Save Changes
                        </button>
                      </li>
                      <li className="list-inline-item">
                        <button type="submit" className="btn-common2 common">
                          Cancel
                        </button>
                      </li>
                    </ul>
                  </form>
                </div>
              </div>
              <div className="col-sm-3 d-none d-sm-block d-md-block d-lg-block d-xl-block">
                <div className="inner-upload text-center">
                  <a className="ptb20 rounded-circle">
                    {selectedImg ? (
                      renderPhotos(selectedImg)
                    ) : (
                      <img
                      src={DumImage}
                      alt=""
                      className="rounded-circle img-fluid"
                      width={200}
                      height={200}
                    />
                    )}
                  </a>

                  <ul className="list-inline ptb20">
                    <li className="list-inline-item">
                      <label htmlFor="imagefile" className="btn-common">
                        Change
                      </label>
                      <div className="choose-filessss">
                        {/* <p>Drag & drop or <span></span></p> */}
                        <form>
                          {" "}
                          <input
                            type="file"
                            id="imagefile"
                            name="image"
                            className={"form-control invisible d-none"}
                            onChange={handleFileSelect}
                            accept="image/gif, image/jpeg, image/png"
                          />
                          {/* <h4 style={{ fontWeight: "bold" }}>{myFiles[0].name}</h4> */}
                          {/* {myFiles[0]} */}
                        </form>
                      </div>
                    </li>
                    <li className="list-inline-item">
                      <button className="btn-common2" onClick={remove}>
                        Remove
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Profile;
