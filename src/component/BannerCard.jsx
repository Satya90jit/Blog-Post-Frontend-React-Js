import React from "react";
import Additional from "./Additional";


function BannerCard() {
    return (
        <>
            <div>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Abel|Archivo+Black|Barlow" />
                <div id="content" className="bg-center bg-cover bg-no-repeat h-screen items-center justify-center flex flex-col" style={{ backgroundImage: 'url("https://img.freepik.com/free-photo/aerial-view-man-using-computer-laptop-wooden-table_53876-24824.jpg?w=1380&t=st=1670712444~exp=1670713044~hmac=7d7b5a6a3586bc59d7214fd5f127b03d5f3d8e5cee1b81326c02b8dfc1005d1b")' }}>
                    <div id="moka-w1wgf" className="items-center justify-center w-full p-8 flex flex-col">
                        <div id="moka-ix3cs" className="bg-gray-400  items-center justify-center md:w-1/2 w-full shadow-md p-5 h-80 rounded-lg blur-3 bg-opacity-30 shadow-4xl shadow-black flex flex-col col-span-12">
                            <h4 className="w-48 border-t-4 border-solid border-red-500 h-20" id="moka-uuij0">WELCOME TO OUR BLOG
                            </h4>
                            {/* <h4 className="text-white  text-3xl p-2 pl-4 pr-4 rounded-xl" id="moka-8q3tt" style={{ fontFamily: 'Abel' }}>Thoughts and ideas around the things that actually matter</h4> */}
                            {/* <h2 className="text-white font-serif text-3xl pl-4 pr-4 rounded-xl p-2 text-center mt-2 mb-20" id="moka-cqg7a" style={{ fontFamily: '"Archivo Black"' }} >Take insights Here</h2>
                            <button value="button" className="hover:text-gray-300 bg-yellow-800 text-white hover:bg-black w-56 p-4 text-2xl font-bold" id="moka-8pwrq" style={{ fontFamily: 'Barlow' }}>Explore Blogs</button> */}
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
};
export default BannerCard;