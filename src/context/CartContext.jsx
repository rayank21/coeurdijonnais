import React, { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });
    const [isCartOpen, setIsCartOpen] = useState(false);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (product, quantity, options = {}) => {
        setCartItems(prevItems => {
            const existingItemIndex = prevItems.findIndex(item =>
                item.id === product.id &&
                JSON.stringify(item.options) === JSON.stringify(options)
            );

            if (existingItemIndex > -1) {
                const newItems = [...prevItems];
                newItems[existingItemIndex] = {
                    ...newItems[existingItemIndex],
                    quantity: newItems[existingItemIndex].quantity + quantity
                };
                return newItems;
            } else {
                return [...prevItems, { ...product, quantity, options }];
            }
        });
        setIsCartOpen(true); // Open cart when item added
    };

    const removeFromCart = (index) => {
        setCartItems(prevItems => prevItems.filter((_, i) => i !== index));
    };

    const updateQuantity = (index, delta) => {
        setCartItems(prevItems => {
            const newItems = [...prevItems];
            const newQuantity = newItems[index].quantity + delta;
            if (newQuantity > 0) {
                newItems[index].quantity = newQuantity;
                return newItems;
            }
            return prevItems;
        });
    };

    const cartTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

    return (
        <CartContext.Provider value={{
            cartItems,
            addToCart,
            removeFromCart,
            updateQuantity,
            isCartOpen,
            setIsCartOpen,
            cartTotal,
            cartCount
        }}>
            {children}
        </CartContext.Provider>
    );
};
