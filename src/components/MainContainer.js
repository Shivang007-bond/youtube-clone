import React from "react";
import VideoContainer from "./VideoContainer";
import ButtonList from "./ButtonList";

const MainContainer = () => {
  return (
    <div className="flex-col w-3/4">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
