import React from "react";
import logo from "../utils/Assets/youtube-logo-png-46020.png";
import search from ".././utils/Assets/search.svg";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../Redux/sidebarSlice";

const Header = () => {

    const dispatch = useDispatch();

    const handleSidebar = () => {
        dispatch(toggleSidebar());
    }

  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          src="https://cdn.iconscout.com/icon/free/png-512/free-hamburger-menu-462145.png?f=webp&w=256"
          alt="menu"
          className="h-10 m-2 cursor-pointer"
          onClick={handleSidebar}
        />
        <img src={logo} alt="youtube-logo" className="w-28 h-14 ml-2" />
      </div>

      <div className="flex justify-center col-span-10 mt-2">
        <input
          type="text"
          placeholder="search"
          className="border h-9 rounded-l-full w-[50%] p-4"
        />
        <button className="w-14 h-9 border rounded-r-full bg-slate-200">
          <img className="w-5 ml-4" src={search} alt="search" />
        </button>
      </div>

      <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
          alt="user-icon"
          className="h-10 col-span-1"
        />
      </div>
    </div>
  );
};

export default Header;
