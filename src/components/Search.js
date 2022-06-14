import React from "react";
import { VscSearch } from "react-icons/vsc";

function Search() {
  return (
    <div>
      <div class="flex md:pb-1 items-center bg-white">
        <div className="text-white font-bold pr-2 ">
          <VscSearch className="text-white" />
        </div>
        <div className="w-11/12">
          <input
            type="search"
            className=" rounded-3xl placeholder-slate-700  focus:outline-none font-medium relative flex-auto text-center min-w-0 block w-full py-[2px] px-3 md:py-1.5 text-base text-white  "
            placeholder="Search"
          />
        </div>
      </div>
    </div>
  );
}

export default Search;
