import React from "react";
import { womanCommunity } from "../constants";
import woman1 from "../images/woman1.jpg";

function WomanCommunities() {
  return (
    <div className="pt-[50px] bg-white">
      <div className="py-[30px] max-w-[1080px] w-[80%] m-auto">
        <div className="text-left mb-7">
          <h1 className="text-[#ff3e1e] text-4xl font-extrabold ">
          Behind the numbers, there are WOMEN and communities whose lives we have changed.
          </h1>
        </div>
      </div>
      <div className="py-[30px] max-w-[1080px] w-[80%] m-auto lg:grid lg:grid-cols-2 gap-10">
        {womanCommunity.map((womanCommunity)=> {
            return (
                <div className="w-full mb-[30px]">
                <div className="mb-[30px]">
                    <img src={womanCommunity.image} alt="s" />
                </div>
                <div>
                    <h1 className="text-lg text-[#000000] text-left font-extrabold pb-4">{womanCommunity.title}</h1>
                    <p className="text-left">{womanCommunity.content}</p>
                    <p className="text-right">
                   {womanCommunity.rightText1}
                    </p>
                    <p className="text-right">
                   {womanCommunity.rightText2}
                    </p>
                </div>
    
            </div>
            )
        })}
       
      </div>
    </div>
  );
}

export default WomanCommunities;
