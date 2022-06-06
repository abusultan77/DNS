import './App.scss';
import Landing from './components/landing/Landing.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/landing/header/Navbar.js';
import Footer from './components/landing/footer/Footer.js';
import useEagerConnect from './hooks/useEagerConnect'
import Explore from './components/explore/Explore';
import Profile from './components/profile/Profile.js';
import Minting from './components/minting/Minting.js';
import Bid from './components/bid/Bid.js';
import BidDetail from './components/bid-detail/BidDetail';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TestIpfs from './components/TestIpfs';

function App() {
  useEagerConnect()
  return (
    <>
        <ToastContainer style={{ fontSize: 20 }} />
          <Router>
            <Navbar/>
            <Switch>
              <Route exact path='/' component={Landing} />
              <Route exact path='/explore' component={Explore} />
              <Route exact path='/profile' component={Profile} />
              <Route exact path='/minting' component={Minting} />
              <Route exact path='/bid' component={Bid} />
              <Route exact path='/biddetail' component={BidDetail} />
              {/* <Route exact path='/ipfsss' component={TestIpfs} /> */}
            </Switch>
            <Footer/>
          </Router>
    </>
  );
}

export default App;
