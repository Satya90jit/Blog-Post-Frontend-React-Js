import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import LogOutPage from './LogOutPage';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import background from "./images/nav3.webp";



// const navigation = [
//   { name: 'login', href: '/', current: true },
//   { name: 'CreateBlog', href: '/UserData', current: false },
//   { name: 'Blogs', href: '/BlogData', current: false },
//   { name: 'About', href: '#', current: false },
// ]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Navbar() {
  const user_id = localStorage.getItem("user");
  const active = user_id;

  const [item, setItems] = useState({
      family: 'family',
      lifestyle: 'lifestyle',
      food: 'food'
    });
  return (
    <Disclosure as="nav" style={{
      backgroundImage: `url(${background})`,
     
    }} className=" w-full shadow-lg shadow-slate-400 fixed top-0 z-50 ">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-12  items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  {/* <img
                    className="block h-8 w-auto lg:hidden"
                    src="https://i.pinimg.com/564x/b7/ca/6e/b7ca6e0493884d85fea192863f8be220.jpg"
                    alt="Your Company"
                  /> */}
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src="https://i.pinimg.com/564x/b7/ca/6e/b7ca6e0493884d85fea192863f8be220.jpg"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    
                    <Link to={`/`}  className="text-gray-300 hover:bg-gray-700 hover:text-white
                          px-3 py-2 rounded-md text-sm font-medium">
                    Home</Link>
                    <Link   to={`/allBlogs`} className="text-gray-300 hover:bg-gray-700 hover:text-white
                          px-3 py-2 rounded-md text-sm font-medium">
                    AllBlogs</Link>
                    <Link to={`/categoryblogs/${item.family}`} className="text-gray-300 hover:bg-gray-700 hover:text-white
                          px-3 py-2 rounded-md text-sm font-medium">
                    Family</Link>
                    <Link    to={`/categoryblogs/${item.lifestyle}`} className="text-gray-300 hover:bg-gray-700 hover:text-white
                          px-3 py-2 rounded-md text-sm font-medium">
                    Lifestyle</Link>
                    <Link    to={`/categoryblogs/${item.food}`} className="text-gray-300 hover:bg-gray-700 hover:text-white
                          px-3 py-2 rounded-md text-sm font-medium">
                    Food</Link>
                    <Link   to={`/createblogs`} className="text-gray-300 hover:bg-gray-700 hover:text-white
                          px-3 py-2 rounded-md text-sm font-medium">
                    CreateBlogs</Link>
                  </div>
                </div>
              </div>
              
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {active? (" ") : ( 
                <Link to={`/loginpage`}
                  type="button"
                  className=" border-white border-2 mr-3 bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="sr-only">View notifications</span>
                   Sign In
                  {/* <BellIcon className="h-6 w-6" aria-hidden="true" /> */}
                </Link>
                )}
                
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex mr-4 bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      {/* <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      /> */}
                     <Bars3Icon className="block h-6 w-6  text-white" aria-hidden="true" />
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
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <Link to={`/aboutpage`}
                            
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                          
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <span

                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            <LogOutPage />
                          </span>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              <Link to={`/`}  className='text-gray-300 hover:bg-gray-700 hover:text-white
                    block px-3 py-2 rounded-md text-base font-medium'>
              Home</Link>
              <Link  to={`/allBlogs`}  className='text-gray-300 hover:bg-gray-700 hover:text-white
                    block px-3 py-2 rounded-md text-base font-medium'>
              AllBlogs</Link>
              <Link to={`/categoryblogs/${item.family}`} className='text-gray-300 hover:bg-gray-700 hover:text-white
                    block px-3 py-2 rounded-md text-base font-medium'>
              Family</Link>
              <Link to={`/categoryblogs/${item.lifestyle}`} className='text-gray-300 hover:bg-gray-700 hover:text-white
                    block px-3 py-2 rounded-md text-base font-medium'>
              Lifestyle</Link>
              <Link to={`/categoryblogs/${item.food}`} className='text-gray-300 hover:bg-gray-700 hover:text-white
                    block px-3 py-2 rounded-md text-base font-medium'>
              Food</Link>
              <Link  to={`/createblogs`} className='text-gray-300 hover:bg-gray-700 hover:text-white
                    block px-3 py-2 rounded-md text-base font-medium'>
              CreateBlogs</Link>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
};
export default Navbar;

