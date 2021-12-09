import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <h5>Platform</h5>
                        <p className='p-color'>Web browser - no exe to download</p>
                        <p className='p-color'>Engagement - Networking,Bussiness
                            <br />
                            card Exchange(BCE)
                        </p>
                        <p className='p-color'>Exhibitor - Chat,Viedo chat,Viedo Gallery</p>
                    </div>
                    <div className="col-md-3">
                        <h5>Events</h5>
                        <p className='p-color'>Virtual Event Platform</p>
                        <p className='p-color'>Hybrid Event Platform</p>
                        <p className='p-color'>Physical Events</p>
                    </div>
                    <div className="col-md-3">
                        <h5>Customers</h5>
                        <p className='p-color'>Success Stories</p>
                        <p className='p-color'>Understand GDPR</p>
                    </div>
                    <div className="col-md-3">
                        <h5>Try Biz Connect</h5>
                        <p className='p-color'>Pricing</p>
                        <p className='p-color'>Request a Demo</p>
                        <p className='p-color'>Contact Us</p>
                    </div>
                </div>
                <div className="row mt-3 d-flex justify-content-end align-items-center">
                   <div className="col-md-6 text-start">
                   <p style={{color:'#558bc9'}}>Mobile-responsive</p>
                   </div>
                    <div className='col-md-6'>
                    <i class="fab fa-twitter p-3 text-white icon-color  rounded rounded-circle"></i>
                    <i class="fab fa-instagram p-3 text-white icon-color rounded rounded-circle"></i>
                    <i class="fab fa-linkedin-in p-3 text-white icon-color rounded rounded-circle"></i>
                    <i class="fab fa-facebook-f p-3 text-white icon-color rounded rounded-circle"></i>
                    <i class="fab fa-youtube p-3 text-white icon-color rounded rounded-circle"></i>
                    </div>
                </div>
               
            </div>
            <p className='container-fluid text-white py-2 footer-color'>Copyright &copy 2021 Biz connect - All right reserve</p>
        </div>
    );
};

export default Footer;