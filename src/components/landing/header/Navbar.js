import React, { useEffect, useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
// import DumImage from "../../../Assets/user.png"

const Navbar = () => {


  return (
    <section className="main-navbar">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-11 m-auto">
            <nav className="navbar  navbar-expand-lg">
              <a className="navbar-brand" href="/">
                <img
                  src="\dns-logo\DNS-logo.svg"
                  className="img-fluid"
                  alt=""
                />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <div className="style-bar"></div>
                <div className="style-bar"></div>
                <div className="style-bar"></div>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <Link className="nav-link grey2" to="/minting">
                      <h6>Home</h6>
                    </Link>
                  </li>
                  <li className="nav-item ">
                    <Link className="nav-link grey2" to="/">
                      <h6>Marketplace</h6>
                    </Link>
                  </li>
                  <li className="nav-item ">
                    <Link className="nav-link grey2" to="/">
                      <h6>About</h6>
                    </Link>
                  </li>
                </ul>
                <form className="form-inline  ">
                  <button className="btn-common-nav " type="button" data-toggle="modal" data-target="#exampleModalLong" >CONNECT WALLET</button>
                  <div className="row">
                    <div className="col-sm-12">
                      <div
                        className="modal fade"
                        id="exampleModalLong"
                        tabIndex="-1"
                        role="dialog"
                        aria-labelledby="exampleModalLongTitle"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog" role="document">
                          <div className="modal-content">
                            <div className="modal-body">
                              <div className="row">
                                <div className="col-sm-12 p-0">
                                  <button
                                    type="button"
                                    className="close cross"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                  >
                                    <span aria-hidden="true">&times;</span>
                                  </button>
                                  <h3 className="white text-center bg-color py-4">
                                    CONNECT WALLET
                                  </h3>
                                  <div className="pop-content ptb20 ">
                                    <ul className="">
                                      <li className="">
                                        <div className="">
                                          <button
                                            className="inner-tile cursor-pointer"
                                            data-dismiss="modal"
                                            type="button"
                                          >
                                            <img
                                              src="\wordnftgenerator-assets\Mask Group.svg"
                                              className="img-fluid"
                                              alt=""
                                            />
                                            &nbsp;&nbsp;&nbsp;
                                            <div className="black">MetaMask</div>
                                          </button>
                                        </div>
                                      </li>
                                      <li className="">
                                        <div className="">
                                          <button
                                            className="inner-tile cursor-pointer"
                                            data-dismiss="modal"
                                            type="button"
                                          >
                                            <img
                                              src="\opencanvas-assets\pop-up\connect-wallet\trust-wallet.svg"
                                              className="img-fluid"
                                              alt=""
                                            />
                                            &nbsp;&nbsp;&nbsp;
                                            <div className="black">
                                              WalletConnect
                                            </div>
                                          </button>
                                        </div>
                                      </li>
                                    </ul>
                                    <div className="ptb20">
                                      <a className="black" href="/">
                                        By connecting, I accept Wordsnftgenerator
                                        <span className="common">
                                          Terms of Service
                                        </span>{" "}
                                      </a>
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
                </form>
              </div>
            </nav>


          </div>

        </div>

      </div>
    </section>
  );
};

export default Navbar;
