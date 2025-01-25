import { createBrowserRouter } from "react-router-dom";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import Home from "./Home/home";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/",
    element: <Home />,
  },
]);

export default router;
