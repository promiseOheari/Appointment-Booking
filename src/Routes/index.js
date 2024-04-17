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
import DbSave from "../Components/DbSave/DbSave";
import AptConfirmation from "../Components/AptConfirmation/AptConfirmation";
import Dbtable from "../Components/dbTable/Dbtable";
import ConfirmSuccess from "../Components/ConfirmSuccess/ConfirmSuccess";
import ConfirmNotFound from "../Components/ConfirmNotFound/ConfirmNotFound";

  const router = createBrowserRouter([
  {
    element: <App/>,
    // element: <Layout/>,
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

  {
    path: "/Dbsave",
    element: <DbSave/>,
  },
  {
    path: "/Dbtable",
    element: <Dbtable/>,
  },

  {
    path: "/confirm",
    element: <AptConfirmation/>,
  },

  {
    path: "/confirmed",
    element: <ConfirmSuccess/>,
  },

  {
    path: "/notConfirmed",
    element: <ConfirmNotFound/>,
  },
]);

export default router