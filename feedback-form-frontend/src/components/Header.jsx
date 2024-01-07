import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-500 p-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <ul className="flex space-x-4">
          <li className="m-2 p-2">
            <Link
              to="/"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              Create Form
            </Link>
          </li>
          <li className="m-2 p-2">
            <Link
              to="/list-forms"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              List Forms
            </Link>
          </li>
          <li className="m-2 p-2">
            <Link
              to="/show-forms"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              Show Forms
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
