import { Children } from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Root from '../components/Root';
import About from '../components/About';
import ErrorPage from '../components/ErrorPage';


export const router = createBrowserRouter([

{
    path: '/',
    element: <Root/>, 
    errorElement:<ErrorPage />,
    children:[
        {
            path: '/',
            element: <Home/>
        },
        {
            path: 'home',
            element: <Home/>,
        },

        {
            path: 'about',
            element: <About />,
        }
    ]

  },


  

  {

  }


])