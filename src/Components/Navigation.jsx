import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <nav className="flex items-center justify-between">
        <div className="flex space-x-6">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/HowItWorks">HowItWorks</NavLink>
          <NavLink to="/Meals">Meals</NavLink>
          <NavLink to="/Testimonials">Testimonials</NavLink>
          <NavLink to="/Pricing">Pricing</NavLink>
        </div>
        <div>
          <button type="button" className="pl-5 pr-5">
            Click Me
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
