import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  AiFillAccountBook,
  AiFillHome,
  AiOutlineClose,
  AiOutlineMenu,
} from "react-icons/ai";

import {
  faHeart,
  faComment,
  faPaperPlane,
  faBookmark,
  faEllipsisH,
} from "@fortawesome/fontawesome-svg-core";
const Navbar = ({ toggleSidebar }) => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: "fa-solid fa-question-circle" },
    { title: "Inbox", src: "fa-solid fa-inbox" },
    { title: "Accounts", src: "fa-solid fa-file-invoice" }, // gap :true
    { title: "Schedule ", src: "fa-solid fa-calendar" },
    { title: "Search", src: "fa-solid fa-search" },
    { title: "Analytics", src: "fa-solid fa-chart-bar" },
    { title: "Files ", src: "fa-solid fa-folder", gap: true },
    { title: "Setting", src: "fa-solid fa-gear" },
  ];
  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-slate-600 h-screen p-5  pt-8 relative duration-300`}
      >
        <AiOutlineMenu
          size={32}
          className={`absolute cursor-pointer right-2 top-9 w-7 
            rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-3 items-center">
          <img
            width="40px"
            src="https://images.pexels.com/photos/2235130/pexels-photo-2235130.jpeg?auto=compress&cs=tinysrgb&w=600"
            className={`cursor-pointer duration-500  ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-bold text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Designer
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              {/* <span>{Menu.src}</span> */}
              <i className={`${Menu.src} text-slate-200 text-lg`} />{" "}
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-screen flex-1 p-7">
        <h1 className="text-2xl font-semibold ">Home Page</h1>
      </div>
    </div>
  );
};

export default Navbar;
