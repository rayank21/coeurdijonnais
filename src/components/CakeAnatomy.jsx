import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './CakeAnatomy.css';
import layerFull from '../assets/layer full.jpg';
import layerSplit from '../assets/layer split.jpg';

const layers = {
    dome: {
        title: "Dôme au Chocolat Croquant",
        description: "Une coque fine et croquante en chocolat noir, apportant texture et intensité dès la première bouchée."
    },
    ganache: {
        title: "Ganache à la Moutarde",
        description: "Une ganache onctueuse subtilement relevée à la moutarde de Dijon, l'audace signature de la maison."
    },
    confit: {
        title: "Cœur de Confit de Cassis",
        description: "Un insert acidulé et fruité au cassis de Bourgogne, offrant un contraste saisissant."
    },
    pain_epice: {
        title: "Base de Pain d'Épice",
        description: "Un biscuit moelleux aux épices douces, ancrant la création dans la tradition dijonnaise."
    }
};

const Hotspot = ({ label, x, y, id, onHover, activeId }) => (
    <motion.div
        className={`hotspot ${activeId === id ? 'active' : ''}`}
        style={{ left: `${x}%`, top: `${y}%` }}
        onMouseEnter={() => onHover(id)}
        onMouseLeave={() => onHover(null)}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
    >
        <div className="hotspot-point" />
        <div className="hotspot-line" />
        <span className="hotspot-label">{label}</span>
    </motion.div>
);

const CakeAnatomy = () => {
    const [isSplit, setIsSplit] = useState(false);
    const [activeLayer, setActiveLayer] = useState(null);

    return (
        <section className="anatomy-section">
            <div className="container anatomy-container">
                <div className="anatomy-header">
                    <h2 className="anatomy-title">L'Architecture du Goût</h2>
                    <p className="anatomy-subtitle">
                        {isSplit ? "Survolez pour explorer les couches" : "Cliquez sur le gâteau pour révéler ses secrets"}
                    </p>
                </div>

                <div className="anatomy-display">
                    <div
                        className="cake-cross-section"
                        onClick={() => setIsSplit(!isSplit)}
                        style={{ cursor: 'pointer' }}
                    >
                        <div className="image-container">
                            <motion.img
                                src={layerFull}
                                alt="Cake Full"
                                className="cross-section-image full"
                                animate={{ opacity: isSplit ? 0 : 1 }}
                                transition={{ duration: 0.8 }}
                            />
                            <motion.img
                                src={layerSplit}
                                alt="Cake Split"
                                className="cross-section-image split"
                                animate={{ opacity: isSplit ? 1 : 0 }}
                                transition={{ duration: 0.8 }}
                            />

                            <AnimatePresence>
                                {isSplit && (
                                    <>
                                        {/* Adjusted coordinates for the split cake layers */}
                                        <Hotspot label="Dôme Chocolat" x={50} y={30} id="dome" onHover={setActiveLayer} activeId={activeLayer} />
                                        <Hotspot label="Ganache Moutarde" x={50} y={50} id="ganache" onHover={setActiveLayer} activeId={activeLayer} />
                                        <Hotspot label="Confit Cassis" x={50} y={65} id="confit" onHover={setActiveLayer} activeId={activeLayer} />
                                        <Hotspot label="Pain d'Épice" x={50} y={80} id="pain_epice" onHover={setActiveLayer} activeId={activeLayer} />
                                    </>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    <div className="layer-details-wrapper">
                        <AnimatePresence mode="wait">
                            {activeLayer && isSplit ? (
                                <motion.div
                                    key={activeLayer}
                                    className="layer-details"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <h3>{layers[activeLayer].title}</h3>
                                    <p>{layers[activeLayer].description}</p>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="default"
                                    className="layer-details empty"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 0.5 }}
                                    exit={{ opacity: 0 }}
                                >
                                    <p>{isSplit ? "Sélectionnez une couche pour révéler ses secrets." : "Révélez le gâteau d'abord."}</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CakeAnatomy;
