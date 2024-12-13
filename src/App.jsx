import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Planos from "./pages/Planos/Planos";
import Duvidas from "./pages/Duvidas/Duvidas";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planos" element={<Planos />} />
        <Route path="/duvidas" element={<Duvidas />} />
      </Routes>
    </div>
  );
}

export default App;
