import React, { useContext } from "react";
import { ShoppingCart } from "lucide-react";
import { CartContext } from "../../Context/CartContext";
import CartDrawer from "./CartDrawer";

const CartIcon: React.FC = () => {

    console.log("Cart Icon click")

    const cartContext = useContext(CartContext);

    if (!cartContext) return null;

    const { openCart,isCartOpen, cart, cartCount } = cartContext;

    return (

        <div>

            <div className="relative">

                <button

                    onClick={openCart}
                    className="bg-Golden text-white p-4 rounded-full shadow shadow-2xl shadow-black-200 h-[64px] w-[64px] transform 
                        hover:scale-95 active:scale-85 cursor-pointer transition-transform duration-200 ease-in-out"

                >
                    <ShoppingCart size={32} />


                    {cart.length > 0 && (

                        <span className="absolute -top-0 -right-1 bg-white text-Golden text-[14px] 
                        font-bold px-2 py-0.5 rounded-full shadow-2xl">

                            {cartCount}

                        </span>
                    )}

                </button>
            </div>

            {isCartOpen &&
                <CartDrawer />
            }
            
        </div>

    );
};

export default React.memo(CartIcon);
