import React from "react";

interface CardProps {
  className?: string;
  header: string;
  posts: {}[];
}

const SuggestPosts = ({ className, header, posts = [] }: CardProps) => {
  return (
    <div className={`w-full shadow-purple-500/20 rounded-lg p-4 ${className}`}>
      <h2 className="font-Ubuntu font-medium text-dark-hard">{header}</h2>
      <div className="grid gap-y mt-5">
        {posts.map((item) => (
          <div key={item._id}>

          </div>
        ))}
      </div>
    </div>
  );
};

export default SuggestPosts;
