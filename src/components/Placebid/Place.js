import React from "react";
import "./place.scss";
import { Link } from "react-router-dom";
export const Place = () => {
  return (
    <>
      <section className="main-place">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-11 col-12 m-auto">
              <div className="botton">
                <Link to="/">
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
                <div className=" col-xl-6 col-md-6 col-sm-12 p-0">
                  <div className="maincard">
                    <h3 className="cardinnerheading">fireape.tomi</h3>
                    <div className="cardimgg">
                      <img src="\adress\cardds.svg" className="img-fluid " />
                    </div>
                  </div>
                  <div className="bid-card ">
                    <div className="inner-content">
                      <h3 className="">Contract Address</h3>
                      <p className="">1x1dDB2C0817daF....</p>
                      <h3 className="">Token ID</h3>
                      <h5 className="">100300041083 </h5>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-md-6 col-sm-12 p-0">
                  <div className="bittingpills">
                    <div className="heading-bid">
                      <h5 className="">fireape.tomi</h5>
                    </div>
                    <div className="bid-tabs">
                      <nav>
                        <div class="nav nav-tabs" id="nav-tab">
                          <a
                            class="nav-link active pl-0"
                            data-toggle="tab"
                            href="#nav-Information"
                          >
                            Information
                          </a>
                          <a
                            class="nav-link"
                            data-toggle="tab"
                            href="#nav-Bids"
                          >
                            Bids History
                          </a>
                          <a
                            class="nav-link"
                            data-toggle="tab"
                            href="#nav-Activity"
                          >
                            Activity
                          </a>
                        </div>
                      </nav>
                      <div class="tab-content" id="nav-tabContent">
                        <div
                          class="tab-pane fade show active"
                          id="nav-Information"
                        >
                          <div className="information">
                            <div className="para">
                              <p className="">
                                Sed ut perspiciatis unde omnis iste natus error
                                sit voluptatem accusantium doloremque
                                laudantium, totam rem aperiam, eaque ipsa quae
                                ab illo inventore veritatis et quasi architecto
                                beatae vitae dicta sunt explicabo. Nemo enim
                                ipsam voluptatem quia voluptas sit aspernatur
                                aut odit aut fugit, sed quia consequuntur magni
                                dolores eos qui ratione voluptatem sequi
                                nesciunt.
                              </p>
                            </div>
                            <div className="avtars">
                              <div className="avtarfirst">
                                <div className="">
                                  <img
                                    src="\adress\avatarf.svg"
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
                              <div className="avtarfirst ml-3">
                                <div className="">
                                  <img
                                    src="\adress\avatarsec.svg"
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
                        <div class="tab-pane fade" id="nav-Bids">
                          <div className="bidhistory">
                            <div className="content-history">
                              <div className="fitcont">
                                <ul className="list-inline maaiinnoonnee">
                                  <li className="list-inline-item">
                                    <img
                                      src="\adress\avatar-04.svg"
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
                                      src="\adress\avatar-04.svg"
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
                                      src="\adress\avatar-04.svg"
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
                                      src="\adress\avatar-04.svg"
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
                        <div class="tab-pane fade" id="nav-Activity">
                          <div className="bidActivity">
                            <div className="content-Activity">
                              <div className="activittyy">
                                <ul className="list-inline maaiinnoonneeact">
                                  <li className="list-inline-item">
                                    <img
                                      src="\adress\bitavatar.svg"
                                      className="img-fluid sfgsdfsdsdgsdg"
                                    />
                                  </li>
                                  <li className="list-inline-item">
                                    <div className="Activity-heads">
                                      <h3 className="transferred">
                                        Transferred to{" "}
                                        <span>Russell Carson</span>
                                      </h3>
                                      <p className="secransferred">
                                        by
                                        <span className="fst">
                                          Russell Carson
                                        </span>
                                        <span className="sec">
                                          02/06/2022, 2:28 AM
                                        </span>
                                      </p>
                                    </div>
                                  </li>
                                </ul>
                                <div className="brdract"></div>
                              </div>
                              <div className="activittyy">
                                <ul className="list-inline maaiinnoonneeact">
                                  <li className="list-inline-item">
                                    <img
                                      src="\adress\bitavatar.svg"
                                      className="img-fluid sfgsdfsdsdgsdg"
                                    />
                                  </li>
                                  <li className="list-inline-item">
                                    <div className="Activity-heads">
                                      <h3 className="transferred">
                                        Bid <span>0.25 ETH</span>
                                      </h3>
                                      <p className="secransferred">
                                        by
                                        <span className="fst">
                                          Russell Carson
                                        </span>
                                        <span className="sec">
                                          02/06/2022, 2:28 AM
                                        </span>
                                      </p>
                                    </div>
                                  </li>
                                </ul>
                                <div className="brdract"></div>
                              </div>
                              <div className="activittyy">
                                <ul className="list-inline maaiinnoonneeact">
                                  <li className="list-inline-item">
                                    <img
                                      src="\adress\secbidavatar.svg"
                                      className="img-fluid sfgsdfsdsdgsdg"
                                    />
                                  </li>
                                  <li className="list-inline-item">
                                    <div className="Activity-heads">
                                      <h3 className="transferred">
                                        Minted by <span>Virgil Lynch</span>
                                      </h3>
                                      <p className="secransferred pl-0">
                                        <span className="sec m-0">
                                          02/06/2022, 2:28 AM
                                        </span>
                                      </p>
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
                                src="\adress\Group.svg"
                                className="img-fluid ethimg"
                              />
                              <p className="">1.5 ETH</p>
                            </div>
                          </div>
                        </div>
                        <div className="history-cards">
                          <div className="history-content">
                            <h5 className="">Highest Bid</h5>
                            <div className="history-inner">
                              <img
                                src="\adress\Group.svg"
                                className="img-fluid ethimg"
                              />
                              <p className="">1.5 ETH</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button
                        className="btnbtnbid"
                        data-toggle="modal"
                        data-target="#placebid"
                      >
                        Place a Bid
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="placebid-modal">
        <div
          class="modal fade"
          id="placebid"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog ">
            <div class="modal-content">
              <div class="modal-header">
                <h3 class="modal-title text-center" id="exampleModalLabel">
                  Place a Bid
                </h3>

                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">
                    <img src="\adress\g3763.png" className="img-fluid" />
                  </span>
                </button>
              </div>
              <div class="modal-body">
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
                <button className="btnmodalbtn">Accept Bid</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Place;
