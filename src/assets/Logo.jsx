import React from "react";
import logo from "/assets/logo.png";

function Logo() {
  return (
    <div>
      <img src={logo} alt="" className="w-22 h-22 lg:w-26 lg:h-26" />
    </div>
  );
}

export default Logo;
