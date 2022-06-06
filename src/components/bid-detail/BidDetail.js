/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import './biddetail.scss';
// import { useWeb3React } from '@web3-react/core'
// import useApprove from '../../../hooks/useApprove';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const BidDetail = () => {




    return (
        <>
            <section className="main-biddetail ptb">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="inner-content">
                                <img src='\wordnftgenerator-assets\explore\card-pic.svg' className='img-fluid w100' />
                                <div className='inner-side'>
                                    <h6><strong>Contract Address</strong></h6>
                                    <p className='common'>1x1dDB2C0817daF18632662E71fdD2dbDC0eB3a9Ec</p>

                                    <h6><strong>Token ID</strong></h6>
                                    <p className='common'>100300041083</p>
                                </div>

                            </div>
                        </div>

                        <div className='col-sm-6'>
                            <div className='rightside'>
                                <h4>John Doe</h4>
                                <p className='grey ptb20'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.</p>
                                <div className='row'>
                                    <div className='col-sm-6 p-0'>
                                        <ul className='list-inline'>
                                            <li className='list-inline-item'>
                                                <div className='inner-img'>
                                                    <img src='\wordnftgenerator-assets\explore\user.png' className='img-fluid w100' />

                                                </div>
                                            </li>
                                            <li className='list-inline-item'>
                                                <div className='inner-img'>
                                                    <h6 className='grey'>Creator</h6>
                                                    <h6 className=''><strong>Darrell Steward</strong></h6>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='col-sm-6 p-0'>
                                        <ul className='list-inline'>
                                            <li className='list-inline-item'>
                                                <div className='inner-img'>
                                                    <img src='\wordnftgenerator-assets\explore\user.png' className='img-fluid w100' />

                                                </div>
                                            </li>
                                            <li className='list-inline-item'>
                                                <div className='inner-img'>
                                                    <h6 className='grey'>Creator</h6>
                                                    <h6 className=''><strong>Darrell Steward</strong></h6>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>

                                </div>

                                <div className='row ptb20'>
                                    <div className='col-sm-4'>
                                        <h6 className='grey'>Highest Current Offer</h6>
                                        <h5 className='common'>1.53 ETH</h5>
                                    </div>
                                    <div className='col-sm-4'>
                                        <h6 className='grey'>USD Price</h6>
                                        <h5 className='common'>$5865.48</h5>
                                    </div>
                                    <div className='col-sm-4'>
                                        <h6 className='grey'>Total Offers</h6>
                                        <h5 className='common'>15</h5>
                                    </div>
                                </div>
                                <div className='row'>
                                <div className="col-sm-12 my-0 mx-0 text-center p-0">
                                    <div className='inner-side '>
                                        <h6><strong>Auction Ends in</strong></h6>
                                        <p className='common pt-0'>23 : 59 : 15</p>
                                    </div>
                                </div>
                                </div>
                              
                                <div className='row '>
                                    <div className='col-sm-12 p-0'>
                                        <button className='btn-common  ' data-toggle="modal" data-target="#exampleModal" data-whatever="@fat">
                                            <img src='\wordnftgenerator-assets\explore\hammer.svg' className='img-fluid' />  Place a bid
                                        </button>
                                        <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div className="modal-dialog" role="document">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title " id="exampleModalLabel">PLACE YOUR BID</h5>
                                                        {/* <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                            <span aria-hidden="true">&times;</span>
                                                        </button> */}
                                                        <button type="button" className="close " data-dismiss="modal" aria-label="Close">
                                                            <img src="\wordnftgenerator-assets\layer1.svg" className="img-fluid  " alt="" />
                                                        </button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <div className='mt-1 pb-2'>
                                                            <p className=' para'>You are about to Place a Bid on <span className='common'>John doe</span> by <span className='common'>Leslie Alexander </span> </p>

                                                        </div>

                                                        <form>
                                                            <div className="form-group">
                                                                <label htmlFor="recipient-name" className="col-form-label">Your Bid</label>
                                                                <input type="text" className="form-control" placeholder="Enter Bid" aria-label="Username" aria-describedby="basic-addon1" />
                                                            </div>
                                                            <div className="form-group ">
                                                                <div className='row '>
                                                                    <div className='col-sm-12 d-flex ptb20'>
                                                                        <div className='col-sm-4 '>
                                                                            <p className='font-weight-bold'>
                                                                                Your Balance
                                                                            </p>
                                                                        </div>
                                                                        <div className='col-sm-4 '>
                                                                            <h5>

                                                                            </h5>
                                                                        </div>
                                                                        <div className='col-sm-4 '>
                                                                            <h5>
                                                                                6.323 ETH
                                                                            </h5>
                                                                        </div>

                                                                    </div>
                                                                    <div className='col-sm-12 d-flex ptb20'>
                                                                        <div className='col-sm-4 text-start '>
                                                                            <p className='font-weight-bold'>
                                                                                Service fee
                                                                            </p>
                                                                        </div>
                                                                        <div className='col-sm-4 '>
                                                                            <h5>

                                                                            </h5>
                                                                        </div>
                                                                        <div className='col-sm-4 text-end'>
                                                                            <h5>
                                                                                0.00 ETH
                                                                            </h5>
                                                                        </div>

                                                                    </div>
                                                                    <div className='col-sm-12 d-flex ptb20'>
                                                                        <div className='col-sm-4 text-start'>
                                                                            <p className='font-weight-bold'>
                                                                                Total Bid amount
                                                                            </p>
                                                                        </div>
                                                                        <div className='col-sm-4 '>
                                                                            <h5>

                                                                            </h5>
                                                                        </div>
                                                                        <div className='col-sm-4 text-end'>
                                                                            <h5>
                                                                                0.00 ETH
                                                                            </h5>
                                                                        </div>

                                                                    </div>
                                                                </div>


                                                            </div>
                                                        </form>
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button" className='btn-common w-50 ' data-dismiss="modal" aria-label="Close">
                                                            Place a Bid
                                                        </button>
                                                        <button type="button" className='btn-common btn-common2 w-50' data-dismiss="modal" aria-label="Close">
                                                            Cancel
                                                        </button>
                                                    </div>
                                                    <div className='container text-center'>
                                                        <div className="modal-body ">
                                                            <img src="\wordnftgenerator-assets\greentick.svg" className="img-fluid  " alt="" />

                                                        </div>
                                                        <div className='ptb20'>
                                                            <h5 className=''> Your NFT is minted</h5>


                                                        </div>
                                                        <button type="button" className='btn-common w-50' data-dismiss="modal" aria-label="Close">
                                                            Go checkout on your profile
                                                        </button>
                                                        <div className="mt-5 pb-3">
                                                            <p className='grey '>
                                                                By connecting, I accept wordnftgenerator. <span className='common'>NFT WORDS</span>

                                                            </p>
                                                        </div>



                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='hadd d-flex '>
                                    <h6 className='ptb20 mx-3' >
                                        Offers (6)
                                    </h6>


                                    <h6 className='ptb20' >
                                        Additional Info
                                    </h6>

                                </div>



                                <div className='row '>

                                    <div className="col-sm-12 p-0">
                                        <div className='inner-side responsive-table'>

                                            <table className="table">
                                                <thead>
                                                    <tr>
                                                        <th>Bids By</th>
                                                        <th></th>
                                                        <th></th>
                                                        <th> </th>
                                                        <th>Bids</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td> 
                                                            <img
                                                                src="\wordnftgenerator-assets\man.svg"
                                                                className="img-fluid  m-1 "
                                                                alt=""
                                                            />
                                                            Clyde Pearson
                                                        </td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td><img
                                                            src="\wordnftgenerator-assets\Group.svg"
                                                            className="img-fluid  m-1"
                                                            alt=""
                                                        />1 ETH</td>
                                                        
                                                        
                                                    </tr>

                                                </tbody>
                                            </table>


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

export default BidDetail;
