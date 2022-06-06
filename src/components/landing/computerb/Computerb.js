import React, { useState, useEffect } from 'react';
import './computerb.scss';
const Computerb = () => {

    return (
        <>

            <section className="main-Computerb ">
                <div className="container-fluid p-0">
                    <div className="row">
                        <div className="col-lg-11 m-auto p-0 ">
                            <div className="bannersev">
                                <div className='row'>
                                    <div className="col-lg-6 col-12 m-auto">
                                        <div className="">
                                            <div className='lastimmgg'>
                                                <img
                                                    src="\building\computerb.svg"
                                                    className="img-fluid  "
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-6 col-12 m-auto'>
                                        <div className='mainbuilding'>

                                            <h2 className='buldingheadingss '>Lorem ipsum dolor sit amet,  <br></br>consectetur adipiscing.</h2>
                                            <p className='buildingpara ptb20'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.

                                                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Computerb;
