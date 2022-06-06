import React from 'react';
import './footer.scss';
const Footer = () => {
    return (
        <>
            <section className="main-footer ptb">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3">
                            <div className="inner-logo">
                                <a className="" href="/">
                                    <img src="\wordnftgenerator-assets\logo.svg" className="img-fluid mt5" alt="" />
                                </a>
                                <ul className='list-inline ptb20'>
                                    <li className='list-inline-item'>
                                        <a className=''>
                                            <img src="\wordnftgenerator-assets\facebook-icon.svg" className="img-fluid w28" alt="" />
                                        </a>
                                    </li>
                                    <li className='list-inline-item'>
                                        <a className=''>
                                            <img src="\wordnftgenerator-assets\twitter-icon.svg" className="img-fluid w28" alt="" />
                                        </a>
                                    </li>
                                    <li className='list-inline-item'>
                                        <a className=''>
                                            <img src="\wordnftgenerator-assets\instagram-icon.svg" className="img-fluid w28" alt="" />
                                        </a>
                                    </li>
                                    <li className='list-inline-item'>
                                        <a className=''>
                                            <img src="\wordnftgenerator-assets\linkedin-icon.svg" className="img-fluid w28" alt="" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-sm-2'>
                            <h4>Navigation</h4>
                            <ul>
                                <li>
                                    <div className=''>
                                        <a className='grey' href="/">Home</a>
                                    </div>
                                </li>
                                <li>
                                    <div className=''>
                                        <a className='grey' href="/explore">Explore</a>
                                    </div>
                                </li>
                                <li>
                                    <div className=''>
                                        <a className='grey'>Wallet</a>
                                    </div>
                                </li>
                                <li>
                                    <div className=''>
                                        <a className='grey'>Author</a>
                                    </div>
                                </li>
                                <li>
                                    <div className=''>
                                        <a className='grey'>Blog</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className='col-sm-2'>
                            <h4>Explore</h4>
                            <ul>
                                <li>
                                    <div className=''>
                                        <a className='grey'>Explore Artwork</a>
                                    </div>
                                </li>
                                <li>
                                    <div className=''>
                                        <a className='grey'>Single Artwork</a>
                                    </div>
                                </li>
                                <li>
                                    <div className=''>
                                        <a className='grey'>Explore Creators</a>
                                    </div>
                                </li>
                                <li>
                                    <div className=''>
                                        <a className='grey'>Single Creators</a>
                                    </div>
                                </li>
                                <li>
                                    <div className=''>
                                        <a className='grey'>Community</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className='col-sm-2'>
                            <h4>Community</h4>
                            <ul>
                                <li>
                                    <div className=''>
                                        <a className='grey'>Partners</a>
                                    </div>
                                </li>
                                <li>
                                    <div className=''>
                                        <a className='grey'>Help Center</a>
                                    </div>
                                </li>
                                <li>
                                    <div className=''>
                                        <a className='grey'>Suggestions</a>
                                    </div>
                                </li>
                                <li>
                                    <div className=''>
                                        <a className='grey'>Blog</a>
                                    </div>
                                </li>
                                <li>
                                    <div className=''>
                                        <a className='grey'>Newsletter</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="col-sm-3">
                            <div className="inner-icon ">
                                <h4>Subscribe Us</h4>
                                <ul>
                                    <li>
                                        <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Your e-mail address" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                    <div className="input-group-append">
                                        <span className=" input-group-text" id="basic-addon2"><img src="\wordnftgenerator-assets\send-icon.svg" className="img-fluid w30" alt="" /></span>
                                    </div> </div>

                                    </li>
                                    <li>
                                        <small className='grey'>Your privacy protected! We dont disclose Email.</small>

                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="rights">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="inner-rights text-center ptb20">
                                <p className="white">© 2021 wordnftgenerator. All Rights  Reserved </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer;
