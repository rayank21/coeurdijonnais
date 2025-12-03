import React from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';
import './ProductStage.css';

const ProductStage = () => {
    return (
        <section className="product-stage-section">
            <div className="container product-stage-container">
                <div className="product-info">
                    <motion.h3
                        className="product-category"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        Collection Signature
                    </motion.h3>
                    <motion.h2
                        className="product-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        Le Cœur Dijonnais
                    </motion.h2>
                    <motion.div
                        className="product-description"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <p>
                            La création signature. Cassis intense de Bourgogne, mousse légère à la vanille
                            et biscuit croquant aux amandes. Un bijou de saveur.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <Button variant="secondary">Ajouter au Panier • 3.90€</Button>
                    </motion.div>
                </div>

                <div className="product-visual">
                    <motion.img
                        src="https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=1974&auto=format&fit=crop"
                        alt="Le Royal Cassis"
                        className="product-image"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
                    />
                </div>
            </div>
        </section>
    );
};

export default ProductStage;
