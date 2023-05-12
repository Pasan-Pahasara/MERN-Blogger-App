import React from "react";
import CommentForm from "../CommentForm/CommentForm";

interface CommentsContainerProps {
  className?: string;
  value: string;
}

const CommentsContainer = ({ className }: CommentsContainerProps) => {
  // start add comment
  const addCommentHandler = (
    { value }: CommentsContainerProps,
    parent = null,
    replyOnUser = null
  ) => {
    const newComment = {
      _id: "10",
      user: {
        _id: "a",
        name: "Oliver Benjamin",
      },
      desc: "it was a nice post, Thank you!",
      post: "1",
      parent: null,
      replyOnUser: null,
      createdAt: "2022-12-31T17:22:05.092+0000",
    };
  };
  // end add comment

  return (
    <div className={`${className}`}>
      {/* start added comment form  */}
      <CommentForm
        btnLabel="Send"
        formSubmitHandler={(text) => addCommentHandler}
      />
      {/* end added comment form  */}
    </div>
  );
};

export default CommentsContainer;
