import "./FooterStyle.css";
import React from "react";
import {
  FaFacebook,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Patrakar Puram</p>
              <p>Kanpur(Uttar Pradesh)</p>
            </div>
          </div>
          <div className="phone">
            <h6>
              <FaPhone
                size={15}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              +91-7007073182
            </h6>
          </div>
          <div className="email">
            <h6>
              <FaMailBulk
                size={15}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              vikaskumarmourya19@gmail.com
            </h6>
          </div>
        </div>
        <div className="right">
          <h4>About the company</h4>
          <p>
            This is me Vikas Kumar Mourya. CEO & Founder of This Company. I
            enjoy discussing new projects and design challange.
          </p>
          <div className="social">
            <FaFacebook
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <FaTwitter
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <FaLinkedin
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
