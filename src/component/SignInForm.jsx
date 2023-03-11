import React from "react";
import { useNavigate } from "react-router";
import SignUpForm from "./SignUpForm";
import { useState } from "react";
import { motion } from "framer-motion";

function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [print, setPrint] = useState(true);
  const navigate = useNavigate();

  const inToUp = () => {
    setPrint(false);
  };

  const submitUser = async (e) => {
    e.preventDefault();
    console.log(email, password);
    const user = new FormData();
    user.append("email", email);
    user.append("password", password);
    const resData = await fetch("/users/sign_in", {
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
    const aboutKey = localStorage.getItem("key");
    const userData = await resData.json();
    console.log(userData);
    if (userData.status.code !== 200) {
      console.log("invalid email or password");
      window.alert(userData.status.message);
    } else if (userData.status.code == 200 && aboutKey) {
      window.alert(userData.status.message);
      navigate("/aboutform");
    } else {
      window.alert(userData.status.message);
      navigate("/");
    }

    localStorage.setItem("token", resData.headers.get("Authorization"));
    
    localStorage.setItem("user", JSON.stringify(userData.status.data.id));
    var name = userData.status.data.email;
    var userName = name.replace(/@.*/, "");
    var noNumbername = userName.replace(/[0-9]/g, "");
    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    var makefirstNameCaps = capitalizeFirstLetter(noNumbername);
    localStorage.setItem("userName", JSON.stringify(makefirstNameCaps));
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
        <form>
          {print ? (
            <span>
              <p className="mb-4">please login to your account</p>
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
                  onClick={submitUser}
                  className=" bg-gradient-to-r from-indigo-500 to-blue-500 ...  inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-800 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                  type="button"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  {" "}
                  sign in
                </button>
              </div>
              <div className="flex items-center justify-between pb-6">
                <p className="mb-0 mr-2">Don't have an account?</p>
                <button
                  type="button"
                  className="inline-block px-6 py-2 border-2 border-orange-600 text-black font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  onClick={inToUp}
                >
                  create Account
                </button>
              </div>
            </span>
          ) : (
            <SignUpForm />
          )}
        </form>
      </div>
    </motion.div>
  );
}
export default SignInForm;
