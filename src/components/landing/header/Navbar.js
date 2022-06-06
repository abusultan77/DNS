import React, { useEffect, useState } from "react";
import "./navbar.scss";
import { useWeb3React } from "@web3-react/core";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { toast } from 'react-toastify';
import DumImage from "../../../Assets/user.png"
import axios from "axios";
import { API_URL } from "../../../utils/ApiUrl";
// import $ from "jquery";
// import WalletConnectProvider from "@walletconnect/web3-provider";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
//  Create WalletConnect Provider
// const provider = new WalletConnectProvider({
//     infuraId: "27e484dcd9e3efcfd25a83a78777cdf1",
// });
const Navbar = () => {
  const { account } = useWeb3React();
  const [image, setimage] = useState(null);
  const { login, logout } = useAuth();
  const connectwallet = () => {
    window.$("#exampleModalLong").modal("show");
  };

  const connectMetamask = () => {
      localStorage.setItem("connectorId", "injected");
      login("injected");
      localStorage.setItem('flag', 'true')
  };

  const logoutt = () => {
    localStorage.setItem('flag', 'false')
      logout();
  };

  const createUser = () => {
    if (account) {
      axios.post(API_URL + "v1/users/addUser", { walletAddress: account })
        .then((response) => {
          // setOpen(false)
          toast.success(response.data.msg, {
            position: "top-center",
            autoClose: 2000,
          });
        }).catch((err) => {
          toast.error(err.response.data.msg, {
            position: "top-center",
            autoClose: 2000,
          });
        })
    }
  }

  const getUser = async (event) => {
    axios
      .post(API_URL + "v1/users/getUser", { walletAddress: account })
      .then((response) => {
        setimage(response.data.user.picture);
        
      })
      .catch((err) => {
        toast.error(err.response.data.msg, {
          position: "top-center",
          autoClose: 2000,
        });
      });
  };

  const trustWallet = async () => {
    localStorage.setItem("connectorId", "walletconnect");
    if (account) {
      logout();
    } else {
      login("walletconnect");
    }
  };

  useEffect(() => {
    if (account) {
      getUser()
    } else {
      setimage('')
    }
    createUser()
  }, [account]);

  return (
    <section className="main-navbar">
      <div className="container">
        <nav className="navbar ptb20 navbar-expand-lg">
          <a className="navbar-brand" href="/">
            <img
              src="\wordnftgenerator-assets\logo.svg"
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
                  <h6>MINT</h6>
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link grey2" to="/explore">
                 <h6>EXPLORE</h6> 
                </Link>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link grey2" href="#">
                  ABOUT US
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link grey2" href="#">
                  CONTACT
                </a>
              </li> */}
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <Link className="" to="/profile">
                {image ? (
                  <img
                    src={image}
                    alt=""
                    className="rounded-circle img-fluid"
                    width={50}
                    height={50}
                  />
                ):(
                  <img
                    src={DumImage}
                    alt=""
                    className="rounded-circle img-fluid"
                    width={50}
                    height={50}
                  />
                )}

              </Link>

              {account ? (
                <button
                  className="btn-common cursor-pointer my-2 my-sm-0"
                  type="button"
                  onClick={logoutt}
                >
                  Disconnect
                </button>
              ) : (
                <button
                  className="btn-common cursor-pointer my-2 my-sm-0"
                  type="button"
                  onClick={connectwallet}
                >
                  <img
                    src="\wordnftgenerator-assets\waller-icon.svg"
                    className="img-fluid"
                    alt=""
                  />{" "}
                  CONNECT WALLET
                </button>
              )}
              {/* <button className="btn-common my-2 my-sm-0" type="button" data-toggle="modal" data-target="#exampleModalLong" >CONNECT WALLET</button> */}
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
                                        onClick={connectMetamask}
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
                                        onClick={trustWallet}
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
    </section>
  );
};

export default Navbar;
