import React from "react";
import { newsItems } from "../constants";

function News() {
  return (
    <div className="py-[50px] bg-[#f6f6f6]  ">
      <div className="p-[30px] w-[80%] m-auto max-w-[1080px]">
        <h2 className="text-3xl text-[#ff3e1e] text-center font-extrabold">Latest News</h2>
      </div>
      <div className="pt-[30px] w-[80%] m-auto max-w-[1080px] md:grid md:grid-cols-2 gap-8 lg:grid-cols-3">
        {newsItems.map((newsItem) => {
          return (
            <div className="mb-[11.5%] w-full opacity-100 border-2 border-[#d8d8d8] bg-white p-[19px]">
              <div className="mx-[-20px] mt-[-20px] mb-[29px] ">
                <a href="">
                  <img src={newsItem.image} alt="" />
                </a>
              </div>
              <h2 className="text-xl text-[#000005] font-bold ">
                {newsItem.title}
              </h2>
              <p className="text-[#666] mb-[6px] font-light ">
                {newsItem.subText}
              </p>
              <div>
                <p className="text-[#666] mb-[6px] font-light text-lg">
                  {newsItem.paragraph.substring(0, 60)}...
                </p>
              </div>
            </div>
          );
        })}
       
      </div>
      <div className="pt-[30px] w-[80%] m-auto max-w-[1080px]  font-light bg-[#f6f6f6]">
          <a className="text-[#120e95] " href="">
            « Older Entries
          </a>
          <div className="p-[12px] md:w-[20vw] md:m-auto  w-[33vw] m-auto ml-3 text-white bg-[#15009b] text-lg text-center">
            <a href="">READ MORE</a>
          </div>
        </div>
    </div>
  );
}

export default News;
