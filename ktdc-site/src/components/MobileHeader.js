import React, { useState } from "react";
import ktdcLogo from "../images/ktdcLogo.jpg";
import offLogo from "../images/offLogo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import MobileDropDown from "./MobileDropDown";

function MobileHeader() {
  const [state, setState] = useState(false);
  const showHeader = () => {
    setState(true);
  };
  const hideHeader = () => {
    setState(false);
  };

  return (
    <div className="bg-white  w-full block lg:hidden border-t-2 border-[#f1a93a]">
      {state === true ? <MobileDropDown onClick = {hideHeader} /> : null}
      <div className="px-[15px] mx-auto">
        <div className="px-[15px] flex justify-between ">
          <a className="text-left" href="">
            <img className="w-[70px]" src={ktdcLogo} alt="KTDC" />
          </a>
            <GiHamburgerMenu
              className="w-[24px] h-[55px] text-black float-right"
              onClick={showHeader}
            />
        </div>
        <div className="px-[15px] w-full flex flex-row-reverse items-center gap-28 h-[6vh] ">
          <div className="float-right pt-[10px] text-right">
            <a href="">
              <img className="w-[73px] m-auto" src={offLogo} alt="" />
            </a>
          </div>
          <div className="float-right  pt-[10px] text-right">
            <a
              className="bg-[#019fde] text-[#fff] rounded-3xl w-[135px] text-sm font-semibold mb-[10px] py-[5px] px-[25px] "
              href=""
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileHeader;
