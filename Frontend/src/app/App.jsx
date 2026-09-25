import React, { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./Approutes.jsx";
import { useAuth } from "../features/auth/hook/useAuth.js";

const App = () => {
  const auth = useAuth()

useEffect(()=>{
  auth.handleGetMe()
},[])

  return <RouterProvider router={router} />;
};

export default App;