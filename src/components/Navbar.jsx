import React, { useState } from "react";
import { styles } from "../Util/styles";
import { navigationLinks } from "../Util/constants";
import { logo } from "../assets";
import { menu } from "../assets";
import { close } from "../assets";

const Navbar = () => {
  const [toogleNav, setToggleNav] = useState(false);
  const [active, setActive] = useState("home");

  const toggleHandler = () => setToggleNav((prev) => !prev);
  const toggleActive = (id) => setActive(id);
  return (
    <div className={`w-full py-6 ${styles.flexBetween}`}>
        <img src={logo} alt="logo" className="w-32" />
      <ul className="list-none sm:flex w-full justify-end items-center hidden">
        {navigationLinks.map((nav, idx) => (
          <li
            onClick={() => toggleActive(nav.id)}
            key={nav.id}
            className={`font-montserrat font-normal cursor-pointer text-[16px] ${
              idx === navigationLinks.length - 1 ? "mr-0" : "mr-10"
            }
            ${active === nav.id ? "text-white" : "text-lightWhite"}
            hover:text-white transition-all duration-500`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      {/* Navigation */}
      <div className="sm:hidden flex  justify-end items-center">
        <img
          src={toogleNav ? close : menu}
          alt="nav"
          className="w-[30px] h-[30px] object-contain"
          onClick={toggleHandler}
        />

        <div
          className={`${
            toogleNav ? "hidden" : "flex"
          } my-3 p-6 bg-black-gradient absolute top-20 right-0 left-0 w-full sidebar`}
        >
          <ul className="list-none w-full flex-col  flex justify-center items-center">
            {navigationLinks.map((nav, idx) => (
              <li
                onClick={() => toggleActive(nav.id)}
                key={nav.id}
                className={`font-montserrat font-normal cursor-pointer text-[16px]       
              ${active === nav.id ? "text-white" : "text-lightWhite"}
              hover:text-white transition-all duration-500`}
              >
                {nav.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
