import React from "react";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { categories } from "../utils/constants";

function Sidebar({ setSelectedCategory }) {
  return (
    <div className="bg-gray-900 min-h-screen w-[20vw] text-white shadow-2xl flex flex-col items-center">
      <MdOutlineOndemandVideo size={65} className="mt-2 mb-4 ml-0" />

      <div className="p-5 text-2xl flex flex-col gap-6">
        {categories.map((category) => (
            <button
              className="flex h-10 items-center"
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
            >
              {category.icon}
              {'ㅤ'}
              {category.name}
            </button>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
