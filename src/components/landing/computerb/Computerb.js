import React, { useState, useEffect } from "react";
import "./computerb.scss";
const Computerb = () => {
  return (
    <>
      <section className="main-Computerb ">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-11 m-auto">
              <div className="row">
                <div className="col-xl-7 col-12 order">
                  <img
                    src="\building\computerb.svg"
                    alt="img"
                    className="img-fluid left-img"
                  />
                </div>
                <div className="col-xl-5 col-12 m-auto">
                  <div className="right">
                  <h2>Lorem ipsum dolor sit amet, consectetur adipiscing.</h2>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam eaque ipsa quae ab illo inventore veritatis et quasi
                    architecto beatae vitae dicta sunt explicabo. <br />
                    <br />
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt.
                  </p>
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

export default Computerb;
