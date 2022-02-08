import React, { useState } from "react";
import { UserCircleIcon, SearchIcon, CogIcon } from "@heroicons/react/solid";
import DropMenu from "./DropMenu";
import { LogoutIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import Settings from "../pages/Settings";
import Toggle from "./Toggle";

function Navbar({ image, name }) {
  let [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <div className="w-full bg-white shadow h-16 flex justify-center md:justify-start p-2 pl-8 pr-8">
      <Link className="w-12 lg:w-36 self-center" to="/">
        <UserCircleIcon fill="yellow" />
      </Link>

      <div
        className="ml-4 flex focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-900 
      focus-within:bg-white bg-gray-200  rounded-md p-1 m-auto  md:w-1/2"
      >
        <input
          type="search"
          className="bg-gray-200 focus:bg-white outline-none  w-24 md:w-full"
        />
        <button>
          <SearchIcon width="18" className="ml-1 text-blue-900" />
        </button>
      </div>
      <div className="md:grid grid-cols-3 lg:gap-8 text-blue-900 text-xs lg:text-sm  hidden place-content-center w-full pl-6 pr-6 text-center">
        <Link to="/" className="hover:text-yellow-500 font-bold">
          Feed
        </Link>
        <Link to="/personal" className="hover:text-yellow-500">
          Personal
        </Link>
        <Link to="/maintain" className="hover:text-yellow-500">
          Maintain
        </Link>
      </div>
      <div className="w-full lg:flex  justify-end hidden place-content-center">
        <Toggle/>
        <Link
          to="/personal"
          className="rounded-full m-2 border-2 focus:ring-4 ring-yellow-200 border-yellow-400 self-center"
        >
          <img src={image} className="w-8 rounded-full h-8 " alt="" />
        </Link>
        <button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className="hover:text-yellow-400 text-blue-900 self-center"
        >
          <CogIcon className="w-6 m-1  " />
        </button>
        <Settings
          openModal={openModal}
          closeModal={closeModal}
          isOpen={isOpen}
        />
        <Link
          to="/logout"
          className="hover:text-yellow-400 text-blue-900 self-center"
        >
          <LogoutIcon className="w-6 m-1" />
        </Link>
      </div>
      <div className="md:hidden w-full justify-end m-auto flex">
        <DropMenu />
      </div>
    </div>
  );
}

export default Navbar;
