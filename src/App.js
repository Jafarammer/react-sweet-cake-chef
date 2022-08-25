// import logo from "./logo.svg";
// import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Pages layouts
import ShowLayout from "./pages/ShowLayout";
import HideLayout from "./pages/HideLayout";
// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AddRecipe from "./pages/AddRecipe";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HideLayout />}>
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Route>
        <Route element={<ShowLayout />}>
          <Route path="/" element={<App />} />
          <Route index element={<Home />} />
          <Route path="add" element={<AddRecipe />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
