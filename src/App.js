import './App.scss';
import Landing from './components/landing/Landing.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/landing/header/Navbar.js';
import Footer from './components/landing/footer/Footer.js';
// import useEagerConnect from './hooks/useEagerConnect'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Adress from './components/landing/address/Adress';


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
           
          
            </Switch>
            <Footer/>
          </Router>
    </>
  );
}

export default App;
