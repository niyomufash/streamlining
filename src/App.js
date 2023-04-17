// import './App.css';
import React from "react";
import Home from "./component/Home";
import {  Routes, Route, NavLink } from "react-router-dom";
import Admin from "./component/Admin/Admin";
import Dashboard from "./component/Admin/Dashboard/Dashboard";





function App() {
  return (
    <div className="App">
    
     <main>
     <Routes>
      <Route path="/" element={<Home/>}> </Route>
      <Route path="admin" element={<Admin/>}></Route>
      <Route path="dash" element={<Dashboard/>}></Route>
      
   
      </Routes>
     </main>
    
     </div>
  );
}

export default App;
