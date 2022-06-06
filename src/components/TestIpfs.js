import React, { useState } from 'react'
import { IpfsStorage } from '../hooks/ipfs'

function TestIpfs() {
    const [ipoImf, setIpoImf] = useState()

    const imageUploaded = async (e) => {
        console.log('working on ipfs')
        const pathoo = e.target.files[0]
        try {

            let res = await IpfsStorage(pathoo)

            console.log("res=====ipfs", res)
            setIpoImf(res);
        } catch (e) {
            console.log('ggggggggggggggggggggggg', e)
        }
    }


  


    return (
        <>
            <div className="container ptb">
                <div className="row ptb">
                    <div className="col-12">
                        <input onChange={(e) => imageUploaded(e)} type="file" name="" id="" />
                        <img src={ipoImf ? ipoImf : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSudDi3uymr14AgarrcKJjcdUfLai3OJp_MEQ&usqp=CAU"} className='rounded-circle w-24 h-25' alt="" />
                    </div>
                </div>
            </div>
            <>
                {/* <button type="button" onClick={handleImageDownload}>Download</button> */}
                <div id="print">This will be downloaded as an image</div>
            </>
        </>
    )
}

export default TestIpfs