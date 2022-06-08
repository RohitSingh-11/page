import React from 'react';
import logo from './images/logo.png';

const Footer = () => {
  return (
    <>
        <div className='footer-wrapper'>
        <div className='footer-logo-wrapper'>
            <img src={logo} className='footer-logo' alt="BrightChamps logo" ></img>
        </div>
        <div className='details'>
            <div className='company-text'>Company</div>
            <a href='https://brightchamps.com' className='link'>Home</a>
            <a href='https://brightchamps.com/about' className='link'>About</a>
        </div>
    </div>
    <div className='last'>© copyright 2022 BrightChamps</div>
    </>
  );
}

export default Footer