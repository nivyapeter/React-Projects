import React from "react";
import NavLinks from "./NavLinks";
import Search from "./Search";
import Button from "../components/Button";

function Header() {
  return (
    <div className="h-[66px] bg-[#39424e]">
      <div className="flex items-center justify-between m-auto xl:w-[94vw] 2xl:w-[75vw]">
        <NavLinks />
        <Search />
        <div className="flex flex-row items-center justify-between gap-8">
          <div>
            <a className="text-[#f3f7f7] ml-4 text-xs underline" href="">
              Hiring developers?
            </a>
          </div>
          <Button
            text="Log in"
            className="bg-[#303741] px-4 py-3 text-white shadow-lg"
          />
          <Button
            text="Sign Up"
            className="bg-[#29b35b] px-4 py-3 text-white shadow-lg"
          />
        </div>
      </div>
      
    </div>
  );
}

export default Header;
