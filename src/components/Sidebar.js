import React from "react";
import {
  MdOutlineOndemandVideo,
  MdOutlineSportsBasketball,
} from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { BsController, BsCodeSlash } from "react-icons/bs";
import { BiMusic } from "react-icons/bi";
import { categories } from "../utils/constants";

function Sidebar({ selectedCategory, setSelectedCategory }) {
  function changeCategory() {
    console.log("hola");
  }

  return (
    <>
      <div className="bg-gray-900 min-h-screen w-[20vw] text-white shadow-2xl flex flex-col items-center">
        <MdOutlineOndemandVideo size={65} className="mt-2 mb-4 ml-0" />

        <div className="p-5 text-2xl list-none flex flex-col gap-6">
          {/* <div className="flex flex-col"> */}
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
            >
              {category.icon}
              {category.name}
            </button>
          ))}
          {/* </div> */}
        </div>
      </div>
    </>
  );
}

export default Sidebar;
