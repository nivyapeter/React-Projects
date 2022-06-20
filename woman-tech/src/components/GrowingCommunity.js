import React from 'react'
import {growingImg} from "../images/index"

function GrowingCommunity() {
  return (
    <div className="bg-[#15009b] py-[50px] ">
        <div className="p-[30px]  md:p-[25px] max-w-[1080px] w-[80%] m-auto ">
            <h2 className="text-4xl text-[#00f4cb] font-bold  text-center lg:text-[29px]">A Growing community of <br />180.000 members in 6 continents</h2>
        </div>
        <div className="border-b-1 border-white ">
            <img src={growingImg} alt="image" />
        </div>
        <div className="bg-[#15009b] p-[50px] md:pb-[50px] md:pt-0 md:text-center ">
        <div className=" ">
            <a className="p-[12px] border-2 border-white text-white bg-[#15009b] text-lg text-center " href="">DISCOVER OUR CHAPTERS</a>
        </div>
        </div>
    </div>
  )
}

export default GrowingCommunity