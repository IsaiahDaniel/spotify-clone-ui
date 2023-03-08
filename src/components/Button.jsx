import React from "react";

const Button = ({ text, outline }) => {
  if (outline) {
    return (
      <button className="border-[#1FD760] border px-10 py-4 font-bold rounded-[40px] w-full">
        {text}
      </button>
    );
  }

  return (
    <button className="bg-[#1FD760] px-10 py-4 font-bold rounded-[40px]">
      {text}
    </button>
  );
};

export default Button;
