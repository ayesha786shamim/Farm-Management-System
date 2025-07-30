import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
// import { getProducts, Product } from '../api/ProductApi';
import { getProducts, Product } from '../../api/MockProduct';
import '../../Styles/Product-style.css';
import CategorySelector from './CategorySelector';

const Categories: React.FC = () => {

    const [products, setProducts] = useState<Product[]>([]);

    const [visibleCount, setVisibleCount] = useState<number>(10);

    const [activeCategory, setActiveCategory] = useState<string>('All');

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
        <div className="container mx-auto pl-4 pr-4 pb-8">


            {/* Title
            <div className="text-center mb-4">
                <h2 className="input-font input-fontBold text-[18px] text-Golden">
                    Categories
                </h2>
            </div> */}


            {/* <div className='justify centre mt-3 mb-7'>
                <CategorySelector />
            </div> */}

            <div className='justify centre mt-3 mb-3'>

                <CategorySelector

                    activeCategory={activeCategory}

                    onCategoryChange={(category) => {

                        setActiveCategory(category);

                        setVisibleCount(5);

                    }}
                />
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

            {/* Load More Button
            <div className="flex justify-center mt-6 mb-5">
                <button
                    onClick={handleLoadMore}
                    className="input-textForestGreen input-fontBold font-Poppins text-[16px] flex items-center gap-2 hover:opacity-80 transition"
                >
                    VIEW ALL PRODUCTS
                    <span className="text-[16px] font-bold">→</span>
                </button>
            </div> */}

            {/*  Load More Button */}
            {visibleCount < filteredProducts.length && (

                <div className="flex justify-center mt-6 mb-5">
                    <button
                        onClick={handleLoadMore}
                        className="input-textForestGreen input-fontBold font-Poppins text-[16px] flex items-center gap-2 hover:opacity-80 transition"
                    >
                        VIEW ALL PRODUCTS
                        <span className="text-xl">→</span>
                    </button>
                </div>
            )
            }




        </div >
    );
};

export default Categories;
