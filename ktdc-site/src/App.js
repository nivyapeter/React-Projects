import "./App.css";
import Header from "./components/Header";
import Properties from "./components/Properties";
import Slick from "./components/Slick";
import { cardItems, budgetHotels } from "../src/constants";
import Footer from "./components/Footer";
import { useState } from "react";

import {BiChevronsUp} from "react-icons/bi"
import MobileHeader from "./components/MobileHeader";
function App() {
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };
  const stopMarguee =() => {
    this.stop();
  }
  return (
    <div>
      <Header />
      <MobileHeader />

      <Slick />
      <div className="p-[15px] h-[70px]">
        <div className="max-w-[1360px] mx-auto my-[10px] px-[15px] w-full text-[#007bff] text-xl ml-[15px]">
          <marquee
            behavior="scroll"
            direction="left"
            onmouseover={stopMarguee}
            onmouseout={()=>this.start()}
          >
            KTDC launches Caravan Tourism Packages
          </marquee>
        </div>
      </div>
      <Properties text="Premium Properties" cardItems={cardItems} />
      <Properties text="Budget Hotels" cardItems={budgetHotels} />
      <Properties text="Tamarind" cardItems={budgetHotels} />
      <Footer />
      <div className="fixed right-[5%] bottom-5 bg-[#019fde] py-[8px] px-[12px] text-center w-[38px] cursor-pointer z-99 transition-all duration-[0.4s] ease-in-out delay-[0s]">
        <span>
          <a className="text-lg text-white leading-4" href="">
            <BiChevronsUp  onClick={scrollToTop} />
          </a>
        </span>

      </div>
    </div>
  );
}

export default App;
