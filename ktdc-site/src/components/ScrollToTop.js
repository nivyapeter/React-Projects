import React, { useEffect, useState } from "react";
import {BiChevronsUp} from "react-icons/bi"

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

//scroll-to-top classes: fixed, bottom:0, right:0
  return (
    <div className="fixed right-[5%] bottom-5 bg-[#019fde] py-[8px] px-[12px] text-center w-[38px] cursor-pointer z-99 transition-all duration-[0.4s] ease-in-out delay-[0s]">
      {isVisible && (
        <span>
        <a className="text-lg text-white leading-4" href="">
          <BiChevronsUp  onClick={scrollToTop} />
        </a>
      </span>
      )}
    </div>
  );
}