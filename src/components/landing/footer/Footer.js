import React from 'react';
import { Link } from 'react-router-dom';
import './footer.scss';
const Footer = () => {
    return (
        <>
            <section className="main-footer ">
                <div className="container-fluid p-0">
                    <div className="row">
                        <div className="col-xl-11 col-lg-11 m-auto ">
                            <nav className="navbar  navbar-expand-xl ">

                                <a href="#" className="navbar-brand ">
                                    <Link to="/">
                                        <img src="\dns-logo\DNS-logo.svg" alt="img" className="img-fluid footerimg" />
                                    </Link>
                                </a>
                                {/* <button
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
                                </button> */}
                                {/* <div
                                    className="collapse navbar-collapse marg"
                                    id="navbarSupportedContent"
                                > */}
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
                                    <a href='/' target="_blank">
                                        <img src="\adress\icon-1.png" alt="img" className="img-fluid  mr-3" />
                                    </a>
                                    <a href='/' target="_blank">
                                        <img src="\adress\icon2.png" alt="img" className="img-fluid  mr-3" />
                                    </a>
                                    <a href='/' target="_blank">
                                        <img src="\adress\icon3.png" alt="img" className="img-fluid  mr-3" />
                                    </a>
                   
                            </nav>
                        </div>
                    </div>
                </div>

            </section>
            <section className="rights">
                <div className="container-fluid p-0">
                    <div className='row'>
                        <div className='col-lg-11 m-auto'>
                            <div className="inner-rightsscsd ">
                                <p className="sdgvsgdv">© 2022 <span className='common footerdns'>DNS</span>, All Rights Reserved</p>
                                <p className='dvsgd'>Terms of use  |  Privacy policy</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Footer;
