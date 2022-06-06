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
            <section className="main-give ptb">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="inner-content ptb20">
                               <p className='black'>
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

                        <div className='col-sm-6'>
                            <div className='inner-img text-center'>
                                <img src='\wordnftgenerator-assets\aboutus-image.svg' className='img-fluid' />    
                            </div>    
                        </div>
                    </div>
                 
                </div>
            </section>
        </>
    )
}

export default Giveaway;
