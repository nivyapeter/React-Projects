import React from "react";
import { footerContents } from "../constants";
import {
    AiOutlineInstagram,
    AiOutlineTwitter,
  } from "react-icons/ai";
import {FaFacebookF} from "react-icons/fa"

function Footer() {
  return (
    <div className="bg-[#0d005e] ">
      <div className="w-[80%] max-w-[1080px] m-auto text-left ">
        <div className="py-[12%]">
          {footerContents.map((footercontent) => {
            return (
              <div className="mb-[11.5%]">
                <div>
                  <h2 className="text-white font-extrabold text-xl">{footercontent.title}</h2>
                  {footercontent.contents.map((content) => {
                    return (
                      <div>
                        <ul>
                          <li>
                            <a className="text-white font-ligh text-sm" href="">
                              {content.text}
                            </a>
                          </li>
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <div className="w-[80%] max-w-[1080px] m-auto text-white">
            <ul className="text-center py-4  flex flex-row justify-evenly">
                <li>
                    <a href="">Cookie Policy</a>
                </li>
                <li>
                    <a href="">Privacy Policy</a>
                </li>
                <li>
                    <a href="">Terms of use</a>
                </li>
            </ul>
        </div>
        <div className="bg-[#0d005e] pt-[15px] pb-[5px]">
            <div className="w-[80%] max-w-[1080px] m-auto text-left">
                <ul className="mb-[5px] flex flex-row text-2xl justify-center items-center fill-white text-white">
                    <li className="ml-5">
                        <a href=""> <FaFacebookF/></a>
                    </li>
                    <li className="ml-5">
                        <a href=""> <AiOutlineTwitter /></a>
                    </li>
                    <li className="ml-5">
                        <a href=""><AiOutlineInstagram /></a>
                    </li>

                </ul>
            </div>

        </div>
        <div className="text-[#cccccc] w-[80%] max-w-[1080px] m-auto">
        Women in Tech ® All rights reserved. Website by 
        <a className="text-[#cccccc] font-bold" href=""> Social Brain</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
