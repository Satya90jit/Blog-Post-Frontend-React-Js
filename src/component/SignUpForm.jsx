import React, { useState } from "react";
import SignInForm from "./SignInForm";
import { motion } from "framer-motion";

function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(true);

  const UpToIn = () => {
    setLogin(false);
  };

  const createAccount = async (e) => {
    e.preventDefault();
    console.log(email, password);
    const user = new FormData();
    user.append("email", email);
    user.append("password", password);
    console.log("formdata ", user);
    const resp = await fetch("/users", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        user: {
          email: email,
          password: password,
        },
      }),
    });
    //localStorage.setItem("key", 'xyzxyz');
    console.log(user);
    const userData = await resp.json();
    console.log(userData);

    if (userData.status.code !== 200) {
      window.alert(userData.status.message);
    } else {
      window.alert(userData.status.message);
      localStorage.setItem("key", 'xyzxyz');
      UpToIn();
    }
  };

  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration: 0.8,
      delay: 0.5,
      ease: [0, 0.71, 0.2, 1.01]
    }}
  >
      <div className="">
        <form >
          {login ? (
            <span>
              <h1 className="mb-6 text-2xl font-medium text-center">create to your account</h1>
              <div className="mb-4">
                <input
                  type="text"
                  name="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="enter email"
                />
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  name="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Password"
                />
              </div>
              <div className="text-center pt-1 mb-12 pb-1">
                <button
                  onClick={createAccount}
                  className=" bg-gradient-to-r from-indigo-500 to-blue-500 ...  inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-800 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                  type="button"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  {" "}
                  sign up
                </button>
              </div>
              <div className="flex items-center justify-between pb-6">
                <p className="mb-0 mr-2">
                  Already have an account?
                </p>
                <button
                  type="button"
                  className="inline-block px-6 py-2 border-2 border-orange-600 text-black font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  onClick={UpToIn}
                >
                  Sign in
                </button>
              </div>
            </span>
          ) : (
            <SignInForm/>
          )}
        </form>
      </div>
    </motion.div>
  );
}
export default SignUpForm;
