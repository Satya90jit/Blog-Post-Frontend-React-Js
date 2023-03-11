import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function RecentPost(){
    const [familyData, setFamilyData] = useState([]);
    const [LifestyleData, setLifestyleData] = useState([]);
    const [foodData, setFoodData] = useState([]);
    const [flength,setFlength] = useState([]);
    const [llength,setLlength] = useState([]);
    const [folength,setFolength] = useState([]);

    const navigate = useNavigate();
  
    useEffect(() => {
      const FamilyBlogs = async () => {
        try {
          const response = await fetch(
            `/api/v1/article/?category=family`
          );
          if (!response.ok) {
            throw new Error(
              `This is an HTTP error: The status is ${response.status}`
            );
          }
          const data = await response.json();
          const familylength = data.length;
         setFlength(familylength);
          setFamilyData(data.pop());
        } catch (error) {}
      };
      FamilyBlogs();

      const lifestyleBlogs = async () => {
        try {
          const response = await fetch(
            `/api/v1/article/?category=lifestyle`
          );
          if (!response.ok) {
            throw new Error(
              `This is an HTTP error: The status is ${response.status}`
            );
          }
          const lifedata = await response.json();
          const lifelength = lifedata.length;
          setLlength(lifelength);
          setLifestyleData(lifedata.pop());
        } catch (error) {}
      };
      lifestyleBlogs();

      const foodBlogs = async () => {
        try {
          const response = await fetch(
            `/api/v1/article/?category=food`
          );
          if (!response.ok) {
            throw new Error(
              `This is an HTTP error: The status is ${response.status}`
            );
          }
          const foodsData = await response.json();
          const foodlength = foodsData.length;
          setFolength(foodlength);
          setFoodData(foodsData.pop());
        } catch (error) {}
      };
      foodBlogs();
    }, []);
    console.log(familyData);
    console.log(LifestyleData);
    console.log(foodData);

      return(
          <>         
        <section className="bg-white dark:bg-gray-900 ">
          <div className=" lg:p-10  box-content">
          <div className="container  bg-slate-100  px-12 py-8 mx-auto transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-black">
            {/* <h1 className="text-3xl font-medium text-gray-800 capitalize lg:text-4xl dark:text-white">From the blog</h1> */}
            <div className=" mt-8 lg:-mx-6 lg:flex lg:items-center">
              <img className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96 transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-black" src={familyData.image_url} alt="" />
              <div className="mt-6  lg:w-1/2 lg:mt-0 lg:mx-6 ">
                <p className="text-lg font-medium text-blue-500 uppercase">{familyData.category}<span className="ml-2 text-white font-normal text-sm bg-slate-800 rounded-full p-0.5 pl-1.5 pr-1.5">{flength}</span></p>
                <Link to={`/blogcard/${familyData.id}`} className="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-white md:text-3xl">
                  {familyData.title}
                </Link>
                <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                 {familyData.body}
                </p>
                <Link to={`/blogcard/${familyData.id}`} className="inline-block mt-2 text-blue-500 underline hover:text-blue-400">Read more</Link>
                <div className="flex items-center mt-6">
                  <img className="object-cover object-center w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" />
                  <div className="mx-4">
                    <h1 className="text-sm text-gray-700 dark:text-gray-200">{familyData.userName}</h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{familyData.created_at}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </section>
        <section className="bg-white dark:bg-gray-900 ">
        <div className=" lg:p-10 box-content">
          <div className="container bg-slate-100  px-12 py-8 mx-auto transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-black">
            <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
              <img className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96 transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-black" src={LifestyleData.image_url} alt="" />
              <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
              <p className="text-lg font-medium text-blue-500 uppercase">{LifestyleData.category}<span className="ml-2 text-white font-normal text-sm bg-slate-800 rounded-full p-0.5 pl-1.5 pr-1.5">{llength}</span></p>
                <Link to={`/blogcard/${LifestyleData.id}`} className="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-white md:text-3xl">
                  {LifestyleData.title}
                </Link>
                <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                 {LifestyleData.body}
                </p>
                <Link to={`/blogcard/${LifestyleData.id}`} className="inline-block mt-2 text-blue-500 underline hover:text-blue-400">Read more</Link>
                <div className="flex items-center mt-6">
                  <img className="object-cover object-center w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" />
                  <div className="mx-4">
                    <h1 className="text-sm text-gray-700 dark:text-gray-200">{LifestyleData.userName}</h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{LifestyleData.created_at}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </section>
        <section className="bg-white dark:bg-gray-900 ">
        <div className=" lg:p-10 box-content">
          <div className="container  bg-slate-100  px-12 py-8 mx-auto transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-black">
          
            <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
              <img className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96 transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-black" src={foodData.image_url} alt="" />
              <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
              <p className="text-lg font-medium text-blue-500 uppercase">{foodData.category}<span className="ml-2 text-white font-normal text-sm bg-slate-800 rounded-full p-0.5 pl-1.5 pr-1.5">{folength}</span></p>
                <Link to={`/blogcard/${foodData.id}`} className="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-white md:text-3xl">
                  {foodData.title}
                </Link>
                <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                 {foodData.body}
                </p>
                <Link to={`/blogcard/${foodData.id}`} className="inline-block mt-2 text-blue-500 underline hover:text-blue-400">Read more</Link>
                <div className="flex items-center mt-6">
                  <img className="object-cover object-center w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" />
                  <div className="mx-4">
                    <h1 className="text-sm text-gray-700 dark:text-gray-200">{foodData.userName}</h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{foodData.created_at}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </section>
          </>
      )
  };
export default RecentPost;