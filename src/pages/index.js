import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import KitCard from "../components/KitCard";
import TopicsCard from "../components/TopicsCard";
import WhiteCard from "../components/WhiteCard";
import WiteBar from "../components/WiteBar";
import { Topics } from "../constants";

function index() {
  console.log(Topics);
  return (
    <div>
      <Header />
      <WiteBar />
      <div className="bg-slate-100">
        <div className="m-auto xl:w-[91vw] 2xl:w-[74vw] flex flex-col ">
          <h2 className="mt-10 px-5 xl:px-0 mb-5 text-black text-lg font-bold">
            Your Preparation
          </h2>
          <div className="flex md:flex-row flex-col justify-between gap-8">
            <WhiteCard
              text="Preparation Kits"
              title="Interview Preparation Kit"
              subTitle="Get interview ready for top companies by solving , an interview preparation kit."
              btnText="View all Kits"
              className="text-white bg-[#29b35b] shadow-2xl shadow-green-300 mt-4 md:mt-12"
              whiteClassName="xl:w-[45vw] xl:h-[max-content] md:w-[47vw] md:h-[max-content] w-[93vw] h-[max-content] m-auto 2xl:w-[36vw] 2xl:h-[max-content] text-[#39424E]"
            />
            <WhiteCard
              text="New Skill"
              title="Add your first skill"
              subTitle="Explore and add your first skill to get started. HackerRank offers a variety of skills, tracks and tutorials for you to learn and improve."
              btnText="Explore Skills"
              className="border-2 border-[#29b35b] text-[#29b35b] bg-white  mt-4 md:mt-8"
              whiteClassName="xl:w-[45vw] xl:h-[max-content] md:w-[47vw] md:h-[max-content] w-[93vw] h-[max-content] m-auto 2xl:w-[36vw] 2xl:h-[max-content] text-[#39424E]"
            />
          </div>
        </div>
      
        <div className="m-auto xl:w-[91vw] 2xl:w-[74vw] flex flex-col ">
          <h2 className="mt-10 px-5 xl:px-0 mb-5 text-black text-lg font-bold">
            Certification
          </h2>
          <div className="flex md:flex-row flex-col gap-5 justify-between">
            <WhiteCard
              title="Problem Solving (Basic)"
              btnText="Get Certified"
              className="border-2 border-[#29b35b] text-[#29b35b] bg-white  mt-8"
              whiteClassName="md:w-[29vw] md:h-[max-content] xl:h-[max-content] w-[93vw] h-[max-content] m-auto 2xl:w-[24vw] 2xl:h-[24vh] text-[#39424E]"
              status="true"
            />
            <WhiteCard
              title="Add your first skill"
              btnText="Explore Skills"
              className="border-2 border-[#29b35b] text-[#29b35b] bg-white  mt-8"
              whiteClassName="md:w-[29vw] md:h-[max-content] xl:h-[max-content] w-[93vw] h-[max-content] m-auto  2xl:w-[24vw] 2xl:h-[24vh] text-[#39424E]"
              status="true"
            />
            <WhiteCard
              title="Stand out from the crowd"
              btnText="View All Skills"
              subTitle="Take the HackerRank Skills Certification Test and make your profile stand out"
              className="border-2 bg-white  mt-4 text-black"
              whiteClassName="md:w-[29vw] md:h-[max-content] xl:h-[max-content] w-[93vw] h-[max-content] m-auto  2xl:w-[24vw] 2xl:h-[24vh] bg-black text-white"
            />
          </div>
        </div>
        <div className="m-auto xl:w-[91vw] 2xl:w-[74vw] flex flex-col ">
          <h2 className="mt-10 px-5 mb-5 text-black text-lg font-bold">
            Prepare By Topics
          </h2>
          <div className="md:flex md:flex-row justify-between">
            <TopicsCard Topics={Topics} />
          </div>
        </div>
        <div>
          <div className="m-auto xl:w-[91vw] 2xl:w-[74vw] flex flex-col ">
            <div className="flex flex-row items-center  ">
            <h2 className="mt-10 px-5 mb-5 text-black text-lg font-bold">
            Preparation Kits
            </h2>
            <a className="mt-10 mb-5 text-xs pl-2 text-[#097bbf]" href="">View All Kits</a>
            </div>
            <div className="flex md:flex-row  flex-col justify-between gap-8">
              <KitCard
              text="1 Week Preparation Kit"
              subTextOne="Challenges:21,Attempts: 285771,Mock Tests: 0"
              subTextTwo = "Problem Solving (Basic)"
              subTextThree = "Problem Solving (Intermediate)"
              count="+1"
              />
               <KitCard
              text="1 Week Preparation Kit"
              subTextOne="Challenges:21,Attempts: 285771,Mock Tests: 0"
              subTextTwo = "Problem Solving (Basic)"
              subTextThree = "Problem Solving (Intermediate)"
              count="+1"
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
      
    </div>
  );
}

export default index;
