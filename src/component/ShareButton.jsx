import React from "react";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
//import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function ShareButton() {
  return (
    <>
      <Menu as="div" className="relative ml-3">
        <div>
          <Menu.Button className="flex mr-4 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-100">
            <span className="sr-only">Open user menu</span>
            {/* <Bars3Icon 
                                  className="block h-6 w-6  text-black"
                                  aria-hidden="true"
                                /> */}
            <svg
              class="w-6 h-6 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              ></path>
            </svg>
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
          <Menu.Items className="absolute right-8 z-10 mt-2 w-32 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <Menu.Item>
              {({ active }) => (
                <Link              
                  className={classNames(
                    active ? "bg-gray-100" : "",
                    "block text-left px-4 py-2 text-sm text-gray-700"
                  )}
                >
                  share post
                </Link>
              )}
           </Menu.Item>    
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
}
export default ShareButton;
