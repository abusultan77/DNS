import React, { useState, useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import NFTS from "./components/nfts";
import "./explore.scss";
import TotalSupply from "../../hooks/totalSupply";
import CheckURI from "../../hooks/dataFetchers/getTokenUri";
import CheckNft from "../../hooks/dataFetchers/checkAvailable.js";
import Loader from "../../hooks/loader";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Explore = () => {
  const [supArr, setSupArr] = useState([]);
  const [sup, setSup] = useState(null);
  const { account } = useWeb3React();
  const { TokenURI } = CheckURI();
  const [word, setWord] = useState("");
  const { CheckAvailableNft } = CheckNft();
  const [loader, setLoader] = useState(false);
  const [loaderMain, setLoaderMain] = useState(false);
  const [avail, setAvail] = useState("");
  const [objArr, setObjArr] = useState([]);

  const { tSupply } = TotalSupply();
  const numArray = async (num) => {
    var arr = [];
    for (let i = 0; i < num; i++) {
      let res = await TokenURI(i);
      arr.push(res);
    }
    arr.splice(0, 1);    
    setSupArr(arr);
    setLoaderMain(false);
  };

  const getSupply = async () => {
    setLoaderMain(true);
    var s = await tSupply();
    await setSup(parseInt(s));
    await numArray(parseInt(s));
  };

  const checkNftAvailability = async () => {
    if (word === "") {
      getSupply();
    } else {
      setLoader(true);
      let dumArr = objArr;
      console.log("dumArrdumArrdumArr", dumArr)
      dumArr = dumArr.filter((item) => item.name === word);
      console.log("dr", dumArr);
      setSupArr(dumArr);
      await setLoader(false);
    }
  };

  useEffect(() => {
    getSupply();
  }, []);

  return (
    <>
      {loaderMain && <Loader />}
      <section className="main-explore ptb">
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <h2 className="mb-3">Explore</h2>
            </div>
            <div className="col-sm-7">
              <div className="d-flex justify-content-center ">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control ptb20 px-3 git stat"
                    placeholder="Search for your new NFT"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    onChange={(e) => setWord(e.target.value)}
                  />
                  <div
                    className="input-group-append cursor-pointer"
                    onClick={checkNftAvailability}
                  >
                    <span
                      style={{ backgroundColor: "#FA2189" }}
                      className=" input-group-text"
                      id="basic-addon2"
                    >
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
                            className="img-fluid"
                            alt=""
                            width={25}
                          />
                          Search
                        </>
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-2">
              <div className="inner-drops text-right">
                {/* <li className="list-inline-item">
                  <div className="inner-style">
                    <div className="dropdown">
                      <button
                        className="btn-common2 dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <img
                          src="\wordnftgenerator-assets\humbrgr.png"
                          className="img-fluid"
                          alt=""
                        />
                        &nbsp; Sort By
                      </button>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <a className="dropdown-item" href="#">
                          Recently Created
                        </a>
                        <a className="dropdown-item" href="#">
                          Recently Ended
                        </a>
                      </div>
                    </div>
                  </div>
                </li> */}
              </div>
            </div>
          </div>
          <h4 className="text-center pt-4">{avail}</h4>
          {supArr.length > 0 ? (
            <div className="row ptb20">
              {supArr.map((item, index) => {
                return (
                  <div key={index} className="col-sm-3">
                    <NFTS
                      supArr={supArr}
                      objArr={objArr}
                      setObjArr={setObjArr}
                      checkNftAvailability={checkNftAvailability}
                      word={word}
                      item={item}
                    />
                  </div>
                );
              })}
            </div>
          ) : (
            <h3 className="text-center">No nfts to show</h3>
          )}
        </div>
      </section>
    </>
  );
};

export default Explore;
