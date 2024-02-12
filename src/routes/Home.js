import React from "react";
import Navbar from "../Components/Navabar";
import HeroImg from "../Components/HeroImg";
import Footer from "../Components/Footer";
import Work from '../Components/Work'

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroImg />
      <Work/>
      <Footer />
    </>
  );
};

export default Home;
