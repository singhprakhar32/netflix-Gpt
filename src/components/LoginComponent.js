import React, { useRef } from "react";
import { useState } from "react";
import HeaderComponent from "./HeaderComponent";
import checkValidData from "../utils/validate.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase.js";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice.js";
const LoginComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const [errorMessage, setErrorMessage] = useState();
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:"https://staticg.sportskeeda.com/editor/2023/09/0244d-16944358858431.webp"
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browser");
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMessage(errorCode + " - " + errorMessage);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          navigate("/browser");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
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
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="w-5/12 my-28 absolute p-12 bg-black mx-96 text-white rounded-lg bg-opacity-70 justify-center"
        >
          <h1 className="font-bold text-3xl py-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm ? (
            <input
              type="text"
              ref={name}
              placeholder="Enter Full Name"
              className="p-4 my-4 w-full bg-gray-700 rounded-lg"
            />
          ) : (
            ""
          )}
          <input
            type="text"
            ref={email}
            placeholder="Email Address"
            className="p-4 my-4 w-full bg-gray-700 rounded-lg"
          />
          <input
            type="password"
            ref={password}
            placeholder="Password"
            className="p-4 my-4 w-full  bg-gray-700 rounded-lg"
          />
          <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
          <button
            className="p-4 my-6 bg-red-700 w-full rounded-lg"
            onClick={handleButtonClick}
          >
            {" "}
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p
            className="py-4 text-center cursor-pointer"
            onClick={toggleSignInForm}
          >
            {isSignInForm
              ? "New to NetFlix? Sign Up Now"
              : "Already Regiterd? SignIn Now"}
          </p>
        </form>
      </div>
    </>
  );
};

export default LoginComponent;
