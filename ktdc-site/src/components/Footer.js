import React from "react";
import footerImg from "../images/footerImg.jpg";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { ImLinkedin2 } from "react-icons/im";
import { footerData } from "../constants";

function Footer() {
  return (
    <>
      <div className="bg-[#504b51]  pt-12">
        <div className=" max-w-[1360px] text-[#fff] text-center px-[15px] bg-white w-full md:w-[80vw] m-auto">
          <div>
            <div className="px-[15px]">
              <div className="py-6 flex flex-wrap x-[-15px] flex-col md:flex-row text-center text-[#fff] text-base leading-normal font-normal">
                <div className="w-[8.333%]"></div>
                <div className="md:max-w-[25%] px-[15px] ">
                  <h2 className="text-[#343a40] text-left pb-6 my-6 text-2xl border-b-2 border-[#e8e8e8]">
                    Contact Us
                  </h2>
                  <p className="text-xs text-[#343a40] text-left mb-4">
                    Kerala Tourism Development Corporation Limited.
                    <br />
                    Thiruvananthapuram-695033 - Kerala.
                    <br />
                    Phone: +91-471-2721243, 2721245
                    <br />
                    Fax: +91-471-2721249, 2727521
                    <br />
                    Email:
                    <a href="">corporate@ktdc.com</a>
                    <br />
                    For reservations :
                    <a href="">centralreservations@ktdc.com</a>
                  </p>
                </div>
                <div className="text-center md:max-w-[33.333%] px-[15px]">
                  <div className="md:pt-6 mt-6">
                    <a className="text-[#007bff]" href="">
                      <img src={footerImg} alt="" />
                      <p className="text-[#343a40] md:text-center text-left text-[13px] mb-4">
                        A Y U R V E D A H O L I D A Y S
                        <br />F R O M K T D C
                      </p>
                    </a>
                  </div>
                </div>
                <div className="md:max-w-[25%] px-[15px]">
                  <h2 className="border-b-2 border-[#e8e8e8] text-[#343a40]  text-left pb-6 my-6 text-2xl ">
                    Follow Us
                  </h2>
                  <div className="text-center px-[15px] text-[#343a40] flex flex-row ">
                    <a href="">
                      <FaFacebookF />
                    </a>
                    <a href="">
                      <AiOutlineTwitter />
                    </a>
                    <a href="">
                      <AiOutlineInstagram />
                    </a>
                    <a href="">
                      <ImLinkedin2 />
                    </a>
                  </div>
                </div>
                <div className="w-[8.333%]"></div>
                <div className="text-[13px] text-[#057368] pt-6  w-[80vw]">
                  {footerData.map((data) => {
                    return <a className="p-1" href="">{data.name} | </a>;
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#504b51] py-5">
          <div className="mx-w-[1360px] text-[#fff] px-[15px] mx-auto text-center">
            <p className="text-[#847f83] text-center ">
              Copyright © KTDC. Designed & Maintained by Invis Multimedia
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
