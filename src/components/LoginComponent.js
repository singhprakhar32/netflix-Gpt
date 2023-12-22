//react arrow function component exports.
import React from "react";
import { useState } from "react";
import HeaderComponent from "./HeaderComponent";

const LoginComponent = () => {
  const [isSignInForm,setIsSignInForm] = useState(true);
  const toggleSignInForm = ()=>{
    setIsSignInForm(!isSignInForm);
  }

  return (
    <>
      <div>
        <HeaderComponent />
        <div className="absolute">
          <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/563192ea-ac0e-4906-a865-ba9899ffafad/6b2842d1-2339-4f08-84f6-148e9fcbe01b/IN-en-20231218-popsignuptwoweeks-perspective_alpha_website_large.jpg"
            alt="logo"
          ></img>
        </div>
        <form className="w-5/12 my-28 absolute p-12 bg-black mx-96 text-white rounded-lg bg-opacity-70 justify-center">
          <h1 className="font-bold text-3xl py-4">
            {isSignInForm?"Sign In":"Sign Up" }
            </h1>
           { isSignInForm?<input type="text" placeholder="Enter Full Name" className="p-4 my-4 w-full bg-gray-700 rounded-lg" />:""}
          <input type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-700 rounded-lg"  />
          <input type="password" placeholder="Password" className="p-4 my-4 w-full  bg-gray-700 rounded-lg" />
          <button className="p-4 my-6 bg-red-700 w-full rounded-lg"> {isSignInForm?"Sign In":"Sign Up" }</button>
          <p className="py-4 text-center cursor-pointer" onClick={toggleSignInForm}>{isSignInForm?"New to NetFlix? Sign Up Now":"Already Regiterd? SignIn Now" }</p>
        </form>
      </div>
    </>
  );
};

export default LoginComponent;
