import React from "react";
import { areaItems } from "../constants";

function Area() {
  return (
    <div className="bg-[#00f4cb] py-[50px]">
      <div className="py-[30px] max-w-[1080px] w-[80%] m-auto">
        <div className="text-left mb-7">
          <h1 className="text-[#15009b] text-4xl font-extrabold ">
          More than a network, since 2018 Women in Tech® has directly impacted over 200.000 women across the world in 4 focus areas:
          </h1>
        </div>
      </div>
      <div className="py-[30px] max-w-[1080px] w-[80%] m-auto md:grid md:grid-cols-2 lg:flex lg:flex-row">
        {areaItems.map((areaItem) => {
          return (
            <div className="mb-[30px]">
              <div className="text-center max-w-[550px] ">
                <img className="w-[39vw] md:w-[17vw] m-auto" src={areaItem.image} alt="" />
              </div>
              <div className="text-[#15009b] md:w-[23 vw] md:m-auto font-bold text-center leading-relaxed pt-4">
                <h2 className="text-xl">{areaItem.heading}</h2>
                <p>{areaItem.subHeading}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Area;
