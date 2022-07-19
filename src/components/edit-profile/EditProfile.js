import React,{useState, useEffect} from 'react';
import "./edit.scss";
export const EditProfile = () => {
    const [profileImg, setProfileImg] = useState();
    const [myProfile, setMyProfile] = useState({});
    const [bannerImg, setBannerImg] = useState();
    const [myBanner, setMyBanner] = useState({});
    const [inputs, setInputs] = useState({
        name: '',
        bio: '',
        twitter: '',
        telegram: '',
        website: '',
        instagram: '',
        email: '',
        walletAddress:''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs(inputs => ({ ...inputs, [name]: value }));
    }

    const handleFileSelectProfile = (evt) => {
        if (evt.target.files) {
            const filesarray = Array.from(evt.target.files).map((file) => URL.createObjectURL(file));

            setProfileImg(filesarray[0]);
            // Array.from(evt.target.files).map((file) => URL.createObjectURL(file))
        }
        var files = evt.target.files;
        var file = files[0];
        setMyProfile(file)
    }

    const handleFileSelectBanner = (evt) => {
        if (evt.target.files) {
            const filesarray = Array.from(evt.target.files).map((file) => URL.createObjectURL(file));

            setBannerImg(filesarray[0]);
            // Array.from(evt.target.files).map((file) => URL.createObjectURL(file))
        }
        var files = evt.target.files;
        var file = files[0];
        setMyBanner(file)
    }

    return (
        <>
            <section className='main-edit-profile'>
                <div className='container-fluid'>
                    <div class="row">
                        <div className='col-sm-12'>
                            <div className="heading-profile mt-4">
                                <h2 className="edit-heading">Edit Profile</h2>
                                <p className="edit-para">
                                    You can set preferred display name and manage other
                                    personal settings
                                </p>
                            </div>

                        </div>
                    </div>
                        <div className="row ptb20">
                            <div className="col-sm-7">
                                <div className="inner-form mt-4">
                                    <form>
                                        <div className="row">
                                            <div className="col-sm-12 p-0">
                                                <div class="form-group">
                                                    <label
                                                        for="exampleFormControlInput1"
                                                        className="white"
                                                    >
                                                        Display Name
                                                    </label>
                                                    <input
                                                        type="email"
                                                        class="form-control"
                                                        id="exampleFormControlInput1"
                                                        placeholder="Enter your display name"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <label
                                                for="exampleFormControlTextarea1"
                                                className="white"
                                            >
                                                Bio
                                            </label>
                                            <textarea
                                                class="form-control"
                                                id="exampleFormControlTextarea1"
                                                placeholder="Tell about yourself in a few words"
                                            ></textarea>
                                        </div>
                                        <div class="form-group">
                                            <label
                                                for="exampleFormControlInput1"
                                                className="white"
                                            >
                                                Twitter username
                                            </label>
                                            <span className="therate">
                                                <i class="fas fa-at"></i>
                                            </span>
                                            <input
                                                type="email"
                                                class="form-control form-abs twitter-un"
                                                id="exampleFormControlInput1"
                                                placeholder="Enter your name in Twitter"
                                            />


                                        </div>
                                        <div class="form-group">
                                            <label
                                                for="exampleFormControlInput1"
                                                className="white"
                                            >
                                                Instagram
                                            </label>
                                            <input
                                                type="email"
                                                class="form-control pl-3 form-abs twitter-un"
                                                id="exampleFormControlInput1"
                                                placeholder="Your Instagram UserName"
                                            />


                                        </div>
                                        <div class="form-group">
                                            <label
                                                for="exampleFormControlInput1"
                                                className="white"
                                            >
                                                Telegram
                                            </label>
                                            <input
                                                type="email"
                                                class="form-control pl-3 form-abs twitter-un"
                                                id="exampleFormControlInput1"
                                                placeholder="Telegram link "
                                            />


                                        </div>
                                        <div class="form-group">
                                            <label
                                                for="exampleFormControlInput1"
                                                className="white"
                                            >
                                                Your Site
                                            </label>
                                            <input
                                                type="email"
                                                class="form-control pl-3 form-abs twitter-un"
                                                id="exampleFormControlInput1"
                                                placeholder="Your Site link "
                                            />


                                        </div>
                                        <div class="form-group">
                                            <label
                                                for="exampleFormControlInput1"
                                                className="white"
                                            >
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                class="form-control form-abs email-input"
                                                id="exampleFormControlInput1"
                                                placeholder="Enter your email address"
                                            />
                                            {/* <a href="#" className="link-input">
                                                Confirm
                                            </a> */}
                                        </div>
                                        <div class="form-group">
                                            <label
                                                for="exampleFormControlInput1"
                                                className="white"
                                            >
                                                Wallet Address
                                            </label>
                                            <input
                                                type="email"
                                                class="form-control form-abs walllet-add email-input"
                                                id="exampleFormControlInput1"
                                                placeholder="0x1B92ABFC520D4210EC3D6EB5173988C6AE066231"
                                            />
                                            {/* <a href="#" className="link-input">
                                                Copy
                                            </a> */}
                                        </div>
                                    </form>

                                    <div className="update-btn">
                                        <button>Update Profile</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-5 mt-3">
                                <div className="parent">
                                    <div className="profile-show">
                                        <p>Profile Photo</p>
                                        <img
                                            src="\profile-inner.png"
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className="right-text">
                                        <h6>
                                            We recommend an image of at least 300x300. Gifs
                                            work too. Max 5mb.
                                        </h6>
                                        <div className="btn-upload">
                                            <label className='upload-btn' for="upload">Upload</label>
                                            <input id="upload" type="file" className='d-none'/>
                                            <button className="btn-delete">
                                                <img src="\delete.png" alt="img" className="" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="banner-img">
                                    <h6>Banner Image</h6>
                                    <img
                                        src="\banner-edit-profile.png"
                                        alt="img"
                                        className="img-fluid banner-upload"
                                    />
                                    <div className="btn-upload">
                                        <button>Upload</button>
                                        <button className="btn-delete">
                                            <img src="\delete.png" alt="img" className="" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </section>
        </>
    )
}

export default EditProfile;