/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import "./mintting.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import TotalSupply from "../../../hooks/totalSupply";
import { Link } from "react-router-dom";


const Mintting = ({ supArr, objArr, setObjArr }) => {
  const [total, setTotal] = useState(0);
  const [word, setWord] = useState("");
  const [loader, setLoader] = useState(false);
  const [avail, setAvail] = useState("");
  const [supArr2, setSupArr2] = useState([]);
  const [search, setSearch] = useState(false);



  return (
    <>
      <section className="main-mintting ">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-11 m-auto">
              <div className="input-field ">
                <img src="\main-banner\search-normal-input.svg" alt="img" className="img-fluid  input-icon" />
                <input type="text" placeholder=" tilinteas.tomi" />
                <button class="btn-searchbar " type="button" >
                  <img src="\main-banner\search-normal.svg" alt="img" className="img-fluid  mr-3" />
                  Search
                </button>
              </div>
              <div className=" secinputtt">
                <h5 className="secinputheading">Search Results for “fireape.tomi”</h5>
                <div className="card">
                  <div className="card-body">
                    <div className="text">
                      <h5 className="common">fireape.tomi</h5>
                      <a href="#" class="btn  stretched-link"><img src="\mintting\mintting.svg" alt="img" className="img-fluid ml-2 mr-2 " /></a>
                    </div>
                    <div className="lastbutton">
                      <Link to="/mint"><button class="btn-secinputttlast" type="button" >
                      Mint Now
                      </button></Link>
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

export default Mintting;
