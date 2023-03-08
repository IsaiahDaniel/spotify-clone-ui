import React from 'react';
import Logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <nav className='mx-auto container py-5 border-b border-b-[#D9DADC]'>
        <img src={Logo} alt="" className='mx-auto' />
    </nav>
  )
}

export default Navbar