import React from "react";
import { commentsData } from "../utils/constants";

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex p-1 my-2 border-b-gray-900 bg-slate-200 rounded-md shadow-lg">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
        alt="user-icon"
        className="h-8"
      />
      <div className="px-4">
        <p className="font-bold">{name} :</p>
        <p className="font-semibold">{text}</p>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return comments?.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-6 border border-l-gray-900 ml-6">
        <CommentList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="mx-4 p-1">
      <h1 className="text-xl font-bold">Comments :</h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
