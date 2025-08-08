import React, { useState } from 'react';
import { ChevronDown, Search, RotateCcw, FileSearch } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const History: React.FC = () => {

    const navigate = useNavigate();

    const [searchProductCategory, setSearchProductCategory] = useState('');

    const [searchStatus, setSearchStatus] = useState('');

    const [searchId, setSearchId] = useState('');

    const orders = [
        {
            id: '11111FMS',
            date: '01/08/2025',
            products: 3,
            price: 'PKR 20,000',
            status: 'Delivered',
            statusColor: 'bg-[#DDEEE0] text-Forest_Green',
            productCategory: 'Fertilizer'
        },
        {
            id: '22222FMS',
            date: '01/08/2025',
            products: 2,
            price: 'PKR 3,000',
            status: 'Shipped',
            statusColor: 'bg-[#BD8E4330] text-Golden',
            productCategory: 'Fertilizer'
        },
        {
            id: '33333FMS',
            date: '01/08/2025',
            products: 1,
            price: 'PKR 5,000',
            status: 'Delivered',
            statusColor: 'bg-[#DDEEE0] text-Forest_Green',
            productCategory: 'Pesticide'
        },
        {
            id: '44444FMS',
            date: '01/08/2025',
            products: 3,
            price: 'PKR 20,000',
            status: 'Shipped',
            statusColor: 'bg-[#BD8E4330] text-Golden',
            productCategory: 'Pesticide'
        },
        {
            id: '55555FMS',
            date: '01/08/2025',
            products: 2,
            price: 'PKR 3,000',
            status: 'Pending',
            statusColor: 'bg-[#D635351A] text-Red',
            productCategory: 'Weed'
        },
        {
            id: '66666FMS',
            date: '01/08/2025',
            products: 1,
            price: 'PKR 5,000',
            status: 'Pending',
            statusColor: 'bg-[#D635351A] text-Red',
            productCategory: 'Weed'
        }

    ];


    const [filteredProducts, setFilteredProducts] = useState(orders);


    const handleReset = () => {
        setSearchProductCategory('');
        setSearchStatus('');
        setSearchId('');
        setFilteredProducts(orders)
    };


    const SearchProduct = () => {

        const filteredList = orders.filter((order) => {

            if (searchProductCategory) {
                if (order.productCategory !== searchProductCategory) {
                    return false;
                }
            }
            if (searchStatus) {
                if (order.status !== searchStatus) {
                    return false;
                }
            }
            if (searchId) {
                if (order.id !== searchId) {
                    return false;
                }
            }
            return true;
        });

        setFilteredProducts(filteredList);

    };



    return (
        <div className="bg-Background_Color">

            <div className="px-2">

                <div className="w-[full] bg-white rounded-2xl border border-gray shadow-sm">
                    <div className="px-2 pt-5 pb-2 ">

                        <h2 className="text-[18px] font-Montserrat font-bold text-Golden">
                            Order History
                        </h2>

                    </div>

                    {/* Filters */}
                    <div className="px-3 pb-6 flex flex-col lg:flex-row lg:items-center justify-between gap-4 sm-overflow-x-auto ">

                        <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 w-full  ">

                            {/* Search by Product */}
                            <div className="relative w-[180px] border-b border-Ice_Blue ">

                                <select
                                    value={searchProductCategory}

                                    onChange={(event) => setSearchProductCategory(event.target.value)}

                                    className="w-full appearance-none py-[6px] px-2 text-[12px] font-Montserrat font-medium text-Gray focus:outline-none"
                                >
                                    <option value="" disabled>Search by Product</option>

                                    <option value="Fertilizer">Fertilizer</option>
                                    <option value="Pesticide">Pesticide</option>
                                    <option value="Weed">Weed</option>

                                </select>

                                <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 text-Forest_Green pointer-events-none" />
                            </div>

                            {/* Search by Status */}
                            <div className="relative w-[180px] border-b border-Ice_Blue">

                                <select
                                    value={searchStatus}

                                    onChange={(event) => setSearchStatus(event.target.value)}

                                    className="w-full appearance-none bg-transparent py-[6px] px-2 text-[12px] font-Montserrat font-medium text-Gray focus:outline-none"
                                >
                                    <option value="" disabled>Search by Status</option>

                                    <option value="Shipped">Shipped</option>
                                    <option value="Pending">Pending</option>
                                    <option value="Delivered">Delivered</option>



                                </select>

                                <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 text-Forest_Green pointer-events-none" />
                            </div>

                            {/* Search by ID */}
                            <div className="relative w-[180px] border-b border-Ice_Blue">

                                <select
                                    value={searchId}

                                    onChange={(event) => setSearchId(event.target.value)}

                                    className="w-full appearance-none bg-transparent py-[6px] px-2 text-[12px] font-Montserrat font-medium text-Gray focus:outline-none"
                                >
                                    <option value="" disabled>Search by ID</option>

                                    {orders.map((order) => (
                                        <option
                                            value={order.id}
                                        >
                                            {order.id}
                                        </option>
                                    ))}


                                </select>

                                <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 text-Forest_Green pointer-events-none" />
                            </div>

                        </div>

                        {/* Buttons */}
                        <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap">

                            <button
                                onClick={SearchProduct}
                                className="flex items-center gap-2 bg-Forest_Green px-4 py-2 rounded-full text-[9px] font-Montserrat font-medium text-white 
                                hover:scale-105 active:scale-95 transition-transform duration-200 ease-in-out"
                            >
                                <Search className="w-[11px] h-[13px]" />

                                <span>Search</span>

                            </button>

                            <button
                                onClick={handleReset}

                                className="p-2 rounded-full border border-[#D634342B] bg-red-100 text-red-600 
                                hover:scale-105 active:scale-95 transition-transform duration-200 ease-in-out"
                            >
                                <RotateCcw className="text-Red w-[13px] h-[10px]" />

                            </button>

                        </div>

                    </div>

                    {/* Table */}
                    <div className="pt-5 pb-4 px-3">

                        <div className="flex justify-center">

                            <div className="rounded-2xl overflow-x-auto border border-gray shadow-sm w-[1003px] h-auto">

                                <table className="w-full">

                                    <thead className="bg-Forest_Green text-white text-left">

                                        {/* //table header */}

                                        <tr>
                                            <th className="px-6 py-4 text-[12px] font-Montserrat font-semibold">Order ID</th>
                                            <th className="px-6 py-4 text-[10px] font-Montserrat font-semibold">Order Date</th>
                                            <th className="px-6 py-4 text-[10px] font-Montserrat font-semibold">Total Products</th>
                                            <th className="px-6 py-4 text-[10px] font-Montserrat font-semibold">Total Price</th>
                                            <th className="px-6 py-4 text-[10px] font-Montserrat font-semibold">Status</th>
                                            <th className="px-6 py-4 text-[10px] font-Montserrat font-semibold">Actions</th>
                                        </tr>

                                    </thead>

                                    <tbody className="bg-Light_Blue divide-y divide-gray text-left">

                                        {filteredProducts.map((order) => (

                                            // order history display
                                            <tr>
                                                <td className="px-6 py-5 text-[10px] font-Montserrat text-Black">{order.id}</td>
                                                <td className="px-6 py-5 text-[10px] font-Montserrat text-Black">{order.date}</td>
                                                <td className="px-6 py-5 text-[10px] font-Montserrat font-semibold text-Black">{order.products}</td>
                                                <td className="px-6 py-5 text-[10px] font-Montserrat font-semibold text-Black">{order.price}</td>

                                                <td className="px-6 py-5">

                                                    <span className={`inline-flex px-3 py-1 rounded-full text-[8px] font-Poppins font-medium ${order.statusColor}`}>
                                                        {order.status}
                                                    </span>
                                                </td>

                                                <td className="px-6 py-5">

                                                    <button

                                                        onClick={() => navigate('/MarketPlace/OrderHistory/Inventory')}

                                                        className="p-1 rounded-full border border-Gray2 text-Gray hover:text-gray-600 transition-colors"
                                                    >
                                                        <FileSearch className="w-[12px] h-[12px]" />
                                                    </button>
                                                </td>

                                            </tr>
                                        ))}


                                        {filteredProducts.length === 0 && (

                                            < tr >
                                                <td colSpan={6} className="text-center py-5 text-[16px] text-Forest_Green font-Montserrat font-bold">
                                                    No matching orders found.
                                                </td>
                                            </tr>
                                        )}


                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    );
};

export default History;
