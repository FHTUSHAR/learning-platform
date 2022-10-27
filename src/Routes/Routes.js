import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "../pages/Blog/Blog";
import Category from "../pages/Category/Category";
import CheckOut from "../pages/CheckOut/CheckOut";
import CourseDetails from "../pages/CourseDetails/CourseDetails";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/category',
                element: <Category></Category>,
                loader: (() => {
                    return fetch('http://localhost:5000/course')
                })
            },
            {
                path: '/course/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({ params }) => {
                    return fetch(`http://localhost:5000/course/${params.id}`)
                }
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
                loader: ({ params }) => {
                    return fetch(`http://localhost:5000/course/${params.id}`)
                }
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    },
    {
        path: '*',
        element: <div className="text-center">
            <h1 className="text-danger">The Page Is Not Found</h1>
            <h3>Status Code :404</h3>
        </div>
    }
]);