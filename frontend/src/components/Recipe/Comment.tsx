"useClient";
import React, { useState } from "react";

export default function Comment() {
  const [comment, setComment] = useState("");

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = () => {
    // Handle comment submission logic here
    console.log("Comment Submitted:", comment);
    setComment(""); // Clear the comment field after submission
  };
  return (
    <div className="bg-secondary rounded-lg shadow-lg p-6 mt-6">
      <h2 className="text-2xl font-semibold text-white mb-4">
        Leave a Comment
      </h2>
      <textarea
        value={comment}
        onChange={handleCommentChange}
        placeholder="Write your comment here..."
        className="w-full h-32 p-4 text-white bg-primary border border-gray-500 rounded-lg focus:outline-none focus:border-accent"
      ></textarea>
      <button
        onClick={handleCommentSubmit}
        className="mt-4 text-white bg-accent hover:bg-accent-light py-2 px-4 rounded"
      >
        Submit Comment
      </button>
    </div>
  );
}
