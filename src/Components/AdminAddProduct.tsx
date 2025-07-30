import React, { useState } from 'react';
import { Search, Plus, RotateCcw, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AdminAddProduct = () => {
    const [searchName, setSearchName] = useState('');
    const [searchStatus, setSearchStatus] = useState('');
    const [searchCategory, setSearchCategory] = useState('');

    const navigate = useNavigate();

    const handleReset = () => {

        setSearchName('');
        setSearchStatus('');
        setSearchCategory('');

    };

    const handleAddProduct = () => {

        navigate('/MarketPlaceAdmin/AdminAddProduct');

    };

    return (
        <div className="min-h-screen">

            {/* Filters options */}
            <div className="px-9 pt-10 bg-transparent flex items-center justify-between">

                <div className="flex items-center gap-2">

                    {/* Search by Name */}
                    <div className="relative w-[180px] border-b border-Ice_Blue">
                        <select
                            value={searchName}
                            onChange={(e) => setSearchName(e.target.value)}
                            className="w-full appearance-none py-[6px] pr-6 pl-3 text-[12px] font-Montserrat font-medium text-Gray focus:outline-none"
                        >
                            <option value="">Search by name</option>

                            <option value="wheat">Wheat</option>
                            <option value="rice">Rice</option>
                            <option value="corn">Corn</option>

                        </select>
                        <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 text-Forest_Green pointer-events-none" />
                    </div>

                    {/* Search by Status */}
                    <div className="relative w-[180px] border-b border-Ice_Blue">

                        <select
                            value={searchStatus}
                            onChange={(e) => setSearchStatus(e.target.value)}
                            className="w-full appearance-none bg-transparent py-[6px] pr-6 pl-3 text-[12px] font-Montserrat font-medium text-Gray focus:outline-none"
                        >
                            <option value="">Search by status</option>

                            <option value="available">Available</option>
                            <option value="out_of_stock">Out of Stock</option>

                        </select>

                        <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 text-Forest_Green pointer-events-none" />
                    </div>


                    {/* Search by Category */}
                    <div className="relative w-[180px] border-b border-Ice_Blue">
                        <select
                            value={searchCategory}
                            onChange={(e) => setSearchCategory(e.target.value)}
                            className="w-full appearance-none bg-transparent py-[6px] pr-6 pl-3 text-[12px] font-Montserrat font-medium text-Gray focus:outline-none"
                        >
                            <option value="">Search by category</option>

                            <option value="grains">Grains</option>
                            <option value="vegetables">Vegetables</option>
                            <option value="fruits">Fruits</option>

                        </select>
                        <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 text-Forest_Green pointer-events-none" />
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-3">

                    <button className="flex items-center gap-2 bg-Forest_Green px-4 py-2 rounded-full text-[9px] font-Montserrat font-medium text-white hover:bg-Dark_Green transition-colors">
                        <Search className="w-[11px] h-[13px]" />
                        <span>Search</span>
                    </button>

                    <button
                        onClick={handleReset}
                        className="p-2 rounded-full border border-[#D634342B] red-200 bg-red-100 text-red-600 hover:bg-red-200 transition-colors"
                    >
                        <RotateCcw className="text-Red w-[13px] h-[10px]" />
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-col items-center justify-center mt-12  pb-20 text-center">
                {/* Image */}
                <img
                    src="/images/AdminProduct.svg"
                    alt="Admin Product"
                    className="w-[183px] h-[135px] mb-6"
                />

                {/* Text content */}
                <h2 className="text-[24px] font-Montserrat font-bold text-Forest_Green mb-4">
                    No Product Information?
                </h2>

                <p className="text-[16px] font-Montserrat font-normal text-Gray mb-5 max-w-md leading-relaxed">
                    Add new product, the information of the product will show up here.
                </p>

                {/* Add Product Button */}
                <button
                    onClick={handleAddProduct}
                    className="text-[10px] bg-Forest_Green font-Montserrat font-semibold text-white px-6 py-3 rounded-3xl flex items-center gap-2 transition-colors duration-200 shadow-md hover:bg-Dark_Green">
                    <Plus className="h-[12px] w-[12px]" />
                    Add New Product
                </button>
            </div>
        </div>
    );
};

export default AdminAddProduct;
