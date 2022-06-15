import React, { useState } from "react";
import navImg from "../images/nav1.png";
import { GiHamburgerMenu } from "react-icons/gi";
import HamburgerMobile from "./HamburgerMobile";
import { AiOutlineClose } from "react-icons/ai";

function NavLinks() {
  const [state, setState] = useState(false);
  const displayIcon = () => {
    setState(true);
  };
  return (
    <div>
      <ul className="flex items-center uppercase md:p-3 p-5">
        <li className="ml-0 mr-7 list-none flex flex-row items-center gap-8">
          {state === false ? (
            <GiHamburgerMenu
              className="md:hidden w-[30px] h-[29px] text-white"
              onClick={displayIcon}
            />
          ) : (
            <div
              className=" cursor-pointer"
              onClick={() => setState(false)}
            >
              <AiOutlineClose className="w-[30px]  text-white md:border-2  md:border-white h-[31px]" />
            </div>
          )}
          <a className="font-normal bg-transparent" href="">
            <img className="w-[44vw]  md:w-[22vw] xl:w-[9vw]" src={navImg} />
          </a>
          {state === true ? <HamburgerMobile /> : null}
        </li>
        <li className="hidden md:block ml-0 mr-7 list-none active border-b-2 border-b-[#1ba94c]">
          <a
            className="h-[60px] leading-10 text-sm bg-transparent  text-white relative font-bold "
            href=""
          >
            <span>Prepare</span>
            <div className="absolute top-[-1rem] left-[3.5rem] px-1 py-1 rounded-lg text-white bg-[#097bbf] text-[10px] leading-3">
              NEW
            </div>
          </a>
        </li>
        <li className=" hidden md:block ml-0 mr-7 list-none">
          <a
            className="h-[60px] leading-10 text-sm bg-transparent  text-[#b7c9cc] relative font-bold "
            href=""
          >
            <span>Certify</span>
          </a>
        </li>
        <li className="hidden md:block ml-0 mr-7 list-none">
          <a
            className="h-[60px] leading-10 text-sm bg-transparent  text-[#b7c9cc] relative font-bold "
            href=""
          >
            <span>Compete</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavLinks;
