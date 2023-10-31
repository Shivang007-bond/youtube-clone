import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = [
    "All",
    "Computer Science",
    "Movies",
    "Music",
    "football",
    "Cricket",
    "fitness",
    "health",
    "gaming",
  ];

  return (
    <div className="flex p-4 overflow-x-auto mx-10">
      {list.map((item, index) => (
        <Button key={index} text={item} />
      ))}
    </div>
  );
};

export default ButtonList;
