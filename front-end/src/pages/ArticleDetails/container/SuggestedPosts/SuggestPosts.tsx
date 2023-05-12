import React from "react";
import images from "../../../../constants/Images/images";
import { Link } from "react-router-dom";

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
  tags: string[];
}

const SuggestPosts = ({ className, header, posts = [], tags }: CardProps) => {
  return (
    <div className={`w-full shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] rounded-lg p-4 ${className}`}>
      <h2 className="font-Ubuntu font-medium text-dark-hard md:text-xl">
        {header}
      </h2>
      <div className="grid gap-y-5 mt-5 md:grid-cols-2 md:gap-x-5 lg:grid-cols-1">
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
              <h3 className="text-sm font-Ubuntu text-dark-hard font-medium md:text-base lg:text-lg">
                {item.title}
              </h3>
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
      <h2 className="font-Ubuntu font-medium text-dark-hard mt-8 md:text-xl">
        Tags
      </h2>
      <div className="flex flex-wrap gap-x-2 gap-y-2 mt-4">
        {tags.map((item) => {
          return (
            <Link
              to="/"
              className="inline-block rounded-md px-3 py-1.5 bg-purple-600 font-Ubuntu text-xs text-white md:text-sm"
            >
              {item}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SuggestPosts;
