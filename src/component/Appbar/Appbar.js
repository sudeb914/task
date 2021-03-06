import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Appbar.css'


const Appbar = () => {
    return (
        <div>
            <Navbar  expand="lg">
  <Container>
    <Navbar.Brand href="#home">
        <Link to="/home">
        <img width='100' src="https://i.postimg.cc/d3Cw74tN/Biz-Connect-logo-png-1-Copy.png" alt="" />
        </Link>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
      <HashLink className='text'  style={{marginRight:'10px'}} to=''>Platform</HashLink>
      <HashLink className='text'  style={{marginRight:'10px'}} to=''>Features</HashLink>
      <HashLink className='text' style={{marginRight:'10px'}} to='/event'>Events</HashLink>
      <HashLink className='text' style={{marginRight:'10px'}} to=''>Success Stories</HashLink>
      <HashLink className='text' style={{marginRight:'10px'}} to=''>Pricing</HashLink>
      <HashLink className='text' style={{marginRight:'10px'}} to=''>Company</HashLink>
     <span className='text-center'>
     <button className='subs-btn mt-1'>Subscribe Now</button>
     </span>
    
       
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Appbar;