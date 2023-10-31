import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const showSidebar = useSelector((store) => store.sidebar.showSidebar);

  if (!showSidebar) return null;

  return (
    <div className="w-1/4 p-10 mx-2 border shadow-md">
      <h1 className="font-bold text-md border-b-2 p-2"> Home</h1>
      <h1 className="font-bold text-md border-b-2 p-2"> Shorts</h1>
      <h1 className="font-bold text-md border-b-2 p-2"> Subscriptions</h1>

      <h1 className="font-bold text-md border-b-2 p-2 mt-8"> You</h1>
      <ul>
        <li className="font-semibold text-md ml-4">Your Channel</li>
        <li className="font-semibold text-md ml-4">History</li>
        <li className="font-semibold text-md ml-4">Your Videos</li>
      </ul>
      <h1 className="font-bold text-md border-b-2 p-2 mt-6"> Subscriptions</h1>
      <ul>
        <li className="font-semibold text-md ml-4">Akshay Saini</li>
        <li className="font-semibold text-md ml-4">Abhishek Upmanyu</li>
        <li className="font-semibold text-md ml-4">Harkirat Singh</li>
      </ul>
      <h1 className="font-bold text-md border-b-2 p-2 mt-6"> Explore</h1>
      <ul>
        <li className="font-semibold text-md ml-4">Music</li>
        <li className="font-semibold text-md ml-4">Sports</li>
        <li className="font-semibold text-md ml-4">Gaming</li>
      </ul>
    </div>
  );
};

export default Sidebar;
