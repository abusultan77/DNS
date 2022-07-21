import React, { useState, useEffect } from "react";
import Loader from "../../hooks/loader";
import axios from "axios";
import { useWeb3React } from "@web3-react/core";
import {toast } from 'react-toastify';
import "./edit.scss";
import {API_URL} from '../../utils/ApiUrl'
export const EditProfile = () => {
    const { account } = useWeb3React();
  const [profileImg, setProfileImg] = useState();
  const [open, setOpen] = useState(false);
  const [myProfile, setMyProfile] = useState();
  const [bannerImg, setBannerImg] = useState();
  const [myBanner, setMyBanner] = useState();
  const [inputs, setInputs] = useState({
    userName: "",
    bio: "",
    twitterUserName: "",
    telegramLink: "",
    websiteLink: "",
    instagramLink: "",
    userEmail: "",
    walletAddress: "",
  });

  const { userName, bio, twitterN, telegramLink, websiteLink, instagramLink, userEmail, walletAddress } = inputs;

  const renderPhotos = (source) => {
    return <img src={source} alt="" width="200" height="200" />
}

const deleteProfile = ()=>{
setMyProfile()
setProfileImg()
}

const deleteBanner = ()=>{
    setMyBanner()
    setBannerImg()
    }

const EditProfile = async (event) => {
    setOpen(true)
    event.preventDefault()
    const data = new FormData();
    data.append("userName", inputs.userName)
    data.append("bio", inputs.bio)
    data.append("userEmail", inputs.userEmail)
    data.append("twitterUserName", inputs.twitterUserName)
    data.append("instagramLink", inputs.instagramLink)
    data.append("websiteLink", inputs.websiteLink)
    data.append("telegramLink", inputs.telegramLink)
    if(myProfile){
      data.append("picture", myProfile)
    }
    if(myBanner){
      data.append("bannerPicture", myBanner)
    }
    data.append("walletAddress", inputs.walletAddress === null ? inputs.walletAddress : account) 
    data.append("name", "any")
    data.append("role", "user")

    if (myProfile != '' && inputs.userName != '' && inputs.bio != '' ) {
        axios.post(API_URL + "users/editUser", data, )
            .then((response) => {
                setOpen(false)
                toast.success(response.data.msg, {
                    position: "top-center",
                    autoClose: 2000,
                });
                // setInputs({
                //     name: '',
                //     description: '',
                //     routeLink: '',
                //     routePage: '',
                //     category: '',
                //     type: '',
                //     image: ''
                // })
                // setSelectedImg('');
            }).catch((err) => {
                setOpen(false)
                toast.error(err.response.data.msg, {
                    position: "top-center",
                    autoClose: 2000,
                });
            })
    } else {
        setOpen(false)
        toast.error("Field cannot be empty", {
            position: "top-center",
            autoClose: 2000,
        });
    }

}

const getUser = async () => {
    // setOpen(true)
        axios.post(API_URL + "users/getUser", {walletAddress:account} )
            .then((response) => {
                setOpen(false)
                setInputs(response.data.user)
                setProfileImg(response.data.user.picture)
                setBannerImg(response.data.user.bannerPicture)
                toast.success(response.data.msg, {
                    position: "top-center",
                    autoClose: 2000,
                });
                // setInputs({
                //     name: '',
                //     description: '',
                //     routeLink: '',
                //     routePage: '',
                //     category: '',
                //     type: '',
                //     image: ''
                // })
                // setSelectedImg('');
            }).catch((err) => {
                setOpen(false)
                toast.error(err.response.data.msg, {
                    position: "top-center",
                    autoClose: 2000,
                });
            })
}




  console.log("inputss",inputs)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  const handleFileSelectProfile = (evt) => {
    if (evt.target.files) {
      const filesarray = Array.from(evt.target.files).map((file) =>
        URL.createObjectURL(file)
      );

      setProfileImg(filesarray[0]);
      // Array.from(evt.target.files).map((file) => URL.createObjectURL(file))
    }
    var files = evt.target.files;
    var file = files[0];
    setMyProfile(file);
  };

  const handleFileSelectBanner = (evt) => {
    if (evt.target.files) {
      const filesarray = Array.from(evt.target.files).map((file) =>
        URL.createObjectURL(file)
      );

      setBannerImg(filesarray[0]);
      // Array.from(evt.target.files).map((file) => URL.createObjectURL(file))
    }
    var files = evt.target.files;
    var file = files[0];
    setMyBanner(file);
  };

  useEffect(() => {
    if(account){

      getUser();
    }
  }, [account]);

  return (
    <>
    {open && <Loader text={'....Loading!!'} />}
      <section className="main-edit-profile">
        <div className="container-fluid">
          <div class="row">
            <div className="col-sm-12">
              <div className="heading-profile mt-4">
                <h2 className="edit-heading">Edit Profile</h2>
                <p className="edit-para">
                  You can set preferred display name and manage other personal
                  settings
                </p>
              </div>
            </div>
          </div>
          <div className="row ptb20">
            <div className="col-sm-7">
              <div className="inner-form mt-4">
                <form>
                  <div className="row">
                    <div className="col-sm-12 p-0">
                      <div class="form-group">
                        <label for="exampleFormControlInput1" className="white">
                          Display Name
                        </label>
                        <input
                          type="text"
                          value={inputs.userName}
                          name="userName"
                          class="form-control"
                          id="exampleFormControlInput1"
                          placeholder="Enter your display name"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>

                  <div class="form-group">
                    <label for="exampleFormControlTextarea1" className="white">
                      Bio
                    </label>
                    <textarea
                      class="form-control"
                      onChange={handleChange}
                      value={inputs.bio}
                      name="bio"
                      id="exampleFormControlTextarea1"
                      placeholder="Tell about yourself in a few words"
                    ></textarea>
                  </div>
                  <div class="form-group">
                    <label for="exampleFormControlInput1" className="white">
                      Twitter username
                    </label>
                    <span className="therate">
                      <i class="fas fa-at"></i>
                    </span>
                    <input
                      type="text"
                      name="twitterUserName"
                      value={inputs.twitterUserName}
                      class="form-control form-abs twitter-un"
                      id="exampleFormControlInput1"
                      placeholder="Enter your name in Twitter"
                      onChange={handleChange}
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleFormControlInput1" className="white">
                      Instagram
                    </label>
                    <input
                      type="text"
                      name="instagramLink"
                      value={inputs.instagramLink}
                      class="form-control pl-3 form-abs twitter-un"
                      id="exampleFormControlInput1"
                      placeholder="Your Instagram UserName"
                      onChange={handleChange}
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleFormControlInput1" className="white">
                      Telegram
                    </label>
                    <input
                      type="text"
                      name="telegramLink"
                      value={inputs.telegramLink}
                      class="form-control pl-3 form-abs twitter-un"
                      id="exampleFormControlInput1"
                      placeholder="Telegram link "
                      onChange={handleChange}
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleFormControlInput1" className="white">
                      Your Site
                    </label>
                    <input
                      type="text"
                      name="websiteLink"
                      value={inputs.websiteLink}
                      class="form-control pl-3 form-abs twitter-un"
                      id="exampleFormControlInput1"
                      placeholder="Your Site link "
                      onChange={handleChange}
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleFormControlInput1" className="white">
                      Email
                    </label>
                    <input
                      type="email"
                      name="userEmail"
                      value={inputs.userEmail}
                      class="form-control form-abs email-input"
                      id="exampleFormControlInput1"
                      placeholder="Enter your email address"
                      onChange={handleChange}
                    />
                    {/* <a href="#" className="link-input">
                                                Confirm
                                            </a> */}
                  </div>
                  <div class="form-group">
                    <label for="exampleFormControlInput1" className="white">
                      Wallet Address
                    </label>
                    <input
                      type="text"
                      name="walletAddress"
                      value={account}
                      class="form-control form-abs walllet-add email-input"
                      id="exampleFormControlInput1"
                      placeholder="0x1B92ABFC520D4210EC3D6EB5173988C6AE066231"
                      onChange={handleChange}
                    />
                    {/* <a href="#" className="link-input">
                                                Copy
                                            </a> */}
                  </div>
                </form>

                <div className="update-btn">
                  <button onClick={EditProfile}>Update Profile</button>
                </div>
              </div>
            </div>
            <div className="col-sm-5 mt-3">
              <div className="parent">
                <div className="profile-show">
                  <p>Profile Photo</p>
                  {profileImg ? renderPhotos(profileImg) : null}
                </div>
                <div className="right-text">
                  <h6>
                    We recommend an image of at least 300x300. Gifs work too.
                    Max 5mb.
                  </h6>
                  <div className="btn-upload">
                    <label className="upload-btn" for="upload">
                      Upload
                    </label>
                    <input id="upload" type="file" className="d-none" onChange={handleFileSelectProfile} />
                    <button className="btn-delete" onClick={deleteProfile}>
                      <img src="\delete.png" alt="img" className="" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="banner-img">
                <h6>Banner Image</h6>
                {bannerImg ? 
                <img
                  src={bannerImg}
                  alt="img"
                  className="img-fluid banner-upload"
                /> : ''}
                <div className="btn-upload">
                  <label className="upload-btn" for="upload1">
                    Upload
                  </label>
                  <input id="upload1" type="file" className="d-none" onChange={handleFileSelectBanner} />
                  <button className="btn-delete" onClick={deleteBanner}>
                    <img src="\delete.png" alt="img" className="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EditProfile;
