import React from "react";
import "./resell.scss";
import { Link } from "react-router-dom";
export const Resell = () => {
  return (
    <>
      <section className="main-resell">
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
                      <img src="\adress\cardds.svg" className="img-fluid" />
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
                            href="#nav-Activity"
                          >
                            Activity
                          </a>
                        </div>
                      </nav>
                      <div className="tab-content" id="nav-tabContent">
                        <div
                          className="tab-pane fade show active"
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
                              <div className="avtarfirst ml-3">
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
                                      src="\adress\avatarf.png"
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
                                      src="\adress\avatarf.png"
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
                                src="\adress\eth1.png"
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
                       Sell
                      </button>
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

export default Resell;
