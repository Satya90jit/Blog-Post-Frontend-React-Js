import React from "react";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import ErrorPage from "./ErrorPage";
import SideButton from "./SideButton";
import { motion } from "framer-motion";
import ScrollBtn from "./ScrollBtn";
import PostEditModal from "./PostEditModal";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function AllBlogs() {
  const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  //const params = useParams();
  const userId = localStorage.getItem("user");
  //moadl for edit 
  // const [isOpen, setIsOpen] = useState("");
  // function closeEditModal() {
  //   setIsOpen(false)
  // };
  // function openEditModal() {
  //   setIsOpen(true)
  // };
  //modal for edit 

  const func1 = () => {
    const getData = async () => {
      try {
        const response = await fetch(`/api/v1/articles?search=${search}`);
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        let filterData = await response.json();
        setData(filterData);
        console.log(filterData);
      } catch (error) { }
    };
    getData();
  };

  const deleteItem = async (e, x) => {
    e.preventDefault();
    console.log(x);
    const res = await fetch(`/api/v1/articles/${x}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });

    const deletedData = await res.json();
    console.log(deletedData);
    const updateditems = data.filter((item, id) => item.id !== x);
    setData(updateditems);

    if (deletedData.status.code !== 200) {
      window.alert("somethinng went wrong!");
    } else {
      window.alert("post deleted successfully");
    }
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(`/api/v1/articles`);
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        let actualData = await response.json();
        setData(actualData);
        //console.log(actualData);
      } catch (error) { }
    };
    getData();
  }, []);

  return (
    <>
      <Navbar />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]
        }}>
        <div className="mb-20">
          <div className="mt-16">
            <Header search={search} setSearch={setSearch} func1={func1} />
          </div>
          <hr></hr>
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl font-semibold mt-8 leading-9 text-center text-gray-800 dark:text-gray-50">All The Blogs</h1>
            <p className="text-base leading-normal text-center text-gray-600 dark:text-white mt-4 -mb-1 lg:w-1/2 md:w-10/12 w-11/12">If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough</p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-slate-200 to-slate-300">
          <ScrollBtn />

          {data?.length === 0 ? (
            <ErrorPage />
          ) : (
            data?.map((blog, index) => {
              return (
                <section className="bg-white dark:bg-gray-900 ">
                  <div className=" lg:p-10 box-content">
                    <div className="container  bg-slate-100  px-12 py-8  mx-auto transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-black">
                      <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
                        <img
                          className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96 transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-black"
                          src={blog.image_url}
                          alt="image"
                        />
                        <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
                          <div className="mt-1 flex justify-between h-auto items-center lg:w-full lg:mt-0">
                            <div className="text-left">
                              <p className="text-sm  text-blue-500 uppercase">
                                {blog.category}
                              </p>
                            </div>
                            {/* <div>
                              <PostEditModal isOpen={isOpen} closeEditModal={closeEditModal()} />
                            </div> */}
                            <div className="text-right">
                              {blog.user_id == userId ? (
                                 <Menu as="div" className="relative ml-3">
                                 <div>
                                   <Menu.Button className="flex mr-4 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-100">
                                     <span className="sr-only">Open user menu</span>
                                     <svg
                                       class="w-6 h-6 text-black"
                                      // fill="none"
                                       //stroke="currentColor"
                                       viewBox="0 0 24 24"
                                       xmlns="http://www.w3.org/2000/svg"
                                     >
                                       <path
                                        //  stroke-linecap="round"
                                        //  stroke-linejoin="round"
                                        //  stroke-width="2"
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
                                          //  onClick={(e) => {
                                          //    openEditModal();
                                          //  }}
                                           // to={`/CommentEdit/${com.id}`}
                                           className={classNames(
                                             active ? "bg-gray-100" : "",
                                             "block text-left px-4 py-2 text-sm text-gray-700"
                                           )}
                                         >
                                           Edit
                                         </Link>
                                       )}
                                     </Menu.Item>
                                     <Menu.Item>
                                       {({ active }) => (
                                         <span
                                         onClick={(e) => deleteItem(e, blog.id)}
                                           className={classNames(
                                             active ? "bg-gray-100" : "",
                                             "block text-left px-4 py-2 text-sm text-gray-700"
                                           )}
                                         >
                                           Delete
                                         </span>
                                       )}
                                     </Menu.Item>
                                   </Menu.Items>
                                 </Transition>
                               </Menu>    
                              ) : (" ")}
                            </div>
                          </div>
                          <Link
                            to={`/blogcard/${blog.id}`}
                            className="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-white md:text-3xl"
                          >
                            {blog.title}
                          </Link>
                          <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                            {blog.body}
                          </p>
                          <Link
                            to={`/blogcard/${blog.id}`}
                            className="inline-block mt-2 text-blue-500 underline hover:text-blue-400"
                          >
                            Read more
                          </Link>
                          <div className="flex items-center mt-6">
                            <img
                              className="object-cover object-center w-10 h-10 rounded-full"
                              src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                              alt=""
                            />
                            <div className="mx-4">
                              <h1 className="text-sm text-gray-700 dark:text-gray-200">
                                {blog.userName}
                              </h1>
                              <p className="text-sm text-gray-500 dark:text-gray-400">
                                {blog.created_at}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              );
            })
          )}
        </div>
        <Footer />
      </motion.div>
    </>
  );
}

export default AllBlogs;
