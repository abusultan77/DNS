// import logo from './logo.svg';
import '../../App.scss';
import { useWeb3React } from "@web3-react/core";
import React, { useState, useEffect } from "react";
import Banner from './main-banner/Banner.js';
import Giveaway from './giveaway/Giveaway.js';
import Live from './live/Live.js';


function Landing() {



  return (
    <>
      {/* <Navbar/> */}
      <Banner />
      <Giveaway />
      {/* <Live/> */}
      {/* <About/>
       <Features/> */}
      {/* <Roadmap/> */}
      {/* <Team/> */}
      {/* <Faqs /> */}
      {/* <Footer/> */}
    </>
  );
}

export default Landing;