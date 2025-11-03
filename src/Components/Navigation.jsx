import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <nav class="nav-bar" className="flex items-center justify-between">
        <div class="nav-container">
          <div class="nav-containerlink">
            <ul>
              <li>
                <Link to="/HowItWorks" class="navlinks">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/Meals" class="navlinks">
                  Meals
                </Link>
              </li>
              <li>
                <Link to="/Testimonials" class="navlinks">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/Pricing" class="navlinks">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <button type="button" class="btn">
              Try For Free
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
