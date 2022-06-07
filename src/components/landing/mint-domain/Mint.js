import React, { useState, useEffect } from 'react';
import './mint.scss';
const Mint = () => {

    return (
        <>
            <section className="main-mint ">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-11 m-auto p-0 ">
                            <div className='row'>
                                <div className="col-lg-6 col-12 m-auto">
                                    <div className="mainimg">
                                        <div className='text-center lastimmgg'>
                                            <img
                                                src="\mint\mintform.svg"
                                                className="img-fluid  "
                                                alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6 col-12 m-auto p-0'>
                                    <form>
                                        <div class="form-group">
                                            <label for="exampleFormControlInput1">Email address</label>
                                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleFormControlTextarea1">Example textarea</label>
                                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                        </div>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Mint;
