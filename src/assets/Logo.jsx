import React from "react";
import logo from "/assets/icon-v2.png";
import { Link } from "react-router-dom";
function Logo() {
  return (
    <div>
      <Link to={`/`}>
        <img src={logo} alt="" className="w-22 lg:w-30 " />
      </Link>
    </div>
  );
}

export default Logo;
