import React from 'react'
import navImg from "../images/nav1.png";

function NavLinks() {
  return (
    <div>
        <ul className="flex items-center uppercase p-3 ">
         <li className="ml-0 mr-7 list-none">
            <a className="font-normal bg-transparent" href="">
                <img className="w-[9vw]" src={navImg} />
            </a>
         </li>
         <li className="ml-0 mr-7 list-none active border-b-2 border-b-[#1ba94c]">
            <a className="h-[60px] leading-10 text-sm bg-transparent  text-white relative font-bold " href="">
                <span>Prepare</span>
                <div className="absolute top-[-1rem] left-[3.5rem] px-1 py-1 rounded-lg text-white bg-[#097bbf] text-[10px] leading-3">NEW</div>
            </a>
         </li>
         <li className="ml-0 mr-7 list-none">
            <a className="h-[60px] leading-10 text-sm bg-transparent  text-[#b7c9cc] relative font-bold " href="">
                <span>Certify</span>
            </a>
         </li>
         <li className="ml-0 mr-7 list-none">
            <a className="h-[60px] leading-10 text-sm bg-transparent  text-[#b7c9cc] relative font-bold " href="">
                <span>Compete</span>
            </a>
         </li>

        </ul>

    </div>
  )
}

export default NavLinks