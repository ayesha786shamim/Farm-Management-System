import React, { useState } from 'react';
import { ChevronDown, Search, RotateCcw, FileSearch } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MarketplaceOrderHistory = () => {
    const navigate = useNavigate();

    const [searchName, setSearchName] = useState('');
    const [searchStatus, setSearchStatus] = useState('');
    const [searchId, setSearchId] = useState('');

    const handleReset = () => {
        setSearchName('');
        setSearchStatus('');
        setSearchId('');
    };

    const orders = [
        {
            id: '12345PM',
            date: '11/08/2024',
            products: 3,
            price: 'PKR 20,000',
            status: 'Shipped',
            statusColor: 'bg-[#BD8E4330] text-Golden'
        },
        {
            id: '67890PM',
            date: '11/08/2024',
            products: 2,
            price: 'PKR 3,000',
            status: 'Forwarding',
            statusColor: 'bg-[#D635351A] text-Red'
        },
        {
            id: '13579PM',
            date: '11/08/2024',
            products: 1,
            price: 'PKR 5,000',
            status: 'Delivered',
            statusColor: 'bg-[#DDEEE0] text-Forest_Green'
        }
    ];

    return (
        <div className="bg-Background_Color">

            {/* Main */}
            <div className="px-3">

                <div className="w-[full] bg-white rounded-2xl border border-gray shadow-sm">

                    <div className="px-3 pt-5 pb-2 ">

                        <h2 className="text-[18px] font-Montserrat font-bold text-Golden">Order History</h2>

                    </div>

                    {/* Filters options */}
                    <div className="px-3 pb-6 flex flex-col lg:flex-row lg:items-center justify-between gap-4">

                        <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 w-full">

                            {/* Search by Name */}
                            <div className="relative w-full sm:w-[180px] border-b border-Ice_Blue">

                                <select
                                    value={searchName}
                                    onChange={(e) => setSearchName(e.target.value)}
                                    className="w-full appearance-none py-[6px] px-2 text-[12px] font-Montserrat font-medium text-Gray focus:outline-none"
                                >
                                    <option value="">Search by Product</option>
                                    <option value="fertilizer">Fertilizer</option>
                                    <option value="pesticide">Pesticide</option>
                                    <option value="weed">Weed</option>
                                </select>

                                <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 text-Forest_Green pointer-events-none" />

                            </div>

                            {/* Search by Status */}
                            <div className="relative w-full sm:w-[180px] border-b border-Ice_Blue">

                                <select
                                    value={searchStatus}
                                    onChange={(e) => setSearchStatus(e.target.value)}
                                    className="w-full appearance-none bg-transparent py-[6px] px-2 text-[12px] font-Montserrat font-medium text-Gray focus:outline-none"
                                >
                                    <option value="">Search by status</option>
                                    <option value="shipped">Shipped</option>
                                    <option value="pending">Pending</option>
                                    <option value="forwarding">forwarding</option>
                                </select>

                                <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 text-Forest_Green pointer-events-none" />

                            </div>

                            {/* Search by Category */}
                            <div className="relative w-full sm:w-[180px] border-b border-Ice_Blue">

                                <select
                                    value={searchId}
                                    onChange={(e) => setSearchId(e.target.value)}
                                    className="w-full appearance-none bg-transparent py-[6px] px-2 text-[12px] font-Montserrat font-medium text-Gray focus:outline-none"
                                >
                                    <option value="">Search by ID</option>
                                    <option value="12345PM">12345PM</option>
                                    <option value="67890PM">67890PM</option>
                                    <option value="13579PM">13579PM</option>
                                </select>

                                <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 text-Forest_Green pointer-events-none" />

                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap">

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

                    {/* Table */}
                    <div className=" pt-5 pb-20 px-3">

                        <div className="flex justify-center">

                            <div className="rounded-2xl overflow-hidden border border-gray shadow-sm w-[1003px] h-[250px]">

                                <table className="w-full">

                                    <thead className="bg-Forest_Green text-white text-left">

                                        <tr className=''>

                                            <th className="px-6 py-4 text-[12px] font-Montserrat font-semibold">Order ID</th>
                                            <th className="px-6 py-4 text-[10px] font-Montserrat font-semibold">Order Date</th>
                                            <th className="px-6 py-4 text-[10px] font-Montserrat font-semibold">Total Products</th>
                                            <th className="px-6 py-4 text-[10px] font-Montserrat font-semibold">Total Price</th>
                                            <th className="px-6 py-4 text-[10px] font-Montserrat font-semibold">Status</th>
                                            <th className="px-6 py-4 text-[10px] font-Montserrat font-semibold">Actions</th>

                                        </tr>

                                    </thead>

                                    <tbody className="bg-Light_Blue divide-y divide-gray text-left">

                                        {orders.map((order) => (

                                            <tr
                                                key={order.id}>

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

                                    </tbody>

                                </table>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default MarketplaceOrderHistory;
