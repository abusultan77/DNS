import React, { useState, useEffect } from 'react';
import './giveaway.scss';
const Giveaway = () => {
    // const [timerInfo, setTimerInfo] = React.useState({
    //     days:'',
    //     hour:'',
    //     min:'',
    //     sec:''
    // });
    // useEffect(() => {
    //     newtime();
    // }, [])
    //   const newtime =  async(e)=> {

    // 		var future = new Date("November 9, 2021 23:59:00");
    // 		var now = new Date();
    // 		var diff = future.getTime() - now.getTime();

    // 		var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    // 		var hours = Math.floor(diff / (1000 * 60 * 60));
    // 		var mins = Math.floor(diff / (1000 * 60));
    // 		var secs = Math.floor(diff / 1000);



    // 		var d = days;
    // 		var h = hours - days * 24;
    // 		var m = mins - hours * 60;
    // 		var s = secs - mins * 60;
    //         setTimerInfo(timerInfo => ({ ...timerInfo, days: d }));
    //         setTimerInfo(timerInfo => ({ ...timerInfo, hour: h }));
    //         setTimerInfo(timerInfo => ({ ...timerInfo, min: m }));
    //         setTimerInfo(timerInfo => ({ ...timerInfo, sec: s }));

    // 		console.log('days::', d);
    // 		console.log('hours:::', h)
    // 		console.log('mins:::', m)
    // 		console.log('secs:::', s)

    // 	}

    // console.log("hete",timerInfo)
    // setInterval(() => {
    //     newtime();
    // }, 1000);
    return (
        <>
            <section className="main-give ">
                <div className="container-fluid  ">
                    <div className="row">
                        <div className="col-sm-12 m-auto">
                            <div className='caarrddss'>
                                <div class="row">
                    
                                    <div className='col-sm-3 '>
                                        <div className='inercards'>
                                            <img
                                                src="\mint-cards\secrech-card.svg"
                                                className="img-fluid w-100% "
                                                alt=""
                                            />
                                            <h5 className='headingss'>Search</h5>
                                            <p className='cardpara'>
                                                At vero eos et accusams et iusto odio qui dignissimos ducimus blanditiis praese voluptatum deleniti atque dolores excepturi sint occaecati facilis.
                                            </p>
                                        </div>
                                    </div>
                                    <div className='line'>
                                        <img
                                            src="\mint-cards\Line.svg"
                                            className="img-fluid w-100% "
                                            alt=""
                                        />
                                    </div>
                                    <div className='col-sm-3 '>
                                        <div className='inercards'>
                                            <img
                                                src="\mint-cards\Mint.svg"
                                                className="img-fluid w-100% "
                                                alt=""
                                            />
                                            <h5 className='headingss'>Mint</h5>
                                            <p className='cardpara'>
                                                At vero eos et accusams et iusto odio qui dignissimos ducimus blanditiis praese voluptatum deleniti atque dolores excepturi sint occaecati facilis.
                                            </p>
                                        </div>
                                    </div>
                                    <div className='line'>
                                        <img
                                            src="\mint-cards\Line.svg"
                                            className="img-fluid w-100% "
                                            alt=""
                                        />
                                    </div>
                                    <div className='col-sm-3 '>
                                        <div className='inercards'>
                                            <img
                                                src="\mint-cards\manage.svg"
                                                className="img-fluid w-100% "
                                                alt=""
                                            />
                                            <h5 className='headingss'>Manage</h5>
                                            <p className='cardpara'>
                                                At vero eos et accusams et iusto odio qui dignissimos ducimus blanditiis praese voluptatum deleniti atque dolores excepturi sint occaecati facilis.
                                            </p>
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

export default Giveaway;
