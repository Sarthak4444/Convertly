import React from 'react';
import Header from './Sections/Header';
import Footer from './Sections/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';  
import About from './Pages/About';
import Contact from './Pages/Contact';
import Exchange from './Pages/Exchange';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/exchange" element={<Exchange />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
