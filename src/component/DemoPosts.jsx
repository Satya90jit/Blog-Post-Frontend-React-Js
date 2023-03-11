import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function DemoPosts() {
  const [blogZero, setBlogZero] = useState([]);
  const [blogOne, setBlogOne] = useState([]);
  const [blogTwo, setBlogTwo] = useState([]);
  const [blogThree, setBlogThree] = useState([]);
  const [blogFour, setBlogFour] = useState([]);
  const [blogFive, setBlogFive] = useState([]);

  useEffect(() => {
    const getRecentBlog = async () => {
      try {
        const response = await fetch(`/api/v1/articles`);
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        const data = await response.json();

        setBlogZero(data[0]);
        setBlogOne(data[1]);
        setBlogTwo(data[2]);
        setBlogThree(data[3]);
        setBlogFour(data[4]);
        setBlogFive(data[5]);

      } catch (error) { }
    };
    getRecentBlog();
  }, []);
  console.log(blogOne);

  return (
    <motion.div
     whileHover={{ scale: 1.1}} 
    >
      <div className="bg-slate-100 flex justify-center items-center mt-3">
        <div className="2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4 w-96 sm:w-auto">
          <div role="main" className="flex flex-col items-center justify-center">
            <h1 className="text-4xl font-semibold leading-9 text-center text-gray-800 dark:text-gray-50">This Week Blogs</h1>
            <p className="text-base leading-normal text-center text-gray-600 dark:text-white mt-4 lg:w-1/2 md:w-10/12 w-11/12">If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough</p>
          </div>
          <div className="lg:flex items-stretch md:mt-12 mt-8 ">
            <div className="lg:w-1/2">
              <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6">
                <div className="sm:w-1/2 border-2  rounded-lg shadow-2xl shadow-slate-900 relative transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-black ">
                  <div>
                    <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">{blogZero.created_at}</p>
                    <div className="absolute bottom-0 left-0 p-6">
                      <h2 className="text-xl font-semibold 5 text-white">{blogZero.title}</h2>
                      {/* <p className="text-base leading-4 text-white mt-2">{blogZero.body}</p> */}
                      <h6 className="text-sm 5  hover:underline hover:underline-offset-2 text-white italic">By &nbsp; &nbsp;{blogZero.userName}</h6>
                      <a href="javascript:void(0)" className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                        <Link to={`/blogcard/${blogZero.id}`} className="pr-2 text-sm font-medium leading-none">Read More</Link>
                        <svg className="fill-stroke" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <img src={blogZero.image_url} className="w-full" alt="chair" />
                </div>
                <div className="sm:w-1/2 border-2 rounded-lg shadow-2xl shadow-slate-900   sm:mt-0 mt-4 relative transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-black">
                  <div>
                    <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">{blogOne.created_at}</p>
                    <div className="absolute bottom-0 left-0 p-6">
                      <h2 className="text-xl font-semibold 5 text-white">{blogOne.title}</h2>
                      {/* <p className="text-base leading-4 text-white mt-2">{blogOne.body}</p> */}
                      <h6 className="text-sm 5  hover:underline hover:underline-offset-2 text-white italic">By &nbsp; &nbsp;{blogOne.userName}</h6>
                      <a href="javascript:void(0)" className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                        <Link to={`/blogcard/${blogOne.id}`} className="pr-2 text-sm font-medium leading-none">Read More</Link>
                        <svg className="fill-stroke" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <img src={blogOne.image_url} className="w-full" alt="wall design" />
                </div>
              </div>
              <div className="relative shadow-2xl shadow-slate-900 transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-black ">
                <div>
                  <p className="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">{blogTwo.created_at}</p>
                  <div className="absolute bottom-0 left-0 md:p-10 p-6  ">
                    <h2 className="text-xl font-semibold 5 text-white">{blogTwo.title}</h2>
                    {/* <p className="text-base leading-4 text-white mt-2">{blogTwo.body}</p> */}
                    <h6 className="text-sm 5  hover:underline hover:underline-offset-2 text-white italic">By &nbsp; &nbsp;{blogTwo.userName}</h6>
                    <a href="javascript:void(0)" className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                      <Link to={`/blogcard/${blogTwo.id}`} className="pr-2 text-sm font-medium leading-none">Read More</Link>
                      <svg className="fill-stroke" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  </div>
                </div>
                <img src={blogTwo.image_url} alt="sitting place" className="w-full mt-8 md:mt-6 hidden sm:block" />
                <img className="w-full mt-4 sm:hidden" src={blogTwo.image_url} alt="sitting place" />
              </div>
            </div>
            <div className="lg:w-1/2 xl:ml-8 lg:ml-4 lg:mt-0 md:mt-6 mt-4 lg:flex flex-col justify-between">
              <div className="relative shadow-2xl shadow-slate-900 transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-black">
                <div>
                  <p className="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">{blogThree.created_at}</p>
                  <div className="absolute bottom-0 left-0 md:p-10 p-6">
                    <h2 className="text-xl font-semibold 5 text-white">{blogThree.title}</h2>
                    {/* <p className="text-base leading-4 text-white mt-2">{blogThree.body}</p> */}
                    <h6 className="text-sm 5  hover:underline hover:underline-offset-2 text-white italic">By &nbsp; &nbsp;{blogThree.userName}</h6>
                    <a href="javascript:void(0)" className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                      <Link to={`/blogcard/${blogThree.id}`} className="pr-2 text-sm font-medium leading-none">Read More</Link>
                      <svg className="fill-stroke" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  </div>
                </div>
                <img src={blogThree.image_url} alt="sitting place" className="w-full sm:block hidden" />
                <img className="w-full sm:hidden" src={blogThree.image_url} alt="sitting place" />
              </div>
              <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6 md:mt-6 mt-4">
                <div className="relative border-2 rounded-lg shadow-2xl shadow-slate-900  w-full transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-black">
                  <div>
                    <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">{blogFour.created_at}</p>
                    <div className="absolute bottom-0 left-0 p-6">
                      <h2 className="text-xl font-semibold 5 text-white">{blogFour.title}</h2>
                      {/* <p className="text-base leading-4 text-white mt-2">{blogFour.body}</p> */}
                      <h6 className="text-sm 5  hover:underline hover:underline-offset-2 text-white italic">By &nbsp; &nbsp;{blogFour.userName}</h6>
                      <a href="javascript:void(0)" className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                        <Link to={`/blogcard/${blogFour.id}`} className="pr-2 text-sm font-medium leading-none">Read More</Link>
                        <svg className="fill-stroke" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <img src={blogFour.image_url} className="w-full " alt="chair" />
                </div>
                <div className="relative border-2 rounded-lg shadow-2xl shadow-slate-900  w-full sm:mt-0 mt-4 transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-black">
                  <div>
                    <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">{blogFive.created_at}</p>
                    <div className="absolute bottom-0 left-0 p-6">
                      <h2 className="text-xl font-semibold 5 text-white">{blogFive.title}</h2>
                      {/* <p className="text-base leading-4 text-white mt-2">{blogFive.body}</p> */}
                      <h6 className="text-sm 5  hover:underline hover:underline-offset-2 text-white italic">By &nbsp; &nbsp;{blogFive.userName}</h6>
                      <a href="javascript:void(0)" className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                        <Link to={`/blogcard/${blogFive.id}`} className="pr-2 text-sm font-medium leading-none">Read More</Link>
                        <svg className="fill-stroke" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <img src={blogFive.image_url} className="w-full" alt="wall design" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
};
export default DemoPosts;