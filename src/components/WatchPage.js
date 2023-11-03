import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { hideSidebar } from "../Redux/sidebarSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [like, setLike] = useState(0);
  const [unlike, setUnlike] = useState(0);

  const [searchParams] = useSearchParams();

  useEffect(() => {
    dispatch(hideSidebar());
  }, []);

  return (
    <div className="flex flex-col mx-12">
      <div className="p-4  mx-4 shadow-lg rounded-lg">
        <iframe
          width="920"
          height="480"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div className="flex justify-end  rounded-lg shadow-lg">
        <span onClick={() => setLike(like + 1)} className="cursor-pointer m-4 font-bold">
          <img
            className="w-10 h-5 inline-block"
            src="https://static.vecteezy.com/system/resources/previews/021/013/524/original/like-icon-on-transparent-background-free-png.png"
            alt="like"
          />
          {like}
        </span>
        <span
          onClick={() => setUnlike(unlike + 1)}
          className="p-1 my-4 cursor-pointer font-bold"
        >
          <img
            className="w-10 h-5 inline-block "
            src="https://static.vecteezy.com/system/resources/previews/021/013/463/original/dislike-icon-on-transparent-background-free-png.png"
            alt="dislike"
          />
          {unlike}
        </span>
        <button className="h-8 w-24 bg-red-900 m-4 text-white font-bold rounded-lg cursor-pointer">
          Subscribe
        </button>
      </div>
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
