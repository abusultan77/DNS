
import React from "react";
import "./banner.scss";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <section className="main-banner ">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-11 m-auto">
              <div className="inner-content main-heading text-center">
                <h3 className="">
                  Decentralised naming for  wallets, websites, & more.
                </h3>
              </div>
              <div className="parafirst">
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque<br></br> laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto</p>
              </div>
              <div className="input-field">
              <img src="\main-banner\search-normal-input.svg" alt="img" className="img-fluid  input-icon" />
              <input type="text" placeholder="Search domain names" />
              <Link to="/minted"><button class="btn-searchbar" type="button" >
                      <img src="\main-banner\search-normal.svg" alt="img" className="img-fluid  mr-3" />
                      Search
                    </button></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
