import React from "react";
// import { FaBeer } from 'react-icons/fa';
import { MdOutlineOndemandVideo } from 'react-icons/md'

function Sidebar() {
  return (
    <div className="fixed top-0 left-0 h-screen w-32 m-0 flex flex-col bg-gray-900 text-white shadow-2xl">
        <div className="flex justify-center mt-4">
            <MdOutlineOndemandVideo size={50} className="" />
        </div>

        <div className="mt-10 flex justify-center gap-4">
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
            </ul>
        </div>
    </div>
  );
}

export default Sidebar;
