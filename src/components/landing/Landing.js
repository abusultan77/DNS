// import logo from './logo.svg';
import '../../App.scss';
import { useWeb3React } from "@web3-react/core";
import React, { useState, useEffect } from "react";
// import Navbar from './header/Navbar.js';
import Banner from './main-banner/Banner.js';
import About from './aboutus/About.js';
import Features from './features/Features.js';
import Roadmap from './roadmap/Roadmap.js';
import Giveaway from './giveaway/Giveaway.js';
import Live from './live/Live.js';
import Team from './team/Team.js';
// import Faqs from './faqs/Faqs.js';
import TotalSupply from "../../hooks/totalSupply";
import CheckURI from "../../hooks/dataFetchers/getTokenUri";
// import Footer from './footer/Footer.js';


function Landing() {

  const [supArr, setSupArr] = useState([]);
  const [sup, setSup] = useState(null);
  const { account } = useWeb3React();
  const { TokenURI } = CheckURI();
  const [objArr, setObjArr] = useState([]);
  const { tSupply } = TotalSupply();
  const numArray = async (num) => {
    var arr = [];
    for (let i = 0; i < num; i++) {
      let res = await TokenURI(i);
      // await console.log("res", res);
      arr.push(res);
    }
    arr.splice(0, 1);
    setSupArr(arr);
  };

  const getSupply = async () => {
    // console.log("in get supply");
    var s = await tSupply();
    // await console.log("sssssssss", s);
    await setSup(parseInt(s));
    // setSup(10);
    await numArray(parseInt(s));
  };

  useEffect(() => {
    getSupply();
  }, [account]);

  return (
    <>
      {/* <Navbar/> */}
      <Banner setObjArr={setObjArr} objArr={objArr} supArr={supArr} />
      <Giveaway />
      <Live setObjArr={setObjArr} objArr={objArr} supArr={supArr} />
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