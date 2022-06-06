import axios from "axios";
import React, { useEffect, useState } from "react";
import Countdown from "react-countdown";

const NFTS = ({ item, index, supArr, setObjArr, objArr }) => {
  const [obje, setOje] = useState(null);

  useEffect(() => {
    axios.get(item).then((res) => {
      if (res.data?.description) {
        setOje(res.data);
      } else {
      }
    });
  }, [item]);

  useEffect(() => {
    if (obje !== null) {
      let dumArr = objArr;
      if (dumArr.length < supArr.length) {
        dumArr.push(obje);
      }
      setObjArr(dumArr);
    }
  }, [obje]);

  return (
    <div className="card-style ptb20">
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
          <div className="inner-user">
            <p className="grey">
              <small>{obje?.owner?.slice(0, 15) + "..."}</small>
            </p>
          </div>
        </li>
      </ul>
      <img src={obje?.image} className="img-fluid w-100" />
      <h5>{obje?.name}</h5>
      <div className="inner-side">
        <h6 className="grey">HIGHEST OFFER</h6>
        <img
          src="\wordnftgenerator-assets\explore\ethr-icon.svg"
          className="img-fluid"
        />
        &nbsp;&nbsp; 0.008 ETH
      </div>
      <div className="time text-center">
        <h5>Auction Ends in</h5>
        <ul className="list-inline">
          <Countdown
            date={Date.now() + 86400000}
            renderer={({ hours, minutes, seconds }) => {
              return (
                <>
                  {" "}
                  <li className="list-inline-item">
                    <h5 className="common">
                      <strong>{hours}</strong>
                    </h5>
                  </li>
                  <li className="list-inline-item">
                    <h5 className="common">
                      <strong>:</strong>
                    </h5>
                  </li>
                  <li className="list-inline-item">
                    <h5 className="common">
                      <strong>{minutes}</strong>
                    </h5>
                  </li>
                  <li className="list-inline-item">
                    <h5 className="common">
                      <strong>:</strong>
                    </h5>
                  </li>
                  <li className="list-inline-item">
                    <h5 className="common">
                      <strong>{seconds}</strong>
                    </h5>
                  </li>
                </>
              );
            }}
          ></Countdown>
        </ul>
      </div>

      <button className="btn-common">
        <img
          src="\wordnftgenerator-assets\explore\hammer.svg"
          className="img-fluid"
        />{" "}
        Place a bid
      </button>
    </div>
  );
};

export default NFTS;
