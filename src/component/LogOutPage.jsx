import React, { useState } from "react";
import { useNavigate } from "react-router";

function LogOutPage() {

  const navigate = useNavigate();
  const goToFont = () => {
    navigate("/loginpage");
  };

  const logOutSession = async (e) => {
    const tokenData = localStorage.getItem("token");
    const resp = await fetch("/users/sign_out", {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        "Authorization": tokenData
      }   
    });

    const userData = await resp.json();
    console.log(userData);

    if (userData.status !== 200) {
      //console.log("token expired refresh page");
      window.alert("token expired please log in again");
    } else {
      localStorage.clear();
      console.log("log out successfully..");
      window.alert("log out successfully");
      goToFont();
    }
  };

  return (
    <>
      <button onClick={logOutSession}>logout</button>
    </>
  );
}
export default LogOutPage;
