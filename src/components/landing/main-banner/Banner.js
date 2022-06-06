/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import "./banner.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import TotalSupply from "../../../hooks/totalSupply";
import Nfts from "./bannerNft";

const Banner = ({ supArr, objArr, setObjArr }) => {
  const [total, setTotal] = useState(0);
  const [word, setWord] = useState("");
  const [loader, setLoader] = useState(false);
  const [avail, setAvail] = useState("");
  const [supArr2, setSupArr2] = useState([]);
  const [search, setSearch] = useState(false);

 

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
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
