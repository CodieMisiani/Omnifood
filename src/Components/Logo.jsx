import React from "react";
import logo from "../assets/omnifood-logo.png"; // adjust path if different
const Logo = () => {
  return (
    <div>
      <img src={logo} alt="Omnifood logo" className="object-contain w-[25%]" />
    </div>
  );
};

export default Logo;
