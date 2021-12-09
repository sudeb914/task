import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <div className="container mb-3">
                <div className="row d-flex justify-content-start align-items-center">
                    <div className="col-md-6">
                        <img className='img-fluid' src="https://i.postimg.cc/DZJKDBsf/Artboard-206-1.png" alt="" />
                    </div>
                    <div className="col-md-6">
                        <div className='text-start'>
                            <h1 className='fw-bold'>Virtual Exhibition
                                 <br />
                             Platform</h1>
                             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus possimus obcaecati rem, officia ipsa quasi!</p>
                             <button className='contact-btn'>Contact Us</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;