import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_API } from "../utils/constants";

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
    <div className="flex flex-wrap ml-12">
      {videos.map((video) => (
        <VideoCard key={video.id} info={video} />
      ))}
      
    </div>
  );
};

export default VideoContainer;
