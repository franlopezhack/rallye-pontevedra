import { Route, Routes } from "react-router";
import './App.css';
import React from "react";
import Footer from "./components/Footer/Footer";
import Maps from "./components/Maps/Maps";
import NavBar from './components/NavBar/NavBar';
import Releases from "./components/Releases/Releases";
import Home from './pages/Home/Home'
import ReleasesDetail from "./components/ReleasesDetail/ReleasesDetail";

function App() {
  return (
    <div className="container">
      <NavBar />
      <div className="container p-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/espectadores" element={<Maps />} />
          <Route path="/releases" element={<Releases />} />
          <Route path="/releases/:id" element={<ReleasesDetail/>} />
        </Routes>
      </div>
      <Footer />
    </div>


  );
}

export default App;
