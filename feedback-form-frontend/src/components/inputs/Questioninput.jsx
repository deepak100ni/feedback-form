import React from "react";

const Questioninput = ({que}) => {
  return (
    <div className="mb-4">
      <label
        className="block text-gray-600 text-sm font-bold mb-2"
        htmlFor="name"
      >
        Question
      </label>
      <p>{que}</p>
    </div>
  );
};

export default Questioninput;
