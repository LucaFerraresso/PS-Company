import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contacts />} />
      </Routes>
    </Router>
  );
}

export default App;