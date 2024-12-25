import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home, { homeLoader } from "./pages/Home";
import AddPoem from "./pages/AddPoem";
import Error from "./pages/Error";
import Docs from "./pages/Docs";
import { useEffect, useState } from "react";
function App() {
  const theme = localStorage.getItem("dark-theme");
  console.log("app get theme", theme);
  if (theme) document.querySelector("body").setAttribute("data-theme", "dark");

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home theme={theme} />,
      loader: homeLoader,
      errorElement: <Error />,
    },
    {
      path: "docs",
      element: <Docs />,
      errorElement: <Error />,
    },
    {
      path: "add-poem",
      element: <AddPoem />,
      errorElement: <Error />,
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
