import React from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import ArticleDetails from "./pages/ArticleDetails/ArticleDetails";

function App() {
  return (
    <div className="App font-Ubuntu">
      {/* start routes  */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/blog/:id" element={<ArticleDetails />}></Route>
      </Routes>
      {/* end routes  */}
    </div>
  );
}

export default App;
