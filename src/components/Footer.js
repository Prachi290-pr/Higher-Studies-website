import React from 'react'
import '../styles/Footer.css';
import { TiSocialFacebookCircular } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";

const Footer = () => {
  return (
    <div className='footer'>
        <div className='container'>
           
            <div className='Socials'>
              <h3>Contact Us At :   </h3>
              <TiSocialFacebookCircular  className='icon'/>
              <TiSocialLinkedin className='icon' />
              <SlSocialInstagram  className='icon'/>
            </div>
            <p>&copy; COPYRIGHTS RESERVED -2024</p>
        </div>
    </div>
  )
}

export default Footer
