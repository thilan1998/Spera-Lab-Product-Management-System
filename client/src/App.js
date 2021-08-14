import React from "react";
//import { Router } from "react-router-dom";
import Router from "./Router";
import axios from "axios";
import { AuthContextProvider } from "./context/AuthContext";

axios.defaults.withCredentials = true;

function App(){
  return (
    <AuthContextProvider>

          <Router />
   </AuthContextProvider>
  ); 
 
}
export default App;
