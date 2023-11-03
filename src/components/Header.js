import React, { useEffect, useState } from "react";
import logo from "../utils/Assets/youtube-logo-png-46020.png";
import search from ".././utils/Assets/search.svg";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../Redux/sidebarSlice";
import { SEARCH_API } from "../utils/constants";
import { cacheResults } from "../Redux/searchSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();

  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        fetchSearchApi();
      }
    }, 200); //debouncing

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const fetchSearchApi = async () => {
    console.log('API calls -' + searchQuery)
    const data = await fetch(SEARCH_API + searchQuery);
    const json = await data.json();
    // console.log(json);
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const handleSidebar = () => {
    dispatch(toggleSidebar());
  };

  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          src="https://cdn.iconscout.com/icon/free/png-512/free-hamburger-menu-462145.png?f=webp&w=256"
          alt="menu"
          className="h-10 m-2 cursor-pointer"
          onClick={handleSidebar}
        />
        <img
          className="w-28 h-14 ml-2 cursor-pointer"
          src={logo}
          alt="youtube-logo"
        />
      </div>

      <div className="flex col-span-10 mt-2">
        <input
          type="text"
          placeholder="search"
          className="border hover:border-blue-400 h-9 rounded-l-full w-[50%] p-4"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
        />
        <button className="w-14 h-9 border rounded-r-full bg-slate-200">
          <img className="w-5 ml-4" src={search} alt="search" />
        </button>
        {showSuggestions && (
          <div className="fixed bg-white w-[35rem] py-2 px-2 mt-10 mr-12 shadow-lg rounded-lg">
            <ul>
              {suggestions.map((sub, index) => (
                <li
                  key={index}
                  className="px-4 py-2 hover:bg-slate-200 rounded-md overflow-y-auto"
                >
                  {sub}
                </li>
              ))}
            </ul>
          </div>
        )}
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
