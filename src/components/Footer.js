import "./FooterStyle.css";

import React from 'react'
import { FaFacebook, FaHome, FaMailBulk, FaPhone, FaTwitter, FaLinkedin } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                    <div>
                        <p>2/2025 Aruppukottai</p>
                        <p>Virdhunagar</p>
                    </div>

                </div>
                <div className="phone">
                    <h4>
                    <FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                    8610376135
                    </h4>
                   
                    <div>
                        
                    </div>

                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                    rdhinakar25@gmail.com</h4>
                    
                    <div>
                        
                    </div>

                </div>
            </div>
            <div className="right">
                <h4>About the company</h4>
                <p>This is Dhinakar, React developer in Astro Web Solution</p>
                <div className="social">
                <FaFacebook size={30} style={{color:"#fff",marginRight:"1rem"}}/>
                <FaTwitter size={30} style={{color:"#fff",marginRight:"1rem"}}/>
                <FaLinkedin size={30} style={{color:"#fff",marginRight:"1rem"}}/>

                </div>
            </div>

        </div>

    </div>
  )
}

export default Footer