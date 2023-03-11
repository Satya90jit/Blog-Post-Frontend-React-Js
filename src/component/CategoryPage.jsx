import React, { useState } from "react";
import { Link } from "react-router-dom";
import CategoryBlogs from "./CategoryBlogs";
function CategoryPage() {
    const [item, setItems] = useState({
        family: 'family',
        lifestyle: 'lifestyle',
        food: 'food'
      });
      console.log(item);  

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mt-8">
                <div className=" grid place-items-center h-96 bg-slate-100 antaliased text-gray-900 transition duration-300 group transform hover:-translate-y-2 hover:shadow-xl hover:shadow-black">
                    <div>
                        <img src="http://sfwallpaper.com/images/family-wallpaper-3.jpg " className="w-80 h-44 object-cover object-center rounded-lg shadow-md transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-black" />
                        <div className="relative px-4 -mt-16  ">
                            <div className="bg-white p-6 rounded-lg shadow-lg transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-black">
                                <h4 className="mt-3 text-xl text-center font-semibold uppercase leading-tight truncate">Family</h4>
                                <div className="text-teal-600 text-center mt-6 text-xl font-semibold">
                                <Link to={`/categoryblogs/${item.family}`} >Click Here</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid place-items-center h-96 bg-slate-100 antialiased text-gray-900 transition duration-300 group transform hover:-translate-y-2 hover:shadow-xl hover:shadow-black">
                    <div>
                        <img src="https://images.unsplash.com/photo-1531141445733-14c2eb7d4c1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGxpZmVzdHlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt=" random imgee" className="w-80 h-44 object-cover object-center rounded-lg shadow-md transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-black" />
                        <div className="relative px-4 -mt-16  ">
                            <div className="bg-white p-6 rounded-lg shadow-lg transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-black ">
                            <h4 className="mt-3 text-xl text-center font-semibold uppercase leading-tight truncate">Lifestyle</h4>
                            <div className="text-teal-600 text-center mt-6 text-xl font-semibold">
                                <Link to={`/categoryblogs/${item.lifestyle}`} >Click Here</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid place-items-center h-96 bg-slate-100 antialiased text-gray-900 transition duration-300 group transform hover:-translate-y-2 hover:shadow-xl hover:shadow-black">
                    <div>
                        <img src="https://images.pexels.com/photos/761854/pexels-photo-761854.jpeg?auto=compress&cs=tinysrgb&w=1600" alt=" random imgee" className="w-80 h-44 object-cover object-center rounded-lg shadow-md transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-black" />
                        <div className="relative px-4 -mt-16  ">
                            <div className="bg-white p-6 rounded-lg shadow-lg transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-black">
                            <h4 className="mt-3 text-xl text-center font-semibold uppercase leading-tight truncate">Food</h4>
                            <div className="text-teal-600 text-center mt-6 text-xl font-semibold">
                                <Link to={`/categoryblogs/${item.food}`} >Click Here</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
};
export default CategoryPage;