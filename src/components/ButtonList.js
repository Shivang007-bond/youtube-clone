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
    "Al Pacino",
    'David Goggins',

  ];

  return (
    <div className="flex p-4 overflow-x-auto justify-evenly">
      {list.map((item, index) => (
        <Button key={index} text={item} />
      ))}
    </div>
  );
};

export default ButtonList;
