import React from "react";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";

function Header() {
  return (
    <div className="h-20  w-[80vw] bg-gray-900 text-white flex items-center justify-center">
      <div className="flex">
        <input
          type="text"
          placeholder="Search"
          className="h-10 w-80 rounded-2xl pl-5 text-black"
        />
        <button className="text-white pl-1">
          <AiOutlineSearch size={30} />
        </button>
      </div>
    </div>
  );
}

export default Header;
