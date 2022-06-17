import React from "react";
import logoImg from "../images/logoImg.png";
import Nav from "./Nav";
import TopWhite from "./TopWhite";
import { GiHamburgerMenu } from "react-icons/gi";

function Header() {
  return (
    <div>
      <TopWhite />
      <div className="md:top-[35px] fixed bg-[#15009b] leading-6 font-medium w-full z-[99999] 2xl:h-[9vh] h-[12vh]">
        <div className="2xl:w-full w-[80%] max-w-[1080px] 2xl:max-w-full 2xl:file:px-[30px] text-left z-[99] m-auto relative">
            <div className="md:pt-5 absolute w-full bg-transparent flex flex-row items-center justify-between">
                <a href="">
                    <img className="2xl:w-[8vw] w-[21vw]" src={logoImg} alt="image" />
                </a>
                <div className="px-4  cursor-pointer md:hidden block">
                <GiHamburgerMenu className="w-[30px] h-[80px] text-[#00f4cb]" />
              </div>
            </div>
            <div className="pl-[177px] pt-[35px] float-right">
              <Nav />
             
            </div>

        </div>

      </div>
      
    </div>
  );
}

export default Header;
