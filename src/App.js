import React from "react";
//routing
import { BrowserRouter, Routes, Route } from "react-router-dom";
//css
import "./App.css";
//components
import Blog from "./components/Blog/Blog";
import BlogDetail from "./components/BlogDetail/BlogDetail";
import Home from "./components/Home/Home";

function App() {
  return (
    <div>
      {/* <Home /> */}
      {/* <BlogDetail /> */}
      {/* <Blog /> */}
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/detail" element={<BlogDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
