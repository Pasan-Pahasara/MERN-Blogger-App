import React from "react";
import images from "../../../../constants/Images/images";

interface Post {
    _id: string;
    image: string;
    title: string;
    createdAt: string;
  }

interface CardProps {
  className?: string;
  header: string;
  posts: Post[];
}

const SuggestPosts = ({ className, header, posts = [] }: CardProps) => {
  return (
    <div className={`w-full shadow-purple-500/20 rounded-lg p-4 ${className}`}>
      <h2 className="font-Ubuntu font-medium text-dark-hard">{header}</h2>
      <div className="grid gap-y mt-5">
        {posts.map((item) => (
          // start id
          <div
            key={item._id}
            className="flex space-x-3 flex-nowrap items-center"
          >
            {/* end id */}
            {/* start image  */}
            <img
              className="aspect-square object-cover rounded-lg w-1/5"
              src={item.image}
              alt="ui ux"
            />
            {/* end image  */}
            {/* start title */}
            <div className="text-sm font-Ubuntu text-dark-hard font-medium">
              <h3>{item.title}</h3>
              {/* start date  */}
              <span className="text-xs opacity-60">
                {new Date(item.createdAt).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </span>
              {/* end date  */}
            </div>
            {/* end title  */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuggestPosts;
