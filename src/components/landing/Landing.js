// import logo from './logo.svg';
import '../../App.scss';
import { useWeb3React } from "@web3-react/core";
import React, { useState, useEffect } from "react";
import Banner from './main-banner/Banner.js';
import Giveaway from './giveaway/Giveaway.js';
// import Live from './live/Live.js';
import Building from './building/Building ';
import Computerb from './computerb/Computerb';
import Adress from './address/Adress';
import Getinvolved from './getinvolved/Getinvolved';



function Landing() {



  return (
    <>
      <Banner />
      <Giveaway />
      <Building />
      <Computerb/>
      <Adress/>
      <Getinvolved/>
    </>
  );
}

export default Landing;