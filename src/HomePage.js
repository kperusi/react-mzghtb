import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import Calculator from "./Calculator";
import "./assignment.css";
import img from "./calc";
import Hambuger from "./Hambuger";

function HomePage() {
  const navigate = useNavigate();
  return (
    <>
      <div className="home">
        <h1>Meet My Calculator <br/>
          React App.</h1>
        <h2> Fell free to review and comment</h2>
        <p>You can go to my project page to check them out</p>
        <div to="calcul" className="calculator-link">
       
          <div className="calculator-img">
          <div className="image-wrap">
          
          </div>
          </div>
        </div>

        <div className="other-links">
        <NavLink className = 'contact' to="review">Comments</NavLink>
        <NavLink className = 'tech-used-link' to="technologyused">Technology Used</NavLink>
        </div>
       
      </div>
      <Outlet />
    </>
  );
}

export default HomePage;
