import React from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import ArticleDetails from "./pages/ArticleDetails/ArticleDetails";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import AdminLayout from "./pages/admin/AdminLayout";

function App() {
  return (
    <div className="App font-Ubuntu">
      {/* start routes  */}
      <Routes>
        <Route index path="/" element={<Home />}></Route>
        <Route path="/blog/:id" element={<ArticleDetails />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/admin" element={<AdminLayout />}></Route>
      </Routes>
      {/* end routes  */}
    </div>
  );
}

export default App;
