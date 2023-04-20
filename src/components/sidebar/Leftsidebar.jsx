import React from "react";
import SidebarItem from "./SidebarItem";

import { BiLibrary } from "react-icons/bi";
import { AiOutlineHome, AiOutlineSearch, AiOutlinePlus } from "react-icons/ai";
import LikedSong from "../../assets/dashboard/Liked_songs.svg";
// import { GrHomeRounded } from "react-icons/gr";

import { NavLink } from "react-router-dom";
import { PLAYLIST } from "../../constants/playLists";

const Leftsidebar = () => {
  return (
    <aside className="w-60 fixed top-0 left-0 h-screen bg-[#000000] text-white p-3">
      <div className="space-y-3">
        <SidebarItem Icon={AiOutlineHome} text="Home" />
        <SidebarItem Icon={AiOutlineSearch} text="Search" />
        <SidebarItem Icon={BiLibrary} text="Your Library" />
      </div>

      <div className="mt-7 p-3">
        <NavLink to="/" className="flex items-center mb-4">
          <div className="bg-[#B2B2B2] p-[0.9px] mr-3">
            <AiOutlinePlus size={20} />
          </div>
          <h3 className="text-[#B2B2B2] text-[16px]">Create PlayList</h3>
        </NavLink>
        <NavLink to="/" className="flex items-center mb-2">
          <img src={LikedSong} alt="" className="w-6 mr-2" />
          <h3 className="text-[#B2B2B2] text-[16px]">Liked Songs</h3>
        </NavLink>
      </div>

      <div className="border-[0.2px] border-[#B2B2B2]" />

      { PLAYLIST.map(({playlist}) => (
        <div className="p-3 overflow-y-auto" key={playlist}>
          <h3 className="text-[#B2B2B2]">{playlist}</h3>
        </div>
      )) }

    </aside>
  );
};

export default Leftsidebar;
