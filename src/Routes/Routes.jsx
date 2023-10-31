import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import ServiceDetails from "../Pages/Home/Services/ServiceDetails";
import CheckOut from "../Pages/CheckOut/CheckOut";
import BookedService from "../Pages/BookedService/BookedService";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/service/:id",
        element: (
          <PrivateRoutes>
            <ServiceDetails></ServiceDetails>
          </PrivateRoutes>
        ),
      },
      {
        path: "/checkout/:id",
        element: (
          <PrivateRoutes>
            <CheckOut></CheckOut>
          </PrivateRoutes>
        ),
      },
      {
        path: "/booked-services",
        element: (
          <PrivateRoutes>
            <BookedService></BookedService>,
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default router;
