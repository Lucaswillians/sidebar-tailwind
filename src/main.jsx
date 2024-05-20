import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Profile from "./pages/Profile/index.jsx";
import BasePage from "./pages/BasePage/index.jsx";
import Feed from "./pages/Feed/index.jsx";
import AddRecipe from "./components/AddRecipe/index.jsx";
import NotFound from "./pages/NotFound/index.jsx";
import Favorites from "./pages/Favorites/index.jsx";
import MyRecipes from "./pages/MyRecipes/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <NotFound />,
    element: <BasePage />,
    children: [
      { path: "/feed", exact: true, element: <Feed /> },
      { path: "/recipes", exact: true, element: <MyRecipes /> },
      { path: "/profile", element: <Profile /> },
      { path: "/addRecipe", exact: true, element: <AddRecipe /> },
      { path: "/favorites", exact: true, element: <Favorites /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
