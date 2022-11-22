import React from "react";
import Home from "./Home";
import { MdOutlineOndemandVideo } from "react-icons/md";

function Sidebar() {
  return (
    <>
      <div className="bg-gray-900 min-h-screen w-[20vw] text-white shadow-2xl flex flex-col">
        <MdOutlineOndemandVideo size={65} className="mt-2 mb-4 ml-14" />

        <div className="p-5 text-2xl">
            <ul>
                <li>New</li>
                <li>Gaming</li>
                <li>Coding</li>
                <li>Music</li>
                <li>Sports</li>
            </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
