import React from 'react';
import { HashLink } from 'react-router-hash-link';
import './OverNav.css'

const OverNav = () => {
    return (
        <div>
            <div className="container mt-2">
                <div className="row d-flex justify-content-between">
                    <div className="col-md-6">
                        <p className='text-start fw-bold text-muted'>Contact Us | Partner With Us</p>
                    </div>
                    <div className="col-md-6">
                        <div className='text-end'>
                            <HashLink className='txt-2' to=''>Login as</HashLink>
                            <HashLink className='txt-2' to=''>Subscriber</HashLink>
                            <HashLink className='txt-2' to=''>Get a Demo</HashLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OverNav;