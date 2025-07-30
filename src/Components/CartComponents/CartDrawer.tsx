import React from 'react';
import CartItemCard from './CartItem';
import { CartItem } from '../../Context/CartContext';
import { useNavigate, createSearchParams } from 'react-router-dom';

interface CartDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    cartItems: CartItem[];
    updateQuantity: (id: number, quantity: number) => void;
    removeFromCart: (id: number) => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, cartItems, updateQuantity, }) => {

    const navigate = useNavigate();

    if (!isOpen)
        return null;

    const subtotal = cartItems.reduce((sum, item) => {

        const price = item.price;
        const quantity = item.quantity;
        return sum + price * quantity;

    }, 0);


    const deliveryFee = 1000;

    const total = subtotal + deliveryFee;

    return (
        <div className="fixed inset-0 z-50 flex justify-end">

            {/* Backdrop */}
            <div className="flex-1 bg-black bg-opacity-40"
                onClick={onClose}>
            </div>


            {/* Drawer */}
            <div className="w-[356px] bg-white h-full flex flex-col shadow-3xl shadow-Forest_Green overflow-hidden ">


                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-200
                ">
                    <h2 className="text-lg font-semibold text-Forest_Green font-Montserrat">
                        Cart ({cartItems.length})
                    </h2>

                    <button
                        onClick={onClose}
                        className="text-Gray hover:text-Black text-2xl font-bold w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100"
                    >
                        ×
                    </button>

                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto">
                    <div className="p-4">
                        <h3 className="font-semibold text-Black font-Montserrat mb-4">Products</h3>

                        {cartItems.length === 0 ? (
                            <div className="text-center py-12">

                                <p className="text-Gray text-lg font-Montserrat">Cart is empty</p>

                            </div>
                        ) : (
                            <div className="space-y-0">

                                {cartItems.map(item => (
                                    <CartItemCard
                                        key={item.id}
                                        item={item}
                                        updateQuantity={updateQuantity}
                                        isSingleItem={cartItems.length === 1}
                                    />
                                ))}

                            </div>
                        )}
                    </div>

                    {/* Foot */}
                    {cartItems.length > 0 && (
                        <div className="p-4 space-y-4 bg-white">

                            <div className="space-y-2 text-[16px] font-semibold font-Montserrat text-Black">
                                <div className="pb-8 flex justify-between">
                                    <span>Sub total</span>
                                    <span>PKR {subtotal}</span>
                                </div>

                                <div className="flex justify-between font-Montserrat font-bold text-[20px] text-Black">
                                    <span>Total</span>
                                    <span>PKR {total}</span>
                                </div>
                            </div>

                            <button
                                onClick={() => {
                                    navigate({

                                        pathname: '/MarketPlace/ProductDetail/Checkout',

                                        search: `?total=${total}`,

                                    }, {
                                        state: { cartItems }
                                    });
                                }}

                                className="w-full bg-Forest_Green text-white py-3 rounded-full font-semibold font-Montserrat hover:bg-green-700 transition-colors"
                            >
                                Check Out
                            </button>


                            <button
                                onClick={onClose}
                                className="w-full text-Golden py-2 rounded-full font-semibold font-Montserrat hover:bg-Forest_Green transition-colors border border-Gray"
                            >
                                View Cart
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );

};

export default CartDrawer;