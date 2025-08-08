import React, { createContext, useState, ReactNode, useEffect, useMemo } from 'react';
import { Product } from '../api/MockProduct';
import { toast } from 'react-toastify';

export interface CartItem extends Product {
    quantity: number;
}

interface CartContextProps {

    cart: CartItem[];
    cartCount: number;
    isCartOpen: boolean;

    addToCart: (product: Product, quantity: number) => void;
    updateQuantity: (productId: number, quantity: number) => void;
    removeFromCart: (productId: number) => void;
    openCart: () => void;
    closeCart: () => void;
    handleCheckout: () => void;

}

export const CartContext = createContext<CartContextProps | undefined>(undefined);


export const CartProvider = ({ children }: { children: ReactNode }) => {

    // const [cart, setCart] = useState<CartItem[]>([]);

    const [cart, setCart] = useState<CartItem[]>(() => {

        const storedCart = localStorage.getItem('cart');

        return storedCart ? JSON.parse(storedCart) : [];

    });


    useEffect(() => {

        localStorage.setItem('cart', JSON.stringify(cart));

    }, [cart]);


    const [isCartOpen, setIsCartOpen] = useState(false);



    // Add to cart function
    const addToCart = (product: Product, quantity: number) => {

        console.log('Adding product with ID:', product.id);

        setCart((prevCart) => {

            const ExistingProduct = prevCart.find((item) =>

                item.id === product.id && item.title === product.title
            );

            if (ExistingProduct) {

                console.log("Product already exist in the cart");

                return prevCart.map((item) => {
                    if (item.id === product.id) {
                        return { ...item, quantity: item.quantity + quantity };
                    } else {
                        return item
                    }
                }
                );

            } else {

                console.log("Pr0duct added as new product");
                // return [{ ...product, quantity }, ...prevCart];
                console.log(prevCart);
                return [...prevCart, { ...product, quantity }];
            }
        });
        toast.success('Product added to cart!', {
            position: 'top-right',
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: 'light',
            style: {
                color: '#0F783B',
                fontWeight: 'bold',
            },
        });

    };

    // Update Quantity
    const updateQuantity = (productId: number, quantity: number) => {

        setCart((prevCart) =>

            prevCart.map((item) => {

                if (item.id === productId) {

                    return { ...item, quantity }

                }
                else {
                    return item
                }
            })
        )


    }

    //Remove from cart
    const removeFromCart = (productId: number) => {

        setCart((prevCart) =>

            prevCart.filter((item) =>

                item.id !== productId
            )
        )
    }

    const cartCount = cart.length;


    const openCart = () => setIsCartOpen(true);

    const closeCart = () => setIsCartOpen(false);

    const handleCheckout = () => {

        setCart([]);
        localStorage.removeItem('cart');

    }

    return (

        <CartContext.Provider value={{ cart, addToCart, updateQuantity, removeFromCart, cartCount, isCartOpen, openCart, closeCart, handleCheckout }}>
            {children}
        </CartContext.Provider>

    );
};