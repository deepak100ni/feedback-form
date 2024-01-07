import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import Textinput from "./inputs/Textinput";
import Dateinput from "./inputs/Dateinput";
import Textarea from "./inputs/Textarea";
import Checkboxinput from "./inputs/Checkboxinput";
import Radioinput from "./inputs/Radioinput";
import Fileinput from "./inputs/Fileinput";
import Questioninput from "./inputs/Questioninput";

const Showform = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/question/list?page=0c&limit=5"
      );
      console.log("Response:", response.data.data);
      setData(response.data.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <>
      <div className="flex flex-col h-screen">
        <Header />
        <main className="flex-1 p-2">
          <div className=" flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-lg ">
              <h1 className="text-3xl font-bold mb-4 text-gray-800">
                Fill the Question Form
              </h1>
              <form>
              {data.map((x, index) => (
                <div key={index}>
                    <Questioninput que={x.name} />
                    {x.type === 'Text' && <Textinput />}
                </div>
                ))}
                {/* Text input */}

                { /*<Textinput /> */}

                {/* Date input */}
                <Dateinput />

                {/* Textarea input */}
                <Textarea />

                {/* checkbox input */}
                <Checkboxinput />

                {/* Radio input */}
                <Radioinput />

                {/* File input */}
                <Fileinput />

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
      </div>
    </>
  );
};

export default Showform;
