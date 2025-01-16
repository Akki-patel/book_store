import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import CartPage from "../pages/books/CartPage";
import CheckOut from "../pages/books/CheckOut";
import SingleBook from "../pages/books/SingleBook";
import PrivateRoute from "./PrivateRoute";
import OrderPage from "../pages/books/orderPage";
import Admin_routes from "./Admin_routes";
import AdminLogin from "../components/AdminLogin";



const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/orders",
                element: <PrivateRoute><OrderPage /></PrivateRoute>
            },
            {
                path: "/about",
                element: <div>About</div>
            },
            {
                path: "admin",
                element: <AdminLogin />
            },
            {
                path: "/dashboard",
                element: <Admin_routes><div>Admin dashboard</div></Admin_routes>,
                children: [
                    {
                        path: "",
                        element: <Admin_routes><div>Dashboard Home</div></Admin_routes>
                    },
                    {
                        path: "add-new-book",
                        element:<Admin_routes><div>Add a new book</div></Admin_routes>
                    },
                    {
                        path: "edit-book/:id",
                        element:<Admin_routes><div>Add a new book</div></Admin_routes>
                    },
                    {
                        path: "Manage-books",
                        element:<Admin_routes><div>Mangae book</div></Admin_routes>
                    },
                ]
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/cart",
                element: <CartPage />
            },
            {
                path: "/checkout",
                element: <PrivateRoute ><CheckOut /></PrivateRoute>
            },
            {
                path: "/books/:id",
                element: <SingleBook />
            },
        ]
    },
]);
export default router;