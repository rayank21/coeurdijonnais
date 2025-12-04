import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import './Reviews.css';

const reviews = [
    {
        id: 1,
        name: "Sophie M.",
        location: "Dijon",
        rating: 5,
        text: "Une révélation ! Le goût du cassis est incroyablement intense, et le contraste avec le biscuit est parfait. J'en ai commandé pour un dîner, mes invités étaient bluffés."
    },
    {
        id: 2,
        name: "Thomas L.",
        location: "Dijon",
        rating: 5,
        text: "Enfin une pâtisserie qui ose le vrai goût du terroir sans être lourde. La livraison était impeccable, le gâteau est arrivé frais et intact. Je recommande !"
    },
    {
        id: 3,
        name: "Claire D.",
        location: "Dijon",
        rating: 5,
        text: "Le rapport qualité-prix est imbattable. On sent vraiment le travail artisanal derrière. C'est devenu mon petit plaisir coupable du week-end."
    }
];

const Reviews = () => {
    return (
        <section className="reviews-section">
            <div className="container reviews-container">
                <div className="reviews-header">
                    <h2 className="reviews-title">Ils ont goûté l'excellence</h2>
                    <div className="reviews-rating-summary">
                        <div className="stars">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={24} fill="#D4AF37" color="#D4AF37" />
                            ))}
                        </div>
                        <span className="rating-text">4.9/5 sur 10 avis vérifiés</span>
                    </div>
                </div>

                <div className="reviews-grid">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={review.id}
                            className="review-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="quote-icon">
                                <Quote size={32} color="#D4AF37" fill="#D4AF37" opacity={0.2} />
                            </div>
                            <p className="review-text">"{review.text}"</p>
                            <div className="review-author">
                                <div className="author-avatar">
                                    {review.name.charAt(0)}
                                </div>
                                <div className="author-info">
                                    <span className="author-name">{review.name}</span>
                                    <span className="author-location">{review.location} • Achat vérifié</span>
                                </div>
                            </div>
                            <div className="review-stars">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} size={16} fill="#D4AF37" color="#D4AF37" />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;
