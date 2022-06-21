import React from 'react'
import { mobileContents } from '../constants'

function MobileDropDown() {
  return (
    <div className="bg-[#15009b] border-[#01efcc] border-t-2 w-[66vw] h-[max-content] transition ease-out duration-150 absolute left-[16%]">
        <ul  className="p-[5%]">
            {mobileContents?.map((mobilecontent) => {
                return(
                  <li className="py-[10px] px-[5%]">
                  <a className="font-bold uppercase  text-sm text-white " href="">{mobilecontent.title}</a>
                  <ul className="pl-[10px]">
                    {mobilecontent?.contents?.map((content)=> {
                        return (
                         <li className="py-[10px] px-[5%]">
                         <a className="font-bold uppercase py-[10px] px-[5%] text-sm text-white " href="">{content.text}</a>
                         </li>
            )})}
                     
                  </ul>
              </li>
            )})}
          

        </ul>
    </div>
  )
}

export default MobileDropDown