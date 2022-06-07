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
      <section className="main-banner ">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-11 m-auto">
              <div className="inner-content main-heading text-center">
                <ToastContainer />
                <h3 className="">
                  Decentralised naming for <br></br> wallets, websites, & more.
                </h3>
              </div>
              <div className="parafirst">
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque<br></br> laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto</p>
              </div>
              {/* <div class=" ">
                <div class="input-group  input-group-lg text-center">
                <img src="\main-banner\search-normal-input.svg" alt="img" className="img-fluid  inputre" />
                  <input type="text" class="form-control " placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                  <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="button">
                      <img src="\main-banner\search-normal.svg" alt="img" className="img-fluid  mr-3" />
                      Search
                    </button>
                  </div>
                </div>
              </div> */}
              <div className="input-field">
              <img src="\main-banner\search-normal-input.svg" alt="img" className="img-fluid  input-icon" />
              <input type="text" placeholder="n cvvduhcyvcdvvdvcdcdv" />
              <button class="btn-searchbar" type="button" >
                      <img src="\main-banner\search-normal.svg" alt="img" className="img-fluid  mr-3" />
                      Search
                    </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
