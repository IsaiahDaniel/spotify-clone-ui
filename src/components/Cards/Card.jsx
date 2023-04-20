import React from 'react'

const Card = ({ text, classNames, image, cardBg }) => {
    console.log("cardBg", cardBg);
    // bg-[${cardBg}]
  return (
    <div className={`rounded-md bg-[${cardBg}] ${classNames && classNames}`}>
        <h2 className='text-white text-3xl p-3'>{text}</h2>
        <div className='flex flex-col items-end justify-end'>
            <img src={image} alt="" />
        </div>
    </div>
  )
}

export default Card;