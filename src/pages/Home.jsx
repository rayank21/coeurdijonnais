import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import BrandStory from '../components/BrandStory';
import CakeAnatomy from '../components/CakeAnatomy';

const Home = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <HeroSection />
            <BrandStory />
            <div id="cake-anatomy">
                <CakeAnatomy />
            </div>
        </motion.div>
    );
};

export default Home;
