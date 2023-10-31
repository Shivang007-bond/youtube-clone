import React from "react";

const Button = ({text}) => {
  return (
    <div>
      <button className="px-2 py-1 m-2 bg-slate-100 font-semibold rounded-md ">{text}</button>
    </div>
  );
};

export default Button;
