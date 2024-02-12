import "./WorkCardStyles.css";

import React from 'react'

import {NavLink} from "react-router-dom";


const WorkCard = (props) => {
  return (
    <div className="project-card">
          <img src={props.imgsrc} alt="images"/>
          <h3 className="project-title">{props.title}</h3>
          <div className="pro-details">
            <p>{props.text}</p>
            <div className="pro-btns">
              <NavLink to={props.view} className="btn3">
                View
              </NavLink>
              <NavLink to="url.com" className="btn3">
                Source
              </NavLink>

            </div>

          </div>

        </div>
  )
}

export default WorkCard
