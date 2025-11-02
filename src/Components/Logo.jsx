import React from "react";
import logo from "../assets/omnifood-logo.png"; // adjust path if different
const Logo = () => {
  return (
    <div>
      <img src={logo} alt="Omnifood logo" className="object-contain w-[20%]" />
    </div>
  );
};

export default Logo;
