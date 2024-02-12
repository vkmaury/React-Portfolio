import { Link } from "react-router-dom";
import "./AboutContentStyles.css";

import React from 'react'
import react1 from "../assests/react1.jpg";
import react2 from "../assests/react2.webp";

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I ?</h1>
            <p>Im a react front-end developer. I create responsive secure websites for my clients.</p>
            <Link to="/contact">
                <button className="btn4">Contact</button>     
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={react1}  className="img" alt="images"/>
                </div>
                <div className="img-stack bottom">
                    <img src={react2}  className="img" alt="images"/>
                </div>

            </div>

        </div>
      
    </div>
  )
}

export default AboutContent
