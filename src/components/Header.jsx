import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/LOGO.png';

const Header = () => {
    return (
        <header className="site-header">
            <div className="container header-container">
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
            </div>
        </header>
    );
};

export default Header;
