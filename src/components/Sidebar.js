import React from "react";
import Home from "./Home";
import { MdOutlineOndemandVideo, MdOutlineSportsBasketball } from "react-icons/md";
import { AiFillHome } from 'react-icons/ai';
import { BsController, BsCodeSlash } from 'react-icons/bs';
import { BiMusic } from 'react-icons/bi';

function Sidebar() {
  return (
    <>
      <div className="bg-gray-900 min-h-screen w-[20vw] text-white shadow-2xl flex flex-col items-center">
        <MdOutlineOndemandVideo size={65} className="mt-2 mb-4 ml-0" />

        <div className="p-5 text-2xl list-none flex flex-col gap-6">
            <li><AiFillHome /> New</li>
            <li><BsController />Gaming</li>
            <li><BsCodeSlash />Coding</li>
            <li><BiMusic />Music</li>
            <li><MdOutlineSportsBasketball />Sport</li>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
