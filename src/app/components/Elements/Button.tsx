import React, { CSSProperties } from "react";

const Button = ({ text, style }: { text: string; style?: CSSProperties }) => {
  return (
    <div>
      <button
        className="bg-[#EC6A30] hover:bg-[#d8622c] px-5 py-2 text-white rounded-md"
        style={style}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
