import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Bookmarked from "./Pages/Bookmarks";
import Home from "./Pages/Home";
import Layout from "./Pages/Layout";
import Movies from "./Pages/Movies";
import TVSeries from "./Pages/TVSeries";

function App() {
  return (
    <Router>
      <Layout />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tv-series" element={<TVSeries />} />
        <Route path="/bookmarks" element={<Bookmarked />} />
      </Routes>
    </Router>
  );
}

export default App;
