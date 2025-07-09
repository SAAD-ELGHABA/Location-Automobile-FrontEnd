import React from "react";
import LanguageSwitcher from "@components/LanguageSwitcher";
import Logo from "../assets/Logo";
function NavBar() {
  return (
    <header className="text-white bg-black fixed top-0 w-full z-50 ">
      <nav className="flex justify-between items-center lg:w-5/6 w-[90%] mx-auto ">
        <div>
          <Logo />
        </div>
        <div>
          <LanguageSwitcher />
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
