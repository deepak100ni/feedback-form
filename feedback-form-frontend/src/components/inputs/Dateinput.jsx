import React from "react";

const Dateinput = () => {
  return (
    <div className="mb-4">
      <label
        className="block text-gray-600 text-sm font-bold mb-2"
        htmlFor="textInput"
      >
        Answer
      </label>
      <input
        type="date"
        id="inputDate"
        name="answer"
        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
      />
    </div>
  );
};

export default Dateinput;
