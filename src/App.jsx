import React from "react";
// import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Make sure BrowserRouter is imported
import Header from "./components/Header";
import Booking from "./components/Booking";
import Home from "./pages/Home";
import About from "./pages/About";
import Rooms from "./components/Rooms";
import ContactUs from "./pages/ContactUs";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="md:px-20">
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/forgot-password" element={<ForgotPassword />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/booking" element={<Booking />} />
        {/* Single route for booking */}
      </Routes>
    </Router>
  );
}

export default App;
