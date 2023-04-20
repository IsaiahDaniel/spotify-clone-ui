import React from 'react'

const Avatar = ({ image, classNames }) => {
  return (
    <div>
        <img src={image} alt="" className={`w-10 h-10 rounded-full ${classNames && classNames}`} />
    </div>
  )
}

export default Avatar