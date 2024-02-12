import React from 'react'
import Navabar from '../Components/Navabar';
import Footer from '../Components/Footer'
import HeroImg2 from '../Components/HeroImg2';
import AboutContent from '../Components/AboutContent';

const About = () => {
  return (
    <div>
      <Navabar/>
      <HeroImg2 heading="ABOUT." text="Im a friendly Front-End Developer"/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About
