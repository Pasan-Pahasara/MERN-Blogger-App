import { Component } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import api from "../../axios";

type PostProps = {
  _id: string;
  image: string;
  title: string;
  description: string;
  date?: string;
  userName?: string;
  removePostFromList?: (postId: string) => void;
};

type PostState = {};

export default class Post extends Component<PostProps, PostState> {
  deletePost = (postId: string) => {
    api
      .delete(`post/${postId}`)
      .then((res) => {
        console.log(res);
        if (this.props.removePostFromList) {
          this.props.removePostFromList(postId);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="p-6 border border-slate-400 w-full rounded mt-2">
        <h3 className="text-center">{this.props.title}</h3>
        {this.props.description}
        <span className="flex space-x-5">
          {this.props.date ? (
            <p>
              <strong>Date</strong> : {this.props.date}
            </p>
          ) : null}
          {this.props.userName ? (
            <p>
              <strong>User Name</strong> : {this.props.userName}
            </p>
          ) : null}
        </span>

        <div className="w-full flex justify-between items-center">
          <button onClick={() => this.deletePost(this.props._id)}>
            <DeleteIcon />
          </button>
        </div>
      </div>
    );
  }
}