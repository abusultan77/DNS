/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef, useState, useCallback, useEffect } from "react";
import "./minting.scss";
import { useWeb3React } from "@web3-react/core";
import CheckNft from "../../hooks/dataFetchers/checkAvailable.js";
import "react-toastify/dist/ReactToastify.css";
import { IpfsStorage } from "../../hooks/ipfs";
import { toPng } from "html-to-image";
import { useHistory } from "react-router-dom";
import BG0 from "../../Assets/CardsImgAssets/bg0.png";
import BG1 from "../../Assets/CardsImgAssets/bg1.png";
import BG2 from "../../Assets/CardsImgAssets/bg2.png";
import BG3 from "../../Assets/CardsImgAssets/bg3.png";
import BG4 from "../../Assets/CardsImgAssets/bg4.png";
import BG5 from "../../Assets/CardsImgAssets/bg5.png";
import BG6 from "../../Assets/CardsImgAssets/bg6.png";
import BG7 from "../../Assets/CardsImgAssets/bg7.png";
import BG8 from "../../Assets/CardsImgAssets/bg8.png";
import BG9 from "../../Assets/CardsImgAssets/bg9.png";
import BG10 from "../../Assets/CardsImgAssets/bg10.png";
import BG11 from "../../Assets/CardsImgAssets/bg11.png";
import BG12 from "../../Assets/CardsImgAssets/bg12.png";
import BG13 from "../../Assets/CardsImgAssets/bg13.png";
import BG14 from "../../Assets/CardsImgAssets/bg14.png";
import BG15 from "../../Assets/CardsImgAssets/bg15.png";
import BG16 from "../../Assets/CardsImgAssets/bg16.png";
import BG17 from "../../Assets/CardsImgAssets/bg17.png";
import BG18 from "../../Assets/CardsImgAssets/bg18.png";
import BG19 from "../../Assets/CardsImgAssets/bg19.png";
import BG20 from "../../Assets/CardsImgAssets/bg20.png";
import BG21 from "../../Assets/CardsImgAssets/bg21.png";
import BG22 from "../../Assets/CardsImgAssets/bg22.png";
import BG23 from "../../Assets/CardsImgAssets/bg23.png";
import { ToastContainer, toast } from "react-toastify";
import ImgMinting from "../../hooks/dataSenders/mint";

const Minting = () => {
  const { account } = useWeb3React();
  const [word, setWord] = useState("");
  const [result, setResult] = useState(false);
  const [loader, setLoader] = useState(false);
  const [img, setImg] = useState(null);
  const [random, setRandom] = useState(null);
  const [avail, setAvail] = useState(null);
  const { CheckAvailableNft } = CheckNft();
  const [ipoImg, setIpoImg] = useState(null);
  const [minted, setMinted] = useState(false);
  const ref = useRef(null);
  const history = useHistory();
  const { userMinting } = ImgMinting();
  const [jsonDatas, setJsonDatas] = useState(null);
  const colorArray = [
    { src: BG0, color: "#9E4C00" },
    { src: BG1, color: "#158A44" },
    { src: BG2, color: "#2A3B94" },
    { src: BG3, color: "#B51759" },
    { src: BG4, color: "#9E4C00" },
    { src: BG5, color: "#158A44" },
    { src: BG6, color: "#2A3B94" },
    { src: BG7, color: "#B51759" },
    { src: BG8, color: "#BE8C5E" },
    { src: BG9, color: "#62C68A" },
    { src: BG10, color: "#42688B" },
    { src: BG11, color: "#A94949" },
    { src: BG12, color: "#E18617" },
    { src: BG13, color: "#41AB6B" },
    { src: BG14, color: "#6F91D1" },
    { src: BG15, color: "#E1ADAD" },
    { src: BG16, color: "#D19D80" },
    { src: BG17, color: "#51B768" },
    { src: BG18, color: "#BB97EB" },
    { src: BG19, color: "#50CA90" },
    { src: BG20, color: "#D08C7D" },
    { src: BG21, color: "#66C78D" },
    { src: BG22, color: "#8998E8" },
    { src: BG23, color: "#C87A9A" },
  ];

  const FindNft = async () => {
    if (account) {
      setLoader(true);
      const res = await CheckAvailableNft(word);
      await setAvail(!res);
      // setShowAvail(true);
      await setResult(true);
      await setLoader(false);
      if (res === false) {
        await onButtonClick();
      }
    } else {
      setLoader(false);
      toast.warning("Connect Wallet First!");
    }
  };

  const mint = async () => {
    if (ipoImg !== null) {
      if (account && loader === false) {
        setMinted(true);
        window.$("exampleModal").modal("show");
        try {
          const res = await userMinting(account, ipoImg, word);
          await toast.success("Successfully minted!");
          await setMinted(false);
          await history.push("/profile");
        } catch (err) {
          toast.error(err.message);
          await setMinted(false);
        }
      } else {
      }
    } else {
      await toast.warning("Generating Ipfs, please wait 2-5 seconds!");
    }
  };

  const updateJsonData = async () => {
    const jsondata = {
      name: word,
      description: "Lorem Ipsum dummy data",
      image: img,
      owner: account,
    };
    setJsonDatas(jsondata);
  };

  const onButtonClick = useCallback(() => {
    if (ref.current === null) {
      return;
    }

    toPng(ref.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a");
        setImg(dataUrl);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ref]);

  const imageUploaded = async () => {
    try {
      let res = await IpfsStorage(jsonDatas);
      setIpoImg(res);
    } catch (e) {}
  };

  useEffect(() => {
    if (jsonDatas !== null) {
      imageUploaded();
    }
  }, [jsonDatas]);

  useEffect(() => {
    if (img !== null) {
      updateJsonData();
    }
  }, [img]);

  useEffect(() => {
    var randomnumber = Math.floor(Math.random() * (23 - 0)) + 0;
    setRandom(randomnumber);
  }, []);

  const WordSet = (e) => {
    setIpoImg(null);
    setAvail(null);
    let val = e.replace(/\s/g, "");
    setWord(val.slice(0, 50).toLowerCase());
  };

  return (
    <>
      <section className="main-minting ptb">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="inner-content ptb20 text-center">
                <div className="d-flex justify-content-center ">
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      onChange={(e) => WordSet(e.target.value)}
                      className="form-control ptb20 px-3 git stat"
                      placeholder="Search for your new NFT"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      value={word}
                    />
                    <div
                      className="input-group-append cursor-pointer"
                      onClick={() => FindNft()}
                    >
                      <span className=" input-group-text" id="basic-addon2">
                        {loader ? (
                          <img
                            height={32}
                            style={{
                              filter:
                                "invert(99%) sepia(1%) saturate(2%) hue-rotate(168deg) brightness(120%) contrast(100%)",
                            }}
                            src="https://v.fastcdn.co/u/430e104e/57579327-0-Loaders-3.svg"
                            alt="loader"
                          />
                        ) : (
                          <>
                            <img
                              src="\wordnftgenerator-assets\search-icon.svg"
                              className="img-fluid w30"
                              alt=""
                            />
                            {result ? "Search" : "Search"}
                          </>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {result && word !== "" ? (
                <div className="inner-content">
                  <h3>Results for “{word}”</h3>
                </div>
              ) : (
                <></>
              )}

              <div className="inner-content ptb20 text-center">
                <div className="d-flex justify-content-center ">
                  <div className="input-group position-relative mb-3">
                    {avail ? (
                      <>
                        <input
                          type="text"
                          disabled
                          className="form-control bg-white ptb20 px-3 git stat"
                          //   placeholder="Search for your new NFT"
                          aria-label="Recipient's username"
                          aria-describedby="basic-addon2"
                          //   onChange={(e) => setText(e.target.value)}
                        />
                        <img
                          className="position-absolute ml-4 p-2"
                          style={{ marginTop: 4 }}
                          src="/tick.png"
                          alt=""
                        />
                        <div
                          className="position-absolute p-2"
                          style={{ marginLeft: 80 }}
                        >
                          <h5 className="text-left">{word}</h5>
                          <img width={90} src="/available.png" alt="" />
                        </div>
                      </>
                    ) : (
                      <>
                        {avail === false ? (
                          <>
                            <input
                              type="text"
                              disabled
                              className="form-control bg-white ptb20 px-3 git stat"
                              //   placeholder="Search for your new NFT"
                              aria-label="Recipient's username"
                              aria-describedby="basic-addon2"
                              //   onChange={(e) => setText(e.target.value)}
                            />
                            <img
                              className="position-absolute ml-4 p-2"
                              style={{ marginTop: 4 }}
                              src="/wordnftgenerator-assets/mint/cross.png"
                              alt=""
                            />
                            <div
                              className="position-absolute p-2"
                              style={{ marginLeft: 80 }}
                            >
                              <h5 className="text-left">{word}</h5>
                              <img
                                width={90}
                                src="\wordnftgenerator-assets\mint\unavialable.png"
                                alt=""
                              />
                            </div>
                          </>
                        ) : (
                          <input
                            type="text"
                            disabled
                            className="form-control bg-white ptb20 px-3 git stat"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                          />
                        )}
                      </>
                    )}
                    <div
                      onClick={() => mint()}
                      className="input-group-append cursor-pointer"
                    >
                      <span
                        className=" input-group-text common paddingfor-button"
                        id="basic-addon2 common2"
                      >
                        {minted ? (
                          <img
                            height={32}
                            style={{
                              filter:
                                "invert(99%) sepia(1%) saturate(2%) hue-rotate(168deg) brightness(120%) contrast(100%)",
                            }}
                            src="https://v.fastcdn.co/u/430e104e/57579327-0-Loaders-3.svg"
                            alt="loader"
                          />
                        ) : (
                          "Mint"
                        )}
                      </span>
                    </div>
                    <div className="w-100">
                      <div className="row d-flex justify-content-center ptb20">
                        <div className="col-sm-3">
                          <div ref={ref} className="card-Img-div">
                            {random !== null && (
                              <>
                                <img
                                  src={colorArray[random].src}
                                  className="img-fluid w-100"
                                />
                                <h3
                                  className="text-center"
                                  style={{
                                    fontSize: word.length > 12 ? 16 : 30,
                                    fontWeight: 700,
                                    lineHeight: "120%",
                                    color: colorArray[random].color,
                                  }}
                                >
                                  {word.slice(0, 24)}
                                </h3>
                                <br />
                                <h3
                                  className="text-center"
                                  style={{
                                    fontSize: word.length > 16 ? 15 : 30,
                                    fontWeight: 700,
                                    marginTop: 20,
                                    lineHeight: "120%",
                                    color: colorArray[random].color,
                                  }}
                                >
                                  {word.slice(25, word.length)}
                                </h3>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-100">
                      <span className="text-danger">*</span>max word length 50
                    </div>

                    {/* modalllllllllllllllll */}

                    <div
                      className="modal fade"
                      id="exampleModal"
                      tabIndex="-1"
                      role="dialog"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog ptb20" role="document">
                        <div className="modal-content ">
                          <div className="modal-body">
                            <div className="row">
                              <div className="col-sm-12 abd">
                                {minted ? (
                                  <div className="modal-header ">
                                    <div className=" col-sm-7 ptb20 ">
                                      <h3 className="white dnnf">Minting</h3>
                                    </div>
                                    <div className=" col-sm-5">
                                      <button
                                        type="button"
                                        className="close cursor-pointer "
                                        data-dismiss="modal"
                                        aria-label="Close"
                                      >
                                        <img
                                          src="\wordnftgenerator-assets\layer1.svg"
                                          className="img-fluid  "
                                          alt=""
                                        />
                                      </button>
                                    </div>
                                  </div>
                                ) : (
                                  <>
                                    <div className="modal-body">
                                      <img
                                        src="\wordnftgenerator-assets\bx_loader-circle.png"
                                        className="img-fluid  "
                                        alt=""
                                      />
                                    </div>
                                    <div className="ptb20">
                                      <h5 className="bold">
                                        {" "}
                                        Your NFT is being mint
                                      </h5>
                                    </div>
                                    <div className="modal-body">
                                      <img
                                        src="\wordnftgenerator-assets\greentick.svg"
                                        className="img-fluid  "
                                        alt=""
                                      />
                                    </div>
                                    <div className="ptb20">
                                      <h5 className=""> Your NFT is minted</h5>
                                    </div>
                                    <button
                                      type="button"
                                      className="cursor-pointer btn-common modbtn"
                                      data-dismiss="modal"
                                      aria-label="Close"
                                    >
                                      Go checkout on your profile
                                    </button>
                                    <div className="mt-5 pb-3">
                                      <p className="grey ">
                                        By connecting, I accept
                                        wordnftgenerator.{" "}
                                        <span className="common">
                                          NFT WORDS
                                        </span>
                                      </p>
                                    </div>
                                  </>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Minting;
