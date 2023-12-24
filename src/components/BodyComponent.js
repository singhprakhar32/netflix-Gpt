import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginComponent from "./LoginComponent";
import BrowseComponent from "./BrowseComponent";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser,removeUser } from "../utils/userSlice";

const BodyComponent = () => {
  const dispatch = useDispatch();
  const appRouter = createBrowserRouter([
    {
      path: "/browser",
      element: <BrowseComponent />,
    },
    {
      path: "/",
      element: <LoginComponent />,
    },
  ]);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName,photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName,photoURL:photoURL }));
      } else {
        dispatch(removeUser());
      }
    });
  }, []);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default BodyComponent;
