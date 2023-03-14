import React from 'react'
import { BiSearch } from "react-icons/bi";


function SearchBar() {
  return (
      <div className=" z-50 mt-32  w-screen p-4 FlexCenter">
        <form className=" FlexCenter lg:w-2/4  Round BoxFit">
          <input
          onChange={(e) => setCity(e.target.value)}
            className="text-white text-md font-light ml-16 ClearDrop lg:w-2/4 w-3/4 Shadow bg-Logo bg-opacity-60 rounded-full p-2 px-4"
            type="text"
            placeholder='Search city'

          />
          <BiSearch
            size={40}
           className="p-2 mx-4 cursor-pointer rounded-full bg-Redd" />
        </form>
      </div>
  );
}

export default SearchBar