import React, { useState } from "react";
import { Tab } from "@headlessui/react";

function Dockbar({main,setMain,TABS}) {
  
  return (
    <Tab.Group>
      <div className="mt-2 m-1 h-12  bg-gray">
        <Tab.List className="grid grid-cols-4 md:gap-8 h-full place-content-center md:ml-6 text-sm lg:text-base md:mr-6 mr-1 ml-1 md:w-2/3 rounded-md p-2 bg-white shadow">
          {TABS.map((tab, ind) => {
            return (
              <Tab
                key={ind}
                className={({ selected }) => {
                  if (selected) {
                    setMain(tab.name);
                    return "p-1 bg-blue-600 text-yellow-100 ring-blue-300 focus:ring-4  rounded-md  md:w-24 font-bold transition ease-in-out duration-500 ";
                  } else {
                    return "p-1  text-blue-900  ring-indigo-300 focus:ring-4  rounded-md  md:w-24 transition ease-in-out duration-500 ";
                  }
                }}
              >
                <div className="w-6 m-auto">{tab.icon}</div>
              </Tab>
            );
          })}
        </Tab.List>
      </div>
    </Tab.Group>
  );
}

export default Dockbar;
