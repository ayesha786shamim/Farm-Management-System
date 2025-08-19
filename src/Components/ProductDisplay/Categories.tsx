import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import '../../Styles/Product-style.css';
import { ArrowRight } from 'lucide-react';
import { Product } from '../../services/productsService';
import { addProduct } from '../../services/productsService';

interface CategoriesProps {
    products: Product[];
}

const categories = ['All', 'Fertilizer', 'Pesticides', 'Weed'];

const Categories: React.FC<CategoriesProps> = ({ products }) => {

    console.log('Category component renders')

    const [visibleCount, setVisibleCount] = useState<number>(10);

    const [activeCategory, setActiveCategory] = useState<string>('All');

    const [productList, setProductList] = useState<Product[]>(products);

    const [newProductId, setNewProductId] = useState<number>(100);


    const handleLoadMore = () => {

        setVisibleCount(products.length);

    };

    const handleDelete = (id: number) => {

        setProductList((prevList) =>
            prevList.filter((product) =>
                product.id !== id
            )
        )
    }

    const handleUpdate = (id: number, newPrice: number) => {

        setProductList((prevList) =>
            prevList.map((product) => {
                if (product.id === id) {
                    return { ...product, price: newPrice };
                }
                return product;
            })
        );
    };


    const handleAddNewProduct = async () => {
        console.log("product Id ", newProductId);

        const newProduct: Product = {
            id: newProductId,
            title: "New Product",
            price: 1500,
            images: ["/images/Urea1.svg"],
            description: "This is a New product",
            category: "Fertilizer",
            features: []
        };

        const addedProduct = await addProduct(newProduct)
        if (addedProduct) {
            const productWithCustomId = { ...addedProduct, id: newProductId };

            setProductList((prevProductList) =>
                // [ ...prevProductList,addedProduct,]
                [productWithCustomId, ...prevProductList]

            );
            setNewProductId((NewProductId) =>
                NewProductId + 1
            );
        }
    };

    // const filteredProducts =

    //     activeCategory === 'All'

    //         ? products

    //         : products.filter((product) =>
    //             product.category === activeCategory
    //         );



    const filteredProducts =

        activeCategory === 'All'
            ? productList
            : productList.filter((product) =>
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

            {/* Add Product Button */}
            <div className="flex justify-center mb-4">
                <button
                    onClick={handleAddNewProduct}
                    className="px-6 py-2 bg-Forest_Green text-white rounded-3xl hover:bg-green
                    hover:scale-105 active:scale-95"
                >
                    Add Product
                </button>
            </div>


            {/* Product card Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">

                {visibleProducts.length > 0 ? (

                    visibleProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            price={product.price}
                            // image={product.image}
                            images={product.images}
                            description={product.description}
                            category={product.category}
                            features={product.features}

                            fromCategoryComponent={true}
                            onDelete={handleDelete}
                            onUpdate={handleUpdate}
                        />
                    ))
                ) : (
                    <h1 className='col-span-5 flex justify-center font-Poppins text-[20px] flex items-center font-bold text-Forest_Green'>
                        NO PRODUCTS FOUND
                    </h1>
                )}
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