import React from 'react';
import Avatar from '../Avatar';
import { Link } from 'react-router-dom';
import { FaTimes } from "react-icons/fa";

const ArtistsCard = ({ image, artist, }) => {
  return (
    <Link to="/" className='bg-[#2B2626] w-[260px] h-[330px] p-4 rounded-lg relative'>
        <div className='absolute right-4 bg-black p-2 rounded-full'>
            <FaTimes color='white' />
        </div>
        <div className='mt-5'>
            <Avatar image={image} classNames="w-48 h-48 mx-auto" />
        </div>
        <div className='mt-5'>
            <h3 className='text-white'>{artist}</h3>
            <p className='text-[#B2B2B2]'>Artist</p>
        </div>
    </Link>
  )
}

export default ArtistsCard;