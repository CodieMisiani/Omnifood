import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <nav>
        <NavLink to="/" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/HowItWorks" activeClassName="active">
          HowItWorks
        </NavLink>
        <NavLink to="/Meals" activeClassName="active">
          Meals
        </NavLink>
        <NavLink to="/Testimonials" activeClassName="active">
          Testimonials
        </NavLink>
        <NavLink to="/Pricing" activeClassName="active">
          Pricing
        </NavLink>
      </nav>
    </>
  );
};

export default Navigation;
