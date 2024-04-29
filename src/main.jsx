import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Profile from "./pages/Profile/index.jsx";
import BasePage from "./pages/BasePage/index.jsx";
import Feed from "./pages/Feed/index.jsx";
import Addrecipe from "./components/Addrecipe/index.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <BasePage />,
    children: [
      { path: "/feed", exact: true, element: <Feed /> },
      { path: "/profile", element: <Profile /> },
      { path: "/addRecipe", exact: true, element: <Addrecipe/>  },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
