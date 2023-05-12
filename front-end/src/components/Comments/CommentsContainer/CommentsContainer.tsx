import React from "react";

interface CommentsContainerProps {
  className?: string;
}

const CommentsContainer = ({ className }: CommentsContainerProps) => {
  return <div className={`${className}`}></div>;
};

export default CommentsContainer;
             