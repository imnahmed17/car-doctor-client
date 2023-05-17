import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import BookService from "../pages/BookService/BookService";
import Bookings from "../pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "signup",
                element: <SignUp />
            },
            {
                path: "booking/:id",
                element: <PrivateRoute><BookService /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://car-doctor-server-five-sepia.vercel.app/services/${params.id}`)
            },
            {
                path: "bookings",
                element: <PrivateRoute><Bookings /></PrivateRoute>
            },
            {
                path: "*",
                element: <ErrorPage />
            }
        ]
    }
]);

export default router;