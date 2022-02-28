import React from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./sections/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes> */}
      <Footer />
    </div>
  );
}
