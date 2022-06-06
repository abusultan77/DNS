
import "./navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    // <section className="main-navbar">
    //   <div className="container">
    //     <nav className="navbar ptb20 navbar-expand-lg">
    //       <a className="navbar-brand" href="/">
    //         <img
    //           src="\wordnftgenerator-assets\logo.svg"
    //           className="img-fluid"
    //           alt=""
    //         />
    //       </a>
    //       <button
    //         className="navbar-toggler"
    //         type="button"
    //         data-toggle="collapse"
    //         data-target="#navbarSupportedContent"
    //         aria-controls="navbarSupportedContent"
    //         aria-expanded="false"
    //         aria-label="Toggle navigation"
    //       >
    //         <div className="style-bar"></div>
    //         <div className="style-bar"></div>
    //         <div className="style-bar"></div>
    //       </button>
    //       <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //         <ul className="navbar-nav mr-auto">
    //           <li className="nav-item active">
    //             <Link className="nav-link grey2" to="/minting">
    //               <h6>MINT</h6>
    //             </Link>
    //           </li>
    //           <li className="nav-item active">
    //             <Link className="nav-link grey2" to="/explore">
    //              <h6>EXPLORE</h6> 
    //             </Link>
    //           </li>
    //           {/* <li className="nav-item">
    //             <a className="nav-link grey2" href="#">
    //               ABOUT US
    //             </a>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link grey2" href="#">
    //               CONTACT
    //             </a>
    //           </li> */}
    //         </ul>
    //         <form className="form-inline my-2 my-lg-0">

    //           <button className="btn-common my-2 my-sm-0" type="button" data-toggle="modal" data-target="#exampleModalLong" >CONNECT WALLET</button>

    //         </form>
    //       </div>
    //     </nav>
    //   </div>
    // </section>

    <section className='main-navbar-mobile main-navbar'>
      <div className="container-fluid p-0">
        <div className="row">
          <div className="col-xl-11 col-lg-11 m-auto ">
            <nav className="navbar  navbar-expand-xl ">
              {/* <div className="ahsbahsba">
                <Link to="/">
                <img src="\dns-logo\DNS-logo.svg" alt="img" className="img-fluid" />
                </Link>
              </div> */}
              <a href="#" className="navbar-brand ">
                <Link to="/">
                  <img src="\dns-logo\DNS-logo.svg" alt="img" className="img-fluid" />
                </Link>
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="togg">
                  <i class="fas fa-bars"></i>
                </span>
              </button>
              <div
                className="collapse navbar-collapse marg"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mr-auto">
                  <li class="nav-item">

               Home

                  </li>
                  <li className="nav-item ">

                  Marketplace
                    
                  </li>
                  <li className="nav-item">

                  About

                  </li>

                  <li class="nav-item dropdown">
                  </li>
                </ul>
                <button class="btn button-hedaer " type="button">
             
                Connect Wallet
                </button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
