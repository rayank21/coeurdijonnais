import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Minus, Plus, ShoppingBag } from 'lucide-react';
import Button from './ui/Button';
import './ShopSection.css';
import productImg from '../assets/gateau photo 1.png'; // Using the hero image for now as product image

const ShopSection = () => {
    const [quantity, setQuantity] = useState(1);
    const [isGift, setIsGift] = useState(false);
    const [giftMessage, setGiftMessage] = useState('');
    const unitPrice = 3.90;

    const handleQuantityChange = (delta) => {
        const newQuantity = quantity + delta;
        if (newQuantity >= 1 && newQuantity <= 50) {
            setQuantity(newQuantity);
        }
    };

    const totalPrice = (quantity * unitPrice).toFixed(2);

    return (
        <section className="shop-section" id="shop">
            <div className="container shop-container">
                <motion.div
                    className="shop-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="shop-title">La Boutique</h2>
                    <p className="shop-subtitle">Commandez votre écrin de gourmandise</p>
                </motion.div>

                <div className="product-card">
                    <motion.div
                        className="product-image-wrapper"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <img src={productImg} alt="Le Cœur Dijonnais" className="product-image" />
                    </motion.div>

                    <motion.div
                        className="product-details"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className="product-name">Le Cœur Dijonnais</h3>
                        <p className="product-description">
                            L'alliance parfaite du cassis de Bourgogne et de la vanille, sur un biscuit croquant.
                            Une expérience gustative unique, livrée dans son écrin individuel.
                        </p>

                        <div className="product-meta">
                            <span className="product-price-unit">{unitPrice.toFixed(2)}€ / pièce</span>
                            <span className="product-availability">En stock</span>
                        </div>

                        <div className="purchase-controls">
                            <div className="quantity-selector">
                                <button
                                    className="qty-btn"
                                    onClick={() => handleQuantityChange(-1)}
                                    disabled={quantity <= 1}
                                >
                                    <Minus size={16} />
                                </button>
                                <span className="qty-value">{quantity}</span>
                                <button
                                    className="qty-btn"
                                    onClick={() => handleQuantityChange(1)}
                                    disabled={quantity >= 50}
                                >
                                    <Plus size={16} />
                                </button>
                            </div>

                            <div className="total-price-display">
                                <span className="total-label">Total</span>
                                <span className="total-amount">{totalPrice}€</span>
                            </div>
                        </div>

                        <div className="gift-option-container">
                            <label className="gift-checkbox-label">
                                <input
                                    type="checkbox"
                                    checked={isGift}
                                    onChange={(e) => setIsGift(e.target.checked)}
                                />
                                <span className="gift-label-text">C'est pour offrir ? (Ajouter une carte)</span>
                            </label>

                            {isGift && (
                                <motion.div
                                    className="gift-message-wrapper"
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                >
                                    <textarea
                                        className="gift-message-input"
                                        placeholder="Votre message personnel (sera écrit à la main)..."
                                        value={giftMessage}
                                        onChange={(e) => setGiftMessage(e.target.value)}
                                        maxLength={150}
                                    />
                                    <span className="char-count">{giftMessage.length}/150</span>
                                </motion.div>
                            )}
                        </div>

                        <Button variant="primary" className="add-to-cart-btn">
                            <ShoppingBag size={18} style={{ marginRight: '8px' }} />
                            Ajouter au Panier
                        </Button>

                        <p className="shipping-note">
                            * Livraison offerte dès 20€ d'achat sur Dijon et agglomération.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ShopSection;
