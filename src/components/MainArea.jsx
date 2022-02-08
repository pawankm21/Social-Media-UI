import React from "react";

function MainArea({ title, children, button, modal, show, setShow }) {
  const toggle = () => setShow(!show);
  return (
    <div className=" rounded-md w-full h-full overflow-y-scroll ">
      <h1 className="text-3xl h-16 text-left pl-4 p-2 font-bold shadow-md  text-blue-900 sticky top-0 bg-white z-10">
        {title}
        {button ? (
          <button
            className="absolute right-10 text-base font-bold shadow transition-all duration-500 hover:bg-blue-800 ease-in-out bg-blue-800 p-2 text-white rounded-sm"
            onClick={toggle}
          >
            {button}
          </button>
        ) : null}
      </h1>
      <div className="">{show ? modal : null} </div>
      <div className="w-full h-screen  pt-4 p-2">{children}</div>
    </div>
  );
}

export default MainArea;
