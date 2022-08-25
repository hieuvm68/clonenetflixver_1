import "./App.css";
import React from "react";
import Content from "./components/Contents/Content";
import Intro from "./components/Intro/Intro";
import Menus from "./components/Menus/Menus";
import Navbar from "./components/Navbar/Navbar";
import MoviesDetail from "./components/MoviesDetail/MoviesDetail";
import { useSelector } from "react-redux";
import Home from "./components/Pages/Home";
import SearchMovies from "./components/SearchMovies/SearchMovies";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./components/Pages/Search";
function App() {
  const { MovieDetail } = useSelector((state) => state.infoMovies);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
