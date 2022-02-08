import React, { Fragment }  from "react";
import { Menu,Transition} from "@headlessui/react";
import { CogIcon, LogoutIcon, MenuIcon, UserCircleIcon } from "@heroicons/react/outline";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function DropMenu() {
  return (
    <Menu as="div" className="ml-3 relative">
      <div>
        <Menu.Button className="bg-blue-500 flex text-sm focus:outline-none shadow focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800  rounded-sm">
        <MenuIcon width="26" stroke="white"/>
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-xl py-1 bg-white  ring-opacity-5 focus:outline-none z-50">
          <Menu.Item>
            {({ active }) => (
              <a
                href="https://google.com"
                className={classNames(
                  active ? "bg-blue-100" : "",
                  "block px-4 py-2 text-sm text-blue-900"
                )}
              >
               <UserCircleIcon className="m-1 inline w-8"/> Your Profile
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                href="https://google.com"
                className={classNames(
                  active ? "bg-blue-100" : "",
                  "block px-4 py-2 text-sm text-blue-900"
                )}
              >
                <CogIcon className="w-8 inline m-1" />
                Settings
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                href="https://google.com"
                className={classNames(
                  active ? "bg-blue-100" : "",
                  "block px-4 py-2 text-sm text-blue-900"
                )}
              >
                <LogoutIcon className="w-8 m-1 inline"/>
                Sign out
              </a>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default DropMenu;
