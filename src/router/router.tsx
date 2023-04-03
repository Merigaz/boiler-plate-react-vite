import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Info from "../components/Info";
import Home from "../views/Home";
import Poke from "../views/Poke";
import ApiMap from "../views/ApiMap";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Info />,
      },
      {
        path: "/poke",
        element: <Poke />,
      },
      {
        path: "/api-map",
        element: <ApiMap />
      },
    ],
  },
  {
   
  },
  {
   
  },
]);
const Router = () => {
  return <RouterProvider router={router} />;
};
export default Router;