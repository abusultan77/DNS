import React from 'react';
import './about.scss';
const About = () => {
    return (
        <>
            <section className="main-about ptb">
                <div className="container">
                    <div className='row'>
                        <div className='col-sm-12'>
                            <h2 className='text-center'>WORDS <span className='common'>LARGEST</span> NFT WORDS <br />COLLECTIONS EVER!</h2>
                        </div>
                    </div>
                    <div className="row ptb20">

                        <div className="col-sm-6">
                            <div className="inner-img text-center ptb20">
                                <img src="\wordnftgenerator-assets\nftwords-image.svg" alt="" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="inner-content ptb20">
                                <p className=''>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the typesetting industry. Lorem Ipsum has been the typesetting industry. Lorem Ipsum has been the typesetting industry. Lorem Ipsum has been the typesetting industry. Lorem Ipsum has been the typesetting industry. Lorem Ipsum has been the typesetting industry. Lorem Ipsum has been the typesetting industry. Lorem Ipsum has been the typesetting industry. Lorem Ipsum has been the typesetting industry. Lorem Ipsum has been the
                                </p>
                                <ul className='common'>
                                    <li>
                                        <p>Lorem Ipsum is simply dummy text </p>
                                    </li>
                                    <li><p>
                                        of the printing and typesetting industry</p>
                                    </li>
                                    <li> <p>
                                        Lorem Ipsum has been the </p></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;
