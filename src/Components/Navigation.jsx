import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <nav class="nav-bar" className="flex items-center justify-between">
        <div class="nav-container">
          <div class="nav-containerlink">
            <NavLink to="/HowItWorks" class="navlinks">
              HowItWorks
            </NavLink>
            <NavLink to="/Meals" class="navlinks">
              Meals
            </NavLink>
            <NavLink to="/Testimonials" class="navlinks">
              Testimonials
            </NavLink>
            <NavLink to="/Pricing" class="navlinks">
              Pricing
            </NavLink>
          </div>
          <div>
            <button type="button" class="btn">
              TryForFree
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
