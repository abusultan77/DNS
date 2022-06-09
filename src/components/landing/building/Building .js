import React, { useState, useEffect } from "react";
import "./building .scss";
const Building = () => {
  return (
    <>
      <section className="main-Building ">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-11 m-auto ">
              <div className="bannersix">
                <div className="row">
                  <div className="col-xl-5 col-12 m-auto">
                    <h2 className="allheading">
                      Building decentralized digital identities for the
                      world
                    </h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      <br /> <br />
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                  </div>
                  <div className="col-xl-7 col-12">
                    <div className="lastimmgg">
                      <img
                        src="\building\builddingg.svg"
                        className="img-fluid"
                        alt="img"
                      />
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

export default Building;
