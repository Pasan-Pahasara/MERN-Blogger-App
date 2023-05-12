import React, { useState } from "react";

interface CommentsFormProps {
  btnLabel?: string;
}

const CommentForm = ({ btnLabel }: CommentsFormProps) => {
  // start value state
  const [value, setvalue] = useState("");
  // end value state

  // start submitHandler
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  // end submitHandler

  return (
    // start form
    <form onSubmit={submitHandler}>
      <div className="flex flex-col items-end border border-purple-600 rounded-lg p-4">
        {/* start textarea  */}
        <textarea
          className="w-full focus:outline-none"
          rows={5}
          placeholder="Leave your comment here..."
          value={value}
          onChange={(e) => setvalue(e.target.value)}
        />
        {/* end textarea & start button */}
        <button
          type="submit"
          className="px-6 py-2.5 rounded-lg bg-purple-600 text-white font-semibold mt-2"
        >
          {btnLabel}
        </button>
        {/* start button  */}
      </div>
    </form>
    // end form
  );
};

export default CommentForm;
