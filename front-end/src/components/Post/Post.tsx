import { FC } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from '@mui/icons-material/Edit';
import api from "../../axios";

type PostProps = {
  _id: String;
  imageId: String;
  title: String;
  caption: String;
  description: String;
  date?: String;
  userName?: String;
  tags: String[];
  categoryId: String;
  removePostFromList?: (postId: String) => void;
};

const deletePost = (postId: String, props: PostProps) => {
  api
    .delete(`post/${postId}`)
    .then((res) => {
      console.log(res);
      if (props.removePostFromList) {
        props.removePostFromList(postId);
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

const Post: FC<PostProps> = (props) => {
  return (
    <div className="p-6 border border-slate-400 w-full rounded mt-2">
      <h3 className="text-center">{props.title}</h3>
      {props.description}
      <span className="flex space-x-5">
        {props.date ? (
          <p>
            <strong>Date</strong> : {props.date}
          </p>
        ) : null}
        {props.userName ? (
          <p>
            <strong>User Name</strong> : {props.userName}
          </p>
        ) : null}
      </span>

      <div className="w-full flex justify-between items-center">
        <button onClick={() => deletePost(props._id, props)}>
          <DeleteIcon />
        </button>
        <button onClick={() => deletePost(props._id, props)}>
          <EditIcon />
        </button>
      </div>
    </div>
  );
};

export default Post;

