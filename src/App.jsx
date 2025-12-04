import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Checkout from './pages/Checkout';
import Success from './pages/Success';
import CartDrawer from './components/CartDrawer';
import ScrollToTop from './components/ScrollToTop';
import { CartProvider } from './context/CartContext';
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
    <CartProvider>
      <Router>
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/success" element={<Success />} />
          </Routes>
          <Footer />
          <ScrollToTop />
          <CartDrawer />
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
