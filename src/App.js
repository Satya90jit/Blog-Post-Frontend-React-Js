import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AnimatedRoute from "./component/AnimatedRoute";

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoute />
    </BrowserRouter>
  );
}

export default App;
