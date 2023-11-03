import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_API } from "../utils/constants";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchVideoAPI();
  }, []);

  const fetchVideoAPI = async () => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    // console.log(json.items);
    setVideos(json.items);
  };

  

  return (
    <div className="flex flex-wrap justify-center">
      {videos.map((video) => (
        <Link to={"watch?v=" + video.id} key={video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
