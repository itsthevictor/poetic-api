import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home, { homeLoader } from "./pages/Home";
import AddPoem from "./pages/AddPoem";
import Error from "./pages/Error";
import Docs from "./pages/Docs";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
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
