import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='text-center contact'>
        <h5>Contact Us</h5>
        <div className='stroke'></div>
        <li>
          <a href='mailto:somone@example.com'>Email: ouremail@gmail.com</a>
        </li>

        <li>
          <a href='tel:+01273123456'>Contact: +91 9988445533</a>
        </li>
      </div>

      <div className='d-flex justify-content-center mt-5 links'>
        <Link to='/' className='mx-3'>
          <li>Home</li>
        </Link>
        <Link to='/helpline' className='mx-3'>
          <li>Helpline</li>
        </Link>
        <Link to='/' className='mx-3'>
          <li>Privacy</li>
        </Link>
        <Link to='/' className='mx-3'>
          <li>Terms & Conditions</li>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
