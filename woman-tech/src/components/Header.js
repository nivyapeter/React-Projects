import React, { useState } from "react";
import logoImg from "../images/logoImg.png";
import Nav from "./Nav";
import TopWhite from "./TopWhite";
import { GiHamburgerMenu } from "react-icons/gi";
import MobileDropDown from "./MobileDropDown";
import Events from "./Events";

function Header() {
  const[state,setState] = useState(false)
  const displayBlock =() => {
    setState(true)
  }
  return (
    <div>
      <TopWhite />
      <div className="lg:top-[35px] lg:fixed bg-[#15009b] leading-6 font-medium w-full z-[99999] 2xl:h-[9vh] h-[12vh]">
        <div className="2xl:w-full w-[80%] lg:w-full max-w-[1080px] 2xl:max-w-full md:py-[30px] text-left z-[99] m-auto relative">
            <div className="lg:pt-5 absolute w-full bg-transparent flex flex-row items-center justify-between">
                <a href="">
                    <img className="2xl:w-[8vw] w-[21vw] md:w-[18vw] lg:w-[12vw]" src={logoImg} alt="image" />
                </a>
                <div className="px-4  cursor-pointer lg:hidden block">
                {state===false?<GiHamburgerMenu className="w-[30px] h-[80px] text-[#00f4cb]" onClick={displayBlock} /> :
                <GiHamburgerMenu className="w-[30px] h-[80px] text-[#00f4cb]" onClick={()=>setState(false)} />}
              </div>
            </div>
            <div className="pl-[177px] pt-[35px] float-right lg:pl-0 lg:pt-6">
              <Nav />
             
            </div>

        </div>
       
      </div>
       {state === true ? <MobileDropDown /> : null}

    </div>
  );
}

export default Header;
