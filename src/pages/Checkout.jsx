import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Button from '../components/ui/Button';
import './Checkout.css';

const Checkout = () => {
    const { cartItems, cartTotal, setIsCartOpen } = useCart();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        city: '',
        zip: '',
        cardNumber: '',
        expiry: '',
        cvc: ''
    });
    const [isProcessing, setIsProcessing] = useState(false);

    // Close cart drawer if open
    React.useEffect(() => {
        setIsCartOpen(false);
    }, [setIsCartOpen]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsProcessing(true);

        // Simulate payment processing
        setTimeout(() => {
            setIsProcessing(false);
            navigate('/success');
        }, 2000);
    };

    if (cartItems.length === 0) {
        return (
            <div className="checkout-empty">
                <h2>Votre panier est vide</h2>
                <Button variant="primary" onClick={() => navigate('/shop')}>
                    Retourner à la boutique
                </Button>
            </div>
        );
    }

    return (
        <div className="checkout-page">
            <div className="container checkout-container">
                <motion.div
                    className="checkout-form-section"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                >
                    <h1 className="checkout-title">Paiement Sécurisé</h1>
                    <form onSubmit={handleSubmit} className="checkout-form">
                        <div className="form-section">
                            <h3>Informations de livraison</h3>
                            <div className="form-row">
                                <input
                                    type="text" name="firstName" placeholder="Prénom" required
                                    value={formData.firstName} onChange={handleInputChange}
                                />
                                <input
                                    type="text" name="lastName" placeholder="Nom" required
                                    value={formData.lastName} onChange={handleInputChange}
                                />
                            </div>
                            <input
                                type="email" name="email" placeholder="Email" required
                                value={formData.email} onChange={handleInputChange}
                            />
                            <input
                                type="text" name="address" placeholder="Adresse" required
                                value={formData.address} onChange={handleInputChange}
                            />
                            <div className="form-row">
                                <input
                                    type="text" name="city" placeholder="Ville" required
                                    value={formData.city} onChange={handleInputChange}
                                />
                                <input
                                    type="text" name="zip" placeholder="Code Postal" required
                                    value={formData.zip} onChange={handleInputChange}
                                />
                            </div>
                        </div>

                        <div className="form-section">
                            <h3>Paiement</h3>
                            <div className="card-input-wrapper">
                                <input
                                    type="text" name="cardNumber" placeholder="Numéro de carte (Fictif)" required
                                    value={formData.cardNumber} onChange={handleInputChange}
                                />
                                <div className="form-row">
                                    <input
                                        type="text" name="expiry" placeholder="MM/AA" required
                                        value={formData.expiry} onChange={handleInputChange}
                                    />
                                    <input
                                        type="text" name="cvc" placeholder="CVC" required
                                        value={formData.cvc} onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                        </div>

                        <Button variant="primary" type="submit" disabled={isProcessing} className="pay-btn">
                            {isProcessing ? "Traitement..." : `Payer ${cartTotal.toFixed(2)}€`}
                        </Button>
                    </form>
                </motion.div>

                <motion.div
                    className="checkout-summary-section"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <div className="order-summary">
                        <h3>Récapitulatif</h3>
                        <div className="summary-items">
                            {cartItems.map((item, index) => (
                                <div key={index} className="summary-item">
                                    <div className="summary-item-info">
                                        <span>{item.name} x{item.quantity}</span>
                                        {item.options.isGift && <small>🎁 Cadeau</small>}
                                    </div>
                                    <span>{(item.price * item.quantity).toFixed(2)}€</span>
                                </div>
                            ))}
                        </div>
                        <div className="summary-total">
                            <span>Total</span>
                            <span>{cartTotal.toFixed(2)}€</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Checkout;
