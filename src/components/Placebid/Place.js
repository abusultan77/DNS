import React from "react";
import "./place.scss";
import { Link } from "react-router-dom";
export const Place = () => {
  return (
    <>
      <section className="main-place">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-11 col-12 m-auto p-0">
              <div className="botton">
                <Link to="/marketplace">
                  <button className="btn-back">
                    <img
                      src="\adress\arrow-left.svg"
                      className="img-fluid "
                      alt="img"
                    />
                    Back
                  </button>
                </Link>
              </div>
              <div className="row">
                <div className=" col-xl-6 col-md-6 col-sm-12">
                  <div className="maincard">
                    <h3 className="cardinnerheading">fireape.tomi</h3>
                    <div className="cardimgg">
                      <img src="\adress\cardds.svg" className="img-fluid" />
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-md-6 col-sm-12">
                  <div className="bittingpills">
                    <div className="heading-bid">
                      <h5 className="">fireape.tomi</h5>
                    </div>
                    <div className="bid-tabs">
                      <nav>
                        <div className="nav nav-tabs" id="nav-tab">
                          <a
                            className="nav-link active pl-0"
                            data-toggle="tab"
                            href="#nav-Information"
                          >
                            Information
                          </a>
                          <a
                            className="nav-link"
                            data-toggle="tab"
                            href="#nav-Bids"
                          >
                            Bids History
                          </a>
                          <a
                            className="nav-link"
                            data-toggle="tab"
                            href="#nav-Activity"
                          >
                            List of Owners
                          </a>
                        </div>
                      </nav>
                      <div className="tab-content" id="nav-tabContent">
                        <div
                          className="tab-pane fade show active"
                          id="nav-Information"
                        >
                          <div className="information">
                            <div className="bid-card ">
                              <div className="inner-content">
                                <h3 className="">Contract Address</h3>
                                <p className="">1x1dDB2C0817daF....</p>
                                <h3 className="">Token ID</h3>
                                <h5 className="">100300041083 </h5>
                              </div>
                            </div>
                            <div className="avtars">
                              <div className="avtarfirst">
                                <div className="">
                                  <img
                                    src="\adress\avatarf.png"
                                    className="img-fluid "
                                  />
                                </div>
                                <ul className="autmint">
                                  <li>
                                    <p className="Minted">Minted by</p>
                                    <p className="Tim">Tim Smith</p>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane fade" id="nav-Bids">
                          <div className="bidhistory">
                            <div className="content-history">
                              <div className="fitcont">
                                <ul className="list-inline maaiinnoonnee">
                                  <li className="list-inline-item">
                                    <img
                                      src="\adress\avatarf.png"
                                      className="img-fluid sfgsdfsdsdgsdg"
                                    />
                                  </li>
                                  <li className="list-inline-item">
                                    <div className="history-heads">
                                      <h3 className="">
                                        Jacqueline Perry{" "}
                                        <span>place a bid</span>
                                      </h3>
                                      <p className="hours">8 hours ago</p>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <ul className="list-inline">
                                <li className="list-inline-item shoqatali">
                                  <h4 className="shoqii">1.5 ETH</h4>
                                  <p className="sectime">= $12.246</p>
                                </li>
                              </ul>
                            </div>
                            <div className="brdr"></div>
                            <div className="content-history">
                              <div className="fitcont">
                                <ul className="list-inline maaiinnoonnee">
                                  <li className="list-inline-item">
                                    <img
                                      src="\adress\avatarf.png"
                                      className="img-fluid sfgsdfsdsdgsdg"
                                    />
                                  </li>
                                  <li className="list-inline-item">
                                    <div className="history-heads">
                                      <h3 className="">
                                        Jacqueline Perry{" "}
                                        <span>place a bid</span>
                                      </h3>
                                      <p className="hours">8 hours ago</p>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <ul className="list-inline">
                                <li className="list-inline-item shoqatali">
                                  <h4 className="shoqii">1.5 ETH</h4>
                                  <p className="sectime">= $12.246</p>
                                </li>
                              </ul>
                            </div>
                            <div className="brdr"></div>
                            <div className="content-history">
                              <div className="fitcont">
                                <ul className="list-inline maaiinnoonnee">
                                  <li className="list-inline-item">
                                    <img
                                      src="\adress\avatarf.png"
                                      className="img-fluid sfgsdfsdsdgsdg"
                                    />
                                  </li>
                                  <li className="list-inline-item">
                                    <div className="history-heads">
                                      <h3 className="">
                                        Jacqueline Perry{" "}
                                        <span>place a bid</span>
                                      </h3>
                                      <p className="hours">8 hours ago</p>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <ul className="list-inline">
                                <li className="list-inline-item shoqatali">
                                  <h4 className="shoqii">1.5 ETH</h4>
                                  <p className="sectime">= $12.246</p>
                                </li>
                              </ul>
                            </div>
                            <div className="brdr"></div>
                            <div className="content-history">
                              <div className="fitcont">
                                <ul className="list-inline maaiinnoonnee">
                                  <li className="list-inline-item">
                                    <img
                                      src="\adress\avatarf.png"
                                      className="img-fluid sfgsdfsdsdgsdg"
                                    />
                                  </li>
                                  <li className="list-inline-item">
                                    <div className="history-heads">
                                      <h3 className="">
                                        Jacqueline Perry{" "}
                                        <span>place a bid</span>
                                      </h3>
                                      <p className="hours">8 hours ago</p>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <ul className="list-inline">
                                <li className="list-inline-item shoqatali">
                                  <h4 className="shoqii">1.5 ETH</h4>
                                  <p className="sectime">= $12.246</p>
                                </li>
                              </ul>
                            </div>
                            <div className="brdr"></div>
                            <div className="content-history">
                              <div className="fitcont">
                                <ul className="list-inline maaiinnoonnee">
                                  <li className="list-inline-item">
                                    <img
                                      src="\adress\avatarf.png"
                                      className="img-fluid sfgsdfsdsdgsdg"
                                    />
                                  </li>
                                  <li className="list-inline-item">
                                    <div className="history-heads">
                                      <h3 className="">
                                        Jacqueline Perry{" "}
                                        <span>place a bid</span>
                                      </h3>
                                      <p className="hours">8 hours ago</p>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <ul className="list-inline">
                                <li className="list-inline-item shoqatali">
                                  <h4 className="shoqii">1.5 ETH</h4>
                                  <p className="sectime">= $12.246</p>
                                </li>
                              </ul>
                            </div>
                            <div className="brdr"></div>
                            <div className="content-history">
                              <div className="fitcont">
                                <ul className="list-inline maaiinnoonnee">
                                  <li className="list-inline-item">
                                    <img
                                      src="\adress\avatarf.png"
                                      className="img-fluid sfgsdfsdsdgsdg"
                                    />
                                  </li>
                                  <li className="list-inline-item">
                                    <div className="history-heads">
                                      <h3 className="">
                                        Jacqueline Perry{" "}
                                        <span>place a bid</span>
                                      </h3>
                                      <p className="hours">8 hours ago</p>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <ul className="list-inline">
                                <li className="list-inline-item shoqatali">
                                  <h4 className="shoqii">1.5 ETH</h4>
                                  <p className="sectime">= $12.246</p>
                                </li>
                              </ul>
                            </div>
                            <div className="brdr"></div>
                            <div className="content-history">
                              <div className="fitcont">
                                <ul className="list-inline maaiinnoonnee">
                                  <li className="list-inline-item">
                                    <img
                                      src="\adress\avatarf.png"
                                      className="img-fluid sfgsdfsdsdgsdg"
                                    />
                                  </li>
                                  <li className="list-inline-item">
                                    <div className="history-heads">
                                      <h3 className="">
                                        Jacqueline Perry{" "}
                                        <span>place a bid</span>
                                      </h3>
                                      <p className="hours">8 hours ago</p>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <ul className="list-inline">
                                <li className="list-inline-item shoqatali">
                                  <h4 className="shoqii">1.5 ETH</h4>
                                  <p className="sectime">= $12.246</p>
                                </li>
                              </ul>
                            </div>
                            <div className="brdr"></div>
                          </div>
                        </div>
                        <div className="tab-pane fade" id="nav-Activity">
                          <div className="bidActivity">
                            <div className="content-Activity">
                              <div className="activittyy">
                                <ul className="list-inline maaiinnoonneeact">
                                  <li className="list-inline-item">
                                    <img
                                      src="\adress\avatarf.png"
                                      className="img-fluid sfgsdfsdsdgsdg"
                                    />
                                  </li>
                                  <li className="list-inline-item">
                                    <div className="Activity-heads">
                                      <h3 className="transferred">
                                        Owned by
                                        <span>Russell Carson</span>
                                      </h3>
                                    </div>
                                  </li>
                                </ul>
                                <div className="brdract"></div>
                              </div>
                              <div className="activittyy">
                                <ul className="list-inline maaiinnoonneeact">
                                  <li className="list-inline-item">
                                    <img
                                      src="\adress\avatarf.png"
                                      className="img-fluid sfgsdfsdsdgsdg"
                                    />
                                  </li>
                                  <li className="list-inline-item">
                                    <div className="Activity-heads">
                                      <h3 className="transferred">
                                        Previously Owned by
                                        <span>Darin Walker</span>
                                      </h3>
                                    </div>
                                  </li>
                                </ul>
                                <div className="brdract"></div>
                              </div>
                              <div className="activittyy">
                                <ul className="list-inline maaiinnoonneeact">
                                  <li className="list-inline-item">
                                    <img
                                      src="\adress\avatarf.png"
                                      className="img-fluid sfgsdfsdsdgsdg"
                                    />
                                  </li>
                                  <li className="list-inline-item">
                                    <div className="Activity-heads">
                                      <h3 className="transferred">
                                        Previously Owned by
                                        <span>Billy Bowen</span>
                                      </h3>
                                    </div>
                                  </li>
                                </ul>
                                <div className="brdract"></div>
                              </div>
                              <div className="activittyy">
                                <ul className="list-inline maaiinnoonneeact">
                                  <li className="list-inline-item">
                                    <img
                                      src="\adress\avatarf.png"
                                      className="img-fluid sfgsdfsdsdgsdg"
                                    />
                                  </li>
                                  <li className="list-inline-item">
                                    <div className="Activity-heads">
                                      <h3 className="transferred">
                                        Previously Owned by
                                        <span>Kay Curry</span>
                                      </h3>
                                    </div>
                                  </li>
                                </ul>
                                <div className="brdract"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="lastcardbtn position-sticky">
                      <div className="main-cardsbid">
                        <div className="history-cards">
                          <div className="history-content">
                            <h5 className="">Highest Bid</h5>
                            <div className="history-inner">
                              <img
                                src="\adress\eth1.png"
                                className="img-fluid ethimg"
                              />
                              <p className="">1.5 ETH</p>
                            </div>
                          </div>
                        </div>
                        <div className="history-cards2">
                          <div className="history-content">
                            <h5 className="">Auction Ends in</h5>
                            <div className="history-inner">
                              <p className="">23 : 10 : 39</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-12 p-0">
                          {/* place a bid button show on place a bid component */}
                          <button
                            className="btnbtnbid"
                            data-toggle="modal"
                            data-target="#placebid"
                          >
                            Place a Bid
                          </button>

                        </div>
                      </div>
                      {/* this two button are display on offer sent component and hide the place a bid button */}
                      <div className="withdraw-increase d-none">
                        <button className="withdraw" data-toggle="modal" data-target="#withdraw">Withdraw Bid</button>
                        <button className="increase" data-toggle="modal" data-target="#increase-bid">Increase Bid</button>
                      </div>
                      {/* My domain component data is here...................... */}
                      {/* <div className="subscription-text d-none">
                            <p>Subscription Ends in</p>
                            <h6>362 : 24 : 35 : 02</h6>
                      </div> */}
                      <div className="mydomain-btns w-100 d-none">
                        <Link className="w-100">
                          <button className="putonmarket">Put On Marketplace</button>
                        </Link>
                        {/* <button className="setting" data-toggle="modal" data-target="#setting">Setting</button> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* In a place bid component this modal open in place a bid (modal) button  */}
      <section className="placebid-modal">
        <div
          className="modal fade"
          id="placebid"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h3 className="modal-title text-center" id="exampleModalLabel">
                  Place a Bid
                </h3>

                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">
                    <img src="\adress\g3763.png" className="img-fluid" />
                  </span>
                </button>
              </div>
              <div className="modal-body">
                <p className="">
                  You are about to Place a Bid on<span>fireape.tomi</span> by{" "}
                  <span> Leslie Alexander </span>{" "}
                </p>
                <div className="input-field">
                  <div className="upper-text">
                    <p>You Bid</p>
                    <p>
                      Min. Bid: <span> 1.20 ETH </span>
                    </p>
                  </div>
                  <input type="text" placeholder="Enter Bid" />
                  <span className="input-inner">ETH</span>
                </div>
                <div className="text-modalbid mt-4">
                  <h4 className="bidhead">Your Balance</h4>
                  <h3 className="head1 ml-2">6.323 ETH</h3>
                </div>
                <div className="text-modalbid mt-2">
                  <h4 className="bidhead">Service fee</h4>
                  <h3 className="head1 ml-2">0.00 ETH</h3>
                </div>
                <div className="text-modalbid mt-2">
                  <h4 className="bidhead">Total Bid amount</h4>
                  <h3 className="head1 ml-2">0.00 ETH</h3>
                </div>
                <button
                  className="btnmodalbtn"
                  data-toggle="modal"
                  data-target="#accept"
                >
                  Place a Bid
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* if open a place a bid modal inside a modal another button of place a bid click to open a bid successful submitted modal */}
      <section className="placebid2-modal modal-dialog-centered">
        <div
          class="modal fade"
          id="accept"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div className="modal-header">
                <h3 className="modal-title text-center" id="exampleModalLabel">
                  Place a Bid
                </h3>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">
                    <img src="\adress\g3763.png" className="img-fluid" />
                  </span>
                </button>
              </div>
              <div class="modal-body">
                <img
                  src="\adress\success.png"
                  alt="img"
                  className="img-fluid"
                />
                <p>
                  Your Bid has been <br /> successfully submitted
                </p>
                <button>Okay</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* offer sent component show two button withdraw and increase bid if click on withdraw button open this modal  */}
      <section className="placebid2-modal modal-dialog-centered">
        <div
          class="modal fade"
          id="withdraw"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div className="modal-header">
                <h3 className="modal-title text-center" id="exampleModalLabel">
                  Withdraw Bid
                </h3>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">
                    <img src="\adress\g3763.png" className="img-fluid" />
                  </span>
                </button>
              </div>
              <div class="modal-body">
                <div className="withdraw-body">
                  <p className="withdraw-para">
                    Are you Sure to <br /> Withdraw your Bid
                  </p>
                  <div className="withdraw-btn">
                    <button className="cancel">Cancel</button>
                    <button className="confirm">Confirm</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* offer sent component show two button withdraw and increase bid if click on increase bid button open this modal  */}
      <section className="placebid-modal">
        <div
          className="modal fade"
          id="increase-bid"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h3 className="modal-title text-center" id="exampleModalLabel">
                  Increase Bid
                </h3>

                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">
                    <img src="\adress\g3763.png" className="img-fluid" />
                  </span>
                </button>
              </div>
              <div className="modal-body">
                <div className="input-field">
                  <div className="upper-text">
                    <p>You Bid</p>
                    <p>
                      Previous Bid: <span> 1.20 ETH </span>
                    </p>
                  </div>
                  <input type="text" placeholder="Enter Bid" />
                  <span className="input-inner">ETH</span>
                </div>
                <div className="text-modalbid mt-5">
                  <h4 className="bidhead">Your Balance</h4>
                  <h3 className="head1 ml-2">6.323 ETH</h3>
                </div>
                <div className="text-modalbid mt-2">
                  <h4 className="bidhead">Service fee</h4>
                  <h3 className="head1 ml-2">0.00 ETH</h3>
                </div>
                <div className="text-modalbid mt-2">
                  <h4 className="bidhead">Total Bid amount</h4>
                  <h3 className="head1 ml-2">0.00 ETH</h3>
                </div>
                <button
                  className="btnmodalbtn"
                >
                  Increase Bid
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* In a my domain component two button show put on market place and setting if click on setting to open this modal */}
      <section className="setting-modal">
        <div
          class="modal fade"
          id="setting"
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
                <p className="upper-para">No. of years</p>
                <div className="upper">
                  <div className="left"><button><img src="\minus.png" alt="img" className="img-fluid" /></button></div>
                  <div className="mid">1</div>
                  <div className="right"><button><img src="\plus.png" alt="img" className="img-fluid" /></button></div>

                </div>
                <div className="mid">
                  <div className="text">
                    <p className="para1">Previous Subscription Period:</p>
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
                <button className="mint">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Place;
