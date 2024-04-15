import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

  import App from "../App";
  import About from "../Pages/About";
import ContactUs from "../Pages/ContactUs";
import Services from "../Pages/Services";
import Layout from "../Layouts/Layout";
import Success from "../Components/SuccesMessage/Success";
import RegError from "../Components/RegError/RegError";

  const router = createBrowserRouter([
  {
    // element: <App/>,
    element: <Layout/>,
    children:[{
    path: "/",
        }
    ]
  },

  {
    path: "/about",
    element: <About/>,
  },

  {
    path: "/contact",
    element: <ContactUs/>,
  },

  {
    path: "/services",
    element: <Services/>,
  },

  {
    path: "/success",
    element: <Success/>,
  },

  {
    path: "/error",
    element: <RegError/>,
  },
]);

export default router