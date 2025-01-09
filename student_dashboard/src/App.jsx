import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
 
import Home from "./components/home";

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-gray-100 min-h-screen">
        <Navbar />
     
        <Routes>
          <Route path="/" element={<Home />} />
        
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
};

export default App;
