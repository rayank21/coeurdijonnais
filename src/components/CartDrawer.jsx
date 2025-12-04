import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import Button from './ui/Button';
import './CartDrawer.css';

const CartDrawer = () => {
    const { isCartOpen, setIsCartOpen, cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();

    return (
        <AnimatePresence>
            {isCartOpen && (
                <>
                    <motion.div
                        className="cart-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsCartOpen(false)}
                    />
                    <motion.div
                        className="cart-drawer"
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                    >
                        <div className="cart-header">
                            <h2>Votre Panier</h2>
                            <button className="close-cart-btn" onClick={() => setIsCartOpen(false)}>
                                <X size={24} />
                            </button>
                        </div>

                        <div className="cart-items">
                            {cartItems.length === 0 ? (
                                <div className="empty-cart">
                                    <ShoppingBag size={48} opacity={0.2} />
                                    <p>Votre panier est vide.</p>
                                    <Button variant="secondary" onClick={() => setIsCartOpen(false)}>
                                        Découvrir la boutique
                                    </Button>
                                </div>
                            ) : (
                                cartItems.map((item, index) => (
                                    <div key={index} className="cart-item">
                                        <div className="cart-item-info">
                                            <h3>{item.name}</h3>
                                            {item.options.isGift && (
                                                <p className="gift-tag">🎁 Cadeau</p>
                                            )}
                                            <p className="item-price">{(item.price * item.quantity).toFixed(2)}€</p>
                                        </div>
                                        <div className="cart-item-controls">
                                            <div className="qty-control-small">
                                                <button onClick={() => updateQuantity(index, -1)} disabled={item.quantity <= 1}>
                                                    <Minus size={14} />
                                                </button>
                                                <span>{item.quantity}</span>
                                                <button onClick={() => updateQuantity(index, 1)}>
                                                    <Plus size={14} />
                                                </button>
                                            </div>
                                            <button className="remove-item-btn" onClick={() => removeFromCart(index)}>
                                                Supprimer
                                            </button>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        {cartItems.length > 0 && (
                            <div className="cart-footer">
                                <div className="cart-total">
                                    <span>Total</span>
                                    <span>{cartTotal.toFixed(2)}€</span>
                                </div>
                                <Button
                                    variant="primary"
                                    className="checkout-btn"
                                    onClick={() => {
                                        setIsCartOpen(false);
                                        // Use window.location as simple navigation or import useNavigate
                                        window.location.href = '/checkout';
                                    }}
                                >
                                    Passer la commande
                                </Button>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default CartDrawer;
