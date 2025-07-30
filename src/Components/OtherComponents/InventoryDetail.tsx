import { timeStamp } from 'console';
import React from 'react';

const InventoryDetail: React.FC = () => {

    const orderDetails = {
        orderId: '47895303',
        orderDate: '47895303',
        totalPrice: 'PKR 30,000',
        status: 'Shipped',
        shippingAddress: 'Sybrid Private Limited, street 14, I-9/2, Islamabad, Pakistan',

        products: [
            {
                id: 1,
                name: 'Nitrophos NP',
                category: 'Fertilizer',
                quantity: '1 bag',
                price: '15,000 PKR',
                image: '/images/Urea1.svg'
            },
            {
                id: 2,
                name: 'Urea',
                category: 'Fertilizer',
                quantity: '1 bag',
                price: '15,000 PKR',
                image: '/images/urea2.svg'
            }
        ]
    };

    return (
        <div className="mt-0 mb-0 sm:p-6 md:p-8 min-h-screen">
            
            {/* <h1 className="text-center text-[24px] text-Black font-Montserrat font-bold mb-8">Inventory</h1> */}


            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-6 mb-4 text-[14px] font-Montserrat">

                <div className="flex gap-2 ">
                    <span className="text-Gray font-normal">Order ID</span>
                    <span className="text-Black font-semibold">{orderDetails.orderId}</span>
                </div>

                <div className="flex gap-2">
                    <span className="text-Gray font-normal">Order Date</span>
                    <span className="text-Black font-semibold">
                        {new Date().toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                        })}
                    </span>
                </div>

                <div className="flex gap-2">
                    <span className="text-Gray font-normal">Total Price</span>
                    <span className="text-Black font-semibold">{orderDetails.totalPrice}</span>
                </div>

                <div className="flex gap-2">
                    <span className="text-Gray font-normal">Status</span>
                    <span className="text-Golden font-medium font-Poppins">{orderDetails.status}</span>
                </div>

                <div className="flex gap-2 col-span-1 sm:col-span-2">
                    <span className="text-Gray font-normal">Shipping Details</span>
                    <span className="text-Black font-semibold">{orderDetails.shippingAddress}</span>
                </div>

            </div>


            <div className="mb-4">
                <h2 className="text-Golden text-[18px] font-Montserrat font-bold">Product Information</h2>

                <p className="text-[14px] font-Montserrat font-normal text-Gray mt-1">
                    Total Products :
                    <span className="text-[14px] font-Montserrat font-semibold text-Gray">{orderDetails.products.length}</span>
                </p>

            </div>

            <div className="space-y-1 pb-4">

                {orderDetails.products.map(product => (

                    <div key={product.id} className="flex items-start gap-8 p-2">

                        <img src={product.image} alt={product.name} className="w-[206px] h-[180px] object-contain bg-white rounded shadow-md" />

                        <div className='mt-7'>
                            <h3 className="text-Black text-[24px] font-Montserrat font-semibold">{product.name}</h3>

                            <p className="text-Gray text-[16px] font-Poppins font-normal">

                                Category :

                                <span className="text-Golden text-[16px] font-Poppins font-normal">{product.category}</span>
                            </p>

                            <p className="text-Gray text-[16px] font-Poppins font-normal">

                                Quantity:

                                <span className="text-Black text-[16px] font-Poppins font-normal">{product.quantity}</span>
                            </p>

                            <p className="text-Gray text-[16px] font-Poppins font-normal">

                                Price :

                                <span className="text-Black text-[16px] font-Poppins font-normal">{product.price}</span>
                            </p>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default InventoryDetail;
