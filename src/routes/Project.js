import React from 'react'
import Navbar from '../components/Navbar'
import Footer from "../components/Footer"
import HeroImg2 from '../components/HeroImg2'
import Pricing from '../components/Pricing'
import WorkCard from "../components/WorkCard"



const Project = () => {
  return (
    <div>
       <Navbar/>
       <HeroImg2 heading="PROJECTS..." text="SOME OF MY MOST RECENT WORKS"/>
       <Pricing/>
       <WorkCard/>
      <Footer/>
    </div>
  )
}

export default Project