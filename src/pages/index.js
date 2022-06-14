import React from "react";
import Header from "../components/Header";
import WhiteCard from "../components/WhiteCard";
import WiteBar from "../components/WiteBar";

function index() {
  return (
    <div>
      <Header />
      <WiteBar />
      <div className="bg-slate-100">
        <div className="m-auto xl:w-[91vw] flex flex-col ">
          <h2 className="mt-10 mb-5 text-black">Your Preparation</h2>
          <div className="flex flex-row justify-between">
            <WhiteCard
              text="Preparation Kits"
              title="Interview Preparation Kit"
              subTitle="Get interview ready for top companies by solving , an interview preparation kit."
              btnText="View all Kits"
              className="text-white bg-[#29b35b] mt-12"
            />
            <WhiteCard
              text="New Skill"
              title="Add your first skill"
              subTitle="Explore and add your first skill to get started. HackerRank offers a variety of skills, tracks and tutorials for you to learn and improve."
              btnText="Explore Skills"
              className="border-2 border-[#29b35b] text-[#29b35b] bg-white  mt-8"
            />
          </div>
        </div>
        <div className="m-auto xl:w-[91vw] flex flex-col ">
          <h2 className="mt-10 mb-5 text-black">Your Preparation</h2>
          <div className="flex flex-row justify-between">
            <WhiteCard
              text="Preparation Kits"
              title="Interview Preparation Kit"
              subTitle="Get interview ready for top companies by solving , an interview preparation kit."
              btnText="View all Kits"
              className="text-white bg-[#29b35b] mt-12"
            />
            <WhiteCard
              text="New Skill"
              title="Add your first skill"
              subTitle="Explore and add your first skill to get started. HackerRank offers a variety of skills, tracks and tutorials for you to learn and improve."
              btnText="Explore Skills"
              className="border-2 border-[#29b35b] text-[#29b35b] bg-white  mt-8"
            />
             <WhiteCard
              text="New Skill"
              title="Add your first skill"
              subTitle="Explore and add your first skill to get started. HackerRank offers a variety of skills, tracks and tutorials for you to learn and improve."
              btnText="Explore Skills"
              className="border-2 border-[#29b35b] text-[#29b35b] bg-white  mt-8"
            />
          </div>
        </div>

      </div>
    </div>
  );
}

export default index;
