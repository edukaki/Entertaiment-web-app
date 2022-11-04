import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Layout from "./Pages/Layout";

function App() {
  return (
    <Router>
      <Layout />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
