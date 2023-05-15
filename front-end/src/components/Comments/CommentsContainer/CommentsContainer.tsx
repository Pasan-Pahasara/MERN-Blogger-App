import React, { useEffect, useState } from "react";
import CommentForm from "../CommentForm/CommentForm";
import { getCommentsData } from "../../../data/Comments/Comments";
import Comments from "../Comments";

// start introducing props
interface CommentsContainerProps {
  className?: string;
  value: any;
  logginedUserId: string;
}
// end introducing props

// start comment props
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
// end comment props

const CommentsContainer = ({
  className,
  logginedUserId,
}: CommentsContainerProps) => {
  // start state
  const [comments, setComments] = useState<Comment[]>([]);
  // end state

  // start main comments
  const mainComments = comments.filter((comment) => comment.parent === null);
  // end main comments

  const [affectedComment, setAffectedComment] = useState(null);

  console.log(comments);

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
      desc: value,
      post: "1",
      parent: parent,
      replyOnUser: replyOnUser,
      createdAt: "2022-12-31T17:22:05.092+0000",
    };
    // start set comments
    setComments((curState) => {
      return [newComment, ...curState];
    });
    // end set comments
  };
  // end add comment

  return (
    <div className={`${className}`}>
      {/* start added comment form  */}
      <CommentForm
        btnLabel="Send"
        formSubmitHandler={(value) =>
          addCommentHandler({ value, logginedUserId })
        }
      />
      {/* end added comment form  */}
      <div className="space-y-4 mt-8">
        {mainComments.map((comment) => (
          <Comments
            comment={comment}
            logginedUserId={logginedUserId}
            affectedComment={affectedComment}
            setAffectedComment={setAffectedComment}
            addComment={addCommentHandler} parentId={undefined}          />
        ))}
      </div>
    </div>
  );
};

export default CommentsContainer;
