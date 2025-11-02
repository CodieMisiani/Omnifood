import React from "react";
import Heroes from "../assets/hero.png"; // adjust path if different
import customer1 from "../assets/customer-1.jpg"; // adjust path if different
import { Link, NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <section class="section-hero">
        <div class="hero">
          <div class="hero-text-box">
            <h1 class="heading-primary">
              A healthy meal delivered to your door, every single day
            </h1>
            <p class="hero-description">
              The smart 365-days-per-year food subscription that will make you
              eat healthy again. Tailored to your personal tastes and
              nutritional needs.
            </p>
            <Link to="#" class="btn">
              Start Eating Well
            </Link>
            <Link to="#" class="btn">
              Learn More &darr;
            </Link>
            <div class="delivered-meals">
              <div class="delivered-imgs">
                <img
                  src={customer1}
                  alt="Customer One Picture"
                  // className="object-contain w-[10%]"
                />
                <img
                  src={customer1}
                  alt="Customer One Picture"
                  // className="object-contain w-[10%]"
                />
                <img
                  src={customer1}
                  alt="Customer One Picture"
                  // className="object-contain w-[10%]"
                />
                <img
                  src={customer1}
                  alt="Customer One Picture"
                  // className="object-contain w-[10%]"
                />
                <img
                  src={customer1}
                  alt="Customer One Picture"
                  // className="object-contain w-[10%]"
                />
              </div>
              <p class="delivered-text">
                <span>250,000+ </span>meals last year!
              </p>
            </div>
          </div>
          <div class="hero-img-box">
            <img
              src={Heroes}
              alt="Hero Picture"
              className="object-contain w-[100%]"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
