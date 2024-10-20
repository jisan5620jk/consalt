import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home1 from "../Pages/Home1/Home1";
import ErrorPage from "../Shared/ErrorPage/ErrorPage";
import Home7 from "../Pages/Home7/Home7";
import Home4 from "../Pages/Home4/Home4";
import Home5 from "../Pages/Home5/Home5";
import Main4 from "../Main/Main4";
import Main5 from "../Main/Main5";
import Main7 from "../Main/Main7";
import Home6 from "../Pages/Home6/Home6";
import Main6 from "../Main/Main6";
import Home8 from "../Pages/Home8/Home8";
import Main8 from "../Main/Main8";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home1 />,
      },
    ],
  }, 
   {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Main4 />,
    children: [
      {
        path: "/home4",
        element: <Home4 />,
      },
    ],
  },
   {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Main5 />,
    children: [
      {
        path: "/home5",
        element: <Home5 />,
      },
    ],
  },
   {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Main6 />,
    children: [
      {
        path: "/home6",
        element: <Home6 />,
      },
    ],
  },
   {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Main7 />,
    children: [
      {
        path: "/home7",
        element: <Home7 />,
      },
    ],
  },
   {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Main8 />,
    children: [
      {
        path: "/home8",
        element: <Home8 />,
      },
    ],
  },
]);

export default router;
