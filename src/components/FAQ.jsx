import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './FAQ.css';

const faqData = [
    {
        question: "Combien de temps se conservent les gâteaux ?",
        answer: "Nos créations sont préparées fraîchement chaque jour. Elles se conservent au réfrigérateur (entre 2°C et 4°C) pendant 48 heures pour garantir une expérience gustative optimale."
    },
    {
        question: "Quels sont les allergènes présents ?",
        answer: "Le Cœur Dijonnais contient du gluten (blé), des œufs, du lait (crème, beurre), et des fruits à coque (amandes). Il peut contenir des traces de soja."
    },
    {
        question: "Livrez-vous dans toute la France ?",
        answer: "Pour le moment, nous assurons la livraison uniquement sur Dijon et son agglomération (20km alentour) afin de préserver la fraîcheur de nos produits. Le retrait en boutique est également disponible."
    },
    {
        question: "Peut-on commander pour un événement ?",
        answer: "Absolument ! Pour les commandes de plus de 50 pièces, merci de nous contacter au moins 72h à l'avance via notre formulaire de contact ou par téléphone."
    }
];

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="faq-item" onClick={() => setIsOpen(!isOpen)}>
            <div className="faq-question">
                <h3>{question}</h3>
                {isOpen ? <ChevronUp size={20} color="#4A0E18" /> : <ChevronDown size={20} color="#4A0E18" />}
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="faq-answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <p>{answer}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQ = () => {
    return (
        <section className="faq-section">
            <div className="container faq-container">
                <h2 className="faq-title">Questions Fréquentes</h2>
                <div className="faq-list">
                    {faqData.map((item, index) => (
                        <FAQItem key={index} question={item.question} answer={item.answer} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
