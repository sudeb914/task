import React from "react";
import './Contact.css'

const Contact = () => {
  return (
    <div>
      <div className="container mb-4 mt-4">
        <div className="row d-flex justify-content-end align-items-start">
          <div className="col-md-6 ">
            <h1 className="mb-3 mt-3 text-primary fw-bold">
              BizConnect <span className="text-warning">Event</span>
            </h1>
            {/* <div className='d-flex justify-content-center'>
                        <i class="far fa-address-book"></i>
                            <p className='w-50 text-start '>Hot Annual Meets,Rewards & Recognition,Products Launches,Virtual events,Onlin conference,Trade shows job fair and more</p>
                        </div> */}
            <div className="d-flex justify-content-center">
              <i class="fas fa-address-book text-danger"></i>
              <div className="m-1">
                <p></p>
                <p className="text-start text-muted">
                  Hot Annual Meets,Rewards & Recognition,Products <br />{" "}
                  Launches,Virtual events,Onlin conference,Trade shows <br />{" "}
                  job fair and more
                </p>
              </div>
            </div>
            <div className="d-flex justify-content-center w-75">
              <i class="fas fa-map-marker-alt text-danger"></i>
              <div className=" m-1 text-start">
                <p className="fw-bold">ADDRESS:</p>
                <p className="text-muted">#338,5th Block Rajajinagur 560010</p>
              </div>
            </div>
            <div className="d-flex justify-content-center w-75">
              <i class="fas fa-envelope text-danger"></i>
              <div className="text-start m-1">
                <p className="fw-bold">EMAIL</p>
                <p className="text-muted">contact@bizconnectevents.com</p>
              </div>
            </div>
            <div className="d-flex justify-content-center w-75 ">
              <i class="fab fa-twitter p-3 text-white icon-color  rounded rounded-circle"></i>
              <i class="fab fa-instagram p-3 text-white icon-color rounded rounded-circle"></i>
              <i class="fab fa-linkedin-in p-3 text-white icon-color rounded rounded-circle"></i>
              <i class="fab fa-facebook-f p-3 text-white icon-color rounded rounded-circle"></i>
              <i class="fab fa-youtube p-3 text-white icon-color rounded rounded-circle"></i>
            </div>
          </div>
          <div className="col-md-6 mt-3">
              <form style={{border:'1px solid gray',width:'450px',height:'580px',paddingTop:'15px'}}>
                 <h2 className="p-2 fw-bold">Contact Us</h2>
                  <input placeholder="First Name" type="text" />
                  <br /><br />

                  <input placeholder="Last Name" type="text" />
                  <br />
                  <br />
                  <br />
                  <input placeholder="Email Address" type="email" />
                  <br /><br />
                  <input placeholder="Your Phone" type="text" />
                  <br /> <br />

                  <input placeholder="Your Company" type="text" />
                  <br /><br />
                  <input placeholder="Your City" type="text" />
                  <br />
                  <br />

                  <textarea placeholder="Message"></textarea>
                  <br /> <br />

                  <input style={{width:'90px',padding:'5px 10px',background:'#1E63A4',color:'#fff',border:'none'}} value="Send" type="submit" name="" id="" />
              </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
