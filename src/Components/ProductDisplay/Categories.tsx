import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
// import { getProducts, Product } from '../api/ProductApi';
import { getProducts, Product } from '../../api/MockProduct';
import '../../Styles/Product-style.css';
import CategorySelector from './CategorySelector';
import { ArrowRight } from 'lucide-react';

interface CategoriesProps {
    products: Product[];
}

const categories = ['All', 'Fertilizer', 'Pesticides', 'Weed'];

const Categories: React.FC<CategoriesProps> = ({ products }) => {

    console.log('Category component renders')

    const [visibleCount, setVisibleCount] = useState<number>(10);

    const [activeCategory, setActiveCategory] = useState<string>('All');

    const handleLoadMore = () => {

        setVisibleCount(products.length);

    };

    const filteredProducts =

        activeCategory === 'All'

            ? products

            : products.filter((product) =>
                product.category === activeCategory
            );

    const visibleProducts = filteredProducts.slice(0, visibleCount);


    return (

        <div className="container pl-4 pr-4 pb-4">

            {/* Category selection */}
            <div className="pt-7 pb-10">

                <div className="flex justify-center">

                    <div className="flex bg-white p-2 rounded-full shadow-md  gap-2">

                        {categories.map((category) => (

                            <button
                                onClick={() => { setActiveCategory(category); }}
                                className={`input-font font-semibold text-[12px] 
                                 w-[135px] py-2 rounded-full transition-all duration-300
                                 
                                 ${activeCategory === category
                                        ? 'bg-gradient-custom-opposite-diagonal text-white'
                                        : 'input-fontBG input-textForestGreen'
                                    }`}
                            >
                                {category}
                            </button>

                        ))}
                    </div>
                </div>
            </div>


            {/* Product card Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">

                {visibleProducts.map((product) => (

                    <ProductCard
                        id={product.id}
                        title={product.title}
                        price={product.price}
                        imageUrl={product.image}
                        description={product.description}
                        category={product.category}

                        fromCategoryComponent={true}
                    />
                ))}
            </div>


            {/*  Load More Button */}
            {visibleCount < filteredProducts.length && (
                <div className="flex justify-center mt-6 ">
                    <button
                        onClick={handleLoadMore}
                        className="font-Poppins text-[16px] flex items-center gap-0 hover:opacity-80 transition"
                    >
                        <span className="underline font-bold text-Forest_Green">VIEW ALL PRODUCTS</span>
                        <ArrowRight className="w-4 h-6 text-Forest_Green" />

                    </button>
                </div>
            )}
        </div >
    );
};

export default React.memo(Categories)