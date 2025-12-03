import React from 'react';
import { motion } from 'framer-motion';
import './Button.css';

const Button = ({ children, onClick, className = '', variant = 'primary' }) => {
  return (
    <motion.button
      className={`btn btn-${variant} ${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.button>
  );
};

export default Button;
