import React, { createContext, useState, ReactNode } from 'react';
import { Product } from '../api/MockProduct';

export interface CartItem extends Product {
    quantity: number;
}

interface CartContextType {
    cart: CartItem[];
    addToCart: (product: Product, quantity?: number) => void;
    updateQuantity: (productId: number, quantity: number) => void;
    removeFromCart: (productId: number) => void;
    cartCount: number;
    totalQuantity: number;
    isCartOpen: boolean;
    openCart: () => void;
    closeCart: () => void;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);


export const CartProvider = ({ children }: { children: ReactNode }) => {

    const [cart, setCart] = useState<CartItem[]>([]);

    const [isCartOpen, setIsCartOpen] = useState(false);

    const addToCart = (product: Product, quantity: number = 1) => {

        console.log('Adding product with ID:', product.id); 

        const Price = Number(product.price);

        setCart(prevCart => {

            const existingItem = prevCart.find(item =>

                item.id === product.id && item.title === product.title

            );

            if (existingItem) {

                console.log("Product already in cart");

                return prevCart.map(item =>

                    item.id === product.id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );

            } else {

                console.log("New product, adding to cart");

                return [...prevCart, { ...product, Price, quantity }];

            }
        });
    };



    const updateQuantity = (productId: number, quantity: number) => {

        setCart(prevCart =>
            prevCart.map(item =>
                item.id === productId ? { ...item, quantity } : item
            )
        );

    };
    const removeFromCart = (productId: number) => {
        // Ensure productId is a number
        if (typeof productId !== 'number') {

            console.error("Product ID for removal is not a number");
            return;
        }

        setCart(prevCart => prevCart.filter(item => item.id !== productId));
    };


    const cartCount = cart.length;

    const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

    const openCart = () => setIsCartOpen(true);

    const closeCart = () => setIsCartOpen(false);

    return (
        <CartContext.Provider value={{ cart, addToCart, updateQuantity,
        removeFromCart, cartCount, totalQuantity, isCartOpen, openCart, closeCart }}>
            {children}
        </CartContext.Provider>
    );
};