import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/login";
import Error from "./pages/error/error";
import Signup from "./pages/signup";
import Home from "./pages/home";
import CreatePost from "./pages/posts";
import Profile from "./pages/profile";
import MyPhotos from "./pages/myphotos";

export const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/post",
    element: <CreatePost />,
    errorElement: <Error />,
  },
  {
    path: "/profile",
    element: <Profile />,
    errorElement: <Error />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: "/myphotos",
    element: <MyPhotos />,
    errorElement: <Error />,
  },
  {
    path: "/signup",
    element: <Signup />,
    errorElement: <Error />,
  },
]);
