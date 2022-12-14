import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Bookmarked from "./Pages/Bookmarks";
import Home from "./Pages/Home";
import Layout from "./Pages/Layout";
import Movies from "./Pages/Movies";
import TVSeries from "./Pages/TVSeries";
import media from './data/data.json'

function App() {
  
  const [data, setData] = useState(() => 
  JSON.parse(localStorage.getItem("data")) || media)

  useEffect(() => data.length >1 ? localStorage.setItem("data", JSON.stringify(data)) : data,[data])

  return (
    <Router>
      <Layout />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<Home data={data} />} />
        <Route path="/movies" element={<Movies data={data} />} />
        <Route path="/tv-series" element={<TVSeries data={data} />} />
        <Route path="/bookmarks" element={<Bookmarked data={data} />} />
      </Routes>
    </Router>
  );
}

export default App;
