import React from "react";
import { headerContents } from "../constants";

function DropDown() {
  // console.log(headerContents);
  return (
    <div>
      <div className="absolute hidden md:block rounded-lg w-full bg-red-700 h-[42vh] 2xl:h-[43vh] xl:h-[62vh] z-10 ">
        <div className="m-auto px-14 max-w-7xl py-6 grid grid-cols-4">
          {headerContents?.map((headerContent) => {
            return (
              <div className="pl-12 pb-3 pt-1 text-black">
                <span className="font-bold text-lg uppercase">
                  {headerContent.title}
                </span>
                {headerContent?.contents?.map(( content ) => {
                  console.log("hai", content);
                  return (
                    <div className="max-w-xs text-black " key={content.text}>
                      <button className="border-none text-left py-[6px]">
                        {content.text}
                      </button>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default DropDown;