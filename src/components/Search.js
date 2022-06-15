import React from "react";
import { AiOutlineSearch} from "react-icons/ai";

function Search() {
  return (
    <div>
      <div class="flex md:pb-1 items-center focus-within:w-[16vw] focus-within:bg-black transition duration-700  ">
        <div className="text-white font-bold pr-2 ">
          <AiOutlineSearch className="text-black ml-2" />
        </div>
        <div className="w-11/12">
          <input
            type="search"
            className="w-[5vw] focus:outline-none bg-transparent focus-within:bg-transparent rounded-3xl placeholder-slate-700  font-medium relative flex-auto text-center min-w-0 block placeholder:text-black py-[2px] px-3 md:py-1.5 text-base text-white"
            placeholder="Search"
          />
        </div>
      </div>
    </div>
  );
}

export default Search;
