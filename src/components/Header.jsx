import React from 'react';
import Search from './Search';

import { AiOutlineLeft, AiOutlineRight, AiFillCaretDown } from "react-icons/ai";

const Header = () => {
  return (
    <div className='flex items-center justify-between'>
        <div className='flex'>
            <div className='flex mr-5'>
                <div className='bg-[#111] hover:bg-[#777] p-4 rounded-full cursor-pointer'>
                    <AiOutlineLeft color='white' />
                </div>
                <div className='bg-[#111] hover:bg-[#777] p-4 rounded-full cursor-pointer'>
                    <AiOutlineRight color='white' />
                </div>
            </div>
            <Search />
        </div>

        <div className='bg-[#000] rounded-full w-auto p-3 cursor-pointer'>
            <div className='flex items-center justify-between'>
                <img src={require("../assets/reader-1.jpeg")} alt="" className='rounded-full w-8 h-8 mr-4' />
                <p className='text-white'>Cynthia Ibemesi</p>
                <AiFillCaretDown color='white' />
            </div>
        </div>
    </div>
  )
}

export default Header;