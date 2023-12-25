import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginComponent from "./LoginComponent";
import BrowseComponent from "./BrowseComponent";

const BodyComponent = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/browse",
      element: <BrowseComponent />,
    },
    {
      path: "/",
      element: <LoginComponent />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default BodyComponent;
