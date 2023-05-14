import React, { useEffect, useState } from "react";
import CommentForm from "../CommentForm/CommentForm";
import { getCommentsData } from "../../../data/Comments/Comments";

// start introducing props
interface CommentsContainerProps {
  className?: string;
  value: string;
}
// end introducing props

interface Comment {
  _id: string;
  user: {
    _id: string;
    name: string;
  };
  desc: string;
  post: string;
  parent: string | null;
  replyOnUser: string | null;
  createdAt: string;
}


const CommentsContainer = ({ className }: CommentsContainerProps) => {
  // start state
  const [comments, setComments] = useState<Comment[]>([]);
  // end state

  useEffect(() => {
    (async () => {
      const commentData = await getCommentsData();
      setComments(commentData);
    })();
  }, []);

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
        formSubmitHandler={(value) => addCommentHandler({ value })}
      />
      {/* end added comment form  */}
    </div>
  );
};

export default CommentsContainer;
