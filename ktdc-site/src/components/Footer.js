import React from 'react'
import footerImg from "../images/footerImg.jpg";
import {
    AiOutlineInstagram,
    AiOutlineTwitter,
  } from "react-icons/ai";
  import {FaFacebookF} from "react-icons/fa"
  import {ImLinkedin2} from "react-icons/im"

function Footer() {
  return (
    <>
    <div className="bg-[#504b51] h-[7vh]"></div>
    <div className=" text-[#fff] text-center pt-12">
        <div className="max-w-[1360px] mx-auto my-[10px] px-[15px] w-full">
            <div className="px-[15px]">
                <div className="py-6 flex flex-wrap x-[-15px] text-center text-[#fff] text-base leading-normal font-normal">
                 <div className="w-[8.333%"></div>
                 <div className="max-w-[25%] px-[15px] ">
                    <h2 className="text-[#343a40] text-left pb-6 my-6 text-2xl border-b-1 border-[#e8e8e8]">Contact Us</h2>
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
                 <div className="text-center max-w-[33.333%] px-[15px]">
                    <div className="pt-6 mt-6">
                        <a className="text-[#007bff]" href="">
                            <img src={footerImg} alt="" />
                            <p className="text-[#343a40] text-center text-[13px] mb-4">
                            A Y U R V E D A  H O L I D A Y S 
                            <br />
                            F R O M  K T D C
                            </p>
                        </a>
                    </div>
                 </div>
                 <div className="max-w-[25%] "> 
                    <h2 className="border-b-1 text-[#343a40] border-[#e8e8e8] text-left pb-6 my-6 text-2xl ">Follow Us</h2>
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
                 <div className="w-[8.333%"></div>
                 <div className="text-[#343a40] text-[13px] pt-6 px-[15px] ">
                    <a href=""></a>
                 </div>
                </div>

            </div>
        </div>

    </div>
    </>
  )
}

export default Footer