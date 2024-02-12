import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navabar'
import HeroImg2 from '../Components/HeroImg2'
import PricingCard from '../Components/PricingCard'
import Work from '../Components/Work'


const Project = () => {
  return (
    <div>
    <Navbar/>
    <HeroImg2 heading="PROJECT." text="Some of my most recent work"/>
    <Work/>
    <PricingCard/>
      <Footer/>
    </div>
  )
}

export default Project
