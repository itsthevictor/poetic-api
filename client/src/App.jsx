import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home, { homeLoader } from "./pages/Home";
import AddPoem from "./pages/AddPoem";
import Error from "./pages/Error";
import Docs, { docsLoader } from "./pages/Docs";
import MainLayout from "./layouts/MainLayout";

function App() {
  const theme = localStorage.getItem("dark-theme");
  if (theme) document.querySelector("body").setAttribute("data-theme", "dark");
  console.log("app", theme);

  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: Error,
      element: <MainLayout theme={theme} />,
      children: [
        {
          index: true,
          element: <Home theme={theme} />,
          loader: homeLoader,
          errorElement: <Error />,
        },
        {
          path: "docs",
          element: <Docs />,
          errorElement: <Error />,
          loader: docsLoader,
        },
        {
          path: "add-poem",
          element: <AddPoem />,
          errorElement: <Error />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
