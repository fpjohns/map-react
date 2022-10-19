import "./style.css";
import { Routes, Route, Link } from "react-router-dom";
import Features from "./pages/Features";
import Homepage from "./pages/Homepage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/features" element={<Features />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
