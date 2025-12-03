import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <p>&copy; 2025 Cœur Dijonnais. Bijouterie Culinaire.</p>
    </div>
  </footer>
);

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
};

export default App;
