import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home, { homeLoader } from "./pages/Home";
import AddPoem from "./pages/AddPoem";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      loader: homeLoader,
    },
    {
      path: "add-poem",
      element: <AddPoem />,
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
