// import logo from "./logo.svg";
// import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AddRecipe from "./pages/AddRecipe";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route index element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="add" element={<AddRecipe />} />
      </Routes>
    </BrowserRouter>
  );
}

// function Home() {
//   return <h1>Home</h1>;
// }
// function Regiter() {
//   return <h1>Register</h1>;
// }
