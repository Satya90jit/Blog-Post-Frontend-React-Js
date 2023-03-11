import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function EditPage() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");
  //const [image_url, setImage_url] = useState("");
  //const [currentData, setCurrentData] = useState({ body: " ", title: " " });
  const params = useParams();
  const navigate = useNavigate();

  // const onImageChange = (e) => {
  //   e.preventDefault();
  //   setImage(e.target.files[0]);
  // };

  const editItem = async (e) => {
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
    // const title = currentData.title;
    // const body = currentData.body;
    const user_id = localStorage.getItem("user");
    const userName = localStorage.getItem("userName");

    console.log(title, body, image, user_id, userName);
    const data = { title, body, image_url: file.secure_url, user_id, userName };
    const res = await fetch(`/api/v1/articles/${params.id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

   const articleData = await res

    if (articleData.status !== 200) {
      window.alert("somethinng went wrong!");
      console.log(articleData);
    } else {
      window.alert("updated successfully");
      navigate("/BlogData");
    }
  };

  // useEffect(() => {
  //   const fetchArticle = async () => {
  //     try {
  //       const response = await fetch(`/api/v1/articles/${params.id}`);
  //       if (!response.ok) {
  //         throw new Error(
  //           `This is an HTTP error: The status is ${response.status}`
  //         );
  //       }
  //       const data = await response.json();
  //       console.log(data);
  //       setCurrentData({title: data.title, body: data.body});
  //     } catch (error) {}
  //   };
  //   fetchArticle();
  // }, [params.id]);

  return (
    <>
      <div className="bg-white p-10 md:w-3/4 lg:w-1/2 mx-auto my-14 border-2 border-cyan-300">
        <form action="">
          <div className="flex items-center mb-5">
            <label
              className="inline-block w-20 mr-6 text-right 
                                 font-bold text-gray-600"
            >
              Title
            </label>
            <input
              // value={currentData.title}
              type="text"
              name="title"
              onChange={(e) => {
                e.preventDefault();
                setTitle(e.target.value);
                //setCurrentData({ title: e.target.value });
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
              //value={currentData.body}
              type="text"
              name="body"
              onChange={(e) => {
                // console.log(e.target.value)
                e.preventDefault();
                setBody(e.target.value);
                //setCurrentData({ body: e.target.value });
              }}
              placeholder="Enter blog description"
              className="overflow-y-scroll flex-1 py-2 border-b-2 border-gray-400  
                      text-gray-600
                      placeholder-gray-400"
            />
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
              onChange={(e) => {
                e.preventDefault();
                setImage(e.target.files[0]);
              }}
              placeholder="uplaod blog image "
              className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none"
            />
          </div>
        </form>

        <Link
          onClick={editItem}
          className=" float-right my-0 bg-cyan-800 hover:bg-blue-500 text-slate-100 font-bold py-1 px-3 rounded-r"
        >
          Edit
        </Link>
      </div>
    </>
  );
}
export default EditPage;
