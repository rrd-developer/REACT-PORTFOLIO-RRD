import "./PricingStyle.css";
import { Link } from "react-router-dom";

import React from 'react'

const Pricing = () => {
  return (
    <div className="pricing">
        <div className="card-container">
            <div className="card">
                <h3>- BASIC -</h3>
                <span className="bar"></span>
                <p className="btc">$ 100</p>
                <p>- 3 DAYS -</p>
                <p>- 3 PAGES -</p>
                <p>- FEATURED -</p>
                <p>- RESPONSIVE DESIGN -</p>
                <Link to="/contact" className="btn">PURCHASE NOW</Link>

            </div>
            <div className="card">
                <h3>- PREMIUM -</h3>
                <span className="bar"></span>
                <p className="btc">$ 200</p>
                <p>- 2 DAYS -</p>
                <p>- 5 PAGES -</p>
                <p>- FEATURED -</p>
                <p>- RESPONSIVE DESIGN -</p>
                <Link to="/contact" className="btn">PURCHASE NOW</Link>

            </div>
            <div className="card">
                <h3>- BUSINESS -</h3>
                <span className="bar"></span>
                <p className="btc">$ 300</p>
                <p>- 5 DAYS -</p>
                <p>- 8 PAGES -</p>
                <p>- FEATURED -</p>
                <p>- RESPONSIVE DESIGN -</p>
                <Link to="/contact" className="btn">PURCHASE NOW</Link>

            </div>
        </div>

    </div>
  )
}

export default Pricing