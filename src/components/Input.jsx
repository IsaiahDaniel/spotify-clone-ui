import React from "react";

const Input = ({ inputType, outline, ...otherProps }) => {
  return (
    <div className="w-full">
      <input
        type={inputType}
        className="border py-4 focus:outline-none border-[#878787] w-full px-5"
        {...otherProps}
      />
    </div>
  );
};

export default Input;
