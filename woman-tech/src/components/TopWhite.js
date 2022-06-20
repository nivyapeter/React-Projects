import React from "react";
import {
    AiFillFacebook,
    AiOutlineInstagram,
    AiOutlineTwitter,
  } from "react-icons/ai";

function TopWhite() {
  return (
    <div>
      <div className="w-full hidden lg:block max-w-full px-[30px] md:pt-3 font-semibold text-left lg:fixed bg-white">
        <div className="float-right flex flex-row items-center text-lg fil-[#15009b] ">
          <ul className="mr-5 list-none flex flex-row pb-2">
            <li className="ml-3 mt-[-2px]">
              <a href="https://www.facebook.com/WomenInTechOrg/">
                <AiFillFacebook />
              </a>
            </li>
            <li className="ml-3 mt-[-2px]">
              <a href="https://twitter.com/womenintechorg">
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="ml-3 mt-[-2px]">
              <a href="https://www.facebook.com/WomenInTechOrg/">
                <AiOutlineInstagram />
              </a>
            </li>
          </ul>
          <ul className="flex items-center flex-row text-[#15009b] ">
            <li className="mr-[15px] text-right ">
              <a
                className="pb-[0.75em] block text-sm font-normal uppercase  "
                href=""
              >
                News
              </a>
            </li>
            <li className="mr-[15px] text-right ">
              <a
                className="pb-[0.75em] block text-sm font-normal uppercase  "
                href=""
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TopWhite;
