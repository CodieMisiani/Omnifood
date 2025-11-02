import React from "react";
import Heroes from "../assets/hero.png"; // adjust path if different
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
              nutritional needs. We have delivered 250,000+ meals last year!
            </p>
            <Link to="#" class="btn">
              Start Eating Well
            </Link>
            <Link to="#" class="btn">
              Learn More &darr;
            </Link>
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
