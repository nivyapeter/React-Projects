import React from "react";
import { footerItems } from "../constants";

function Footer() {
  return (
    <div className="mt-7 px-5 py-4 text-center text-sm ">
      <ul className="flex xl:items-center xl:justify-center items-start justify-start w-[93vw] flex-wrap xl:flex-nowrap gap-4 xl:gap-8">
        {footerItems.map((footerItem) => {
          return (
            <li className="inline-block list-none">
              <a className="font-normal text-[#097bbf]" href="">{footerItem}</a>
              <div>
            <div className="border-r-2 border-red-400 pl-4"></div>
            </div>
            </li>
            
          );
        })}
      </ul>
    </div>
  );
}

export default Footer;
