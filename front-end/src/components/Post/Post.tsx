import { FC } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
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
    <div className="cursor-pointer p-6 bg-white text-slate-600 space-x-3 rounded-2xl shadow-2xl mt-1">
      <h3 className="text-center font-bold font-Ubuntu">{props.title}</h3>
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-2 mt-2">
          {props.date && (
            <p>
              <strong>Date</strong> : {props.date}
            </p>
          )}
          {props.userName && (
            <p>
              <strong>User Name</strong> : {props.userName}
            </p>
          )}
          {props.categoryId && (
            <p>
              <strong>Category</strong> : {props.categoryId}
            </p>
          )}
          {props.tags && (
            <p>
              <strong>Tags</strong> : {props.tags.join(", ")}
            </p>
          )}
        </div>
        <img className="h-10 mt-2" alt="Image" />
        <div className="w-full grid grid-cols-1 sm:grid-row-2 gap-2">
        <button onClick={() => deletePost(props._id, props)}>
          <DeleteIcon style={{ color: "#e74c3c" }} />
        </button>
        <button onClick={() => deletePost(props._id, props)}>
          <EditIcon style={{ color: "#2ecc71" }} />
        </button>
      </div>
      </div> */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="flex flex-col gap-2 mt-2">
          {props.date && (
            <p>
              <strong>Date</strong> : {props.date}
            </p>
          )}
          {props.userName && (
            <p>
              <strong>User Name</strong> : {props.userName}
            </p>
          )}
          {props.categoryId && (
            <p>
              <strong>Category</strong> : {props.categoryId}
            </p>
          )}
          {props.tags && (
            <p>
              <strong>Tags</strong> : {props.tags.join(", ")}
            </p>
          )}
        </div>
        <img className="h-10 mt-2" alt="Image" />

        <div className="grid grid-rows-1 sm:grid-rows-2 md:grid-rows-6 justify-end">
          <button onClick={() => deletePost(props._id, props)}>
            <DeleteIcon style={{ color: "#e74c3c" }} />
          </button>
          <button onClick={() => deletePost(props._id, props)}>
            <EditIcon style={{ color: "#2ecc71" }} />
          </button>
        </div>
      </div>

      <h2 className="text-center font-semibold font-babylonica">
        {props.caption}
      </h2>
      <p className="flex justify-center items-center font-opensans">
+        {props.description}
      </p>
    </div>
  );
};

export default Post;
