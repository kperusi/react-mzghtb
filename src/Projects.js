import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Calculator from "./Calculator";
import "./assignment.css";
import img from "./Capture.PNG";
export default function Projects() {
  return (
    <div className="project-container">
      <div className='project-navlink-wrap'>
      <NavLink to="calculator" className="project-calculator" >
        <h1>Calculator</h1>
      </NavLink><hr />
      <NavLink to="addcomment" className="project-calculator" >
        <h1>Add Comments</h1>
      </NavLink><hr/>
      <NavLink to="review" className="project-calculator" >
        <h1>View Comments</h1>
      </NavLink> 
      </div>
      <Outlet />

    </div>
  );
}
