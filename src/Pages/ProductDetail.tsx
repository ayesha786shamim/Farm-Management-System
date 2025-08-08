import React, { useContext, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import TopPanel from '../Components/TopPanel/TopPanel';
import ProductInfo from '../Components/ProductDisplay/ProductInfo';
import CartDrawer from '../Components/CartComponents/CartDrawer';
import { CartContext } from '../Context/CartContext';
import CartIcon from '../Components/CartComponents/CartIcon';

const ProductDetail: React.FC = () => {


    const { state } = useLocation();

    const cartContext = useContext(CartContext);

    useEffect(() => {

        if (cartContext) {
            cartContext.closeCart();
        }
    }, []);


    if (!cartContext) {

        return null;

    }

    return (
        <div className="flex flex-col w-full bg-transparent h-auto max-h-screen  scrollbar-hide">


            {!state ? (
                <div className="font-Montserrat font-bold text-[20px] 
                text-Forest_Green flex justify-center items-center h-full">

                    <p>Product not found</p>

                </div>
            ) : (

                <div className="pt-0 pb-6 px-6">

                    <ProductInfo

                        id={state.id}
                        title={state.title}
                        price={state.price}
                        image={state.imageUrl}
                        description={state.description}
                        category={state.category}

                    />

                </div>
            )}

            {/* Cart Icon with Count */}
            <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-2">
                <CartIcon />
            </div>


        </div>
    );
};

export default ProductDetail;
