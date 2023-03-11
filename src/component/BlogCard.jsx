import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import Comment from "./Comment";
import { motion } from "framer-motion";

function BlogCard() {
  const [oneData, setOneData] = useState("");
  const params = useParams();
  const [val, setVal] = useState(false);
  // const navigate = useNavigate();
  // const [print,setPrint] = useState("");
  // const [aboutDatas, setAboutDatas] = useState({});
  // const user_id = localStorage.getItem("user");

  // useEffect(() => {
  //   const getUserAbout = async (e) => {
  //     const resData = await fetch(`/about/?user_id=${params.user_id}`, {
  //       method: "GET",
  //     });
  //     const aboutData = await resData.json();
  //     setAboutDatas(aboutData);
  //   };
  //   getUserAbout();
  // }, []);
  const showComments = () => {
    setVal(!val)
  }

  useEffect(() => {
    const fetchOneBlog = async () => {
      try {
        const response = await fetch(`/api/v1/articles/${params.id}`);
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        const data = await response.json();
        setOneData(data);
      } catch (error) { }
    };
    fetchOneBlog();
  }, [params.id]);

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
        <Header />
        <div className="bg-white  dark:bg-gray-900 ">
          <link
            rel="stylesheet"
            href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
          />
          <div className="  bg-slate-100  lg:px-36 py-8">
            <div className="container  bg-white  px-10 py-5 mx-auto">
              <div className="flex items-center justify-center">
                <div className="mt-8 lg:items-center">
                  <div className="mt-6 lg:w-full lg:mt-0  ">
                    <div className="flex border-2 border-black items-center mt-6">
                      <img
                        className="object-cover object-center w-10 h-10 rounded-full"
                        src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                        alt=""
                      />
                      <div className="mx-4">
                        <h1 className="text-sm text-gray-700 dark:text-gray-200">
                          {oneData.userName}
                        </h1>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {oneData.created_at}
                        </p>
                      </div>  
                    </div>
                    <p className="block mt-4 mb-4 text-2xl font-semibold text-gray-800  dark:text-white md:text-3xl">
                      {oneData.title}
                    </p>
                  </div>
                  <img
                    className="object-cover w-full lg:w-full rounded-xl h-72 lg:h-96"
                    src={oneData.image_url}
                    alt="blog image"
                  />
                  <div className="mt-6 lg:w-full lg:mt-0 ">
                    <p className="mt-10 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                      {oneData.body}
                    </p>
                  </div>
                  <hr className="h-1  lg:w-full mb-2 mt-6 "></hr>
                  <p className="text-gray-900 text-right">{oneData.category}</p>
                  <hr className="h-1  lg:w-full mb-0 mt-4 "></hr>
                  <div className="mt-1 mb-8 flex justify-between h-auto items-center lg:w-full lg:mt-0 ">
                    <div className="mt-4">
                      <button className="text-left">view</button>
                      <button onClick={showComments} className="ml-5">comment</button>
                    </div>
                    <div className="mt-4">
                      <button className="text-right">like</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {val ? (
          <Comment />
        ) : (" ")}
        <Footer />
      </motion.div>
    </>
  );
}
export default BlogCard;
