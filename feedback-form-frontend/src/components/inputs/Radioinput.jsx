import React from "react";

const Radioinput = () => {
  return (
    <div className="mb-4">
      <label className="block text-gray-600 text-sm font-bold mb-2">
        Options
      </label>
      {Array.from({ length: 4 }).map((_, index) => (
        <div key={index} className="flex items-center mb-2">
          <input
            type="radio"
            name="options"
            className="mr-2 w-3/4 px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
          <label className="ml-2" htmlFor={`radio${index + 1}`}>
            Ans{index + 1}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Radioinput;
