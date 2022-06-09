import React from "react";
import "./profile.scss";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Profile = () => {
  const owl_option = {
    nav: false,
    dots: false,
    dotsEach: false,
    loop: true,
    autoplay: false,
    navText: [
      "<i class='fas fa-angle-left'></i>",
      "<i class='fas fa-angle-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
        margin: 10,
      },
      361: {
        items: 1,
        margin: 15,
      },
      600: {
        items: 1,
        margin: 15,
      },
      700: {
        items: 2,
        margin: 15,
      },
      1200: {
        items: 2,
        margin: 15,
      },
      1300: {
        items: 3,
        margin: 30,
      },
    },
  };
  return (
    <>
      <section className="artitsprofile">
        <div className="row">
          <div className="col-sm-12 p-0">
            <div className="">
              <img src="\profile-bg.png" class="img-fluid w100p" alt=""></img>
            </div>
          </div>
        </div>
        <section className="main-Myprofile ptb ">
          <div className="container-fluid">
            <div className="row ">
              <div className="col-sm-12 m-auto">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="inner-content text-center">
                      <a className="proimg">
                        <img
                          src="\avatar-03.svg"
                          className="img-fluid main-img"
                          alt=""
                        />
                      </a>
                      <div className="mt-4">
                        <h3 className="white">
                          <strong>Martin Knight</strong>{" "}
                        </h3>
                      </div>
                      <div className=" ">
                        <button className=" btn-common11  btn-profile-top">
                          0x7a86c0b0641710...a63e{" "}
                          <img
                            src="\copy-fav.png"
                            className="img-fluid p-2"
                            alt=""
                          />
                        </button>
                      </div>
                      <div className="">
                        <p className="Greyp">
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam
                          <br></br> rem aperiam, eaque ipsa quae ab illo
                          inventore veritatis et quasi architecto beatae vitae
                          dicta sunt<br></br> explicabo. Nemo enim ipsam
                          voluptatem quia voluptas sit aspernatur aut odit aut.
                        </p>
                      </div>
                      <ul className="list-inline mt-5 fav-icons">
                        <li className="list-inline-item">
                          <a className="links">
                            <span>
                              <i class="fab fa-facebook-f"></i>
                            </span>
                          </a>{" "}
                        </li>
                        <li className="list-inline-item">
                          <a className="links">
                            <span>
                              <i class="fab fa-instagram"></i>
                            </span>
                          </a>{" "}
                        </li>
                        <li className="list-inline-item">
                          <a className="links">
                            <span>
                              <i class="fab fa-reddit-alien"></i>
                            </span>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a className="links">
                            <span>
                              <i class="fab fa-twitter"></i>
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row mt-5 ptb20">
              <div className="col-sm-12 p-0">
                <ul
                  class="nav nav-pills mainpills"
                  id="pills-tab"
                  role="tablist"
                >
                  <li class="nav-item">
                    <a
                      class="nav-link  active"
                      id="pills-Owned-tab"
                      data-toggle="pill"
                      href="#pills-Owned"
                      role="tab"
                      aria-controls="pills-Owned"
                      aria-selected="true"
                    >
                      Owned
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link   "
                      id="pills-Created-tab"
                      data-toggle="pill"
                      href="#pills-Created"
                      role="tab"
                      aria-controls="pills-Created"
                      aria-selected="false"
                    >
                      Created
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link "
                      id="pills-contact-tab"
                      data-toggle="pill"
                      href="#pills-contact"
                      role="tab"
                      aria-controls="pills-contact"
                      aria-selected="false"
                    >
                      Offers Recieved
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link   "
                      id="pills-following-tab"
                      data-toggle="pill"
                      href="#pills-following"
                      role="tab"
                      aria-controls="pills-following"
                      aria-selected="true"
                    >
                      Offers Sent
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link  "
                      id="pills-collection-tab"
                      data-toggle="pill"
                      href="#pills-collection"
                      role="tab"
                      aria-controls="pills-collection"
                      aria-selected="false"
                    >
                      Sold
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link "
                      id="pills-activity-tab"
                      data-toggle="pill"
                      href="#pills-activity"
                      role="tab"
                      aria-controls="pills-activity"
                      aria-selected="false"
                    >
                      Unsold
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link  "
                      id="pills-edit-tab"
                      data-toggle="pill"
                      href="#pills-edit"
                      role="tab"
                      aria-controls="pills-edit"
                      aria-selected="false"
                    >
                      Edit Profile
                    </a>
                  </li>
                </ul>

                <div class="tab-content" id="pills-tabContent">
                  <div
                    class="tab-pane fade  "
                    id="pills-Owned"
                    role="tabpanel"
                    aria-labelledby="pills-Owned-tab"
                  >
                    <div class="row cardsss ptb20">
                      <div class="col-xl-3 col-lg-4 col-md-6 col-12">
                        <div class="card">
                          <img
                            src="assets\Frame 9300.svg"
                            className="card-img-top"
                            alt="img"
                          />
                          <div class="card-body-1">
                            <div class="card-style-1">
                              <figure>
                                <img
                                  src="assets\avatar-04.svg"
                                  class="img-fluid"
                                  alt=""
                                />
                                <img
                                  class="img-fluid img-1"
                                  src="assets\avatar-03.svg"
                                  alt=""
                                />
                              </figure>
                              <figure></figure>
                            </div>
                            <div class="card-style-2">
                              <h5 class="card-heading-1">Highest Bid</h5>
                              <p class="card-heading-2">
                                <img
                                  class="img-fluid"
                                  src="assets\Group.png"
                                  alt=""
                                />
                                1.5 ETH
                              </p>
                            </div>
                          </div>
                          <div class="card-body-2">
                            <h6 class="card-heading-3">Auction Ends</h6>
                            <h5 class="card-heading-4">04 : 23 : 10 : 39</h5>
                          </div>
                        </div>
                      </div>
                      <div class="col-xl-3 col-lg-4 col-md-6 col-12">
                        <div class="card">
                          <img
                            src="assets\Frame 9300.svg"
                            class="card-img-top"
                            alt="..."
                          />
                          <div class="card-body-1">
                            <div class="card-style-1">
                              <figure>
                                <img
                                  src="assets\avatar-04.svg"
                                  class="img-fluid"
                                  alt=""
                                />
                                <img
                                  class="img-fluid img-1"
                                  src="assets\avatar-03.svg"
                                  alt=""
                                />
                              </figure>
                              <figure></figure>
                            </div>
                            <div class="card-style-2">
                              <h5 class="card-heading-1">Highest Bid</h5>
                              <p class="card-heading-2">
                                <img
                                  class="img-fluid"
                                  src="assets\Group.png"
                                  alt=""
                                />
                                1.5 ETH
                              </p>
                            </div>
                          </div>
                          <div class="card-body-2">
                            <h6 class="card-heading-3">Auction Ends</h6>
                            <h5 class="card-heading-4">04 : 23 : 10 : 39</h5>
                          </div>
                        </div>
                      </div>
                      <div class="col-xl-3 col-lg-4 col-md-6 col-12">
                        <div class="card">
                          <img
                            src="assets\Frame 9300.svg"
                            class="card-img-top"
                            alt="..."
                          />
                          <div class="card-body-1">
                            <div class="card-style-1">
                              <figure>
                                <img
                                  src="assets\avatar-04.svg"
                                  class="img-fluid"
                                  alt=""
                                />
                                <img
                                  class="img-fluid img-1"
                                  src="assets\avatar-03.svg"
                                  alt=""
                                />
                              </figure>
                              <figure></figure>
                            </div>
                            <div class="card-style-2">
                              <h5 class="card-heading-1">Highest Bid</h5>
                              <p class="card-heading-2">
                                <img
                                  class="img-fluid"
                                  src="assets\Group.png"
                                  alt=""
                                />
                                1.5 ETH
                              </p>
                            </div>
                          </div>
                          <div class="card-body-2">
                            <h6 class="card-heading-3">Auction Ends</h6>
                            <h5 class="card-heading-4">04 : 23 : 10 : 39</h5>
                          </div>
                        </div>
                      </div>
                      <div class="col-xl-3 col-lg-4 col-md-6 col-12">
                        <div class="card">
                          <img
                            src="assets\Frame 9300.svg"
                            class="card-img-top"
                            alt="..."
                          />
                          <div class="card-body-1">
                            <div class="card-style-1">
                              <figure>
                                <img
                                  src="assets\avatar-04.svg"
                                  class="img-fluid"
                                  alt=""
                                />
                                <img
                                  class="img-fluid img-1"
                                  src="assets\avatar-03.svg"
                                  alt=""
                                />
                              </figure>
                              <figure></figure>
                            </div>
                            <div class="card-style-2">
                              <h5 class="card-heading-1">Highest Bid</h5>
                              <p class="card-heading-2">
                                <img
                                  class="img-fluid"
                                  src="assets\Group.png"
                                  alt=""
                                />
                                1.5 ETH
                              </p>
                            </div>
                          </div>
                          <div class="card-body-2">
                            <h6 class="card-heading-3">Auction Ends</h6>
                            <h5 class="card-heading-4">04 : 23 : 10 : 39</h5>
                          </div>
                        </div>
                      </div>
                      <div class="col-xl-3 col-lg-4 col-md-6 col-12">
                        <div class="card">
                          <img
                            src="assets\Frame 9300.svg"
                            class="card-img-top"
                            alt="..."
                          />
                          <div class="card-body-1">
                            <div class="card-style-1">
                              <figure>
                                <img
                                  src="assets\avatar-04.svg"
                                  class="img-fluid"
                                  alt=""
                                />
                                <img
                                  class="img-fluid img-1"
                                  src="assets\avatar-03.svg"
                                  alt=""
                                />
                              </figure>
                              <figure></figure>
                            </div>
                            <div class="card-style-2">
                              <h5 class="card-heading-1">Highest Bid</h5>
                              <p class="card-heading-2">
                                <img
                                  class="img-fluid"
                                  src="assets\Group.png"
                                  alt=""
                                />
                                1.5 ETH
                              </p>
                            </div>
                          </div>
                          <div class="card-body-2">
                            <h6 class="card-heading-3">Auction Ends</h6>
                            <h5 class="card-heading-4">04 : 23 : 10 : 39</h5>
                          </div>
                        </div>
                      </div>
                      <div class="col-xl-3 col-lg-4 col-md-6 col-12">
                        <div class="card">
                          <img
                            src="assets\Frame 9300.svg"
                            class="card-img-top"
                            alt="..."
                          />
                          <div class="card-body-1">
                            <div class="card-style-1">
                              <figure>
                                <img
                                  src="assets\avatar-04.svg"
                                  class="img-fluid"
                                  alt=""
                                />
                                <img
                                  class="img-fluid img-1"
                                  src="assets\avatar-03.svg"
                                  alt=""
                                />
                              </figure>
                              <figure></figure>
                            </div>
                            <div class="card-style-2">
                              <h5 class="card-heading-1">Highest Bid</h5>
                              <p class="card-heading-2">
                                <img
                                  class="img-fluid"
                                  src="assets\Group.png"
                                  alt=""
                                />
                                1.5 ETH
                              </p>
                            </div>
                          </div>
                          <div class="card-body-2">
                            <h6 class="card-heading-3">Auction Ends</h6>
                            <h5 class="card-heading-4">04 : 23 : 10 : 39</h5>
                          </div>
                        </div>
                      </div>
                      <div class="col-xl-3 col-lg-4 col-md-6 col-12">
                        <div class="card">
                          <img
                            src="assets\Frame 9300.svg"
                            class="card-img-top"
                            alt="..."
                          />
                          <div class="card-body-1">
                            <div class="card-style-1">
                              <figure>
                                <img
                                  src="assets\avatar-04.svg"
                                  class="img-fluid"
                                  alt=""
                                />
                                <img
                                  class="img-fluid img-1"
                                  src="assets\avatar-03.svg"
                                  alt=""
                                />
                              </figure>
                              <figure></figure>
                            </div>
                            <div class="card-style-2">
                              <h5 class="card-heading-1">Highest Bid</h5>
                              <p class="card-heading-2">
                                <img
                                  class="img-fluid"
                                  src="assets\Group.png"
                                  alt=""
                                />
                                1.5 ETH
                              </p>
                            </div>
                          </div>
                          <div class="card-body-2">
                            <h6 class="card-heading-3">Auction Ends</h6>
                            <h5 class="card-heading-4">04 : 23 : 10 : 39</h5>
                          </div>
                        </div>
                      </div>
                      <div class="col-xl-3 col-lg-4 col-md-6 col-12">
                        <div class="card">
                          <img
                            src="assets\Frame 9300.svg"
                            class="card-img-top"
                            alt="..."
                          />
                          <div class="card-body-1">
                            <div class="card-style-1">
                              <figure>
                                <img
                                  src="assets\avatar-04.svg"
                                  class="img-fluid"
                                  alt=""
                                />
                                <img
                                  class="img-fluid img-1"
                                  src="assets\avatar-03.svg"
                                  alt=""
                                />
                              </figure>
                              <figure></figure>
                            </div>
                            <div class="card-style-2">
                              <h5 class="card-heading-1">Highest Bid</h5>
                              <p class="card-heading-2">
                                <img
                                  class="img-fluid"
                                  src="assets\Group.png"
                                  alt=""
                                />
                                1.5 ETH
                              </p>
                            </div>
                          </div>
                          <div class="card-body-2">
                            <h6 class="card-heading-3">Auction Ends</h6>
                            <h5 class="card-heading-4">04 : 23 : 10 : 39</h5>
                          </div>
                        </div>
                      </div>
                      <div class="col-xl-3 col-lg-4 col-md-6 col-12">
                        <div class="card">
                          <img
                            src="assets\Frame 9300.svg"
                            class="card-img-top"
                            alt="..."
                          />
                          <div class="card-body-1">
                            <div class="card-style-1">
                              <figure>
                                <img
                                  src="assets\avatar-04.svg"
                                  class="img-fluid"
                                  alt=""
                                />
                                <img
                                  class="img-fluid img-1"
                                  src="assets\avatar-03.svg"
                                  alt=""
                                />
                              </figure>
                              <figure></figure>
                            </div>
                            <div class="card-style-2">
                              <h5 class="card-heading-1">Highest Bid</h5>
                              <p class="card-heading-2">
                                <img
                                  class="img-fluid"
                                  src="assets\Group.png"
                                  alt=""
                                />
                                1.5 ETH
                              </p>
                            </div>
                          </div>
                          <div class="card-body-2">
                            <h6 class="card-heading-3">Auction Ends</h6>
                            <h5 class="card-heading-4">04 : 23 : 10 : 39</h5>
                          </div>
                        </div>
                      </div>
                      <div class="col-xl-3 col-lg-4 col-md-6 col-12">
                        <div class="card">
                          <img
                            src="assets\Frame 9300.svg"
                            class="card-img-top"
                            alt="..."
                          />
                          <div class="card-body-1">
                            <div class="card-style-1">
                              <figure>
                                <img
                                  src="assets\avatar-04.svg"
                                  class="img-fluid"
                                  alt=""
                                />
                                <img
                                  class="img-fluid img-1"
                                  src="assets\avatar-03.svg"
                                  alt=""
                                />
                              </figure>
                              <figure></figure>
                            </div>
                            <div class="card-style-2">
                              <h5 class="card-heading-1">Highest Bid</h5>
                              <p class="card-heading-2">
                                <img
                                  class="img-fluid"
                                  src="assets\Group.png"
                                  alt=""
                                />
                                1.5 ETH
                              </p>
                            </div>
                          </div>
                          <div class="card-body-2">
                            <h6 class="card-heading-3">Auction Ends</h6>
                            <h5 class="card-heading-4">04 : 23 : 10 : 39</h5>
                          </div>
                        </div>
                      </div>
                      <div class="col-xl-3 col-lg-4 col-md-6 col-12">
                        <div class="card">
                          <img
                            src="assets\Frame 9300.svg"
                            class="card-img-top"
                            alt="..."
                          />
                          <div class="card-body-1">
                            <div class="card-style-1">
                              <figure>
                                <img
                                  src="assets\avatar-04.svg"
                                  class="img-fluid"
                                  alt=""
                                />
                                <img
                                  class="img-fluid img-1"
                                  src="assets\avatar-03.svg"
                                  alt=""
                                />
                              </figure>
                              <figure></figure>
                            </div>
                            <div class="card-style-2">
                              <h5 class="card-heading-1">Highest Bid</h5>
                              <p class="card-heading-2">
                                <img
                                  class="img-fluid"
                                  src="assets\Group.png"
                                  alt=""
                                />
                                1.5 ETH
                              </p>
                            </div>
                          </div>
                          <div class="card-body-2">
                            <h6 class="card-heading-3">Auction Ends</h6>
                            <h5 class="card-heading-4">04 : 23 : 10 : 39</h5>
                          </div>
                        </div>
                      </div>
                      <div class="col-xl-3 col-lg-4 col-md-6 col-12">
                        <div class="card">
                          <img
                            src="assets\Frame 9300.svg"
                            class="card-img-top"
                            alt="..."
                          />
                          <div class="card-body-1">
                            <div class="card-style-1">
                              <figure>
                                <img
                                  src="assets\avatar-04.svg"
                                  class="img-fluid"
                                  alt=""
                                />
                                <img
                                  class="img-fluid img-1"
                                  src="assets\avatar-03.svg"
                                  alt=""
                                />
                              </figure>
                              <figure></figure>
                            </div>
                            <div class="card-style-2">
                              <h5 class="card-heading-1">Highest Bid</h5>
                              <p class="card-heading-2">
                                <img
                                  class="img-fluid"
                                  src="assets\Group.png"
                                  alt=""
                                />
                                1.5 ETH
                              </p>
                            </div>
                          </div>
                          <div class="card-body-2">
                            <h6 class="card-heading-3">Auction Ends</h6>
                            <h5 class="card-heading-4">04 : 23 : 10 : 39</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="btn-loadmore">
                          <button>Loading More</button>
                      </div>
                  </div>
                  <div
                    class="tab-pane fade show "
                    id="pills-Created"
                    role="tabpanel"
                    aria-labelledby="pills-Created-tab"
                  >
                    <div className="row ptb20">
                      <div className="col-sm-3 ">
                        <div className="cardstyless  ptb20">
                          <img
                            src="\image 1.svg"
                            className="img-fluid w-100"
                            alt=""
                          />
                          <div className="row">
                            <div className="col-sm-6 p-0">
                              <h5 className="pt-2 white">Sculptures 22</h5>
                              <ul className="list-inline ">
                                <Link to="/">
                                  <li className="list-inline-item mt-2">
                                    <div className="inner-user">
                                      <img
                                        src="/projectstarter-marketplace-landingpage-assets/avatar-one.png"
                                        className="img-fluid"
                                        alt=""
                                      />
                                    </div>
                                  </li>
                                  <li className="list-inline-item">
                                    <div className="inner-user2">
                                      <img
                                        src="/projectstarter-marketplace-landingpage-assets/avatar-two.png"
                                        className="img-fluid"
                                        alt=""
                                      />
                                    </div>
                                  </li>
                                </Link>
                              </ul>
                            </div>
                            <div className="col-sm-6 p-0">
                              <div className="inner-side pt-2 pb-0">
                                <h6 className="grey text-right">Minimum Bid</h6>
                                <p class="text-right">
                                  {" "}
                                  <span className="common ">0.250 ETH</span>
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="d-flex justify-content-between mt-3">
                            <div className="">
                              <h6 className="grey ">Bidin Ends in</h6>
                              <p class="">
                                {" "}
                                <span className="common ">1d 21h 22m 45s</span>
                              </p>
                            </div>
                            <div className="">
                              <button class="btn-blue1">Buy Now</button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-3 ">
                        <div className="cardstyless  ptb20">
                          <img
                            src="\image 1.svg"
                            className="img-fluid w-100"
                            alt=""
                          />
                          <div className="row">
                            <div className="col-sm-6 p-0">
                              <h5 className="pt-2 white">Sculptures 22</h5>
                              <ul className="list-inline ">
                                <Link to="/">
                                  <li className="list-inline-item mt-2">
                                    <div className="inner-user">
                                      <img
                                        src="/projectstarter-marketplace-landingpage-assets/avatar-one.png"
                                        className="img-fluid"
                                        alt=""
                                      />
                                    </div>
                                  </li>
                                  <li className="list-inline-item">
                                    <div className="inner-user2">
                                      <img
                                        src="/projectstarter-marketplace-landingpage-assets/avatar-two.png"
                                        className="img-fluid"
                                        alt=""
                                      />
                                    </div>
                                  </li>
                                </Link>
                              </ul>
                            </div>
                            <div className="col-sm-6 p-0">
                              <div className="inner-side pt-2 pb-0">
                                <h6 className="grey text-right">Minimum Bid</h6>
                                <p class="text-right">
                                  {" "}
                                  <span className="common ">0.250 ETH</span>
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="d-flex justify-content-between mt-3">
                            <div className="">
                              <h6 className="grey ">Bidin Ends in</h6>
                              <p class="">
                                {" "}
                                <span className="common ">1d 21h 22m 45s</span>
                              </p>
                            </div>
                            <div className="">
                              <button class="btn-blue1">Buy Now</button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-3 ">
                        <div className="cardstyless  ptb20">
                          <img
                            src="\image 1.svg"
                            className="img-fluid w-100"
                            alt=""
                          />
                          <div className="row">
                            <div className="col-sm-6 p-0">
                              <h5 className="pt-2 white">Sculptures 22</h5>
                              <ul className="list-inline ">
                                <Link to="/">
                                  <li className="list-inline-item mt-2">
                                    <div className="inner-user">
                                      <img
                                        src="/projectstarter-marketplace-landingpage-assets/avatar-one.png"
                                        className="img-fluid"
                                        alt=""
                                      />
                                    </div>
                                  </li>
                                  <li className="list-inline-item">
                                    <div className="inner-user2">
                                      <img
                                        src="/projectstarter-marketplace-landingpage-assets/avatar-two.png"
                                        className="img-fluid"
                                        alt=""
                                      />
                                    </div>
                                  </li>
                                </Link>
                              </ul>
                            </div>
                            <div className="col-sm-6 p-0">
                              <div className="inner-side pt-2 pb-0">
                                <h6 className="grey text-right">Minimum Bid</h6>
                                <p class="text-right">
                                  {" "}
                                  <span className="common ">0.250 ETH</span>
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="d-flex justify-content-between mt-3">
                            <div className="">
                              <h6 className="grey ">Bidin Ends in</h6>
                              <p class="">
                                {" "}
                                <span className="common ">1d 21h 22m 45s</span>
                              </p>
                            </div>
                            <div className="">
                              <button class="btn-blue1">Buy Now</button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-3 ">
                        <div className="cardstyless  ptb20">
                          <img
                            src="\image 1.svg"
                            className="img-fluid w-100"
                            alt=""
                          />
                          <div className="row">
                            <div className="col-sm-6 p-0">
                              <h5 className="pt-2 white">Sculptures 22</h5>
                              <ul className="list-inline ">
                                <Link to="/">
                                  <li className="list-inline-item mt-2">
                                    <div className="inner-user">
                                      <img
                                        src="/projectstarter-marketplace-landingpage-assets/avatar-one.png"
                                        className="img-fluid"
                                        alt=""
                                      />
                                    </div>
                                  </li>
                                  <li className="list-inline-item">
                                    <div className="inner-user2">
                                      <img
                                        src="/projectstarter-marketplace-landingpage-assets/avatar-two.png"
                                        className="img-fluid"
                                        alt=""
                                      />
                                    </div>
                                  </li>
                                </Link>
                              </ul>
                            </div>
                            <div className="col-sm-6 p-0">
                              <div className="inner-side pt-2 pb-0">
                                <h6 className="grey text-right">Minimum Bid</h6>
                                <p class="text-right">
                                  {" "}
                                  <span className="common ">0.250 ETH</span>
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="d-flex justify-content-between mt-3">
                            <div className="">
                              <h6 className="grey ">Bidin Ends in</h6>
                              <p class="">
                                {" "}
                                <span className="common ">1d 21h 22m 45s</span>
                              </p>
                            </div>
                            <div className="">
                              <button class="btn-blue1">Buy Now</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="pills-contact"
                    role="tabpanel"
                    aria-labelledby="pills-contact-tab"
                  >
                    <div className="row ptb20">
                      <div className="col-sm-12 p-0">
                        <div className="table-responsive">
                          <table class="table">
                            <thead>
                              <tr>
                                <th className="white">Item</th>
                                <th className="white">Highest Bid</th>
                                <th className="white">USD Price</th>
                                <th className="white">Total Offers</th>
                                <th className="white">Details</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <ul className="list-inline">
                                    <li className="list-inline-item">
                                      <div className="inner-table-img inner-table-mb">
                                        <img
                                          src="\table-profile.png"
                                          className="img-fluid"
                                        />
                                        &nbsp; &nbsp;
                                        <span className="common">
                                        fireape.tomi
                                        </span>
                                      </div>
                                    </li>
                                  </ul>
                                </td>
                                <td>
                                  <div className="inner-table-img inner-table-sec">
                                    <img
                                      src="\table-diamond.png"
                                      className="img-fluid"
                                    />
                                    <span className="white mt-10">
                                      1.22 ETH
                                    </span>
                                  </div>
                                </td>
                                <td>
                                  <div className="inner-text-table">
                                    <span className="white mt-10">
                                      $3516.27
                                    </span>
                                  </div>
                                </td>
                                <td>
                                  <div className="inner-text-table">
                                    <span className="white mt-10">20</span>
                                  </div>
                                </td>
                                <td>
                                  <div className="inner-text-table">
                                    <Link to="/biddetail">
                                      <button className="btn-blue1">
                                        View Details
                                      </button>
                                    </Link>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <ul className="list-inline">
                                    <li className="list-inline-item">
                                      <div className="inner-table-img inner-table-mb">
                                        <img
                                          src="\table-profile.png"
                                          className="img-fluid"
                                        />
                                        &nbsp; &nbsp;
                                        <span className="common">
                                        fireape.tomi
                                        </span>
                                      </div>
                                    </li>
                                  </ul>
                                </td>
                                <td>
                                  <div className="inner-table-img inner-table-sec">
                                    <img
                                      src="\table-diamond.png"
                                      className="img-fluid"
                                    />
                                    <span className="white mt-10">
                                      1.22 ETH
                                    </span>
                                  </div>
                                </td>
                                <td>
                                  <div className="inner-text-table">
                                    <span className="white mt-10">
                                      $3516.27
                                    </span>
                                  </div>
                                </td>
                                <td>
                                  <div className="inner-text-table">
                                    <span className="white mt-10">20</span>
                                  </div>
                                </td>
                                <td>
                                  <div className="inner-text-table">
                                    <Link to="/biddetail">
                                      <button className="btn-blue1">
                                        View Details
                                      </button>
                                    </Link>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <ul className="list-inline">
                                    <li className="list-inline-item">
                                      <div className="inner-table-img inner-table-mb">
                                        <img
                                          src="\table-profile.png"
                                          className="img-fluid"
                                        />
                                        &nbsp; &nbsp;
                                        <span className="common">
                                        fireape.tomi
                                        </span>
                                      </div>
                                    </li>
                                  </ul>
                                </td>
                                <td>
                                  <div className="inner-table-img inner-table-sec">
                                    <img
                                      src="\table-diamond.png"
                                      className="img-fluid"
                                    />
                                    <span className="white mt-10">
                                      1.22 ETH
                                    </span>
                                  </div>
                                </td>
                                <td>
                                  <div className="inner-text-table">
                                    <span className="white mt-10">
                                      $3516.27
                                    </span>
                                  </div>
                                </td>
                                <td>
                                  <div className="inner-text-table">
                                    <span className="white mt-10">20</span>
                                  </div>
                                </td>
                                <td>
                                  <div className="inner-text-table">
                                    <Link to="/biddetail">
                                      <button className="btn-blue1">
                                        View Details
                                      </button>
                                    </Link>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <ul className="list-inline">
                                    <li className="list-inline-item">
                                      <div className="inner-table-img inner-table-mb">
                                        <img
                                          src="\table-profile.png"
                                          className="img-fluid"
                                        />
                                        &nbsp; &nbsp;
                                        <span className="common">
                                        fireape.tomi
                                        </span>
                                      </div>
                                    </li>
                                  </ul>
                                </td>
                                <td>
                                  <div className="inner-table-img inner-table-sec">
                                    <img
                                      src="\table-diamond.png"
                                      className="img-fluid"
                                    />
                                    <span className="white mt-10">
                                      1.22 ETH
                                    </span>
                                  </div>
                                </td>
                                <td>
                                  <div className="inner-text-table">
                                    <span className="white mt-10">
                                      $3516.27
                                    </span>
                                  </div>
                                </td>
                                <td>
                                  <div className="inner-text-table">
                                    <span className="white mt-10">20</span>
                                  </div>
                                </td>
                                <td>
                                  <div className="inner-text-table">
                                    <Link to="/biddetail">
                                      <button className="btn-blue1">
                                        View Details
                                      </button>
                                    </Link>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <ul className="list-inline">
                                    <li className="list-inline-item">
                                      <div className="inner-table-img inner-table-mb">
                                        <img
                                          src="\table-profile.png"
                                          className="img-fluid"
                                        />
                                        &nbsp; &nbsp;
                                        <span className="common">
                                        fireape.tomi
                                        </span>
                                      </div>
                                    </li>
                                  </ul>
                                </td>
                                <td>
                                  <div className="inner-table-img inner-table-sec">
                                    <img
                                      src="\table-diamond.png"
                                      className="img-fluid"
                                    />
                                    <span className="white mt-10">
                                      1.22 ETH
                                    </span>
                                  </div>
                                </td>
                                <td>
                                  <div className="inner-text-table">
                                    <span className="white mt-10">
                                      $3516.27
                                    </span>
                                  </div>
                                </td>
                                <td>
                                  <div className="inner-text-table">
                                    <span className="white mt-10">20</span>
                                  </div>
                                </td>
                                <td>
                                  <div className="inner-text-table">
                                    <Link to="/biddetail">
                                      <button className="btn-blue1">
                                        View Details
                                      </button>
                                    </Link>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <ul className="list-inline">
                                    <li className="list-inline-item">
                                      <div className="inner-table-img inner-table-mb">
                                        <img
                                          src="\table-profile.png"
                                          className="img-fluid"
                                        />
                                        &nbsp; &nbsp;
                                        <span className="common">
                                        fireape.tomi
                                        </span>
                                      </div>
                                    </li>
                                  </ul>
                                </td>
                                <td>
                                  <div className="inner-table-img inner-table-sec">
                                    <img
                                      src="\table-diamond.png"
                                      className="img-fluid"
                                    />
                                    <span className="white mt-10">
                                      1.22 ETH
                                    </span>
                                  </div>
                                </td>
                                <td>
                                  <div className="inner-text-table">
                                    <span className="white mt-10">
                                      $3516.27
                                    </span>
                                  </div>
                                </td>
                                <td>
                                  <div className="inner-text-table">
                                    <span className="white mt-10">20</span>
                                  </div>
                                </td>
                                <td>
                                  <div className="inner-text-table">
                                    <Link to="/biddetail">
                                      <button className="btn-blue1">
                                        View Details
                                      </button>
                                    </Link>
                                  </div>
                                </td>
                              </tr>
                             
                            </tbody>
                          </table>
                        </div>
                        <div className="btn-loadmore">
                            <button>Loading More</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="pills-following"
                    role="tabpanel"
                    aria-labelledby="pills-following-tab"
                  >
                   <div className="row ptb20">
                      <div className="col-sm-12 p-0">
                        <div className="table-responsive">
                          <table class="table">
                            <thead>
                              <tr>
                                <th className="white">Item</th>
                                <th className="white">Highest Bid</th>
                                <th className="white">USD Price</th>
                                <th className="white">Total Offers</th>
                                <th className="white">Details</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <ul className="list-inline">
                                    <li className="list-inline-item">
                                      <div className="inner-table-img inner-table-mb">
                                        <img
                                          src="\table-profile.png"
                                          className="img-fluid"
                                        />
                                        &nbsp; &nbsp;
                                        <span className="common">
                                        fireape.tomi
                                        </span>
                                      </div>
                                    </li>
                                  </ul>
                                </td>
                                <td>
                                  <div className="inner-table-img inner-table-sec">
                                    <img
                                      src="\table-diamond.png"
                                      className="img-fluid"
                                    />
                                    <span className="white mt-10">
                                      1.22 ETH
                                    </span>
                                  </div>
                                </td>
                                <td>
                                  <div className="inner-text-table">
                                    <span className="white mt-10">
                                      $3516.27
                                    </span>
                                  </div>
                                </td>
                                <td>
                                  <div className="inner-text-table">
                                    <span className="white mt-10">20</span>
                                  </div>
                                </td>
                                <td>
                                  <div className="inner-text-table">
                                    <Link to="/biddetail">
                                      <button className="btn-blue1">
                                        View Details
                                      </button>
                                    </Link>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <ul className="list-inline">
                                    <li className="list-inline-item">
                                      <div className="inner-table-img inner-table-mb">
                                        <img
                                          src="\table-profile.png"
                                          className="img-fluid"
                                        />
                                        &nbsp; &nbsp;
                                        <span className="common">
                                        fireape.tomi
                                        </span>
                                      </div>
                                    </li>
                                  </ul>
                                </td>
                                <td>
                                  <div className="inner-table-img inner-table-sec">
                                    <img
                                      src="\table-diamond.png"
                                      className="img-fluid"
                                    />
                                    <span className="white mt-10">
                                      1.22 ETH
                                    </span>
                                  </div>
                                </td>
                                <td>
                                  <div className="inner-text-table">
                                    <span className="white mt-10">
                                      $3516.27
                                    </span>
                                  </div>
                                </td>
                                <td>
                                  <div className="inner-text-table">
                                    <span className="white mt-10">20</span>
                                  </div>
                                </td>
                                <td>
                                  <div className="inner-text-table">
                                    <Link to="/biddetail">
                                      <button className="btn-blue1">
                                        View Details
                                      </button>
                                    </Link>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <ul className="list-inline">
                                    <li className="list-inline-item">
                                      <div className="inner-table-img inner-table-mb">
                                        <img
                                          src="\table-profile.png"
                                          className="img-fluid"
                                        />
                                        &nbsp; &nbsp;
                                        <span className="common">
                                        fireape.tomi
                                        </span>
                                      </div>
                                    </li>
                                  </ul>
                                </td>
                                <td>
                                  <div className="inner-table-img inner-table-sec">
                                    <img
                                      src="\table-diamond.png"
                                      className="img-fluid"
                                    />
                                    <span className="white mt-10">
                                      1.22 ETH
                                    </span>
                                  </div>
                                </td>
                                <td>
                                  <div className="inner-text-table">
                                    <span className="white mt-10">
                                      $3516.27
                                    </span>
                                  </div>
                                </td>
                                <td>
                                  <div className="inner-text-table">
                                    <span className="white mt-10">20</span>
                                  </div>
                                </td>
                                <td>
                                  <div className="inner-text-table">
                                    <Link to="/biddetail">
                                      <button className="btn-blue1">
                                        View Details
                                      </button>
                                    </Link>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <ul className="list-inline">
                                    <li className="list-inline-item">
                                      <div className="inner-table-img inner-table-mb">
                                        <img
                                          src="\table-profile.png"
                                          className="img-fluid"
                                        />
                                        &nbsp; &nbsp;
                                        <span className="common">
                                        fireape.tomi
                                        </span>
                                      </div>
                                    </li>
                                  </ul>
                                </td>
                                <td>
                                  <div className="inner-table-img inner-table-sec">
                                    <img
                                      src="\table-diamond.png"
                                      className="img-fluid"
                                    />
                                    <span className="white mt-10">
                                      1.22 ETH
                                    </span>
                                  </div>
                                </td>
                                <td>
                                  <div className="inner-text-table">
                                    <span className="white mt-10">
                                      $3516.27
                                    </span>
                                  </div>
                                </td>
                                <td>
                                  <div className="inner-text-table">
                                    <span className="white mt-10">20</span>
                                  </div>
                                </td>
                                <td>
                                  <div className="inner-text-table">
                                    <Link to="/biddetail">
                                      <button className="btn-blue1">
                                        View Details
                                      </button>
                                    </Link>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <ul className="list-inline">
                                    <li className="list-inline-item">
                                      <div className="inner-table-img inner-table-mb">
                                        <img
                                          src="\table-profile.png"
                                          className="img-fluid"
                                        />
                                        &nbsp; &nbsp;
                                        <span className="common">
                                        fireape.tomi
                                        </span>
                                      </div>
                                    </li>
                                  </ul>
                                </td>
                                <td>
                                  <div className="inner-table-img inner-table-sec">
                                    <img
                                      src="\table-diamond.png"
                                      className="img-fluid"
                                    />
                                    <span className="white mt-10">
                                      1.22 ETH
                                    </span>
                                  </div>
                                </td>
                                <td>
                                  <div className="inner-text-table">
                                    <span className="white mt-10">
                                      $3516.27
                                    </span>
                                  </div>
                                </td>
                                <td>
                                  <div className="inner-text-table">
                                    <span className="white mt-10">20</span>
                                  </div>
                                </td>
                                <td>
                                  <div className="inner-text-table">
                                    <Link to="/biddetail">
                                      <button className="btn-blue1">
                                        View Details
                                      </button>
                                    </Link>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <ul className="list-inline">
                                    <li className="list-inline-item">
                                      <div className="inner-table-img inner-table-mb">
                                        <img
                                          src="\table-profile.png"
                                          className="img-fluid"
                                        />
                                        &nbsp; &nbsp;
                                        <span className="common">
                                        fireape.tomi
                                        </span>
                                      </div>
                                    </li>
                                  </ul>
                                </td>
                                <td>
                                  <div className="inner-table-img inner-table-sec">
                                    <img
                                      src="\table-diamond.png"
                                      className="img-fluid"
                                    />
                                    <span className="white mt-10">
                                      1.22 ETH
                                    </span>
                                  </div>
                                </td>
                                <td>
                                  <div className="inner-text-table">
                                    <span className="white mt-10">
                                      $3516.27
                                    </span>
                                  </div>
                                </td>
                                <td>
                                  <div className="inner-text-table">
                                    <span className="white mt-10">20</span>
                                  </div>
                                </td>
                                <td>
                                  <div className="inner-text-table">
                                    <Link to="/biddetail">
                                      <button className="btn-blue1">
                                        View Details
                                      </button>
                                    </Link>
                                  </div>
                                </td>
                              </tr>
                             
                            </tbody>
                          </table>
                        </div>
                        <div className="btn-loadmore">
                            <button>Loading More</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="pills-collection"
                    role="tabpanel"
                    aria-labelledby="pills-collection-tab"
                  >
                 <div class="row cardsss">
        <div class="col-xl-3 col-lg-4 col-md-6 col-12">
          <div class="card">
              <img src="assets\Frame 9300.svg" className="card-img-top" alt="img"/>
              <div class="card-body-1">
                  <div class="card-style-1">
                      <figure><img src="assets\avatar-04.svg" class="img-fluid" alt=""/><img class="img-fluid img-1" src="assets\avatar-03.svg" alt=""/></figure>
                      <figure></figure>
                  </div>
                  <div class="card-style-2">
                      <h5 class="card-heading-1">Highest Bid</h5>
                      <p class="card-heading-2"><img class="img-fluid" src="assets\Group.png" alt=""/>1.5 ETH</p>
                  </div>
              </div>
            </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-md-6 col-12">
          <div class="card">
              <img src="assets\Frame 9300.svg" className="card-img-top" alt="img"/>
              <div class="card-body-1">
                  <div class="card-style-1">
                      <figure><img src="assets\avatar-04.svg" class="img-fluid" alt=""/><img class="img-fluid img-1" src="assets\avatar-03.svg" alt=""/></figure>
                      <figure></figure>
                  </div>
                  <div class="card-style-2">
                      <h5 class="card-heading-1">Highest Bid</h5>
                      <p class="card-heading-2"><img class="img-fluid" src="assets\Group.png" alt=""/>1.5 ETH</p>
                  </div>
              </div>
            </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-md-6 col-12">
          <div class="card">
              <img src="assets\Frame 9300.svg" className="card-img-top" alt="img"/>
              <div class="card-body-1">
                  <div class="card-style-1">
                      <figure><img src="assets\avatar-04.svg" class="img-fluid" alt=""/><img class="img-fluid img-1" src="assets\avatar-03.svg" alt=""/></figure>
                      <figure></figure>
                  </div>
                  <div class="card-style-2">
                      <h5 class="card-heading-1">Highest Bid</h5>
                      <p class="card-heading-2"><img class="img-fluid" src="assets\Group.png" alt=""/>1.5 ETH</p>
                  </div>
              </div>
            </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-md-6 col-12">
          <div class="card">
              <img src="assets\Frame 9300.svg" className="card-img-top" alt="img"/>
              <div class="card-body-1">
                  <div class="card-style-1">
                      <figure><img src="assets\avatar-04.svg" class="img-fluid" alt=""/><img class="img-fluid img-1" src="assets\avatar-03.svg" alt=""/></figure>
                      <figure></figure>
                  </div>
                  <div class="card-style-2">
                      <h5 class="card-heading-1">Highest Bid</h5>
                      <p class="card-heading-2"><img class="img-fluid" src="assets\Group.png" alt=""/>1.5 ETH</p>
                  </div>
              </div>
            </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-md-6 col-12">
          <div class="card">
              <img src="assets\Frame 9300.svg" className="card-img-top" alt="img"/>
              <div class="card-body-1">
                  <div class="card-style-1">
                      <figure><img src="assets\avatar-04.svg" class="img-fluid" alt=""/><img class="img-fluid img-1" src="assets\avatar-03.svg" alt=""/></figure>
                      <figure></figure>
                  </div>
                  <div class="card-style-2">
                      <h5 class="card-heading-1">Highest Bid</h5>
                      <p class="card-heading-2"><img class="img-fluid" src="assets\Group.png" alt=""/>1.5 ETH</p>
                  </div>
              </div>
            </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-md-6 col-12">
          <div class="card">
              <img src="assets\Frame 9300.svg" className="card-img-top" alt="img"/>
              <div class="card-body-1">
                  <div class="card-style-1">
                      <figure><img src="assets\avatar-04.svg" class="img-fluid" alt=""/><img class="img-fluid img-1" src="assets\avatar-03.svg" alt=""/></figure>
                      <figure></figure>
                  </div>
                  <div class="card-style-2">
                      <h5 class="card-heading-1">Highest Bid</h5>
                      <p class="card-heading-2"><img class="img-fluid" src="assets\Group.png" alt=""/>1.5 ETH</p>
                  </div>
              </div>
            </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-md-6 col-12">
          <div class="card">
              <img src="assets\Frame 9300.svg" className="card-img-top" alt="img"/>
              <div class="card-body-1">
                  <div class="card-style-1">
                      <figure><img src="assets\avatar-04.svg" class="img-fluid" alt=""/><img class="img-fluid img-1" src="assets\avatar-03.svg" alt=""/></figure>
                      <figure></figure>
                  </div>
                  <div class="card-style-2">
                      <h5 class="card-heading-1">Highest Bid</h5>
                      <p class="card-heading-2"><img class="img-fluid" src="assets\Group.png" alt=""/>1.5 ETH</p>
                  </div>
              </div>
            </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-md-6 col-12">
          <div class="card">
              <img src="assets\Frame 9300.svg" className="card-img-top" alt="img"/>
              <div class="card-body-1">
                  <div class="card-style-1">
                      <figure><img src="assets\avatar-04.svg" class="img-fluid" alt=""/><img class="img-fluid img-1" src="assets\avatar-03.svg" alt=""/></figure>
                      <figure></figure>
                  </div>
                  <div class="card-style-2">
                      <h5 class="card-heading-1">Highest Bid</h5>
                      <p class="card-heading-2"><img class="img-fluid" src="assets\Group.png" alt=""/>1.5 ETH</p>
                  </div>
              </div>
            </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-md-6 col-12">
          <div class="card">
              <img src="assets\Frame 9300.svg" className="card-img-top" alt="img"/>
              <div class="card-body-1">
                  <div class="card-style-1">
                      <figure><img src="assets\avatar-04.svg" class="img-fluid" alt=""/><img class="img-fluid img-1" src="assets\avatar-03.svg" alt=""/></figure>
                      <figure></figure>
                  </div>
                  <div class="card-style-2">
                      <h5 class="card-heading-1">Highest Bid</h5>
                      <p class="card-heading-2"><img class="img-fluid" src="assets\Group.png" alt=""/>1.5 ETH</p>
                  </div>
              </div>
            </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-md-6 col-12">
          <div class="card">
              <img src="assets\Frame 9300.svg" className="card-img-top" alt="img"/>
              <div class="card-body-1">
                  <div class="card-style-1">
                      <figure><img src="assets\avatar-04.svg" class="img-fluid" alt=""/><img class="img-fluid img-1" src="assets\avatar-03.svg" alt=""/></figure>
                      <figure></figure>
                  </div>
                  <div class="card-style-2">
                      <h5 class="card-heading-1">Highest Bid</h5>
                      <p class="card-heading-2"><img class="img-fluid" src="assets\Group.png" alt=""/>1.5 ETH</p>
                  </div>
              </div>
            </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-md-6 col-12">
          <div class="card">
              <img src="assets\Frame 9300.svg" className="card-img-top" alt="img"/>
              <div class="card-body-1">
                  <div class="card-style-1">
                      <figure><img src="assets\avatar-04.svg" class="img-fluid" alt=""/><img class="img-fluid img-1" src="assets\avatar-03.svg" alt=""/></figure>
                      <figure></figure>
                  </div>
                  <div class="card-style-2">
                      <h5 class="card-heading-1">Highest Bid</h5>
                      <p class="card-heading-2"><img class="img-fluid" src="assets\Group.png" alt=""/>1.5 ETH</p>
                  </div>
              </div>
            </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-md-6 col-12">
          <div class="card">
              <img src="assets\Frame 9300.svg" className="card-img-top" alt="img"/>
              <div class="card-body-1">
                  <div class="card-style-1">
                      <figure><img src="assets\avatar-04.svg" class="img-fluid" alt=""/><img class="img-fluid img-1" src="assets\avatar-03.svg" alt=""/></figure>
                      <figure></figure>
                  </div>
                  <div class="card-style-2">
                      <h5 class="card-heading-1">Highest Bid</h5>
                      <p class="card-heading-2"><img class="img-fluid" src="assets\Group.png" alt=""/>1.5 ETH</p>
                  </div>
              </div>
            </div>
        </div>
        </div>
        <div className="btn-loadmore">
                          <button>Loading More</button>
                      </div>
                  </div>
                  <div
                    class="tab-pane activity fade"
                    id="pills-activity"
                    role="tabpanel"
                    aria-labelledby="pills-activity-tab"
                  >
                   <div class="row cardsss">
        <div class="col-xl-3 col-lg-4 col-md-6 col-12">
          <div class="card">
              <img src="assets\Frame 9300.svg" className="card-img-top" alt="img"/>
              <div class="card-body-1">
                  <div class="card-style-1">
                      <figure><img src="assets\avatar-04.svg" class="img-fluid" alt=""/><img class="img-fluid img-1" src="assets\avatar-03.svg" alt=""/></figure>
                      <figure></figure>
                  </div>
                  <div class="card-style-2">
                      <h5 class="card-heading-1">Highest Bid</h5>
                      <p class="card-heading-2"><img class="img-fluid" src="assets\Group.png" alt=""/>1.5 ETH</p>
                  </div>
              </div>
             <div className="inner-card-btn">
                 <button>Claim</button>
             </div>
            </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-md-6 col-12">
          <div class="card">
              <img src="assets\Frame 9300.svg" className="card-img-top" alt="img"/>
              <div class="card-body-1">
                  <div class="card-style-1">
                      <figure><img src="assets\avatar-04.svg" class="img-fluid" alt=""/><img class="img-fluid img-1" src="assets\avatar-03.svg" alt=""/></figure>
                      <figure></figure>
                  </div>
                  <div class="card-style-2">
                      <h5 class="card-heading-1">Highest Bid</h5>
                      <p class="card-heading-2"><img class="img-fluid" src="assets\Group.png" alt=""/>1.5 ETH</p>
                  </div>
              </div>
             <div className="inner-card-btn">
                 <button>Claim</button>
             </div>
            </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-md-6 col-12">
          <div class="card">
              <img src="assets\Frame 9300.svg" className="card-img-top" alt="img"/>
              <div class="card-body-1">
                  <div class="card-style-1">
                      <figure><img src="assets\avatar-04.svg" class="img-fluid" alt=""/><img class="img-fluid img-1" src="assets\avatar-03.svg" alt=""/></figure>
                      <figure></figure>
                  </div>
                  <div class="card-style-2">
                      <h5 class="card-heading-1">Highest Bid</h5>
                      <p class="card-heading-2"><img class="img-fluid" src="assets\Group.png" alt=""/>1.5 ETH</p>
                  </div>
              </div>
             <div className="inner-card-btn">
                 <button>Claim</button>
             </div>
            </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-md-6 col-12">
          <div class="card">
              <img src="assets\Frame 9300.svg" className="card-img-top" alt="img"/>
              <div class="card-body-1">
                  <div class="card-style-1">
                      <figure><img src="assets\avatar-04.svg" class="img-fluid" alt=""/><img class="img-fluid img-1" src="assets\avatar-03.svg" alt=""/></figure>
                      <figure></figure>
                  </div>
                  <div class="card-style-2">
                      <h5 class="card-heading-1">Highest Bid</h5>
                      <p class="card-heading-2"><img class="img-fluid" src="assets\Group.png" alt=""/>1.5 ETH</p>
                  </div>
              </div>
             <div className="inner-card-btn">
                 <button>Claim</button>
             </div>
            </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-md-6 col-12">
          <div class="card">
              <img src="assets\Frame 9300.svg" className="card-img-top" alt="img"/>
              <div class="card-body-1">
                  <div class="card-style-1">
                      <figure><img src="assets\avatar-04.svg" class="img-fluid" alt=""/><img class="img-fluid img-1" src="assets\avatar-03.svg" alt=""/></figure>
                      <figure></figure>
                  </div>
                  <div class="card-style-2">
                      <h5 class="card-heading-1">Highest Bid</h5>
                      <p class="card-heading-2"><img class="img-fluid" src="assets\Group.png" alt=""/>1.5 ETH</p>
                  </div>
              </div>
             <div className="inner-card-btn">
                 <button>Claim</button>
             </div>
            </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-md-6 col-12">
          <div class="card">
              <img src="assets\Frame 9300.svg" className="card-img-top" alt="img"/>
              <div class="card-body-1">
                  <div class="card-style-1">
                      <figure><img src="assets\avatar-04.svg" class="img-fluid" alt=""/><img class="img-fluid img-1" src="assets\avatar-03.svg" alt=""/></figure>
                      <figure></figure>
                  </div>
                  <div class="card-style-2">
                      <h5 class="card-heading-1">Highest Bid</h5>
                      <p class="card-heading-2"><img class="img-fluid" src="assets\Group.png" alt=""/>1.5 ETH</p>
                  </div>
              </div>
             <div className="inner-card-btn">
                 <button>Claim</button>
             </div>
            </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-md-6 col-12">
          <div class="card">
              <img src="assets\Frame 9300.svg" className="card-img-top" alt="img"/>
              <div class="card-body-1">
                  <div class="card-style-1">
                      <figure><img src="assets\avatar-04.svg" class="img-fluid" alt=""/><img class="img-fluid img-1" src="assets\avatar-03.svg" alt=""/></figure>
                      <figure></figure>
                  </div>
                  <div class="card-style-2">
                      <h5 class="card-heading-1">Highest Bid</h5>
                      <p class="card-heading-2"><img class="img-fluid" src="assets\Group.png" alt=""/>1.5 ETH</p>
                  </div>
              </div>
             <div className="inner-card-btn">
                 <button>Claim</button>
             </div>
            </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-md-6 col-12">
          <div class="card">
              <img src="assets\Frame 9300.svg" className="card-img-top" alt="img"/>
              <div class="card-body-1">
                  <div class="card-style-1">
                      <figure><img src="assets\avatar-04.svg" class="img-fluid" alt=""/><img class="img-fluid img-1" src="assets\avatar-03.svg" alt=""/></figure>
                      <figure></figure>
                  </div>
                  <div class="card-style-2">
                      <h5 class="card-heading-1">Highest Bid</h5>
                      <p class="card-heading-2"><img class="img-fluid" src="assets\Group.png" alt=""/>1.5 ETH</p>
                  </div>
              </div>
             <div className="inner-card-btn">
                 <button>Claim</button>
             </div>
            </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-md-6 col-12">
          <div class="card">
              <img src="assets\Frame 9300.svg" className="card-img-top" alt="img"/>
              <div class="card-body-1">
                  <div class="card-style-1">
                      <figure><img src="assets\avatar-04.svg" class="img-fluid" alt=""/><img class="img-fluid img-1" src="assets\avatar-03.svg" alt=""/></figure>
                      <figure></figure>
                  </div>
                  <div class="card-style-2">
                      <h5 class="card-heading-1">Highest Bid</h5>
                      <p class="card-heading-2"><img class="img-fluid" src="assets\Group.png" alt=""/>1.5 ETH</p>
                  </div>
              </div>
             <div className="inner-card-btn">
                 <button>Claim</button>
             </div>
            </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-md-6 col-12">
          <div class="card">
              <img src="assets\Frame 9300.svg" className="card-img-top" alt="img"/>
              <div class="card-body-1">
                  <div class="card-style-1">
                      <figure><img src="assets\avatar-04.svg" class="img-fluid" alt=""/><img class="img-fluid img-1" src="assets\avatar-03.svg" alt=""/></figure>
                      <figure></figure>
                  </div>
                  <div class="card-style-2">
                      <h5 class="card-heading-1">Highest Bid</h5>
                      <p class="card-heading-2"><img class="img-fluid" src="assets\Group.png" alt=""/>1.5 ETH</p>
                  </div>
              </div>
             <div className="inner-card-btn">
                 <button>Claim</button>
             </div>
            </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-md-6 col-12">
          <div class="card">
              <img src="assets\Frame 9300.svg" className="card-img-top" alt="img"/>
              <div class="card-body-1">
                  <div class="card-style-1">
                      <figure><img src="assets\avatar-04.svg" class="img-fluid" alt=""/><img class="img-fluid img-1" src="assets\avatar-03.svg" alt=""/></figure>
                      <figure></figure>
                  </div>
                  <div class="card-style-2">
                      <h5 class="card-heading-1">Highest Bid</h5>
                      <p class="card-heading-2"><img class="img-fluid" src="assets\Group.png" alt=""/>1.5 ETH</p>
                  </div>
              </div>
             <div className="inner-card-btn">
                 <button>Claim</button>
             </div>
            </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-md-6 col-12">
          <div class="card">
              <img src="assets\Frame 9300.svg" className="card-img-top" alt="img"/>
              <div class="card-body-1">
                  <div class="card-style-1">
                      <figure><img src="assets\avatar-04.svg" class="img-fluid" alt=""/><img class="img-fluid img-1" src="assets\avatar-03.svg" alt=""/></figure>
                      <figure></figure>
                  </div>
                  <div class="card-style-2">
                      <h5 class="card-heading-1">Highest Bid</h5>
                      <p class="card-heading-2"><img class="img-fluid" src="assets\Group.png" alt=""/>1.5 ETH</p>
                  </div>
              </div>
             <div className="inner-card-btn">
                 <button>Claim</button>
             </div>
            </div>
        </div>
        </div>
        <div className="btn-loadmore">
                          <button>Loading More</button>
                      </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="pills-edit"
                    role="tabpanel"
                    aria-labelledby="pills-edit-tab"
                  >
                    <div className="row ptb20">
                        <div className="heading-profile p-3">
                        <h2 className="edit-heading">Edit Profile</h2>
                          <p className="edit-para">You can set preferred display name and manage other personal settings</p>
                        </div>
                      <div className="col-sm-7">
                        <div className="inner-form mt-4">
                          <form>
                            <div className="row">
                              <div className="col-sm-12 p-0">
                                <div class="form-group">
                                  <label
                                    for="exampleFormControlInput1"
                                    className="white"
                                  >
                                   Display Name
                                  </label>
                                  <input
                                    type="email"
                                    class="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="Enter your display name"
                                  />
                                </div>
                              </div>
                            </div>

                            <div class="form-group">
                              <label
                                for="exampleFormControlTextarea1"
                                className="white"
                              >
                                Bio
                              </label>
                              <textarea
                                class="form-control"
                                id="exampleFormControlTextarea1"
                              ></textarea>
                            </div>
                            <div class="form-group">
                                  <label
                                    for="exampleFormControlInput1"
                                    className="white"
                                  >
                                   Twitter username
                                  </label>
                                  <span className="therate"><i class="fas fa-at"></i></span>
                                  <input
                                    type="email"
                                    class="form-control form-abs"
                                    id="exampleFormControlInput1"
                                    placeholder="Enter your name in Twitter"
                                  />
                                  <a href="#" className="link-input">Link</a>
                                  <button className="addmore">
                                Add more social link
                                </button>
                                </div>
                                <div class="form-group">
                                  <label
                                    for="exampleFormControlInput1"
                                    className="white"
                                  >
                                   Email
                                  </label>
                                  <input
                                    type="email"
                                    class="form-control form-abs"
                                    id="exampleFormControlInput1"
                                    placeholder="Enter your email address"
                                  />
                                  <a href="#" className="link-input">Confirm</a>
                                </div>
                                <div class="form-group">
                                  <label
                                    for="exampleFormControlInput1"
                                    className="white"
                                  >
                                   Wallet Address
                                  </label>
                                  <input
                                    type="email"
                                    class="form-control form-abs"
                                    id="exampleFormControlInput1"
                                    placeholder="0x1B92ABFC520D4210EC3D6EB5173988C6AE066231"
                                  />
                                  <a href="#" className="link-input">Copy</a>
                                </div>
                          </form>

                        <div className="update-btn">
                            <button>Update Profile</button>
                        </div>
                        </div>
                      </div>
                      <div className="col-sm-5 mt-3">
                        <div className="parent">
                        <div className="profile-show">
                            <p>Profile Photo</p>
                            <img
                              src="\profile-inner.png"
                              className="img-fluid"
                            />
                          </div>
                          <div className="right-text">
                              <h6>We recommend an image of at least 300x300. Gifs work too. Max 5mb.</h6>
                              <div className="btn-upload">
                                  <button>Upload</button>
                                  <button className="btn-delete"><img src="\delete.png" alt="img" className="" /></button>
                              </div>
                          </div>
                        </div>
                        <div className="banner-img">
                            <h6>Banner Image</h6>
                            <img src="\banner-edit-profile.png" alt="img" className="img-fluid banner-upload" />
                            <div className="btn-upload">
                                  <button>Upload</button>
                                  <button className="btn-delete"><img src="\delete.png" alt="img" className="" /></button>
                              </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Profile;