import React from "react";

const Whatsapp = () => {
    return (
        <>
            <div>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>WhatsApp</title>
                <link rel="stylesheet" href="https://cdn.tailwindcss.com" />
                <nav className="flex justify-between items-center px-4 py-2 bg-green-500">
                    <div className="text-white font-bold text-xl">WhatsApp</div>
                    <div className="flex items-center">
                        <button className="text-white hover:text-gray-200">
                            <i className="far fa-question-circle" />
                        </button>
                        <button className="text-white hover:text-gray-200 ml-2">
                            <i className="far fa-cog" />
                        </button>
                    </div>
                </nav>
                <div className="flex justify-center mt-8">
                    <div className="w-3/4 max-w-lg">
                        <div className="flex justify-between items-center mb-4">
                            <h1 className="text-2xl font-bold">Chats</h1>
                            <button className="text-green-500 font-semibold hover:text-green-700">New Chat</button>
                        </div>
                        <div className="bg-white rounded-lg p-4">
                            <div className="flex items-center mb-4">
                                <img className="w-12 h-12 rounded-full" src="https://via.placeholder.com/150" alt="User Avatar" />
                                <div className="ml-4">
                                    <h2 className="text-lg font-medium">John Doe</h2>
                                    <p className="text-gray-500">Hi there, how are you?</p>
                                </div>
                            </div>
                            <div className="flex items-center mb-4">
                                <img className="w-12 h-12 rounded-full" src="https://via.placeholder.com/150" alt="User Avatar" />
                                <div className="ml-4">
                                    <h2 className="text-lg font-medium">Jane Smith</h2>
                                    <p className="text-gray-500">Did you get the file I sent you?</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <img className="w-12 h-12 rounded-full" src="https://via.placeholder.com/150" alt="User Avatar" />
                                <div className="ml-4">
                                    <h2 className="text-lg font-medium">Bob Johnson</h2>
                                    <p className="text-gray-500">Let's meet up for lunch tomorrow.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
export default Whatsapp;