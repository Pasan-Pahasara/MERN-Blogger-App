import React from "react";
import images from "../../constants/Images/images";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

interface CommentsProps {
  comment: any;
}

const Comments = ({ comment }: CommentsProps) => {
  return (
    // start comment wrapper
    <div className="flex flex-nowrap items-start gap-x-3 bg-[#F2F4F5] p-3 rounded-lg">
      {/* start user profile picture */}
      <img
        src={images.PostProfileImage}
        alt="user profile"
        className="w-9 h-9 object-cover rounded-full"
      />
      {/* end user profile picture */}
      <div className="flex-1 flex flex-col">
        {/* start user name */}
        <h5 className="font-bold text-dark-hard text-xs">
          {comment.user.name}
        </h5>
        {/* end user name */}
        {/* start commented date */}
        <span className="text-ts text-dark-light">
          {new Date(comment.createdAt).toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
            hour: "2-digit",
          })}
        </span>
        {/* end commented date */}
        {/* start user description */}
        <p className="font-opensans mt-[10px] text-dark-light">
          {comment.desc}
        </p>
        {/* end user description */}
        <div className="flex items-center gap-x-3 text-dark-light font-Ubuntu text-sm mt-3 mb-3">
          {/* start reply button  */}
          <button className="flex items-center space-x-2">
            <ChatBubbleOutlineIcon className="w-4 h-auto" />
            <span>Reply</span>
          </button>
          {/* end reply button  */}
           {/* start edit button  */}
           <button className="flex items-center space-x-2">
            <ModeEditOutlineOutlinedIcon className="w-4 h-auto" />
            <span>Edit</span>
          </button>
          {/* end edit button  */}
           {/* start delete button  */}
           <button className="flex items-center space-x-2">
            <DeleteOutlineIcon className="w-4 h-auto" />
            <span>Delete</span>
          </button>
          {/* end delete button  */}
        </div>
      </div>
    </div>
    // end comment wrapper
  );
};

export default Comments;
