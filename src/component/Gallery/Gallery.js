import React from 'react';
import './Gallery.css'

const Gallery = () => {
    return (
        <div>
        <div className="container-fluid customize-bg py-5">
            <div className="container">
                <h1 className='text-center p-3 mb-4'>EXHIBITION GALLERY</h1>
            <div className="row d-flex justify-content-start align-items-center">
                <div className="col-md-4">
                    <img className='w-75' src="https://i.postimg.cc/KYYb7Z8M/whatsapp-image-2021-01-27-at-11-46.png" alt="" />
                    <p className='text-center fs-5 fw-bold mt-2'>EXHIBITION AREA</p>
                
                </div>
                <div className="col-md-4">
                   <img className='w-75' src="https://i.postimg.cc/kgqq4Nrw/hybrid1-700x394-Copy.png" alt="" />
                   <p className='text-center fs-5 fw-bold mt-2'>VIRTUAL EXHIBITION AREA</p>
                </div>
                <div className="col-md-4">
                   <img className='w-75' src="https://i.postimg.cc/Bnps1843/hybrid3-700x394.png" alt="" />
                   <p className='text-center fs-5 fw-bold mt-2'>HYBRID EXHIBITION</p>
                </div>
            </div>
            </div>
        </div>
    </div>
    );
};

export default Gallery;