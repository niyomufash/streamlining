// import './App.css';
import React from "react";
import Home from "./component/Home";
import {  Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
     
      <Routes>
        <Route path="/" element={<Home/>}> </Route>
      </Routes>
    
     </div>
  );
}

export default App;
