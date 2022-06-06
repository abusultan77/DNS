/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import './bid.scss';
// import { useWeb3React } from '@web3-react/core'
// import useApprove from '../../../hooks/useApprove';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
const Bid = () => {

    // const { account } = useWeb3React();
    // const { Approve } = useApprove()
    // const [minted, setMinted] = useState(false);
    // const [inProcess, setInProcess] = useState(false);



    return (
        <>
            <section className="main-bid ptb">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="inner-content ptb20 text-center">
                                <div className='d-flex justify-content-center '>
                                 <div className="input-group mb-3">
                                    <input type="text" className="form-control ptb20 px-3 git stat" placeholder="Search for your new NFT" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                    <div className="input-group-append">
                                        <span className=" input-group-text" id="basic-addon2"><img src="\wordnftgenerator-assets\search-icon.svg" className="img-fluid w30" alt="" />Search</span>
                                    </div>
                                </div>
                                 </div>
                             

                            </div>

                            <div className='inner-content'>
                                <h3>Results for “john doe”</h3>    
                            </div>


                          
                        </div>

                    </div>
                    <div className="row ptb20">
                      
                        <div className="col-sm-3">
                            <div className="card-style ptb20">
                                <ul className='list-inline'>
                                    <li className='list-inline-item'>
                                        <div className='inner-user'>
                                            <img src='\wordnftgenerator-assets\explore\user.png' className='img-fluid' />
                                        </div>
                                    </li>
                                    <li className='list-inline-item'>
                                        <div className='inner-user'>
                                            <p className='grey'><small>0x12A88....B4591</small></p>
                                        </div>
                                    </li>
                                </ul>
                                <img src='\wordnftgenerator-assets\explore\card-pic.svg' className='img-fluid w-100' />
                                <h5>John Doe</h5>
                                <div className='inner-side'>
                                    <h6 className='grey'>HIGHEST OFFER</h6>
                                    <img src='\wordnftgenerator-assets\explore\ethr-icon.svg' className='img-fluid' />&nbsp;&nbsp;
                                    0.008 ETH
                                </div>
                                <div className='time text-center'>
                                    <h5>Auction Ends in</h5>
                                    <ul className='list-inline'>
                                        <li className='list-inline-item'>
                                            <h5 className='common'><strong>23</strong></h5>    
                                        </li>  
                                        <li className='list-inline-item'>
                                            <h5 className='common'><strong>:</strong></h5>    
                                        </li>
                                        <li className='list-inline-item'>
                                            <h5 className='common'><strong>59</strong></h5>    
                                        </li>
                                        <li className='list-inline-item'>
                                            <h5 className='common'><strong>:</strong></h5>    
                                        </li>
                                        <li className='list-inline-item'>
                                            <h5 className='common'><strong>15</strong></h5>    
                                        </li>  
                                    </ul>
                                </div>


                                <Link to="/biddetail">
                                <button className='btn-common'>
                                <img src='\wordnftgenerator-assets\explore\hammer.svg' className='img-fluid' />  Place a bid  
                                </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Bid;
