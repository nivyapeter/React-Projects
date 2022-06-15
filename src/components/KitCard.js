import React from "react";
import kitsOne from "../images/kitsOne.svg";

function KitCard({text,subTextOne,subTextTwo,subTextThree,count}) {
  return (
    <div className="shadow-xl md:w-1/2 p-5 md:h-[17vh] w-[93vw] h-[max-content] m-auto relative overflow-hidden bg-white ">
      <div>
        <h3 className="font-bold text-lg leading-snug text-[#39424E]">{text}</h3>
        <div className="mt-[16px] text-[#738f93] text-sm">
          <span> {subTextOne}</span>
        </div>
      </div>
      <div className="flex items-center mt-5">
        <a className="pr-[10px] py-[5px] text-xs" href="">
            <span>{subTextTwo}</span>
        </a>
        <a className="pr-[10px] py-[5px] text-xs"  href="">
            <span>{subTextThree}</span>
        </a>
        <div className="pr-[10px] py-[5px] text-xs">
            <span>{count}</span>
        </div>
      </div>
      <img className="absolute right-[-10px] bottom-[-10px]" src={kitsOne} alt="image" />
    </div>
  );
}

export default KitCard;
