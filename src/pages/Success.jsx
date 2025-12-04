import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';
import Button from '../components/ui/Button';
import './Success.css';

const Success = () => {
    const navigate = useNavigate();
    const { cartItems } = useCart(); // In a real app, we'd clear cart here

    return (
        <div className="success-page">
            <div className="container success-container">
                <motion.div
                    className="success-content"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <CheckCircle size={80} color="#2ecc71" className="success-icon" />
                    <h1>Commande Confirmée !</h1>
                    <p>Merci pour votre commande. Vous recevrez un email de confirmation dans quelques instants.</p>
                    <p className="order-number">Commande #CD-{Math.floor(Math.random() * 10000)}</p>

                    <Button variant="primary" onClick={() => navigate('/')}>
                        Retour à l'accueil
                    </Button>
                </motion.div>
            </div>
        </div>
    );
};

export default Success;
