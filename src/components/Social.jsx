import React from 'react';

const Social = ({ Icon, text, classNames }) => {
  return (
    <div className={`px-10 py-4 mt-6 w-full flex flex-col items-center rounded-full border cursor-pointer ${classNames}`}>
        <div className='flex items-center'>
            { Icon && <Icon color="#fff" size="20" className="mr-3" /> }
            <span className={`${classNames && classNames}`}>{ text }</span>
        </div>
    </div>
  )
}

export default Social;