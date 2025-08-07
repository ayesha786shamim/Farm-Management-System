import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
// import { getProducts, Product } from '../api/ProductApi';
import { getProducts, Product } from '../../api/MockProduct';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import '../../Styles/Product-style.css';

interface NewArrivalProps {
    products: Product[];
}

const NewArrival: React.FC<NewArrivalProps> = ({ products }) => {

    console.log('New arrival component renders')


    // const [products, setProducts] = useState<Product[]>([]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const data = await getProducts();
    //             setProducts(data);
    //         } catch {
    //             console.error('Failed to fetch products');
    //         }
    //     };
    //     fetchData();
    // }, []);


    //Scroll Button Functionality
    const scroll = (direction: 'left' | 'right') => {

        const scrollContainer = document.getElementById('product-scroll');


        if (scrollContainer) {

            const ScrollCard = scrollContainer.offsetWidth / 5;

            scrollContainer.scrollBy({

                left: direction === 'left'
                    ? -ScrollCard
                    : ScrollCard,
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

            {/* Scrollable Products*/}
            <div>

                <div
                    id="product-scroll"
                    className="flex overflow-x-scroll scroll-smooth scrollbar-hide "
                >

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

export default React.memo(NewArrival);




