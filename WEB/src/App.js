import { Route, Routes } from "react-router";
import './App.css';
import Footer from "./components/Footer/Footer";
import Maps from "./components/Maps/Maps";
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home'

function App() {
  return (
    <div className="container">
      <NavBar />
      <div className="container p-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/maps" element={<Maps/>}/>
        </Routes>
      </div>
      <Footer/>
    </div>


  );
}

export default App;
