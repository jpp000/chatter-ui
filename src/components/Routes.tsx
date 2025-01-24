import { createBrowserRouter } from "react-router-dom";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

export default router;
