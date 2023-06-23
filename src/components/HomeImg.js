import "./HomeStyle.css"
import Intro from "../assets/intro-bg.jpg"
import{Link} from "react-router-dom"
import React from 'react'

const Home = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={Intro}alt="Intro"/>


      </div>
      <div className="content">
        <p>I'M DHINAKAR </p>
        <h1>REACT DEVELOPER</h1>
        <div>
          <Link to="/project" className="btn">PROJECTS</Link>
          <Link to="/contact" className="btn btn-light">CONTACT</Link>
        </div>

      </div>

    </div>
  )
}

export default Home