import React from "react";
import {navItems} from "../constants";
import ktdcLogo from "../images/ktdcLogo.jpg";
import offLogo from "../images/offLogo.png";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import {FaFacebookF} from "react-icons/fa"
import {ImLinkedin2} from "react-icons/im"


function Header() {
  return (
    <div>
      {/* black header */}
      <div className="border-t-2 border-[#f1a93a] bg-[#3d3d3d] 2xl:px-[15px] 2xl:h-[6vh] xl:h-[9vh]  xl:pl-[10px]  xl:pr-[15px] hover:text-[#f1a93a]">
        <div className="max-w-[1360px] mx-auto my-[10px] px-[15px] w-full">
          <ul className="my-0 mx-auto text-white flex flex-row items-center">
            {navItems?.map((navItem)=> {
              return (
                  <li>
                  <a
                    className={`text-white text-[13px] py-[10px] px-[15px] uppercase hover:text-[#f1a93a] active:text-[#f1a93a] ${navItem.status && "text-[#f1a93a]"}`}
                    href=""
                  >{navItem.name}</a>
                </li>
            )})}
          
          </ul>
        </div>  
      </div>
      {/* white header */}
      <div className="text-[#fff] py-[5px] h-11vh] bg-yellow-100">
        <div className="max-w-[1360px] mx-auto my-[10px] px-[15px] w-full">
          <div className=" flex flex-row justify-between items-center">
            <div className="max-w-[50%] px-[15px]">
              <a href="">
                <img className="h-[9vh] " src={ktdcLogo} alt="KTDC" />
              </a>
            </div>
            <div className="max-w-[50%] px-[15px] flex flex-row-reverse">
              <div className="float-right pt-[12px] ">
                <a href="">
                  <img className="h-[8vh]" src={offLogo} alt="" />
                </a>
              </div>
              <div className="mr-[0.5rem] pt-4 flex flex-col">
                  <a className="bg-[#019fde] text-[#fff] rounded-3xl w-[135px] text-sm font-semibold mb-[10px] py-[5px] px-[25px] " href="">Book Now</a>
                  <ul className="float-right w-[135px] text-center flex flex-row">
                    <li className="mx-[5px] list-none">
                    <a className="text-[#454545] text-lg font-semibold" href=""> <FaFacebookF /></a>
                    </li>
                    <li className="mx-[5px] list-none">
                    <a className="text-[#454545] text-lg font-semibold" href=""> <AiOutlineTwitter /></a>
                    </li>
                    <li className="mx-[5px] list-none">
                    <a className="text-[#454545] text-lg font-semibold" href=""><AiOutlineInstagram /></a>
                    </li>
                    <li className="mx-[5px] list-none">
                    <a className="text-[#454545] text-lg font-semibold" href=""><ImLinkedin2 /></a>
                    </li>
                  </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Header;
