import React from 'react';
import './giveaway.scss';
const Giveaway = () => {
    return (
        <>
            <section className="main-give">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-11 m-auto">
                            <div className="all-cards">
                                <div className="main-card">
                                    <img src="\mint-cards\secrech-card.svg" alt="img" className='img-fluid' />
                                    <h6>Search</h6>
                                    <p>At vero eos et accusams et iusto odio qui dignissimos ducimus blanditiis praese voluptatum deleniti atque dolores excepturi sint occaecati facilis.</p>
                                </div>
                                <img src="\mint-cards\Line.svg" alt="img" className='img-fluid line' />
                                <div className="main-card">
                                    <img src="\mint-cards\Mint.svg" alt="img" className='img-fluid' />
                                    <h6>Mint</h6>
                                    <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.</p>
                                </div>
                                <img src="\mint-cards\Line.svg" alt="img" className='img-fluid line' />
                                <div className="main-card">
                                    <img src="\mint-cards\manage.svg" alt="img" className='img-fluid' />
                                    <h6>Manage</h6>
                                    <p>emporibus autem quibusdam debitis aut rerum necessitatibus saepe eveniet ut volup repudiandae molestiae earum rerum hic tenetur a sapiente.</p>
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
