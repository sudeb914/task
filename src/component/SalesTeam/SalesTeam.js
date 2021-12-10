import React from 'react';
import './SalesTeam.css'

const SalesTeam = () => {
    return (
        <div>
        <div className="container-fluid  py-5">
            <div className="container">
                <h3 className='text-center p-3 mb-5 fw-bold'>CONTACT OUR SALES TEAM</h3>
            <div className="row d-flex justify-content-start align-items-center">
                <div className="col-md-3">
                    <img className='w-50' src="https://i.postimg.cc/HWZtnDSj/Ellipse-7.png" alt="" />
                    <p className='text-center fs-5 fw-bold mt-2'>ADRIAN ESPARZA</p>
                    <small>SENIOR SALES MANAGER <br /> USA</small>
                
                </div>
                <div className="col-md-3">
                   <img className='w-50' src="https://i.postimg.cc/0jQdncN8/Ellipse-8.png" alt="" />
                   <p className='text-center fs-5 fw-bold mt-2'>BALVINDER SINGH</p>
                   <small>HEAD OF SALES</small>
                </div>
                <div className="col-md-3">
                   <img className='w-50' src="https://i.postimg.cc/50pS8Zb7/Ellipse-8-1.png" alt="" />
                   <p className='text-center fs-5 fw-bold mt-2'>JUSTIN ONG</p>
                   <small>SENIOR SALES MANAGER <br /> EAST ASIA REGION</small>
                </div>
                <div className="col-md-3">
                  <div>
                  <img className='w-50' src="https://i.postimg.cc/1Xj0jwgD/Ellipse-9.png" alt="" />
                  </div>
                   <p className='text-center fs-5 fw-bold mt-2'>MUSTAFA KAOURI</p>
                   <small>SALES MANAGER <br /> MIDDLE EAST</small>
                </div>
            </div>
            </div>
        </div>
    </div>
    );
};

export default SalesTeam;