import React from "react";

const Sidebar = ({ toggleSidebar }) => {
  return (
    <nav className="bg-blue-500 p-4">
      <button
        className="px-4 py-2 bg-gray-700 text-white rounded-md"
        onClick={toggleSidebar}
      >
        Toggle Sidebar
      </button>
      <ul className="mt-4">
        <li className="py-2 px-4 hover:bg-gray-600 cursor-pointer">Home</li>
        <li className="py-2 px-4 hover:bg-gray-600 cursor-pointer">About</li>
        <li className="py-2 px-4 hover:bg-gray-600 cursor-pointer">Services</li>
        <li className="py-2 px-4 hover:bg-gray-600 cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
};

export default Sidebar;
