import App from "@/App";
import Taks from "@/pages/Taks";
import User from "@/pages/User";
import { createBrowserRouter } from "react-router";

 


  const router = createBrowserRouter([
     {
        path: '/',
        Component: App, 
        children: [
         {
            index: true,
            Component:Taks
         },
         {
            path: 'taks',
            Component:Taks
         },
         {
            path: 'users',
            Component:User
         }
        ]

     }
  ]) 
   

  export default router;