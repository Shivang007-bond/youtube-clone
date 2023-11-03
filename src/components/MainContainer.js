import React from "react";
import VideoContainer from "./VideoContainer";
import ButtonList from "./ButtonList";

const MainContainer = () => {
  return (
    <div className="flex-col w-5/6">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
