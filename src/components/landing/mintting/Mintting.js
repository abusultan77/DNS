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
                <img
                  src="\main-banner\search-normal-input.svg"
                  alt="img"
                  className="img-fluid  input-icon"
                />
                <input type="text" placeholder=" tilinteas.tomi" />
                <Link to="/mint">
                  <button class="btn-searchbar " type="button">
                    <img
                      src="\main-banner\search-normal.svg"
                      alt="img"
                      className="img-fluid  mr-3"
                    />
                    Search
                  </button>
                </Link>
              </div>
              <div className=" secinputtt">
                <h5 className="secinputheading">
                  Search Results for “fireape.tomi”
                </h5>
                <div className="card">
                  <div className="card-body">
                    <div className="text">
                      <h5 className="common">fireape.tomi</h5>
                      <a href="#" class="btn  stretched-link">
                        <img
                          src="\mintting\mintting.svg"
                          alt="img"
                          className="img-fluid ml-2 mr-2 "
                        />
                      </a>
                    </div>
                    <div className="lastbutton">
                      <button
                        class="btn-secinputttlast"
                        type="button"
                        data-toggle="modal"
                        data-target="#minting-modal1"
                      >
                        Mint Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="minting-modal1">
      <div
          class="modal fade"
          id="minting-modal1"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
            <div class="modal-header">
              <h6>MintING</h6>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                 <img src="\close-icon.png" alt="img" className="img-fluid" />
                </button>
              </div>
              <div class="modal-body">
                <div className="upper">
                  <p>Mint Price</p>
                  <h6><img src="\Ethereum-icon-purple.png" alt="img" className="img-fluid" />1.122 ETH</h6>
                </div>
                <div className="mid">
                  <div className="text">
                    <p className="para1">Subscription Period</p>
                    <p className="para2">1 Year</p>
                  </div>
                  <div className="text">
                    <p className="para1">Subscription Fee</p>
                    <p className="para2">0.01 ETH</p>
                  </div>
                </div>
                <div className="bottom">
                  <p className="para1">Total Amount</p>
                  <p className="para2">1.123 ETH</p>
                </div>
                <button className="mint">Mint</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="minting-modal">
        <div
          class="modal fade"
          id="minting-modal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
            <div class="modal-header">
              <h6>MintING</h6>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                 <img src="\close-icon.png" alt="img" className="img-fluid" />
                </button>
              </div>
              <div class="modal-body">
                <img
                  src="\adress\mint-modal.png"
                  alt="img"
                  className="img-fluid"
                />
                <p>Your NFT is being mint</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="minting-modal">
        <div
          class="modal fade"
          id="minting-success"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
              <h6>MintING</h6>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                 <img src="\close-icon.png" alt="img" className="img-fluid" />
                </button>
              </div>
              <div class="modal-body">
                <img src="\checked.png" alt="img" className="img-fluid" />
                <p>Your NFT is minted successfully</p>
                <p className="para">
                  And placed on marketplace for an auction for 24h period
                </p>
                <button className="checkout">Go Checkout My Domain</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Mintting;
