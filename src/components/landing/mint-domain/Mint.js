import React, { useState, useEffect } from "react";
import "./mint.scss";
const Mint = () => {
    return (
        <>
            <section className="main-mint ">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-11 m-auto ">
                            <div className="row">
                                <div className="col-xl-6 col-12">
                                    <div className="mainimg">
                                        <div className="text-center lastimmgg">
                                            <img
                                                src="\mint\mintform.svg"
                                                className="img-fluid  "
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-12">
                                    <div className="right">
                                        <div className="input-field">
                                            <label>Name</label>
                                            <input type="text" placeholder="item name" />
                                        </div>
                                        <div className="input-field">
                                            <label>Description</label>
                                            <textarea
                                                placeholder="item Description"
                                                cols="30"
                                                rows="10"
                                            ></textarea>
                                        </div>
                                        <button
                                            className="btn-pink"
                                            data-toggle="modal"
                                            data-target="#minting-modal"
                                        >
                                            MINT NOW
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="minting-modal">
                <div
                    class="modal fade"
                    id="minting-modal"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-body">
                                <h6>MintING</h6>
                                <img src="\adress\mint-modal.png" alt="img" className="img-fluid" />
                                <p>Your NFT is being mint</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="minting-modal">
                <div
                    class="modal fade"
                    id="minting-success"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-body">
                                <h6>MintING</h6>
                                <img src="\adress\success.png" alt="img" className="img-fluid" />
                                <p>Your NFT is being mint</p>
                                <button>Go checkout on your profile</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Mint;
