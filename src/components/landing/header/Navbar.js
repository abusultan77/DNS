import "./navbar.scss";
import { Link } from "react-router-dom";
import { useWeb3React } from "@web3-react/core";
import useAuth from "../../../hooks/useAuth";

const Navbar = () => {
  const { account } = useWeb3React();
  const { login, logout } = useAuth();
console.log("acccc",account)

  const connectMetamask = () => {
    localStorage.setItem("connectorId", "injected");
    login("injected");
    localStorage.setItem("flag", "true");
    window.$('#exampleModal').modal('hide')
  };

  const trustWallet = async () => {
    localStorage.setItem("connectorId", "walletconnect");
    if (account) {
      logout();
    } else {
      login("walletconnect");
      window.$('#exampleModal').modal('hide')
    }
  };

  const logout1 = () => {
    localStorage.setItem("flag", "false");
    // localStorage.clear();
    logout()
  }
  return (
    <section className="main-navbar-mobile main-navbar">
      <div className="container-fluid p-0">
        <div className="row">
          <div className="col-xl-11 col-lg-11 m-auto ">
            <nav className="navbar  navbar-expand-xl p-0">
              <a href="#" className="navbar-brand ">
                <Link to="/">
                  <img
                    src="\dns-logo\dns-logo.svg"
                    alt="img"
                    className="img-fluid"
                  />
                </Link>
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
                <span className="togg">
                  <i class="fas fa-bars"></i>
                </span>
              </button>
              <div
                className="collapse navbar-collapse marg"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mr-auto">
                  <li class="nav-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="nav-item ">
                    <Link to="/marketplace"> Marketplace</Link>
                  </li>
                  {/* <li className="nav-item">
                    <Link to="/profile">About</Link>
                  </li> */}

                  <li class="nav-item dropdown"></li>
                </ul>

                {account ?
                  <button
                    class="btn button-hedaer"
                    data-toggle="modal"
                    data-target="#exampleModal"
                    type="button"
                  >
                    Connected
                  </button> 
                  :
                  <button
                    class="btn button-hedaer"
                    data-toggle="modal"
                    data-target="#exampleModal"
                    type="button"
                  >
                    Connect Wallet
                  </button>

                }

                {account ? 
                  <div className="nav-drop">
                  <a class="dropdown">
                    <button
                      class="btn button-hedaer dropdown-toggle"
                      type="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <img
                        src="\dropuser.png"
                        className="img-fluid rounded-circle w20 mr-2 img200"
                        data-toggle="modal"
                        data-target="#exampleModal"
                        alt=""
                      />
                      <span className="strong mr-2">Roderick Ryan</span>
                    </button>
                    <div class="dropdown-menu ">
                      <div className="row">
                        <div className="col-sm-12">
                          <div className="inner-drop">
                            <div className="boxy"></div>
                            <h3 className="">Roderick Ryan</h3>
                            <span className="d-flex align-items-center">
                              <p class="text-truncate" >
                                {account}
                              </p>
                              <button className="copybutton"  onClick={() =>  navigator.clipboard.writeText(`${account}`)}>
                              <img
                                src="\copy-fav.png"
                                className="img-fluid "
                                alt=""
                              />
                              </button>
                             
                            </span>
                            <ul className="list-inline">
                              <li className="list-inline-item">
                                <img
                                  src="\eth-drop.png"
                                  className="img-fluid  w18"
                                  alt=""
                                />
                              </li>
                              <li className="list-inline-item">
                                <div className="inner-blnc">
                                  <h6 className="grey">Balance</h6>
                                  <h4 className="">
                                    <span className="common-text">
                                      6.00338 <span>ETH</span>{" "}
                                    </span>
                                  </h4>
                                </div>
                              </li>
                            </ul>
                            <div className="bottom-text">
                              <Link to="/profile">
                                <img
                                  src="\profile-drop.svg"
                                  className="img-fluid"
                                  alt=""
                                />
                                <p>My Profile</p>
                              </Link>
                            </div>
                            <div class="dropdown-divider"></div>
                            <div className="bottom-text">
                              <Link class=" " to="/editprofile">
                                <img
                                  src="\edit-drop.svg"
                                  className="img-fluid"
                                  alt=""
                                />
                                <p> Edit Profile</p>
                              </Link>
                            </div>
                            <div class="dropdown-divider"></div>
                            <div className="bottom-text" onClick={logout1}>
                                <img
                                  src="\disconnect-drop.svg"
                                  className="img-fluid"
                                  alt=""
                                />
                                <p> Disconnect</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                : ''
                }
              
              </div>
            </nav>
          </div>
        </div>
      </div>

      <div className="wallet-modal">
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-body p-0">
                <div className="cross-icon">
                  <h3 class="modal-title text-center" id="exampleModalLabel">
                    Connect your Wallet
                  </h3>
                  <button
                    type="button"
                    class="close cross-img1"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">
                      <img
                        src="\adress\cross-icon.svg"
                        className="img-fluid "
                      />
                    </span>
                  </button>
                </div>

                <div className="button-modal1 d-flex">
                  <button className="modal-button" onClick={connectMetamask}>
                    <img
                      src="\adress\metamask-icon.svg"
                      className="img-fluid"
                    />
                    <h3 className=""> MetaMask</h3>
                    <p className="">Connect to your MetaMask wallet </p>
                  </button>
                  <button className="modal-button" onClick={trustWallet}>
                    <img
                      src="\adress\walletconnect-icon.svg"
                      className="img-fluid"
                    />
                    <h3 className="">WalletConnect</h3>
                    <p className="">Connect to your MetaMask wallet </p>
                  </button>
                </div>
                <p className="text-center mt-3  connecting">
                  By connecting, I accept DNS{" "}
                  <span className="common connectinggg">Terms of Service </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
