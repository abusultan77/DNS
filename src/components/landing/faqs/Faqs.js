import React from 'react';
import './faqs.scss';
const Faqs = () => {
    return (
        <>
            <section className="main-faqs ptb">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="inner-content text-center">
                                <h2 className="white ptb">FAQ</h2>
                                {/* <h1 className="">Get the facts straight</h1> */}

                            </div>
                        </div>
                    </div>

                    <section className="main-faqs" id="faqs">
                        <div className="container">
                           
                            <div className="row">
                                <div className="col-sm-12 inner-upper">
                                    <div className="inner-side ptb20">
                                        <div id="accordion">
                                            <div className="card">
                                             
                                                <div id="collapseOne" className="collapse " aria-labelledby="headingOne" data-parent="#accordion">
                                                    <div className="card-body">
                                                        We are a community of like-minded NFT collectors and artists through an all-in-one platform where they can easily interact, collect art and also get rewards. Long-term goal of our community is to build a metaverse where NFTs and Coins participate in the world. .
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="card-header" id="headingTwo">
                                                    <h5 className="mb-0">
                                                        <button className="btn btn-link collapsed d-flex justify-content-between align-items-center" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                            <h5 className=""><span className='font-weight-bold'>01. </span>  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit</h5>
                                                            <p className='font-weight-bold'>+</p>
                                                        </button>
                                                    </h5>
                                                </div>
                                                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                                    <div className="card-body">
                                                        NFTs are a special type of digital asset that is not interchangeable with any other digital asset and their uniqueness can be proved. Since they cannot be interchanged, that’s why they’re called non-fungible. .
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="card-header" id="headingThree">
                                                    <h5 className="mb-0">
                                                        <button className="btn btn-link collapsed d-flex justify-content-between align-items-center" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                            <h5 className=""><span className='font-weight-bold'>02. </span>  Vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</h5>
                                                            <p className='font-weight-bold'>+</p>
                                                        </button>
                                                    </h5>
                                                </div>
                                                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                                    <div className="card-body">
                                                        It will be available on OpenSea, also through our whitelist..
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <div className="card">
                                                <div className="card-header" id="headingfour">
                                                    <h5 className="mb-0">
                                                        <button className="btn btn-link collapsed d-flex justify-content-between align-items-center" data-toggle="collapse" data-target="#collapsethree" aria-expanded="false" aria-controls="collapsethree">
                                                            <h5 className=""><span className='font-weight-bold'>03. </span> Vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</h5>
                                                            <p className='font-weight-bold'>+</p>
                                                        </button>
                                                    </h5>
                                                </div>
                                            
                                            </div> */}
                                            <div className="card">
                                                <div className="card-header" id="headingfive">
                                                    <h5 className="mb-0">
                                                        <button className="btn btn-link collapsed d-flex justify-content-between align-items-center" data-toggle="collapse" data-target="#collapsefive" aria-expanded="false" aria-controls="collapsefour">
                                                            <h5 className=""><span className='font-weight-bold'>03. </span>  Vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</h5>
                                                            <p className='font-weight-bold'>+</p>
                                                        </button>
                                                    </h5>
                                                </div>
                                                <div id="collapsefive" className="collapse" aria-labelledby="headingfour" data-parent="#accordion">
                                                    <div className="card-body">
                                                        The presale will have 1500 Xenoroids at 0.8 ETH per Xenoroid and the Xenoverse community can participate in the presale through Whitelisting only. In order to be in the whitelist, please join our discord channel and apply accordingly.</div>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="card-header" id="headingsix">
                                                    <h5 className="mb-0">
                                                        <button className="btn btn-link collapsed d-flex justify-content-between align-items-center" data-toggle="collapse" data-target="#collapsesix" aria-expanded="false" aria-controls="collapsefour">
                                                            <h5 className=""><span className='font-weight-bold'>04. </span> Vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</h5>
                                                            <p className='font-weight-bold'>+</p>
                                                        </button>
                                                    </h5>
                                                </div>
                                                <div id="collapsesix" className="collapse" aria-labelledby="headingsix" data-parent="#accordion">
                                                    <div className="card-body">
                                                        The presale will have 1500 Xenoroids at 0.8 ETH per Xenoroid and the Xenoverse community can participate in the presale through Whitelisting only. In order to be in the whitelist, please join our discord channel and apply accordingly.</div>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="card-header" id="headingseven">
                                                    <h5 className="mb-0">
                                                        <button className="btn btn-link collapsed d-flex justify-content-between align-items-center" data-toggle="collapse" data-target="#collapseseven" aria-expanded="false" aria-controls="collapsefour">
                                                            <h5 className=""><span className='font-weight-bold'>05.</span> Vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</h5>
                                                            <p className='font-weight-bold'>+</p>
                                                        </button>
                                                    </h5>
                                                </div>
                                                <div id="collapseseven" className="collapse" aria-labelledby="headingseven" data-parent="#accordion">
                                                    <div className="card-body">
                                                        The presale will have 1500 Xenoroids at 0.8 ETH per Xenoroid and the Xenoverse community can participate in the presale through Whitelisting only. In order to be in the whitelist, please join our discord channel and apply accordingly.</div>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="card-header" id="headingeight">
                                                    <h5 className="mb-0">
                                                        <button className="btn btn-link collapsed d-flex justify-content-between align-items-center" data-toggle="collapse" data-target="#collapseeight" aria-expanded="false" aria-controls="collapseeight">
                                                            <h5 className=""><span className='font-weight-bold'>06.</span> Vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</h5>
                                                            <p className='font-weight-bold'>+</p>
                                                        </button>
                                                    </h5>
                                                </div>
                                                <div id="collapseeight" className="collapse" aria-labelledby="headingeight" data-parent="#accordion">
                                                    <div className="card-body white">
                                                        The presale will have 1500 Xenoroids at 0.8 ETH per Xenoroid and the Xenoverse community can participate in the presale through Whitelisting only. In order to be in the whitelist, please join our discord channel and apply accordingly.</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                          
                        </div>
                    </section>
                </div>
            </section>
        </>
    )
}

export default Faqs;
