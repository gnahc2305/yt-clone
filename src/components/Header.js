import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

function Header({ setSelectedCategory }) {
  const [search, setSearch] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setSelectedCategory(search);
  }

  return (
    <div className="h-20  w-[80vw] bg-gray-900 text-white flex items-center justify-center">
      <div className="flex">
        <form onSubmit={handleSubmit} className='flex'>
          <input
            type="text"
            placeholder="Search"
            className="h-10 w-[450px] rounded-2xl pl-5 text-black"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="text-white pl-1">
            <AiOutlineSearch size={30} />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Header;
