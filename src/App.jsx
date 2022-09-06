import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutJudo from "./pages/AboutJudo";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-judo" element={<AboutJudo />} />
      </Routes>
    </>
  );
}

export default App;
