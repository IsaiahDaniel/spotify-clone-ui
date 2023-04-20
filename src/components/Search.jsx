import React from 'react';
import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
  return (
    <div className='bg-white p-2 flex items-center rounded-full w-[400px]'>
      <AiOutlineSearch size={20} className='mr-3' />
      <input type="text" className='bg-transparent outline-none' placeholder='Artists, songs, Podcasts' />
    </div>
  )
}

export default Search;