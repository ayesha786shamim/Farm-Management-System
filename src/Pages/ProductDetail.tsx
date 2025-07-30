import React, { useContext } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import TopPanel from '../Components/CommonComponents/TopPanel';
import ProductInfo from '../Components/CommonComponents/ProductInfo';
import CartDrawer from '../Components/CartComponents/CartDrawer';
import { CartContext } from '../Context/CartContext';

const ProductDetail: React.FC = () => {

    const { state } = useLocation();

    const [searchParams] = useSearchParams();

    const productId = searchParams.get('id');

    const cartContext = useContext(CartContext);

    if (!cartContext) return null;

    const {
        cart,
        isCartOpen,
        closeCart,
        updateQuantity,
        removeFromCart
    } = cartContext;


    if (!state || state.id.toString() !== productId) {
        return (
            <div className="p-6">
                <TopPanel />

                <p className="text-Black font-semibold text-lg">No product data found for ID: {productId}</p>
            </div>
        );
    }


    return (
        <div className="flex flex-col w-full bg-transparent h-auto max-h-screen overflow-y-auto sm:overflow-y-visible scrollbar-hide">

            {/* <TopPanel /> */}

            <div className="p-6">
                <ProductInfo
                    id={state.id}
                    title={state.title}
                    price={state.price}
                    image={state.imageUrl}
                    description={state.description}
                    category={state.category}
                />
            </div>


            <CartDrawer
                isOpen={isCartOpen}
                onClose={closeCart}
                cartItems={cart}
                updateQuantity={updateQuantity}
                removeFromCart={removeFromCart}
            />
        </div>
    );
};

export default ProductDetail;
