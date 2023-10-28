import React from 'react';
import { Row, Col, Card } from 'antd';
import './Footer.css';
import logo from '../assets/radar.png';

export const Footer = () => {
  return (
  <footer className="footer">
    <div className="footer-logo">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/1245px-Logo_of_Twitter.svg.png" 
      alt="Company Logo" id='logo' />
    </div>
</footer>

  );
}

export default Footer;
