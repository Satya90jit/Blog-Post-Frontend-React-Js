import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Header from "./Header";
import ScrollBtn from "./ScrollBtn";
import { motion } from "framer-motion";

function CategoryBlogs() {
  const [categoryData, setCategoryData] = useState("");
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategoryBlogs = async () => {
      try {
        const response = await fetch(
          `/api/v1/article/?category=${params.category}`
        );
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        const data = await response.json();
        setCategoryData(data);
      } catch (error) { }
    };
    fetchCategoryBlogs();
  }, [params.category]);

  console.log(categoryData);

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
        <div className="mb-8">
          <Header />
          <ScrollBtn />
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl font-semibold mt-8 leading-9 text-center text-gray-800 dark:text-gray-50">The category Blogs</h1>
            <p className="text-base leading-normal text-center text-gray-600 dark:text-white mt-4 -mb-1 lg:w-1/2 md:w-10/12 w-11/12">If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough</p>
          </div>
          {categoryData?.length === 0 ? (
            <h1 className="font-mono text-center text-5xl">NO blogs!</h1>
          ) : (
            categoryData?.map((blog, index) => {
              return (
                <section className="bg-white dark:bg-gray-900 mt-10 ">
                  <div className=" lg:p-10 box-content">
                    <div className="container  bg-slate-100  px-12 py-8 mx-auto transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-black">
                      <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
                        <img
                          className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96 transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-black"
                          src={blog.image_url}
                          alt="images"
                        />
                        <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
                          <p className="text-sm text-blue-500 uppercase">
                            {blog.category}
                          </p>
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
export default CategoryBlogs;
