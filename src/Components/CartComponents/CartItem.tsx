import React, { useContext } from 'react';
import { CartContext, CartItem } from '../../Context/CartContext';

interface CartItemCardProps {
    item: CartItem;
    updateQuantity: (id: number, quantity: number) => void;
    isSingleItem: boolean;
}

const CartItemCard: React.FC<CartItemCardProps> = ({ item, updateQuantity, isSingleItem }) => {

    const { removeFromCart } = useContext(CartContext) || {};

    const handleIncrement = () => {

        updateQuantity(item.id, item.quantity + 1);

    };

    const handleDecrement = () => {

        if (item.quantity > 1) {
            updateQuantity(item.id, item.quantity - 1);
        }

    };

    const handleRemove = () => {
        if (removeFromCart) {
            removeFromCart(item.id);
        }
    };

    const price = Number(item.price);

    return (
        <div className={`flex ${isSingleItem
            ? 'flex-col items-center' : 'justify-between items-start'} gap-4 py-4 border-b border-gray-200`}>

            {/* Image */}
            <img
                src={item.image}
                alt={item.title}
                className={`${isSingleItem ? 'w-[240px] h-[240px]' : 'w-[60px] h-[80px]'} object-contain`}
            />

            {/* Info */}
            <div className={`${isSingleItem ? 'text-left' : 'flex-1'}`}>

                <h3 className="text-[18px] font-semibold text-Black font-Montserrat">{item.title}</h3>

                <p className="pt-4 pb-4 text-[15px] font-normal text-Black font-Montserrat">
                    Category:{' '}
                    <span className="text-[15px] font-semibold text-Gray font-Montserrat">{item.category}</span>
                </p>

                <p className="text-[16px] text-Forest_Green font-bold font-Montserrat">
                    PKR {price}
                    <span className="text-Gray font-normal"> (1 bag)</span>
                </p>

                {/* Quantity & Remove */}
                <div className="flex items-center gap-3 mt-4">
                    <div className="flex items-center border rounded-3xl px-2 bg-white shadow-sm">
                        <button
                            className="text-Gray px-2 text-[16px] font-bold hover:text-Black"
                            onClick={handleDecrement}
                        >
                            −
                        </button>
                        <span className="text-Forest_Green px-2 font-semibold text-[16px] ">
                            {item.quantity}
                        </span>
                        <button
                            className="text-Gray px-2 text-[16px]  font-bold hover:text-Black"
                            onClick={handleIncrement}
                        >
                            +
                        </button>
                    </div>

                    <button
                        className="ml-auto text-Forest_Green text-[16px] font-semibold hover:underline"
                        onClick={handleRemove}
                    >
                        REMOVE
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartItemCard;
