import React from "react";
import CommentForm from "../CommentForm/CommentForm";

interface CommentsContainerProps {
  className?: string;
}

const CommentsContainer = ({ className }: CommentsContainerProps) => {
  return <div className={`${className}`}>
    <CommentForm btnLabel="Send"/>
  </div>;
};

export default CommentsContainer;
             