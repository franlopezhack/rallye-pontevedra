import { Route, Routes } from "react-router";
import './App.css';
import React from "react";
import Footer from "./components/Footer/Footer";
import NavBar from './components/NavBar/NavBar';
import Releases from "./components/Releases/Releases";
import Home from './pages/Home/Home'
import ReleasesDetail from "./components/ReleasesDetail/ReleasesDetail";
import NewRelease from "./components/NewRelease/NewRelease";
import Participants from "./components/Participants/Participants";
import RaceRegulations from "./components/RaceRegulations/RaceRegulations";
import Contact from "./components/Contact/Contact";
import Press from "./components/Press/Press";
// import HomeCarousel from "./components/HomeCarrousel/HomeCarousel";
// import MarqueeSponsors from "./components/MarqueSponsors/MarqueSponsors";
import Spectators from "./components/Spectators/Spectators";
import CountDown from "./components/CountDown/CountDown";


function App() {
  return (
    <div className="">
      <NavBar />
      {/* <MarqueeSponsors/>
      <HomeCarousel/> */}
      <div className="mt-5 p-2">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/noticias" element={<Releases />} />
          <Route path="/releases/:id" element={<ReleasesDetail/>} />
          <Route path="/new-release" element={<NewRelease/>} />
          <Route path="/participantes" element={<Participants/>} />
          <Route path="/seguridad" element={<RaceRegulations/>} />
          <Route path="/espectadores"  element={<Spectators/>}/>
          <Route path="/contacto" element={<Contact/>} />
          <Route path="/prensa" element={<Press/>} />
        </Routes>
      </div>
      <Footer />
    </div>


  );
}

export default App;
