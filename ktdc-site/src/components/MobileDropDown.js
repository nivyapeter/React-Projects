import React from 'react'
import { navItems } from '../constants'
import { GiHamburgerMenu } from "react-icons/gi";

function MobileDropDown({onClick}) {
  return (
    <div className="absolute bg-[#3d3d3d] px-15 w-full   z-30">
        <div className="px-[15px] mx-auto text-left">
        <GiHamburgerMenu className=" z-20 w-[16vw] h-[4vh] md:w-[8vw]  text-black border mt-3 text-xs rounded bg-white  float-right"onClick={onClick} />
         
            <div>
                <ul className="w-full">
                    {navItems.map((navItem) => {
                        return (
                            <li className="p-[15px]">
                            <a className="z-20 text-white text-2xl uppercase p-4 py-[12px] pr-[10px]" href="">{navItem.name}</a>
                        </li>
                        )
                    })}
                   
                </ul>
            </div>
        </div>

    </div>
  )
}

export default MobileDropDown