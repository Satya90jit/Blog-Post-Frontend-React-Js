import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

function Header({search,setSearch,func1}) {
  const [item, setItems] = useState({
    family: "family",
    lifestyle: "lifestyle",
    food: "food",
  });

  return (
    <>
      <header>
        <nav className="bg-white shadow">
          <div className="container mx-auto px-6 py-0 ">
            <div className="md:flex md:items-center md:justify-between">
              <div className="flex justify-between items-center">
                <div className="text-xl font-semibold text-gray-700">
                  <span className="text-gray-800 text-xl font-bold hover:text-gray-700 md:text-2xl">
                    BE DIFFERENT
                  </span>
                </div>
                {/* Mobile menu button */}
                <div className="flex md:hidden">
                  <button
                    type="button"
                    className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
                    aria-label="toggle menu"
                  >
                    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              {/* Mobile Menu open: "block", Menu closed: "hidden" */}
              <div className="hidden -mx-4 md:flex md:items-center">
                <Link
                  to={`/categoryblogs/${item.family}`}
                  className="block mx-4 mt-2 md:mt-0 text-sm text-gray-700 capitalize hover:text-blue-600"
                >
                  Family
                </Link>
                <Link
                  to={`/categoryblogs/${item.lifestyle}`}
                  className="block mx-4 mt-2 md:mt-0 text-sm text-gray-700 capitalize hover:text-blue-600"
                >
                  Lifestyle
                </Link>
                <Link
                  to={`/categoryblogs/${item.food}`}
                  className="block mx-4 mt-2 md:mt-0 text-sm text-gray-700 capitalize hover:text-blue-600"
                >
                  Food
                </Link>
                <Link
                  to={`/createblogs`}
                  className="block mx-4 mt-2 md:mt-0 text-sm text-gray-700 capitalize hover:text-blue-600"
                >
                  CreateBlogs
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <div
          className="w-full bg-cover bg-center"
          style={{
            height: "15rem",
            backgroundImage:
              "url(https://img.freepik.com/free-photo/calathea-orbifolia-natural-leaves-background_53876-129663.jpg?w=826&t=st=1671094391~exp=1671094991~hmac=4edefd71ff9c75ca4aa56ca4f76d9bffd1ebfc44e4765e52eebc02255834e381",
          }}
        >
          <div className="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50">
            <div className="text-center">
              <h1 className="text-white text-2xl font-semibold uppercase md:text-3xl">
                Build Your new{" "}
                <span className="underline text-blue-400">Blog</span>
              </h1>
              <span className=" ">
                <SearchBar search={search} setSearch={setSearch} func1={func1}/>
              </span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
export default Header;
