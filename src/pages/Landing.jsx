/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { ReactComponent as BlocksIcon } from "../assets/blocks.svg";
import { ReactComponent as EasyIcon } from "../assets/easy.svg";
import { ReactComponent as RewardsIcon } from "../assets/rewards.svg";
import { ReactComponent as SecureIcon } from "../assets/secure.svg";
// import useDark from "../hooks/useDark";
// import gif from "../assets/bg3.png";
import background from "../assets/background.png";
import Toggle from "../components/Toggle";
const navigation = [
  { name: "Features", href: "#features" },
  { name: "Github", href: "" },
  { name: "Marketplace", href: "#" },
  { name: "Team", href: "#" },
];


export default function Landing() {
  // const [dark, setDark] = useDark();
  return (
    <div className="relative overflow-hidden dark:bg-blue-900 bg-blue-200">
      <div className="w-full">
        <div className="relative z-10 bg-opacity-75 dark:bg-blue-900">
          <Popover>
            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
              <nav
                className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                aria-label="Global"
              >
                <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                  <div className="flex items-center justify-between w-full md:w-auto">
                    <a href="/">
                      <img
                        className="h-8 w-auto sm:h-10"
                        src="https://tailwindui.com/img/logos/workflow-mark-blue-600.svg"
                        alt="logo"
                      />
                    </a>
                    <div className="-mr-2 flex items-center md:hidden">
                      <Popover.Button className="dark:bg-blue-700 rounded-md p-2 inline-flex items-center justify-center dark:text-gray-100 dark:hover:text-gray-900 dark:hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-inset dark:focus:ring-blue-500">
                        <span className="sr-only">Open main menu</span>
                        <MenuIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="font-medium text-gray-700 
                      hover:text-blue-400 dark:text-blue-100 dark:hover:text-yellow-400"
                    >
                      {item.name}
                    </a>
                  ))}
                  <a
                    href="/auth"
                    className="font-medium dark:text-yellow-300 dark:hover:text-blue-400"
                  >
                    Log in
                  </a>
                 <Toggle/>
                </div>
              </nav>
            </div>

            <Transition
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                className="absolute z-50 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
              >
                <div className="rounded-lg shadow-md bg-blue-300 ring-1 dark:ring-black ring-opacity-5 overflow-hidden">
                  <div className="px-5 pt-4 flex items-center justify-between">
                    <div>
                      <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-mark-blue-600.svg"
                        alt=""
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="dark:bg-blue-500 rounded-md p-2 inline-flex items-center justify-center
                      bg-white dark:text-gray-100 dark:hover:text-yellow-400 dark:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset dark:focus:ring-blue-500 ">
                        <span className="sr-only">Close main menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="px-2 pt-2 pb-3 space-y-1">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block px-3 py-2 rounded-md text-base font-medium dark:text-gray-700 font-gray-700 hover:bg-blue-400 dark:hover:text-gray-900 dark:hover:bg-blue-100"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <a
                    href="https://google.com"
                    className="block w-full px-5 py-3 text-center font-medium dark:text-blue-600 dark:bg-gray-50 dark:hover:bg-gray-100 bg-blue-900 text-white"
                  >
                    Log in
                  </a>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <main className="   w-full  mt-10  max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 z-10 relative ">
            <div className="lg:flex w-full">
              <div className="lg:w-1/2 w-full">
                <h1 className="text-4xl tracking-tight font-extrabold dark:text-gray-200 text-blue-900 sm:text-6xl md:text-7xl ">
                  <span className="block xl:inline">
                    Social Media of the Future.
                  </span>{" "}
                  <span className="block dark:text-yellow-400 xl:inline text-gray-900">
                    Powered by Blockchain.
                  </span>
                </h1>
                <p className="mt-3 text-base dark:text-gray-200 text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl ">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                  occaecat fugiat aliqua.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex  justify-center">
                  <div className="rounded-md shadow">
                    <a
                      href="https://google.com"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                    >
                      Login
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="https://google.com"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 
                      hover:text-blue-900 bg-blue-100 hover:bg-blue-300 md:py-4 md:text-lg md:px-10"
                    >
                      Sign up
                    </a>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 w-full mt-12 lg:m-0">
                <img className=" m-auto" src={background} alt="" />
              </div>
            </div>
          </main>
          <section
            id="#features"
            className="lg:p-8 sm:p-4 grid  mt-24 grid-cols-1 gap-10 bg-blue-100 dark:bg-blue-800"
          >
            <h1
              className="lg:text-7xl font-bold text-4xl
              mt-12 text-center
           p-2 capitalize dark:text-gray-200
           border-blue-900
           text-blue-900 border-b-4 dark:border-blue-900 "
            >
              Awesome Features
            </h1>
            <div className="lg:flex rounded-lg">
              <div className="lg:w-1/2 p-8 self-center hidden lg:block ">
                <BlocksIcon className="w-48 h-48 m-auto dark:text-yellow-400
                text-blue-900 fill-current font-bold" />
              </div>
              <div className="lg:w-1/2 m-auto p-8 dark:bg-blue-900 text-gray-700 dark:text-white bg-white rounded-lg shadow ">
                <BlocksIcon className="lg:hidden w-24 h-24 m-auto dark:text-yellow-400 text-blue-900 fill-current font-bold" />
                <h1 className=" text-center text-gray-700 lg:text-left text-2xl font-bold dark:text-yellow-400 lg:text-4xl">
                  Decentralized{" "}
                </h1>
                <p className=" e md:text-2xl mt-4  ">
                  Decentralized social networks give users more control and
                  autonomy. An individual can set up their social network and
                  determine how it operates and what users can say. Instead of
                  having content monitored by a corporation, the founder of a
                  federated social network can establish the terms of acceptable
                  behavior for the site.
                </p>
              </div>
            </div>
            <div className="lg:flex rounded-lg">
              <div className="lg:w-1/2 m-auto p-8 dark:text-white text-gray-700 dark:bg-blue-900 shadow bg-white rounded-lg">
                <RewardsIcon className="lg:hidden w-24 h-24 m-auto text-blue-900 dark:text-yellow-400 fill-current font-bold" />
                <h1 className="text-gray-700 text-center lg:text-left text-2xl font-bold dark:text-yellow-400 lg:text-4xl">
                  Get rewarded
                </h1>
                <p className="md:text-2xl mt-4 ">
                  Good behaviour is rewarded. Users can earn points for
                  participating in the network and can use these points to
                  purchase goods and services.
                </p>
              </div>
              <div className="lg:w-1/2 p-8 self-center hidden lg:block ">
                <RewardsIcon className="w-48 h-48 m-auto dark:text-yellow-400 text-blue-900 fill-current font-bold" />
              </div>
            </div>
            <div className="lg:flex  rounded-lg">
              <div className="lg:w-1/2 p-8 self-center hidden lg:block shadow ">
                <SecureIcon className="w-48 h-48 m-auto dark:text-yellow-400 text-blue-900 fill-current font-bold" />
              </div>
              <div className="lg:w-1/2 m-auto p-8 text-gray-700 dark:text-white bg-white dark:bg-blue-900 shadow-lg rounded-lg">
                <SecureIcon className="lg:hidden w-24 h-24 m-auto text-blue-900 dark:text-yellow-400 fill-current font-bold" />
                <h1 className=" text-center lg:text-left text-2xl font-bold text-gray-700 dark:text-yellow-400 lg:text-4xl">
                  Secure
                </h1>
                <p className="md:text-2xl mt-4 ">
                  The network is secured by a smart contract that ensures that
                  users can only interact with the network in a way that is
                  acceptable to the network.
                </p>
              </div>
            </div>
            <div className="lg:flex shadow-sm rounded-lg">
              <div className="lg:w-1/2 m-auto p-8 text-gray-700 dark:text-white bg-white dark:bg-blue-900 shadow-lg rounded-lg">
                <EasyIcon className="lg:hidden w-24 h-24 m-auto text-blue-900 dark:text-yellow-400 fill-current font-bold" />
                <h1 className=" text-center lg:text-left text-2xl font-bold text-gray-700 dark:text-yellow-400 lg:text-4xl">
                  Easy to use
                </h1>
                <p className="md:text-2xl mt-4 ">
                  The network is easy to use. Users can create accounts,
                  interact with the network, and use the tools to create
                  content.
                </p>
              </div>
              <div className="lg:w-1/2 p-8 self-center hidden lg:block ">
                <EasyIcon className="w-48 h-48 m-auto text-blue-900 dark:text-yellow-400 fill-current font-bold" />
              </div>
            </div>
          </section>
        </div>
      </div>
      <footer className="dark:bg-gray-900 bg-blue-900 pb-8">
        <div className=" h-96 p-4 flex border-b-2 ">
          <div className=" w-1/2 justify-center mr-8">
            <div className="flex flex-col items-center p-4">
              <img
                src="https://www.logo.wine/a/logo/Ethereum/Ethereum-Icon-Purple-Logo.wine.svg"
                alt=""
                className="w-16 h-16 mb-4"
              />
              <h1 className="text-white lg:text-4xl font-bold text-center">
                Lorem ipsum dolor sit amet consectetur
              </h1>
              <div className="grid grid-flow-col mt-12 w-full justify-around">
                {/* <UserGroupIcon className="w-6 text-white" />
                <UserGroupIcon className="w-6 text-white" />
                <UserGroupIcon className="w-6 text-white" />
                <UserGroupIcon className="w-6 text-white" /> */}
              </div>
            </div>
          </div>

          <div className="flex flex-col  w-full">
            <div className="grid grid-flow-col relative text-white lg:text-xl  top-24 p-4">
              <p>
                <a href="https://google.com" className="hover:no-underline underline ">
                  lorem
                </a>
              </p>{" "}
              <p>
                <a href="https://google.com" className="hover:no-underline underline ">
                  lorem
                </a>
              </p>{" "}
              <p>
                <a href="https://google.com" className="hover:no-underline underline ">
                  lorem
                </a>
              </p>{" "}
              <p>
                <a href="https://google.com" className="hover:no-underline underline ">
                  lorem
                </a>
              </p>
            </div>
          </div>
        </div>
        <p className="text-center text-gray-400 m-4">
          lorem ipusm copyright 2020{" "}
        </p>
      </footer>
    </div>
  );
}
