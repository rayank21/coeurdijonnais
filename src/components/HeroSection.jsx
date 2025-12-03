import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Button from './ui/Button';
import './HeroSection.css';
import heroImage from '../assets/gateau photo 1.png';

const HeroSection = () => {
    const navigate = useNavigate();

    return (
        <section className="hero-section">
            <div className="container hero-container">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                    <h2 className="hero-subtitle">Bijouterie Culinaire</h2>
                    <h1 className="hero-title">Le Cœur<br />Dijonnais</h1>
                    <p className="hero-description">
                        La rencontre entre la Pierre de Bourgogne brute et le glaçage immaculé de la haute pâtisserie.
                    </p>
                    <div className="hero-actions">
                        <Button
                            variant="primary"
                            onClick={() => navigate('/shop')}
                        >
                            Commander • 3.90€
                        </Button>
                    </div>
                </motion.div>

                <motion.div
                    className="hero-image-wrapper"
                    initial={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                    transition={{ duration: 1.5, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                    <img
                        src={heroImage}
                        alt="Le Cœur Dijonnais"
                        className="hero-image"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
