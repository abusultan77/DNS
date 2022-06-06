import axios from "axios";
import React, { useEffect, useState } from "react";

const NFTS = ({item, index}) => {

  const [image, setImage] = useState("")

  useEffect(()=>{
    axios.get(item).then((res)=>{
      if (res.data?.description) {
        setImage(res.data);
      } else {
      }
        // setImage(res.data.image);
    })
  },[item])

  return (
    <div className="col-sm-3">
      <div className="card-style ptb20">
        <img
          src={image === "" ? "/CardsImgAssets/loader.png" : image}
          className="img-fluid"
        />
        {/* <h5>John Doe</h5> */}
        <div className="row">
          <div className="col-6 p-0">
            <ul className="list-inline">
              <li className="list-inline-item">
                <div className="inner-user">
                  <img
                    src="\wordnftgenerator-assets\explore\user.png"
                    className="img-fluid"
                  />
                </div>
              </li>
              <li className="list-inline-item">
                <div className="inner-user1">
                  <img
                    src="\wordnftgenerator-assets\explore\image.png"
                    className="img-fluid"
                  />
                </div>
              </li>
            </ul>
          </div>
          <div className="col-6 p-0 pt-3">
            <div className="inner-side">
              <h6 className="grey">HIGHEST OFFER</h6>
              <img
                src="\wordnftgenerator-assets\explore\ethr-icon.svg"
                className="img-fluid"
              />
              &nbsp;&nbsp; 0.008 ETH
            </div>
          </div>
        </div>

        <button className="btn-common">
          <img
            src="\wordnftgenerator-assets\explore\hammer.svg"
            className="img-fluid"
          />{" "}
          Place a bid
        </button>
      </div>
    </div>
  );
};

export default NFTS;
