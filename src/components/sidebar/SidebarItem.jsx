import React from 'react';
import { NavLink } from "react-router-dom";

const SidebarItem = ({ Icon, text, to }) => {
  return (
    <NavLink to={to} className={`flex items-center hover:bg-[#4F4F4F] p-2 rounded-md`}>
        { Icon && <Icon size={25} className="mr-1 hover:text-white" color="#B2B2B2" /> }
        <h3 className='text-[#B2B2B2] text-[16px] font-semibold'>{text}</h3>
    </NavLink>
  )
}

export default SidebarItem;