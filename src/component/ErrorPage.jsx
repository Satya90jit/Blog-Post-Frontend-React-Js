import React from "react";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <>
      {/* component */}
      {/* This is an example component */}
      <div className="h-96 w-screen bg-gray-50 flex items-center">
        <div className="container flex flex-col md:flex-row items-center justify-between px-5 text-gray-700">
          <div className="w-full lg:w-1/2 mx-8">
            <div className="text-7xl text-green-500 font-dark font-extrabold mb-8">
              No blogs
            </div>
            <p className="text-2xl md:text-3xl font-light leading-normal mb-8">
              Sorry we couldn't find the blogs you're looking for
            </p>
            <Link
              onClick={(e) => {
                {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              className="px-5 inline py-3 text-sm font-medium leading-5 shadow-2xl text-white transition-all duration-400 border border-transparent rounded-lg focus:outline-none bg-green-600 active:bg-red-600 hover:bg-red-700"
            >
              back to search
            </Link>
          </div>
          <div className="w-full lg:flex lg:justify-end lg:w-1/2 mx-5 my-12">
            <img
              src="https://user-images.githubusercontent.com/43953425/166269493-acd08ccb-4df3-4474-95c7-ad1034d3c070.svg"
              className
              alt="Page not found"
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default ErrorPage;
