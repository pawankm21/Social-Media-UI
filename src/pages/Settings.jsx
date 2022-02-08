import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

export default function Settings({ openModal, closeModal, isOpen }) {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full  p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  <h1 className="text-center capitalize font-bold text-gray-800 text-3xl mt-10 mb-10 ">
                    Edit Profile
                  </h1>
                </Dialog.Title>

                <div className="m-2 shadow-xl divide-y divide-gray-700 p-2 ">
                  <form>
                    <div className="">
                      <div className="col-span-1 pointer-events-auto bg-gray-900 p-2">
                        <div className=" w-full  bg-gray-400 justify-center h-56 border-2 border-solid rounded-xl border-gray-800 mt-5 pointer-events-auto">
                          <input
                            type="file"
                            className=" opacity-0 w-full h-full focus:ring-2 ring-blue-400 outline-none"
                            name=""
                            id=""
                          />
                          <div className="pointer-events-none text-center relative bottom-24 text-gray-700">
                            Click or drag here to add background image
                          </div>
                        </div>
                        <div className="ml-4 w-36 h-36 bg-gray-800 justify-center border-8 relative bottom-20 border-solid rounded-full border-white-900 mt-5 pointer-events-auto p-4 text-xs">
                          <input
                            type="file"
                            className=" opacity-0 w-full h-full focus:ring-2 ring-blue-400 outline-none"
                            name=""
                            id=""
                          />
                          <div className="pointer-events-none text-center relative bottom-24 text-gray-400 pt-4 p-2 ">
                            Click or drag here to add profile image
                          </div>
                        </div>
                      </div>
                      <div className="md:w-1/2 mt-5">
                        <label className="text-gray-800 font-bold">Name</label>
                        <input
                          className="border border-gray-400 p-2 rounded-sm bg-gray-100 w-full focus:ring-2 ring-blue-400 outline-none"
                          type="text"
                          placeholder="John Doe"
                          name="Name"
                          required
                        />{" "}
                      </div>
                      <div className="col-span-2 mt-5">
                        <label className="text-gray-800 text-lg font-bold  m-auto">
                          Description
                        </label>
                        <textarea
                          className="border border-gray-400 p-2 rounded-sm bg-gray-100 w-full focus:ring-2 ring-blue-400 outline-none"
                          type="text"
                          cols="30"
                          rows="10"
                          name="eventName"
                          required
                        />
                      </div>
                    </div>
                    <div className="w-full text-center flex">
                      <button
                        className="w-1/2 m-5 p-4 text-lg rounded-md bg-indigo-500 text-white hover:bg-indigo-700"
                        onClick={closeModal}
                      >
                        Submit
                      </button>
                      <button
                        className="w-1/2 m-5 p-4 text-lg rounded-md bg-red-500 text-white hover:bg-red-700"
                        onClick={closeModal}
                      >
                        Close
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
