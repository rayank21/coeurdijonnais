import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './Header.css';
import logo from '../assets/LOGO.png';

const Header = () => {
    const { setIsCartOpen, cartCount } = useCart();
    return (
        <header className="site-header">
            <div className="container header-container">
                <div className="header-actions">
                    <motion.div
                        className="logo-wrapper"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                        <Link to="/">
                            <img src={logo} alt="Cœur Dijonnais" className="site-logo" />
                        </Link>
                    </motion.div>

                    <motion.div
                        className="cart-icon-wrapper"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        onClick={() => setIsCartOpen(true)}
                    >
                        <ShoppingBag size={24} color="#4A0E18" />
                        {cartCount > 0 && (
                            <span className="cart-badge">{cartCount}</span>
                        )}
                    </motion.div>
                </div>
            </div>
        </header>
    );
};

export default Header;
