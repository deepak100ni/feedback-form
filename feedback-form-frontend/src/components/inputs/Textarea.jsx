import React from "react";

const Textarea = () => {
  return (
    <div className="mb-4">
      <label
        className="block text-gray-600 text-sm font-bold mb-2"
        htmlFor="textareaInput"
      >
        Answer
      </label>
      <textarea
        id="textareaInput"
        name="answer"
        rows="4"
        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
      ></textarea>
    </div>
  );
};

export default Textarea;
