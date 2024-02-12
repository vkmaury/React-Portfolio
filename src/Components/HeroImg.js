import React from "react";
import "./HeroImgStyle.css";
import IntroImg from "../assests/intro-bg.jpg";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content">
        <p>HI, I'M FREELANCER</p>
        <h1>React Developer.</h1>
        <div className="btn">
          <Link to="/project" className="btn1">
            Project
          </Link>
          <Link to="/contact" className="btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
