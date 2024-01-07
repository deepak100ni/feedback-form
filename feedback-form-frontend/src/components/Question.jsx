import axios from "axios";
import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Question = () => {
  const [formData, setFormData] = useState({
    type: "Text",
    options: [],
    requirement: false,
    sequence: 1,
    answer: "",
    name: "",
  });

  const [showText, setShowText] = useState(true);
  const [showTextarea, setShowTextarea] = useState(false);
  const [showDate, setShowDate] = useState(false);
  const [showCheckbox, setShowCheckbox] = useState(false);
  const [showRadio, setShowRadio] = useState(false);
  const [showFile, setShowFile] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    if (name === "type") {
      setShowText(value === "Text");
      setShowTextarea(value === "Textarea");
      setShowDate(value === "Date");
      setShowCheckbox(value === "Checkbox");
      setShowRadio(value === "Radio");
      setShowFile(value === "File");
    }
  };

  const handleOptionChange = (index, value) => {
    setFormData((prevFormData) => {
      const updatedOptions = [...prevFormData.options];
      updatedOptions[index] = value;
      console.log("updatedOptions", updatedOptions);
      return { ...prevFormData, options: updatedOptions };
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({ ...prevData, file }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    try {
      const response = await axios.post(
        "http://localhost:4000/question/save",
        formData
      );
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
        <main className="flex-1">
          <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-lg max-w-md">
              <h1 className="text-3xl font-bold mb-4 text-gray-800">
                Create Question Form
              </h1>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    className="block text-gray-600 text-sm font-bold mb-2"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div className="mb-4">
                  <label
                    className="block text-gray-600 text-sm font-bold mb-2"
                    htmlFor="type"
                  >
                    Question Type
                  </label>
                  <select
                    id="type"
                    name="type"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    onChange={handleInputChange}
                  >
                    <option value="Text">Text</option>
                    <option value="Textarea">Textarea</option>
                    <option value="Date">Date</option>
                    <option value="Checkbox">Checkbox</option>
                    <option value="Radio">Radio</option>
                    <option value="File">Upload file</option>
                  </select>
                </div>

                {/* Text input */}
                {showText && (
                  <div className="mb-4">
                    <label
                      className="block text-gray-600 text-sm font-bold mb-2"
                      htmlFor="textInput"
                    >
                      Text Input
                    </label>
                    <input
                      type="text"
                      id="textInput"
                      name="answer"
                      value={formData.answer}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    />
                  </div>
                )}

                {/* Textarea input */}
                {showTextarea && (
                  <div className="mb-4">
                    <label
                      className="block text-gray-600 text-sm font-bold mb-2"
                      htmlFor="textareaInput"
                    >
                      Textarea Input
                    </label>
                    <textarea
                      id="textareaInput"
                      name="answer"
                      onChange={handleInputChange}
                      value={formData.answer}
                      rows="4"
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    ></textarea>
                  </div>
                )}

                {showCheckbox && (
                  <div className="mb-4">
                    <label className="block text-gray-600 text-sm font-bold mb-2">
                      Checkbox Options
                    </label>
                    {Array.from({ length: 4 }).map((_, index) => (
                      <div className="flex items-center mb-2">
                        <input
                          type="text"
                          placeholder={`Checkbox Option ${index + 1}`}
                          key={`checkbox_${index + 1}`}
                          onChange={(e) =>
                            handleOptionChange(index, e.target.value)
                          }
                          value={formData.options[index]}
                          className="mr-2 w-3/4 px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                          required
                        />
                      </div>
                    ))}
                  </div>
                )}

                {/* Radio */}
                {showRadio && (
                  <div className="mb-4">
                    <label className="block text-gray-600 text-sm font-bold mb-2">
                      Radio Options
                    </label>
                    {Array.from({ length: 4 }).map((_, index) => (
                      <div key={index} className="flex items-center mb-2">
                        <input
                          type="text"
                          placeholder={`Radio Option ${index + 1}`}
                          key={`checkbox_${index + 1}`}
                          name="radio"
                          onChange={(e) =>
                            handleOptionChange(index, e.target.value)
                          }
                          value={formData.options[index]}
                          className="mr-2 w-3/4 px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                          required
                        />
                        <label className="ml-2" htmlFor={`radio${index + 1}`}>
                          Radio{index + 1}
                        </label>
                      </div>
                    ))}
                  </div>
                )}

                {/* Question Requirement (Yes/No) */}
                <div className="mb-4">
                  <label
                    className="block text-gray-600 text-sm font-bold mb-2"
                    htmlFor="requirement"
                  >
                    Question Requirement
                  </label>
                  <select
                    id="requirement"
                    name="requirement"
                    value={formData.requirement}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  >
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>

                {/* Question Sequence/Question Number */}
                <div className="mb-4">
                  <label
                    className="block text-gray-600 text-sm font-bold mb-2"
                    htmlFor="sequence"
                  >
                    Question Sequence/Question Number
                  </label>
                  <input
                    type="number"
                    id="sequence"
                    name="sequence"
                    value={formData.sequence}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  />
                </div>

                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  type="submit"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </main>
  );
};

export default Question;
