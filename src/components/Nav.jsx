import logo from "../images/logo.svg";
import React, { useState } from "react";

const Nav = () => {
  const [view, setView] = useState(false);
  const [icon, setIcon] = useState("fa-solid fa-bars");
  const routes = ["home", "products", "jops", "pricing", "about"];

  const changeHeight = () => {
    if (window.screen.width < 1024) {
      if (view) {
        setView(false);
        setIcon("fa-solid fa-bars");
        document.querySelector("nav").style.height = "60px";
      } else {
        setView(true);
        setIcon("fa-solid fa-xmark");
        document.querySelector("nav").style.height = "420px";
      }
    }
  };
  return (
    <nav className="w-full px-[5%] h-[60px] flex overflow-hidden flex-wrap lg:items-center lg:justify-between duration-1000 bg-[#263640] absolute">
      <header className="w-full lg:w-fit h-[60px] text-white flex justify-between items-center">
        <p className="text-[20px] font-bold flex items-center gap-2">
          <img src={logo} className="h-[20px] w-[20px]" /> ISTAIX
        </p>
        <i
          onClick={changeHeight}
          className={`${icon} block lg:hidden text-[25px]`}
        ></i>
      </header>
      <aside className="w-full lg:w-fit text-white flex flex-wrap gap-0 lg:gap-[40px]">
        {routes.map((link, index) => (
          <a
            key={index}
            href=''
            onClick={changeHeight}
            className="h-[60px] lg:h-fit w-full lg:w-fit capitalize text-[18px] flex items-center justify-center rounded-lg"
          >
            {link}
          </a>
        ))}
      </aside>
      <button className="w-[150px] h-[40px] text-white text-[18px] rounded bg-[#7591A3] mx-auto lg:mx-0">
        Get started
      </button>
    </nav>
  );
};

export default Nav;
