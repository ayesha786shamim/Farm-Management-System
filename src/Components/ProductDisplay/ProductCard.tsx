import React, { useContext } from 'react';
import { Eye, Plus } from "lucide-react";
import { useNavigate, createSearchParams } from 'react-router-dom';
import '../../Styles/Product-style.css';
import { CartContext } from '../../Context/CartContext';


interface ProductCardProps {

    id: number
    title: string;
    price: number;
    imageUrl: string;
    description: string;
    category: string;

    fromCategoryComponent?: boolean;

}

const ProductCard: React.FC<ProductCardProps> = ({ id, title, price, imageUrl, description, category, fromCategoryComponent, }) => {

    const navigate = useNavigate();

    const cartContext = useContext(CartContext);

    if (!cartContext) {

        throw new Error("CartContext not found.");

    }

    const { addToCart } = cartContext;


    const handlePlusClick = () => {

        const product = { id, title, price, image: imageUrl, description, category };

        addToCart(product, 1);

    };


    const handleAddToCartClick = () => {

        const product = { id, title, price, imageUrl, description, category };

        navigate(
            {
                pathname: '/MarketPlace/ProductDetail',

                search: createSearchParams({ id: id.toString() }).toString(),
            },

            { state: product }
        );
    };


    return (

        <div
            onClick={fromCategoryComponent ? () => handleAddToCartClick() : undefined}


            className={`relative w-[184px] rounded-xl overflow-hidden bg-white p-2 group  
            
            ${fromCategoryComponent

                    ? "h-[219px] border border-green-50 shadow-2xl cursor-pointer "

                    : "h-[160px]  border border-Forest_Green shadow-lg "

                }`}
        >

            {/* Hover */}
            {!fromCategoryComponent && (

                <div className="absolute inset-0 bg-gradient-custom-diagonal opacity-0 
                        group-hover:opacity-90 z-30 flex justify-center items-center">

                    <button
                        onClick={handleAddToCartClick}

                        className="input-font input-font-semibold bg-Golden text-white 
                        text-[14px] px-3 py-2 rounded-full z-80 transform hover:scale-95 active:scale-55 
                        cursor-pointer transition-transform duration-200 ease-in-out"
                    >
                        Add to cart
                    </button>
                </div>
            )}


            {/* Eye Icon */}
            <div className="absolute top-2.5 right-2.5 w-6 h-6 
                bg-white rounded-full border border-Forest_Green 
                flex items-center justify-center cursor-pointer 
                hover:bg-gray-50 transition-colors shadow-md">

                <Eye size={14} className="text-Forest_Green " />

            </div>


            {/* Image */}
            <div className={`flex justify-center items-center 
                    ${fromCategoryComponent
                    ? "py-[16px]"
                    : "py-[2px]"
                }`}
            >
                <img
                    src={imageUrl}
                    alt={title}
                    className={`rounded-md object-contain max-w-full max-h-full
                    ${fromCategoryComponent
                            ? "h-[91px] w-[84px] "
                            : "h-[85px] w-[74px] "
                        }`}
                />
            </div>


            {/* Title */}
            <div className="h-[35px] px-1 flex items-center justify-center text-center">

                <h3
                    className={`font-Montserrat font-semibold text-Black 
                    ${fromCategoryComponent
                            ? "text-[16px]"
                            : "text-[16px]"
                        } 
                    overflow-hidden leading-tight`}
                >
                    {title}
                </h3>


            </div>


            {/* Price */}
            <div className="text-center relative pt-1">
                <p
                    className={`font-Montserrat font-bold  

                        ${fromCategoryComponent
                            ? "text-Forest_Green text-[14px] text-left "
                            : "text-Gray text-[10px] pb-2"
                        }`}

                >
                    PKR : {price}
                </p>
            </div>


            {/* Plus Button */}
            {fromCategoryComponent ? (

                <div
                    className="absolute bottom-4 right-3 w-7 h-7 rounded-full 
                    bg-gradient-custom flex items-center justify-center cursor-pointer 
                    hover:bg-gradient-custom-diagonal hover:scale-105 active:scale-95 transition-transform duration-200 ease-in-out"

                    onClick={(e) => {

                        e.stopPropagation(); //prevent the click event of the outer div

                        handlePlusClick();
                    }}
                >
                    <Plus size={15} className="text-white" />
                </div>
            ) : (

                // plus button on new arrival
                <div
                    className="absolute bottom-0 right-0 w-7 h-7 
                    bg-gradient-custom rounded-tl-md flex 
                    items-center justify-center cursor-pointer 
                    hover:bg-gradient-custom-diagonal transition-colors 
                    group-hover:opacity-0"

                    style={{ borderBottomRightRadius: '11px' }}
                    onClick={handlePlusClick}
                >
                    <Plus size={18} className="text-white" />
                </div>
            )
            }

            {/* stars and raating */}
            {fromCategoryComponent && (

                <div className="flex items-center gap-[4px]  pt-1 pl-[2px]">
                    {/* stars */}
                    <div className="flex space-x-[1px]">
                        <span className="text-[#FFD600] text-[12px]">★</span>
                        <span className="text-[#FFD600] text-[12px]">★</span>
                        <span className="text-[#FFD600] text-[12px]">★</span>
                        <span className="text-[#DBDCDD] text-[12px]">★</span>
                        <span className="text-[#DBDCDD] text-[12px]">★</span>
                    </div>


                    <span className="text-[#7B7B7B] font-Poppins font-normal text-[11px]">(12)</span>
                </div>
            )}



        </div >
    );
};

export default React.memo(ProductCard);
