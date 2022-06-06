import React, { useState, useEffect } from 'react';
import './building .scss';
const Building = () => {

    return (
        <>

            <section className="main-Building ">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-11 m-auto p-0 ">
                            <div className="bannersix">
                                <div className='row'>
                                    <div className='col-lg-6 col-12 m-auto p-0'>
                                        <h2 className="allheading">Building decentralized digital <br></br>identities for the world
                                        </h2>
                                        <p className='buildingpara'>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br></br> eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut         <br></br>enim ad minim veniam, quis nostrud exercitation ullamco laboris         <br></br>nisi ut aliquip ex ea commodo consequat.
                                        </p>
                                        <p className='buildingpara ptb20'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                    </div>
                                    <div className="col-lg-6 col-12 m-auto">

                                        <div className='text-center lastimmgg'>
                                            <img
                                                src="\building\builddingg.svg"
                                                className="img-fluid  "
                                                alt=""
                                            />
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

export default Building;
