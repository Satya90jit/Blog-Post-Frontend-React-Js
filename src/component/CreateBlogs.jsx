import React, { useState } from "react";
import Navbar from "./Navbar";
import background from "./images/blog4.avif";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Footer from "./Footer";
import { motion } from "framer-motion";

function CreateBlogs() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");
  const [image_url, setImage_url] = useState("");
  const [category, setCategory] = useState("family");
  const [addrtype, setAddrtype] = useState(["family", "lifestyle", "food"]);

  const Add = addrtype.map((Add) => Add);

  const handleAddrTypeChange = (e) => {
    //console.log(addrtype[e.target.value]);
    setCategory(addrtype[e.target.value]);
    console.log(category);
  };

  const onImageChange = (e) => {
    e.preventDefault();
    setImage(e.target.files[0]);
  };

  const saveUser = async (e) => {
    e.preventDefault();
    const img_data = new FormData();
    img_data.append("file", image);
    img_data.append("upload_preset", "postimages");
    console.log("image", img_data);
    const response = await fetch(
      "https://api.cloudinary.com/v1_1/dgdnuhrfs/image/upload",
      {
        method: "post",
        body: img_data,
      }
    );
    const file = await response.json();
    const user_id = localStorage.getItem("user");
    const userName = localStorage.getItem("userName");

    console.log(title, body, image_url, user_id, userName);
    const data = {
      title,
      body,
      image_url: file.secure_url,
      user_id,
      userName,
      category,
    };
    const res = await fetch("/api/v1/articles", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const articleData = await res.json();
    console.log(articleData);

    localStorage.setItem("existUser", JSON.stringify(articleData.user_id));
    localStorage.setItem("article", JSON.stringify(articleData.id));

    if (articleData.status.code == 200) {
      window.alert(articleData.status.message);
    } else {
      window.alert(articleData.status.message);
    }
  };

  return (
    <motion.div
      initial={{ width: 2 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 2} }}
    >
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
        }}
        className="py-32 px-0 min-h-screen "
      >
        <Navbar />
        <h1 className=" text-center mb-4 text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
          Explore yourself better
        </h1>
        <p className=" text-center mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          Here you can create your blog
        </p>
        <div className="bg-white p-10 md:w-3/4 lg:w-1/2 mx-auto">
          <form action="">
            <div className="flex items-center mb-5">
              <label
                className="inline-block w-20 mr-6 text-right 
                                 font-bold text-gray-600"
              >
                Title
              </label>
              <input
                type="text"
                name="title"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                placeholder="Enter blog title"
                className="flex-1 py-2 border-b-2 border-gray-400 focus:border-blue-800 
                      text-gray-600 placeholder-gray-400
                      outline-none"
              />
            </div>

            <div className="flex items-center mb-10 ">
              <label
                className="inline-block w-20 mr-6 text-right
                                    font-bold text-gray-600"
              >
                Description
              </label>
              <textarea
                type="text"
                name="body"
                onChange={(e) => {
                  setBody(e.target.value);
                }}
                placeholder="Enter blog description"
                className="overflow-y-scroll flex-1 py-2 border-b-2 border-gray-400  
                      text-gray-600
                      placeholder-gray-400"
              />
            </div>
            <div className="flex items-center mb-3  ">
              <label
                className="inline-block w-20 mr-6 text-right
                                    font-bold text-gray-600"
              >
                Category
              </label>
              <div className="mb-3 xl:w-full">
                <select
                  onChange={(e) => handleAddrTypeChange(e)}
                  className="form-select appearance-none
                      block
                      w-full
                      px-3
                      py-1.5
                      text-base
                      font-normal
                      text-gray-700
                      bg-white bg-clip-padding bg-no-repeat
                      border border-solid border-gray-300
                      rounded
                      transition
                      ease-in-out
                      m-0
                      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  aria-label="Default select example"
                >
                  <option selected>Open this select menu</option>
                  {Add.map((address, key) => (
                    <option key={key} value={key}>
                      {address}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex items-center mb-5">
              <label
                className="inline-block w-20 mr-6 text-right 
                                 font-bold text-gray-600"
              >
                upload Image
              </label>
              <input
                type="file"
                name="image_url"
                onChange={onImageChange}
                placeholder="uplaod blog image "
                className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none"
              />
            </div>

            <div className="my-0 m-auto">
              <button
                onClick={saveUser}
                className="bg-yellow-400 hover:bg-cyan-700 text-black font-bold py-2 px-4 rounded-l"
              >
                post
              </button>

              <Link
                className="bg-cyan-800 hover:bg-orange-500 text-slate-100 font-bold py-2 px-4 rounded-r"
                to={`/`}
              >
                Show post
              </Link>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
}
export default CreateBlogs;
