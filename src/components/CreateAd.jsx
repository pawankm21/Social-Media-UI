import { Dialog, Transition } from "@headlessui/react";
import { CameraIcon } from "@heroicons/react/outline";
import { Fragment,  } from "react";

export default function CreateAd({ show, setShow }) {
  function closeModal() {
    setShow(false);
  }

  // function openModal() {
  //   setShow(true);
  // }

  return (
    <>
      <Transition appear show={show} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto w-full"
          onClose={closeModal}
        >
          <div className=" px-4 text-center">
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
              <div className="inline-block w-full max-w-md p-6 my-8 text-left align-middle transition-all transform bg-white shadow-xl overflow-auto rounded-xl">
                <Dialog.Title
                  as="h3"
                  className="text-xl leading-6 text-gray-500  font-bold capitalize"
                >
                  Create Ad Request
                </Dialog.Title>
                <div className="mt-4">
                  <form action="">
                    <label
                      className="block text-gray-700 text-sm font-bold m-2"
                      htmlFor="title"
                    >
                      Subject
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="title"
                      type="text"
                      placeholder="Ad for xyz "
                    />

                    <div className=" w-full shadow appearance-none border m-auto h-48  rounded-xl mt-5 pointer-events-auto leading-tight focus:outline-none focus:shadow-outline  relative">
                      <label
                        className="block text-gray-400 text-sm  mb-2 w-full self-center text-center mt-4"
                        htmlFor="file"
                      >
                        Ad banner
                      </label>
                      <input
                        type="file"
                        className=" opacity-0 bottom-0 absolute w-full h-full focus:ring-2 bg-red-200 ring-blue-400 outline-none"
                        name="file"
                        id=""
                      />
                      <div className="pointer-events-none text-center relative bottom-24 text-gray-400">
                        <CameraIcon className="w-8 m-auto " />
                      </div>
                    </div>
                  </form>
                </div>

                <div className="mt-4 w-full flex justify-evenly">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-red-900 bg-red-100 border border-transparent rounded-md hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={closeModal}
                  >
                    Save
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
