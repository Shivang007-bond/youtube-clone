import React from "react";

const VideoCard = ({ info }) => {
  //   console.log(info);
  const { snippet, statistics } = info;
  const { thumbnails, localized, channelTitle, publishedAt } = snippet;
  return (
    <div className="w-80 p-4 m-2 border shadow-lg rounded-md cursor-pointer">
      <img className="rounded-md" src={thumbnails.high.url} alt="thumbnail" />
      <div>
        <p className="font-semibold text-lg py-2">{localized.title}</p>
        <p>{channelTitle}</p>
        <span className="font-semibold py-2">{statistics.viewCount} views</span>
        <span className="ml-4">{publishedAt}</span>
      </div>
    </div>
  );
};

export default VideoCard;
