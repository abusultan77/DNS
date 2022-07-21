import React, { useState, useEffect } from "react";
import "./profile.scss";
import Loader from "../../hooks/loader";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import {API_URL} from '../../utils/ApiUrl'
import { useWeb3React } from "@web3-react/core";
import axios from "axios";

const Profile = () => {
  const { account } = useWeb3React();
  const [inputs, setInputs] = useState();
  const [profileImg, setProfileImg] = useState();
  const [bannerImg, setBannerImg] = useState();
  const [open, setOpen] = useState(false);
  const getUser = async () => {
    setOpen(true)
        axios.post(API_URL + "users/getUser", {walletAddress:account} )
            .then((response) => {
                setOpen(false)
                setInputs(response.data.user)
                setProfileImg(response.data.user.picture)
                setBannerImg(response.data.user.bannerPicture)
            }).catch((err) => {
                setOpen(false)
                // toast.error(err.response.data.msg, {
                //     position: "top-center",
                //     autoClose: 2000,
                // });
            })
}

useEffect(() => {

    getUser();
  
}, []);
  return (
    <>
    {open && <Loader text={'....Loading!!'} />}
      <section className="artitsprofile">
        <div className="row">
          <div className="col-sm-12 p-0">
            <div className="">
              <img
                src={bannerImg ? bannerImg : ''}
                class="img-fluid w100p cover-pic"
                alt=""
              ></img>
            </div>
          </div>
        </div>
        <section className="main-Myprofile ptb padd">
          <div className="container-fluid">
            <div className="row ">
              <div className="col-sm-12 m-auto p-0">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="inner-content text-center">
                      <a className="proimg">
                        <img
                          src={profileImg ? profileImg : ''}
                          className="img-fluid main-img"
                          alt=""
                        />
                      </a>
                      <div className="mt-4">
                        <h3 className="white">
                          <strong>{inputs?.userName}</strong>{" "}
                        </h3>
                      </div>
                      <div className=" " >
                        <button className=" btn-common11 copybutton  btn-profile-top"
                                  onClick={() =>
                                    navigator.clipboard.writeText(`${account}`)
                                  }>
                                    {account}
                          <img
                            src="\copy-fav.png"
                            className="img-fluid p-2"
                            alt=""
                          />
                        </button>
                      </div>
                      <div className="">
                        <p className="Greyp">
                         {inputs?.bio}
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
                      Minted
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
                  {/* <li class="nav-item">
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
                  </li> */}
                </ul>

                <div class="tab-content" id="pills-tabContent">
                  <div
                    class="tab-pane fade show active "
                    id="pills-Owned"
                    role="tabpanel"
                    aria-labelledby="pills-Owned-tab"
                  >
                    <div class="row cardsss ptb20">
                      <div class="col-xl-3 col-lg-4 col-md-6 col-12">
                        <Link to="/place">
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
                        </Link>
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
                    <div className="row cardsss ptb-20">
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
                          <div className="inner-card-btn">
                            <button>Put On Marketplace</button>
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
                                    <Link to="/place">
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
                                    <Link to="/place">
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
                                    <Link to="/place">
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
                                    <Link to="/place">
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
                                    <Link to="/place">
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
                                    <Link to="/place">
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
                                <th className="white">My Offer</th>
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
                                  <div className="inner-table-img inner-table-sec">
                                    <img
                                      src="\table-diamond.png"
                                      className="img-fluid"
                                    />
                                    <span className="white mt-10">
                                      1 ETH
                                    </span>
                                  </div>
                                </td>
                                <td>
                                  <div className="inner-text-table">
                                    <Link to="/place">
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
                                  <div className="inner-table-img inner-table-sec">
                                    <img
                                      src="\table-diamond.png"
                                      className="img-fluid"
                                    />
                                    <span className="white mt-10">
                                      1 ETH
                                    </span>
                                  </div>
                                </td>
                                <td>
                                  <div className="inner-text-table">
                                    <Link to="/place">
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
                                  <div className="inner-table-img inner-table-sec">
                                    <img
                                      src="\table-diamond.png"
                                      className="img-fluid"
                                    />
                                    <span className="white mt-10">
                                      1 ETH
                                    </span>
                                  </div>
                                </td>
                                <td>
                                  <div className="inner-text-table">
                                    <Link to="/place">
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
                                  <div className="inner-table-img inner-table-sec">
                                    <img
                                      src="\table-diamond.png"
                                      className="img-fluid"
                                    />
                                    <span className="white mt-10">
                                      1 ETH
                                    </span>
                                  </div>
                                </td>
                                <td>
                                  <div className="inner-text-table">
                                    <Link to="/place">
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
                                  <div className="inner-table-img inner-table-sec">
                                    <img
                                      src="\table-diamond.png"
                                      className="img-fluid"
                                    />
                                    <span className="white mt-10">
                                      1 ETH
                                    </span>
                                  </div>
                                </td>
                                <td>
                                  <div className="inner-text-table">
                                    <Link to="/place">
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
                                  <div className="inner-table-img inner-table-sec">
                                    <img
                                      src="\table-diamond.png"
                                      className="img-fluid"
                                    />
                                    <span className="white mt-10">
                                      1 ETH
                                    </span>
                                  </div>
                                </td>
                                <td>
                                  <div className="inner-text-table">
                                    <Link to="/place">
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
                        </div>
                      </div>
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
                        </div>
                      </div>
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
                        </div>
                      </div>
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
                        </div>
                      </div>
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
                        </div>
                      </div>
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
                        </div>
                      </div>
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
                        </div>
                      </div>
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
                        </div>
                      </div>
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
                        </div>
                      </div>
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
                        </div>
                      </div>
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
                        </div>
                      </div>
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
                              -- --
                              </p>
                            </div>
                          </div>
                          <div className="inner-card-btn">
                            <button data-toggle="modal" data-target="#claim-modal">Claim</button>
                          </div>
                        </div>
                      </div>
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
                              -- --
                              </p>
                            </div>
                          </div>
                          <div className="inner-card-btn">
                            <button>Claim</button>
                          </div>
                        </div>
                      </div>
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
                              -- --
                              </p>
                            </div>
                          </div>
                          <div className="inner-card-btn">
                            <button>Claim</button>
                          </div>
                        </div>
                      </div>
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
                              -- --
                              </p>
                            </div>
                          </div>
                          <div className="inner-card-btn">
                            <button>Claim</button>
                          </div>
                        </div>
                      </div>
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
                              -- --
                              </p>
                            </div>
                          </div>
                          <div className="inner-card-btn">
                            <button>Claim</button>
                          </div>
                        </div>
                      </div>
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
                              -- --
                              </p>
                            </div>
                          </div>
                          <div className="inner-card-btn">
                            <button>Claim</button>
                          </div>
                        </div>
                      </div>
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
                              -- --
                              </p>
                            </div>
                          </div>
                          <div className="inner-card-btn">
                            <button>Claim</button>
                          </div>
                        </div>
                      </div>
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
                              -- --
                              </p>
                            </div>
                          </div>
                          <div className="inner-card-btn">
                            <button>Claim</button>
                          </div>
                        </div>
                      </div>
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
                              -- --
                              </p>
                            </div>
                          </div>
                          <div className="inner-card-btn">
                            <button>Claim</button>
                          </div>
                        </div>
                      </div>
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
                              -- --
                              </p>
                            </div>
                          </div>
                          <div className="inner-card-btn">
                            <button>Claim</button>
                          </div>
                        </div>
                      </div>
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
                              -- --
                              </p>
                            </div>
                          </div>
                          <div className="inner-card-btn">
                            <button>Claim</button>
                          </div>
                        </div>
                      </div>
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
                              -- --
                              </p>
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
                  {/* <div
                    class="tab-pane fade"
                    id="pills-edit"
                    role="tabpanel"
                    aria-labelledby="pills-edit-tab"
                  >
                    <div className="heading-profile p-3 mt-4">
                      <h2 className="edit-heading">Edit Profile</h2>
                      <p className="edit-para">
                        You can set preferred display name and manage other
                        personal settings
                      </p>
                    </div>
                    <div className="row ptb20">
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
                                placeholder="Tell about yourself in a few words"
                              ></textarea>
                            </div>
                            <div class="form-group">
                              <label
                                for="exampleFormControlInput1"
                                className="white"
                              >
                                Twitter username
                              </label>
                              <span className="therate">
                                <i class="fas fa-at"></i>
                              </span>
                              <input
                                type="email"
                                class="form-control form-abs twitter-un"
                                id="exampleFormControlInput1"
                                placeholder="Enter your name in Twitter"
                              />
                             

                            </div>
                            <div class="form-group">
                              <label
                                for="exampleFormControlInput1"
                                className="white"
                              >
                                Instagram 
                              </label>
                              <input
                                type="email"
                                class="form-control pl-3 form-abs twitter-un"
                                id="exampleFormControlInput1"
                                placeholder="YourInstagramHandle"
                              />
                             
                              
                            </div>
                            <div class="form-group">
                              <label
                                for="exampleFormControlInput1"
                                className="white"
                              >
                                Telegram 
                              </label>
                              <input
                                type="email"
                                class="form-control pl-3 form-abs twitter-un"
                                id="exampleFormControlInput1"
                                placeholder="https://t.me/abcdef "
                              />
                            
                              
                            </div>
                            <div class="form-group">
                              <label
                                for="exampleFormControlInput1"
                                className="white"
                              >
                                Your Site 
                              </label>
                              <input
                                type="email"
                                class="form-control pl-3 form-abs twitter-un"
                                id="exampleFormControlInput1"
                                placeholder="e.g yoursite.io "
                              />
                            
                              
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
                                class="form-control form-abs email-input"
                                id="exampleFormControlInput1"
                                placeholder="Enter your email address"
                              />
                              <a href="#" className="link-input">
                                Confirm
                              </a>
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
                                class="form-control form-abs walllet-add email-input"
                                id="exampleFormControlInput1"
                                placeholder="0x1B92ABFC520D4210EC3D6EB5173988C6AE066231"
                              />
                              <a href="#" className="link-input">
                                Copy
                              </a>
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
                            <h6>
                              We recommend an image of at least 300x300. Gifs
                              work too. Max 5mb.
                            </h6>
                            <div className="btn-upload">
                              <button>Upload</button>
                              <button className="btn-delete">
                                <img src="\delete.png" alt="img" className="" />
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="banner-img">
                          <h6>Banner Image</h6>
                          <img
                            src="\banner-edit-profile.png"
                            alt="img"
                            className="img-fluid banner-upload"
                          />
                          <div className="btn-upload">
                            <button>Upload</button>
                            <button className="btn-delete">
                              <img src="\delete.png" alt="img" className="" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section className="claim-modal">
      <div
          class="modal fade"
          id="claim-modal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
            <div class="modal-header">
              <h6>Claim</h6>
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
                <p>NFT will be transferred only to highest bidder</p>
                <button>Claim</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
