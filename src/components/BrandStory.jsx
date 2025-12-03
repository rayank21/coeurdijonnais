import React from 'react';
import { motion } from 'framer-motion';
import { Target, Gem, ScrollText } from 'lucide-react';
import './BrandStory.css';

const BrandStory = () => {
    return (
        <section className="brand-story-section">
            <div className="container brand-story-container">
                <div className="story-grid">
                    {/* Column 1: Objectives */}
                    <motion.div
                        className="story-column"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="icon-wrapper">
                            <Target size={32} strokeWidth={1.5} />
                        </div>
                        <h3 className="story-title">Nos Objectifs</h3>
                        <p className="story-text">
                            Démocratiser l'excellence culinaire dijonnaise. Notre mission est de sublimer les spécialités locales pour les rendre accessibles à tous, sans jamais compromettre la qualité ni l'authenticité.
                        </p>
                    </motion.div>

                    {/* Column 2: Values */}
                    <motion.div
                        className="story-column"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="icon-wrapper">
                            <Gem size={32} strokeWidth={1.5} />
                        </div>
                        <h3 className="story-title">Nos Valeurs</h3>
                        <p className="story-text">
                            Le luxe accessible. Nous croyons que le beau et le bon ne devraient pas être un privilège. Nous créons une pâtisserie de prestige, digne des plus grandes maisons, à un prix juste et transparent.
                        </p>
                    </motion.div>

                    {/* Column 3: History */}
                    <motion.div
                        className="story-column"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <div className="icon-wrapper">
                            <ScrollText size={32} strokeWidth={1.5} />
                        </div>
                        <h3 className="story-title">Notre Histoire</h3>
                        <p className="story-text">
                            Tout a commencé par un projet d'études audacieux porté par trois étudiants passionnés. D'une simple idée universitaire est née une véritable ambition : réinventer la gourmandise dijonnaise pour la partager avec le monde.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default BrandStory;
