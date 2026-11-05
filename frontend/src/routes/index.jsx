import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home";
import Login from "../pages/login";


const router = createBrowserRouter([
  { path: "/",
     element: <App /> ,
     children: [
       { path: "/", 
        element: <Home/>
       },
       { path: "/login", 
        element: <Login/>
       }
    
     ]

  }]);

export default router;
