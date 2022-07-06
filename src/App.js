import './App.scss';
import Landing from './components/landing/Landing.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/landing/header/Navbar.js';
import Footer from './components/landing/footer/Footer.js';
// import useEagerConnect from './hooks/useEagerConnect'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Adress from './components/landing/address/Adress';
import Minted from './components/landing/minted/Minted';
import Opensea from './components/landing/opensea/Opensea';
import Mintting from './components/landing/mintting/Mintting';
import Mint from './components/landing/mint-domain/Mint';
import Acceptbid from './components/acceptbid/Acceptbid';
import Market from './components/Marketplace/Market';
import Profile from './components/Artistprofile/Profile';
import Place from './components/Placebid/Place';
import Resell from './components/Resell/Resell';
import EditProfile from './components/edit-profile/EditProfile';

function App() {
  // useEagerConnect()
  return (
    <>
        <ToastContainer style={{ fontSize: 20 }} />
          <Router>
            <Navbar/>
            <Switch>
              <Route exact path='/' component={Landing} />
              <Route exact path='/adress' component={Adress} />
              <Route exact path='/minted' component={Minted} />
              <Route exact path='/opensea' component={Opensea} />
              <Route exact path='/mintting' component={Mintting} />
              <Route exact path='/mint' component={Mint} />
              <Route exact path='/acceptbid' component={Acceptbid} />
              <Route exact path='/marketplace' component={Market} />
              <Route exact path='/profile' component={Profile} />
              <Route exact path='/place' component={Place} />
              <Route exact path='/resell' component={Resell} />
              <Route exact path='/editprofile' component={EditProfile} />
            </Switch>
            <Footer/>
          </Router>
    </>
  );
}

export default App;
