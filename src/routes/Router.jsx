import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import About from "../pages/About/About";
import Career from "../pages/Career/Career";
import LoginLayout from "../layouts/loginLayout";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Category from "../layouts/Category";
import CategoryNews from "../pages/CategoryNews/CategoryNews";
import DetailNews from "../pages/DetailNews/DetailNews";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Navigate to='/category/0'></Navigate>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/career',
                element: <Career></Career>
            }
        ]
    },
    {
        path: '/loginLayout',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: '/loginLayout/register',
                element: <Register></Register>
            },
            {
                path: '/loginLayout/login',
                element: <Login></Login>
            }
        ]
    },
    {
        path: '/category',
        element: <Category></Category>,
        children: [
            {
                path: '/category/:id',
                element: <CategoryNews></CategoryNews>,
                loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path: '/category/news/:id',
                element: <DetailNews></DetailNews>,
                loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
            }
        ]
    }

])

export default router;