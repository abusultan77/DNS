/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import "./banner.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TotalSupply from "../../../hooks/totalSupply";
import Nfts from "./bannerNft";

const Banner = ({ supArr, objArr, setObjArr }) => {
  const [total, setTotal] = useState(0);
  const [word, setWord] = useState("");
  const [loader, setLoader] = useState(false);
  const [avail, setAvail] = useState("");
  const { tSupply } = TotalSupply();
  const [supArr2, setSupArr2] = useState([]);
  const [search, setSearch] = useState(false);

  useEffect(async () => {
    const res = await tSupply();
    setTotal(res);
  }, []);

  const checkNftAvailability = async () => {
    if (word === "") {
      setSupArr2([]);
    } else {
      setSearch(true);
      setLoader(true);
      let dumArr = objArr;
      console.log("dumArrdumArrdumArr", dumArr);
      dumArr = dumArr.filter((item) => item.name === word);
      console.log("dr", dumArr);
      setSupArr2(dumArr);
      await setLoader(false);
    }
  };

  useEffect(() => {
    if (supArr.length > 0) {
      setSupArr2(supArr);
    }
  }, [supArr]);

  const wordSet = (e) => {
    setSearch(false);
    setWord(e);
  };

  return (
    <>
      <section className="main-banner ptb">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="inner-content ptb20 text-center">
                <ToastContainer />
                <h1 className="bsdsd">
                  MINT <span className="common">NFT WORDS</span> - THE WORLDS{" "}
                  <br /> <span className="common">LARGEST</span> NFT WORDS{" "}
                  <br /> <span className="common">COLLECTION</span>.
                </h1>
                {/* <p className="ptb20 grey2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. <br /> printing and typesetting
                  industry. <span className="red">*</span>.
                </p> */}

                <div className="d-flex justify-content-center abb ptb20 ">
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control ptb20 px-3 git abb stat"
                      placeholder="Search for your new NFT"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      onChange={(e) => wordSet(e.target.value)}
                    />
                    <div
                      className="input-group-append cursor-pointer"
                      onClick={checkNftAvailability}
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
                            Search
                          </>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                <h4>{avail}</h4>

                <div className="">
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <a className="">
                        ✨{" "}
                        <span className="black">
                          <strong>Now You Can Mint Your NFTs For Free</strong>
                        </span>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <button className="btn-common2 " type="button">
                        <img
                          src="\wordnftgenerator-assets\Vector.png"
                          className="img-fluid"
                          alt=""
                        />{" "}
                        Watch Demo
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {search && (
            <div className="row ptb20">
              {supArr2.map((item, index) => {
                return (
                  <div key={index} className="col-sm-3">
                    <Nfts
                      supArr={supArr}
                      setObjArr={setObjArr}
                      objArr={objArr}
                      item={item}
                    />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
      <section className="counter ptb">
        <div className="container text-center">
          <div className="row">
            <div className=" col-sm-4">
              <div className="">
                <h1 className="ptb20">
                  <strong>{total}</strong>
                </h1>
                <p className="grey">Total NFTs</p>
              </div>
            </div>
            <div className=" col-sm-4">
              <div className="">
                <h1 className="ptb20">
                  <strong>275+</strong>
                </h1>
                <p className="grey">Total volume</p>
              </div>
            </div>
            <div className=" col-sm-4">
              <div className="">
                <h1 className="ptb20">
                  <strong>160+</strong>
                </h1>
                <p className="grey">Total trades</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
