import React from "react";
import Navigation from "./Navigation";
import Logo from "./Logo";

const Header = () => {
  return (
    <>
      <div className="w-full max-w-6xl mx-auto px-4 py-3 flex items-center gap-6">
        <Logo />
        <Navigation />
      </div>
    </>
  );
};

export default Header;
