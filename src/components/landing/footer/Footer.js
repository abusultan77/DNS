import React from 'react';
import { Link } from 'react-router-dom';
import './footer.scss';
const Footer = () => {
    return (
        <>
            <section className="main-footer">
                <div className="container">
                    <div className='row mt-5 '>
                        <div className='col-sm-8'>
                            <div className='inner-logo '>
                                <img src='\adress\Frame92.png' className='img-fluid'/>
                                <div className='inner-footerheading'>
                                    <Link className='' to='/'>
                                        HOME
                                    </Link>
                                    <Link className='' to='/'>
                                    Marketplace
                                    </Link>
                                    <Link className='' to='/'>
                                    About
                                    </Link>
                                </div>
                            </div>

                        </div>
                        <div className='col-sm-4'>
                            <div className='inner-icon'>
                                <img src='\adress\icon-1.png' className='img-fluid'/>
                                <img src='\adress\icon2.png' className='img-fluid'/>
                                <img src='\adress\icon3.png' className='img-fluid'/>
                            </div>

                        </div>
                        <div className="row">
                        <div className="col-sm-12">
                            <div className="inner-rights ptb">
                                <p className="">© 2021 wordnftgenerator. All Rights  Reserved </p>
                            </div>
                        </div>
                    </div>
                    </div>
                
                </div>
            </section>
          
        </>
    )
}

export default Footer;
