import { Link } from "react-router-dom";
import React from "react";


function Footer() {
    return (
        <>
            <div>
                {/* <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css" /> */}
                <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css" />
                <footer className="relative bg-blueGray-200 bg-gray-300 pt-8 pb-6">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap text-left lg:text-left">
                            <div className="w-full lg:w-6/12 px-4">
                                <h4 className="text-3xl fonat-semibold text-blueGray-700">Let's keep in touch!</h4>
                                <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                                    Find us on any of these platforms, we respond 1-2 business days.
                                </h5>
                                <div className="mt-6 lg:mb-0 mb-6">
                                    <button className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                        <i className="fab fa-twitter" /></button><button className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                        <i className="fab fa-facebook-square" /></button><button className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                        <i className="fab fa-dribbble" /></button><button className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                        <i className="fab fa-github" />
                                    </button>
                                </div>
                            </div>
                            <div className="w-full lg:w-6/12 px-4">
                                <div className="flex flex-wrap items-top mb-6">
                                    <div className="w-full lg:w-4/12 px-4 ml-auto">
                                        <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Useful Links</span>
                                        <ul className="list-unstyled">
                                            <li>
                                                <Link className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">About Us</Link>
                                            </li>
                                            <li>
                                                <Link className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">Blog</Link>
                                            </li>
                                            <li>
                                                <Link className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" >Github</Link>
                                            </li>
                                            <li>
                                                <Link className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">Free Products</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="w-full lg:w-4/12 px-4">
                                        <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Other Resources</span>
                                        <ul className="list-unstyled">
                                            <li>
                                                <Link className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" >MIT License</Link>
                                            </li>
                                            <li>
                                                <Link className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" >Terms &amp; Conditions</Link>
                                            </li>
                                            <li>
                                                <Link className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" >Privacy Policy</Link>
                                            </li>
                                            <li>
                                                <Link className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" >Contact Us</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className="my-6 border-blueGray-300" />
                        <div className="flex flex-wrap items-center md:justify-between justify-center">
                            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                                <div className="text-sm text-blueGray-500 font-semibold py-1">
                                    Copyright © <span id="get-current-year">2022</span><Link className="text-blueGray-500 hover:text-gray-800"> satyajit sahoo
                                    </Link><Link className="text-blueGray-500 hover:text-blueGray-800">Blogs Team</Link>.
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
};
export default Footer;