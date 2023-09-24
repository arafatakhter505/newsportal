import Main from "../layouts/Main";
import Apple from "../pages/Apple/Apple";
import Business from "../pages/Business/Business";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Search from "../pages/Search/Search";
import TechCrunch from "../pages/TechCrunch/TechCrunch";
import Tesla from "../pages/Tesla/Tesla";
import WallStreet from "../pages/WallStreet/WallStreet";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/apple",
        element: <Apple />,
      },
      {
        path: "/tesla",
        element: <Tesla />,
      },
      {
        path: "/business",
        element: <Business />,
      },
      {
        path: "/tech-crunch",
        element: <TechCrunch />,
      },
      {
        path: "/wall-street-journal",
        element: <WallStreet />,
      },
      {
        path: "/search",
        element: <Search />,
      },
    ],
  },
]);

export default router;
