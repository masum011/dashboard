import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import Rootlayout from "./layout/Rootlayout";
import Attendence from "./pages/myspace/attendence/Attendence";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Rootlayout />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "",
        element: <Attendence />,
        index: true,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
