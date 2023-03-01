import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import PostNew from "./Pages/PostNew";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/postNew" element={<PostNew />}></Route>
      <Route path="/about" element={<About />}></Route>
    </Routes>
  );
}

export default App;
