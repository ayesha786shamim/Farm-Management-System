import React, { useContext } from 'react';
import CartItemCard from './CartItemCard';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../Context/CartContext';

const CartDrawer: React.FC = () => {

    const navigate = useNavigate();


    const { closeCart, isCartOpen, cart, cartCount } = useCart();

    if (!isCartOpen) {
        return null;
    }

    let subtotal = 0;

    for (const item of cart) {

        subtotal += item.price * item.quantity;

    }

    const deliveryFee = 1000;

    const total = subtotal + deliveryFee;


    return (
        <div className="fixed inset-0 z-50 flex justify-end bg-black bg-opacity-60">

            {/* Drawer */}
            <div className="w-[346px] bg-white h-full flex flex-col rounded-tl-[26px] rounded-bl-[26px] ">


                {/* Header */}
                <div className="flex justify-between pl-3 py-2 border-b border-gray-200 shadow-md">

                    <h2 className="text-[20px] font-semibold text-Forest_Green font-Montserrat">
                        Cart ({cartCount})
                    </h2>

                    <button
                        onClick={closeCart}
                        className="text-Gray hover:text-Black text-2xl font-bold w-8 h-8 flex items-center 
                        justify-center rounded hover:bg-gray-100"
                    >
                        ×
                    </button>

                </div>

                {/* Product displayy */}
                <div className="flex-1 overflow-y-auto scrollbar-hide ">

                    <div className="pl-4 ">

                        <h3 className="py-5 text-[20px] font-semibold text-Black font-Montserrat ">Products</h3>

                        {cart.length === 0 ? (

                            <div className="text-center ">
                                <p className="text-Forest_Green text-[18px] font-Montserrat font-bold ">Cart is empty</p>
                            </div>

                        ) : (

                            <div className="space-y-0">

                                {cart.map((item) => (

                                    <CartItemCard
                                        item={item}
                                        isSingleItem={cart.length === 1}
                                    />

                                ))}

                            </div>
                        )}
                    </div>
                </div>

                {/* Footer */}
                <div>
                    {cart.length > 0 && (
                        <div className=" sticky absolute p-4 space-y-3 bg-white border-t border-gray-200  
                        bottom-0 rounded-bl-[26px]">

                            <div className="space-y-2 font-semibold font-Montserrat text-Black">

                                <div className="pb-8 flex justify-between">

                                    <span className='text-[16px] '>Sub total</span>
                                    <span className='text-[14px]'>PKR. {subtotal.toFixed(2)}</span>

                                </div>

                                <div className="flex justify-between font-Montserrat font-bold text-[20px] text-Black">

                                    <span className='text-[16px]'>Total</span>
                                    <span className='text-[20px]'>PKR.  {total.toFixed(2)}</span>

                                </div>

                            </div>
                            <div className="flex flex-col items-center gap-3">
                                <button
                                    onClick={() => {
                                        navigate({
                                            pathname: '/MarketPlace/ProductDetail/Checkout',
                                            search: `?total=${total}&total-Products=${cartCount}`,
                                        });
                                    }}
                                    className="w-[333px] bg-Forest_Green text-white py-2 rounded-full font-semibold 
                                    font-Montserrat text-[16px] hover:scale-85 active:scale-95 transition-transform 
                                    duration-100 ease-in-out"
                                >
                                    Check Out
                                </button>

                                <button
                                    onClick={closeCart}
                                    className="w-[333px] text-Golden py-2 rounded-full font-semibold font-Montserrat text-[16px] 
                                    hover:bg-Forest_Green hover:text-white transition-colors border border-Forest_Green hover:scale-85 
                                    active:scale-95 transition-transform duration-100 ease-in-out"
                                >
                                    View Cart
                                </button>
                            </div>


                        </div>
                    )}
                </div>
                
            </div>
        </div>
    );

};

export default CartDrawer;