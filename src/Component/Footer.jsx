import React from 'react'
import './Footer.css'
import { BsTwitter,BsInstagram,BsFacebook,BsYoutube } from "react-icons/bs";

const Footer = () => {
  return(
    <div className="footer">
      <div className="sb__footer section__padding">
        {/* <div className="sb__footer-links">
        <h4>Social Media</h4>
            <a><BsTwitter/></a>
            <a><BsInstagram/></a>
            <a><BsFacebook/></a>
            <a><BsYoutube/></a>
          
        </div> */}

        <div className='inrow'>
        <div className="sb__footer-links_div1">
        <h4>Address:</h4>
          <a href="#">
            <p>Hongkong Bank Building, M.G. Road, Fort, Mumbai-400001.</p>
          </a>
          <a href="#">
            <p>Prakashgad, Plot No. G-9, Anant Kanekar Marg Bandra (E), Mumbai–400051</p>
          </a>
          
        </div>
        
        <div className="sb__footer-links_div socialmedia">
        <h4>Social Media</h4>
            <a><BsTwitter/></a>
            <a><BsInstagram/></a>
            <a><BsFacebook/></a>
            <a><BsYoutube/></a>
        </div>
        </div>
        <hr />
        <div className="sb__footer-below">
          <div className="sb__footer-copyright">
          <p>© This is the official website of MSEDCL.
All rights reserved. Website Ownership and Maintenance: MSEDCL</p>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Footer