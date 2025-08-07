import React, { useState, useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import { Product } from '../../api/MockProduct';
import { toast } from 'react-toastify';

interface ProductInfoProps extends Product { }


const ProductInfo: React.FC<ProductInfoProps> = ({ id, title, price, image, description, category, }) => {


    const [quantity, setQuantity] = useState<number>(1);

    const cartContext = useContext(CartContext);

    if (!cartContext) {

        throw new Error("CartContext not found.");

    }

    const { addToCart, openCart } = cartContext;




    const handleIncrement = () =>

        setQuantity((prev) => (prev + 1));

    const handleDecrement = () =>

        setQuantity(prev => (prev > 1
            ? prev - 1 : 1));


    const handleAddToCart = () => {

        console.log("Adding this product:", { id, title, price, image, description, category, quantity });

        const product = { id, title, price, image, description, category };

        addToCart(product, quantity);

        // openCart();
    };


    return (
        <div className="flex flex-col-reverse lg:flex-row gap-8 bg-Background_Color">

            <div className="flex-1 space-y-2">

                <h2 className="text-[32px] font-semibold font-Montserrat text-Black">
                    {title}
                </h2>

                <p className="text-Forest_Green font-Montserrat font-bold text-[20px]">
                    PKR. {price}
                    <span className="text-Gray font-bold text-[20px]"> (1 bag)</span>
                </p>

                <p className="text-Black font-Montserrat text-[14px]">
                    Category:
                    <span className="text-Gray font-normal">{category}</span>
                </p>

                <div className="flex flex-col gap-4 mt-4">

                    <div className="flex items-center border rounded-3xl px-2 bg-white shadow-sm w-32">

                        <button
                            className="text-Gray px-3 text-lg font-bold hover:text-Black"
                            onClick={handleDecrement}
                        >
                            −
                        </button>

                        <span className="text-Forest_Green px-3 font-semibold text-sm">
                            {quantity}
                        </span>

                        <button
                            className="text-Gray px-3 text-lg font-bold hover:text-Black"
                            onClick={handleIncrement}
                        >
                            +
                        </button>

                    </div>

                    <div>
                        <button
                            onClick={handleAddToCart}
                            className="bg-Forest_Green text-white font-Montserrat font-semibold text-[12px] px-7 py-2 rounded-3xl 
                                    hover:bg-green-700 transform hover:scale-105 active:scale-95 
                                    cursor-pointer transition-transform duration-200 ease-in-out"
                        >
                            + Add to Cart
                        </button>
                    </div>


                </div>

                <div className="pt-4">
                    <h4 className="text-Black font-semibold text-[14px]">Description:</h4>
                    <p className="text-Gray text-[14px] text-justify">{description}</p>
                </div>

                <div>
                    <h4 className="text-Black font-semibold text-[14px]">Features:</h4>
                    <p className="text-Gray text-[14px]">*Feature details go here........</p>
                </div>
            </div>

            <div className="w-[522px] h-[390px] bg-white mx-auto rounded-2xl shadow-md relative flex items-center justify-center p-4">
                <img
                    src={image}
                    alt={title}
                    className="w-[366px] h-[366px] object-contain"
                />
            </div>
        </div>
    );
};

export default ProductInfo;
