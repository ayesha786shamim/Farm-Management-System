import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
// import { getProducts, Product } from '../api/ProductApi';
import { getProducts, Product } from '../../api/MockProduct';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import '../../Styles/Product-style.css';

const NewArrival: React.FC = () => {

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {

        const fetchData = async () => {

            try {
                const data = await getProducts();
                setProducts(data);
            } catch {
                console.error('Failed to fetch products');
            }

        };

        fetchData();

    }, []);


    //Scroll Button Functionality

    const scroll = (direction: 'left' | 'right') => {

        const container = document.getElementById('product-scroll');
        if (container) {

            const cardWidth = container.offsetWidth / 5;

            container.scrollBy({

                left: direction === 'left' ? -cardWidth : cardWidth,
                behavior: 'smooth',

            });
        }
    };

    return (
        <div className="container mx-auto px-4">

            {/* Title */}

            <div className="text-center mb-2 pt-0">
                <h2 className="input-font input-fontBold text-[18px] text-Golden">
                    New Arrivals
                </h2>
            </div>

            {/* Scrollable Product Row */}

            <div>

                <div
                    id="product-scroll"
                    className="flex overflow-x-scroll scroll-smooth"
                    style={{
                        scrollbarWidth: 'none', // Firefox
                        msOverflowStyle: 'none', // IE
                        WebkitOverflowScrolling: 'touch',
                    }}
                >
                    <style>
                        {`
                            #product-scroll::-webkit-scrollbar {
                                display: none;
                            }
                      `}
                    </style>

                    {products.map((product) => (

                        <div
                            key={product.id}
                            className="flex-shrink-0 px-1"
                            style={{ width: '20%' }}

                        >
                            <ProductCard

                                id={product.id}
                                title={product.title}
                                price={product.price}
                                imageUrl={product.image}
                                description={product.description}
                                category={product.category}
                                

                            />

                        </div>
                    ))}
                </div>

                {/* Arrow Buttons */}
                <div className="flex justify-center gap-4 mt-3">

                    <button
                        onClick={() => scroll('left')}
                        className="w-[30px] h-[30px] bg-white border border-Forest_Green rounded-full 
                        flex items-center justify-center hover:bg-Forest_Green group transition"
                    >

                        <ChevronLeft className="w-[15px] h-[20px] text-Forest_Green group-hover:text-white transition-colors" />

                    </button>

                    <button
                        onClick={() => scroll('right')}
                        className="w-[30px] h-[30px] bg-white border border-Forest_Green rounded-full 
                        flex items-center justify-center hover:bg-Forest_Green group transition"
                    >

                        <ChevronRight className="w-[15px] h-[20px] text-Forest_Green group-hover:text-white transition-colors" />

                    </button>


                </div>
            </div>
        </div>
    );
};

export default NewArrival;




