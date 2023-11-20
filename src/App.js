import React, {useState} from "react";
import "./Core-Ui/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Services from "./Pages/ServicesPage";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Footer from "./Components/Footer/Index";
import ScrollToTop from "./Core-Ui/ScrollToTop/ScrollToTop";
import SubRoute1 from "./NestedRoutes/SubRoute1";
import SubRoute2 from "./NestedRoutes/SubRoute2";
import SubRoute3 from "./NestedRoutes/SubRoute3";
import Sidebar from "./Components/Sidebar";

function App() {
  const [isOpen, setIsOpen] = useState(false)
  function toggle () {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <Router>
        <ScrollToTop />
        <Sidebar toggle={toggle} isOpen={isOpen} />
        <Navbar toggle={toggle} isOpen={isOpen} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Services" element={<Services />}>
            <Route path="One-way" element={<SubRoute1 />} />
            <Route path="Round-trip" element={<SubRoute2 />} />
            <Route path="Multi-city" element={<SubRoute3 />} />
          </Route>
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
