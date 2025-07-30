// import React, { useState } from 'react';
// import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
// import StatusDialog from './StatusDialog';
// import { Info, ChevronDown } from 'lucide-react';
// import '../../Styles/contact-info.css';


// const ContactInformation: React.FC = () => {

//     const navigate = useNavigate();

//     const location = useLocation();

//     const [searchParams] = useSearchParams();

//     const total = searchParams.get('total') || '0';

//     const cartItems = (location.state as any)?.cartItems || [];

//     const [formData, setFormData] = useState({

//         name: '',
//         email: '',
//         phone: '',
//         alternateNumber: '',
//         country: 'Pakistan',
//         state: '',
//         district: '',
//         city: '',
//         address: '',
//         postalCode: '',
//         coupon: '',
//         shippingPrice: '1000',

//     });

//     const [dialogData, setDialogData] = useState({

//         isOpen: false,
//         type: 'success' as 'success' | 'error',

//     });

//     const handleCancel = () => {

//         navigate(-1);
//     };
//     const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//         const { name, value } = e.target;
//         setFormData(prev => ({ ...prev, [name]: value }));
//     };

//     const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

//         e.preventDefault();

//         setDialogData({
//             isOpen: true,
//             type: 'success',
//         });

//         const form = e.currentTarget;

//         if (!form.checkValidity()) {
//             form.reportValidity();
//             return;
//         }

//         const { name, email, phone, state, district, city, address, postalCode } = formData;

//         if (!name || !email || !phone || !state || !district || !city || !address || !postalCode) {

//             setDialogData({
//                 isOpen: true,
//                 type: 'error',
//             });
//             return;
//         }

//     };

//     return (
//         <div className="h-screen pt-6 overflow-y-auto">

//             <h1 className="text-center text-[24px] text-Black font-Montserrat font-bold mb-6">
//                 Market Place
//             </h1>

//             <div className="flex justify-center">

//                 <div className="w-full max-w-[1040px] bg-white rounded-2xl border border-gray mx-5 mb-5 pb-10">



//                     <form onSubmit={handleSubmit} className=" mx-6">

//                         {/* Information details */}
//                         <div>

//                             <h2 className="input-h2 mt-9">Contact Details</h2>

//                             <div className="flex justify-between grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-5">

//                                 {/* Name */}
//                                 <div className='flex-1 flex flex-col space-y-2'>

//                                     <label className="input-labelInformationDetails">Alternate Number</label>


//                                     <p className="input-p">Basit Ali</p>

//                                     {/* 
//                                     <input
//                                         name="name"
//                                         value={formData.name}
//                                         onChange={handleChange}
//                                         placeholder="Enter name"
//                                         className={`w-full rounded px-1 py-1 text-[12px] font-semibold text-Black font-Montserrat 

//                                         placeholder:text-[10px] placeholder:text-Input_Text placeholder:font-normal 
//                                             ${formData.name
//                                                 ? 'bg-white  border-transparent px-0'
//                                                 : 'bg-Input_Bg border border-Input_Border'} 
//                                              focus:outline-none focus:ring-0`}
//                                     /> */}

//                                 </div>

//                                 {/* Email */}
//                                 <div className='flex-1 flex flex-col space-y-2'>

//                                     <label className="input-labelInformationDetails">Alternate Number</label>

//                                     <p className="input-p ">basitali@gmail.com</p>
//                                     {/* <input
//                                         name="email"
//                                         type="email"
//                                         value={formData.email}
//                                         onChange={handleChange}
//                                         placeholder="example@example.com"
//                                         className={`w-full rounded px-1 py-1 text-[14px] font-semibold text-Black font-Montserrat 

//                                             placeholder:text-[10px] placeholder:text-Input_Text placeholder:font-normal 
//                                             ${formData.email
//                                                 ? 'bg-white  border-transparent px-0'
//                                                 : 'bg-Input_Bg border border-Input_Border'} 
//                                             focus:outline-none focus:ring-0`}
//                                     /> */}

//                                 </div>

//                                 {/* Phone Number */}
//                                 <div className='flex-1 flex flex-col space-y-2'>

//                                     <label className="input-labelInformationDetails">Alternate Number</label>

//                                     <p className="input-p ">03045672973</p>
//                                     {/* <input
//                                         name="phone"
//                                         type="tel"
//                                         inputMode="numeric"
//                                         pattern="[0-9]{10,15}"
//                                         value={formData.phone}
//                                         onChange={handleChange}
//                                         placeholder="03xxxxxxxxx"
//                                         className={`w-full rounded px-1 py-1 text-[14px] font-semibold text-Black font-Montserrat 

//                                             placeholder:text-[10px] placeholder:text-Input_Text placeholder:font-normal 
//                                             ${formData.phone
//                                                 ? 'bg-white  border-transparent px-0'
//                                                 : 'bg-Input_Bg border border-Input_Border'} 
//                                             focus:outline-none focus:ring-0`}
//                                     /> */}

//                                 </div>


//                                 {/* Alternate Number */}
//                                 <div className='space-y-2'>

//                                     <label className="input-labelInformationDetails">Alternate Number</label>

//                                     <input
//                                         name="alternateNumber"
//                                         type="tel"
//                                         inputMode="numeric"
//                                         pattern="[0-9]{10,15}"
//                                         value={formData.alternateNumber}
//                                         onChange={handleChange}
//                                         placeholder="Optional"
//                                         className={
//                                             `input-base input-text input-placeholder 
//                                             ${formData.address
//                                                 ? 'input-filled'
//                                                 : 'input-empty'
//                                             }`}
//                                     />
//                                 </div>

//                             </div>
//                         </div>


//                         {/* Product Details */}
//                         <div>
//                             <h2 className="input-h2 mb-2">Product ({cartItems.length})</h2>

//                             <div className="overflow-x-auto">
//                                 {/* Table Headers */}
//                                 <div className="hidden sm:grid grid-cols-4 gap-8 text-[14px] text-[#5C5C5C] font-Montserrat font-normal mb-2">
//                                     <span className="text-left">Name</span>
//                                     <span className="text-left">Category</span>
//                                     <span className="text-left">Quantity</span>
//                                     <span className="text-left">Price</span>
//                                 </div>


//                                 {/* Table Rows */}
//                                 {cartItems.map((item: any) => (
//                                     <div
//                                         key={item.id}
//                                         className="grid grid-cols-1 sm:grid-cols-4 gap-1 sm:gap-8 text-[14px] text-Black font-Montserrat font-semibold py-4 
//                                         border-b sm:border-b-0 border-gray-200"
//                                     >

//                                         {/* desktop display*/}
//                                         <span className="hidden sm:block">{item.title}</span>
//                                         <span className="hidden sm:block">{item.category}</span>
//                                         <span className="hidden sm:block">{item.quantity} bag</span>
//                                         <span className="hidden sm:block">PKR {item.price}</span>

//                                         {/* Mobile display */}
//                                         <div className="sm:hidden">
//                                             <span className="text-[12px] text-[#5C5C5C]">Name:</span> {item.title}
//                                         </div>
//                                         <div className="sm:hidden">
//                                             <span className="text-[12px] text-[#5C5C5C]">Category:</span> {item.category}
//                                         </div>
//                                         <div className="sm:hidden">
//                                             <span className="text-[12px] text-[#5C5C5C]">Quantity:</span> {item.quantity} bag
//                                         </div>
//                                         <div className="sm:hidden">
//                                             <span className="text-[12px] text-[#5C5C5C]">Price:</span> PKR {item.price}
//                                         </div>

//                                     </div>
//                                 ))}


//                             </div>
//                         </div>

//                         {/* Coupon div */}
//                         <div>
//                             <h2 className="input-h2 mb-2 mt-2 pb-2">Coupon</h2>


//                             <div className="flex w-full sm:w-[310px] mb-4 overflow-hidden rounded border border-Input_Border">

//                                 <input
//                                     name="coupon"
//                                     value={formData.coupon}
//                                     onChange={handleChange}
//                                     placeholder="Coupon code"
//                                     className="flex-1 px-2 py-1 text-[10px] font-normal font-Montserrat text-black 
//                                     placeholder:text-[10px] bg-Input_Bg placeholder:text-Black placeholder:font:normal focus:outline-none"
//                                 />
//                                 <button
//                                     type="button"
//                                     className="px-4 py-2 text-[10px] font-normal font-Montserrat text-black bg-white 
//                                     hover:bg-gray-100 transition-all"
//                                 >
//                                     Apply
//                                 </button>
//                             </div>

//                         </div>


//                         {/*Total Price and shipping*/}
//                         <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center items-start gap-3 mb-5">

//                             <div className="flex items-center gap-2">

//                                 <span className="text-[14px] text-GrayText font-Montserrat font-normal">
//                                     Shipping Price :
//                                 </span>
//                                 <span className="text-[14px] font-semibold text-Black font-Montserrat">
//                                     1000
//                                 </span>

//                                 <Info
//                                     size={16}
//                                     className="text-[#7B7B7B] cursor-pointer"
//                                 />
//                             </div>

//                             <div className="flex items-center gap-2 text-[14px] text-GrayText font-Montserrat font-normal">
//                                 Total Price :
//                                 <span className="text-[16px] font-semibold text-Black font-Montserrat">PKR {total}</span>
//                             </div>
//                         </div>

//                         {/* Separator */}
//                         <div className="h-[1px] w-full bg-[#D9D9D9] mb-2 "></div>

//                         {/* Shipping Details */}
//                         <div>
//                             <h2 className="input-h2 mb-2">Shipping Details</h2>


//                             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-9">

//                                 {/* Country */}
//                                 <div className="flex flex-col">

//                                     <label className="input-labelShippingDetails mb-1">Country</label>
//                                     <input
//                                         name="country"
//                                         value={formData.country}
//                                         onChange={handleChange}
//                                         disabled
//                                         className={`w-full rounded border: 1px solid Input_Border px-1 py-1 text-[10px] font-semibold text-Forest_Green font-Montserrat 

//                                             placeholder:text-[10px] placeholder:text-Input_Text placeholder:font-normal 

//                                             ${formData.country
//                                                 ? 'bg-Input_Bg border border-Input_Border px-0'
//                                                 : 'bg-Input_Bg border border-Input_Border'}  `}
//                                     />
//                                 </div>

//                                 {/* Province */}
//                                 <div className="flex flex-col relative">
//                                     <label className="input-labelShippingDetails mb-1">
//                                         Province
//                                     </label>

//                                     <div className="relative">
//                                         <select
//                                             name="state"
//                                             value={formData.state}
//                                             onChange={handleChange}
//                                             className="appearance-none w-full rounded border border-Input_Border px-1 py-1 text-[10px] font-normal text-Input_Text font-Montserrat bg-Input_Bg focus:outline-none focus:ring-0"
//                                         >
//                                             <option value="">Select province</option>
//                                             <option value="Punjab">Punjab</option>
//                                             <option value="Sindh">Sindh</option>
//                                             <option value="Balochistan">Balochistan</option>
//                                             <option value="Khyber Pakhtunkhwa">Khyber Pakhtunkhwa</option>
//                                         </select>

//                                         {/* dropdown icon */}
//                                         <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
//                                             <ChevronDown size={16} className="text-Forest_Green" />
//                                         </div>
//                                     </div>
//                                 </div>


//                                 {/* District */}
//                                 <div className="flex flex-col relative">
//                                     <label className="input-labelShippingDetails mb-1">District</label>
//                                     <div className="relative">

//                                         <select
//                                             name="district"
//                                             value={formData.district}
//                                             onChange={handleChange}
//                                             className="appearance-none w-full rounded border border-Input_Border px-1 py-1 text-[10px] font-normal text-Input_Text font-Montserrat bg-Input_Bg focus:outline-none focus:ring-0"
//                                         >
//                                             <option value="">Select district</option>
//                                             <option value="Lahore">Lahore</option>
//                                             <option value="Karachi">Karachi</option>
//                                             <option value="Quetta">Quetta</option>
//                                             <option value="Peshawar">Peshawar</option>
//                                         </select>

//                                         {/* dropdown icon */}
//                                         <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
//                                             <ChevronDown size={16} className="text-Forest_Green" />
//                                         </div>

//                                     </div>
//                                 </div>


//                                 {/* City */}
//                                 <div className="flex flex-col relative">
//                                     <label className="input-labelShippingDetails mb-1">City</label>
//                                     <div className="relative">
//                                         <select
//                                             name="city"
//                                             value={formData.city}
//                                             onChange={handleChange}
//                                             className="appearance-none w-full rounded border border-Input_Border px-1 py-1 text-[10px] font-normal text-Input_Text font-Montserrat bg-Input_Bg focus:outline-none focus:ring-0"
//                                         >
//                                             <option value="">Select city</option>
//                                             <option value="Lahore">Lahore</option>
//                                             <option value="Karachi">Karachi</option>
//                                             <option value="Quetta">Quetta</option>
//                                             <option value="Peshawar">Peshawar</option>
//                                             <option value="Multan">Multan</option>
//                                             <option value="Peshawar">Peshawar</option>
//                                         </select>

//                                         {/* dropdown icon */}
//                                         <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
//                                             <ChevronDown size={16} className="text-Forest_Green" />
//                                         </div>

//                                     </div>
//                                 </div>

//                                 {/* Address */}
//                                 <div className="flex flex-col">

//                                     <label className="input-labelShippingDetails mb-1">Street Address</label>
//                                     <input
//                                         name="address"
//                                         value={formData.address}
//                                         onChange={handleChange}
//                                         placeholder="street address"
//                                         className={
//                                             `input-base input-text input-placeholder 
//                                             ${formData.address
//                                                 ? 'input-filled'
//                                                 : 'input-empty'
//                                             }`}
//                                     />

//                                 </div>

//                                 {/* Postal Code */}
//                                 <div className="flex flex-col">

//                                     <label className="input-labelShippingDetails mb-1">Postal Code</label>
//                                     <input
//                                         name="postalCode"
//                                         value={formData.postalCode}
//                                         placeholder="Postal code"
//                                         onChange={handleChange}
//                                         className={
//                                             `input-base input-text input-placeholder 
//                                             ${formData.address
//                                                 ? 'input-filled'
//                                                 : 'input-empty'
//                                             }`}
//                                     />
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Buttons */}
//                         <div className="flex flex-col sm:flex-row gap-5 justify-start mt-5">
//                             <div className="w-full sm:w-[160px]">
//                                 <button
//                                     type="submit"
//                                     className="btn-ConfirmOrder py-2 px-6 rounded-full"
//                                 >
//                                     Confirm Order
//                                 </button>
//                             </div>

//                             <div className="w-full sm:w-[160px]">
//                                 <button
//                                     type="button"
//                                     onClick={handleCancel}
//                                     className="btn-Cancel py-2 px-6 rounded-full"
//                                 >
//                                     Cancel
//                                 </button>
//                             </div>
//                         </div>


//                         <StatusDialog
//                             isOpen={dialogData.isOpen}
//                             type={dialogData.type}
//                             onClose={() => setDialogData({ ...dialogData, isOpen: false })}
//                         />
//                     </form>
//                 </div >
//             </div >
//         </div >
//     );

// };

// export default ContactInformation;


import React, { useState } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import StatusDialog from './StatusDialog';
import { Info, ChevronDown } from 'lucide-react';


const ContactInformation: React.FC = () => {

    const navigate = useNavigate();

    const location = useLocation();

    const [searchParams] = useSearchParams();

    const total = searchParams.get('total') || '0';

    const cartItems = (location.state as any)?.cartItems || [];

    const [formData, setFormData] = useState({

        name: '',
        email: '',
        phone: '',
        alternateNumber: '',
        country: 'Pakistan',
        state: '',
        district: '',
        city: '',
        address: '',
        postalCode: '',
        coupon: '',
        shippingPrice: '1000',

    });

    const [dialogData, setDialogData] = useState({

        isOpen: false,
        type: 'success' as 'success' | 'error',

    });

    const handleCancel = () => {

        navigate(-1);
    };
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        setDialogData({
            isOpen: true,
            type: 'success',
        });

        const form = e.currentTarget;

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        const { state, district, city, address, postalCode } = formData;

        if (!state || !district || !city || !address || !postalCode) {

            setDialogData({
                isOpen: true,
                type: 'error',
            });
            return;
        }

    };

    return (
        <div className="h-screen overflow-y-auto pb-8">

            {/* <h1 className="text-center text-[24px] text-Black font-Montserrat font-bold py-6">
                MarketPlace
            </h1> */}

            <div className="flex justify-center">


                <form onSubmit={handleSubmit} className="w-[1042px] bg-white rounded-2xl border border-gray shadow  px-6">

                    {/* Information details */}

                    <div className=''>

                        <h2 className="text-[18px] font-Montserrat font-bold text-Golden pt-7 pb-4">
                            Contact Details
                        </h2>

                        {/* Personal Info */}
                        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pb-3">

                            {/* Name */}
                            <div className='flex flex-col space-y-2'>
                                <label className="text-[12px] text-[#5C5C5C] font-Montserrat font-normal ">Name</label>
                                <p className="text-[16px] font-semibold text-Black font-Montserrat text-Black ">Basit Ali</p>
                                {/* 
                                    <input
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Enter name"
                                        className={`w-full rounded px-1 py-1 text-[12px] font-semibold text-Black font-Montserrat 

                                        placeholder:text-[10px] placeholder:text-Input_Text placeholder:font-normal 
                                            ${formData.name
                                                ? 'bg-white  border-transparent px-0'
                                                : 'bg-Input_Bg border border-Input_Border'} 
                                             focus:outline-none focus:ring-0`}
                                    /> */}

                            </div>

                            {/* Email */}
                            <div className='flex flex-col space-y-2'>
                                <label className="text-[12px] text-Gray font-Montserrat font-normal">Email</label>
                                <p className="text-[16px] font-semibold text-Black font-Montserrat text-Black ">basitali@gmail.com</p>
                                {/* <input
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="example@example.com"
                                        className={`w-full rounded px-1 py-1 text-[14px] font-semibold text-Black font-Montserrat 

                                            placeholder:text-[10px] placeholder:text-Input_Text placeholder:font-normal 
                                            ${formData.email
                                                ? 'bg-white  border-transparent px-0'
                                                : 'bg-Input_Bg border border-Input_Border'} 
                                            focus:outline-none focus:ring-0`}
                                    /> */}

                            </div>

                            {/* Phone Number */}
                            <div className=' flex flex-col space-y-2'>
                                <label className="text-[12px] text-Gray font-Montserrat font-normal">Phone Number</label>
                                <p className="text-[16px] font-semibold text-Black font-Montserrat text-Black ">03045672973</p>
                                {/* <input
                                        name="phone"
                                        type="tel"
                                        inputMode="numeric"
                                        pattern="[0-9]{10,15}"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="03xxxxxxxxx"
                                        className={`w-full rounded px-1 py-1 text-[14px] font-semibold text-Black font-Montserrat 

                                            placeholder:text-[10px] placeholder:text-Input_Text placeholder:font-normal 
                                            ${formData.phone
                                                ? 'bg-white  border-transparent px-0'
                                                : 'bg-Input_Bg border border-Input_Border'} 
                                            focus:outline-none focus:ring-0`}
                                    /> */}

                            </div>


                            {/* Alternate Number */}
                            <div className='flex flex-col space-y-2'>
                                <label className="text-[12px] text-Gray font-Montserrat font-normal">Alternate Number</label>
                                <input
                                    name="alternateNumber"
                                    type="tel"
                                    inputMode="numeric"
                                    pattern="[0-9]{10,15}"
                                    value={formData.alternateNumber}
                                    onChange={handleChange}
                                    placeholder="Optional"
                                    className={`w-full rounded px-1 py-1 text-[14px] font-semibold text-Black font-Montserrat 

                                            placeholder:text-[10px] placeholder:text-Input_Text placeholder:font-normal 
                                            ${formData.alternateNumber
                                            ? 'bg-white  border-transparent px-0'
                                            : 'bg-Input_Bg border border-Input_Border'} 
                                            focus:outline-none focus:ring-0`}
                                />
                            </div>

                        </div>
                    </div>


                    {/* Product Details */}
                    <div>
                        <h2 className="text-[18px] font-bold font-Montserrat text-Golden mb-2">Product ({cartItems.length})</h2>

                        <div className="overflow-x-auto">

                            {/* Table Headers */}
                            <div className="hidden sm:grid grid-cols-4 gap-8 text-[14px] text-[#5C5C5C] font-Montserrat font-normal mb-2">
                                <span className="text-left">Name</span>
                                <span className="text-left">Category</span>
                                <span className="text-left">Quantity</span>
                                <span className="text-left">Price</span>
                            </div>

                            {/* Table Rows */}
                            {cartItems.map((item: any) => (
                                <div
                                    key={item.id}
                                    className="grid grid-cols-1 sm:grid-cols-4 gap-1 sm:gap-8 text-[14px] text-Black font-Montserrat font-semibold py-4 
                                        border-b sm:border-b-0 border-gray-200"
                                >

                                    {/* desktop display*/}
                                    <span className="hidden sm:block">{item.title}</span>
                                    <span className="hidden sm:block">{item.category}</span>
                                    <span className="hidden sm:block">{item.quantity} bag</span>
                                    <span className="hidden sm:block">PKR {item.price}</span>

                                    {/* Mobile display */}                           
                                    <div className="sm:hidden">
                                        <span className="text-[12px] text-[#5C5C5C]">Name:</span> {item.title}
                                    </div>
                                    <div className="sm:hidden">
                                        <span className="text-[12px] text-[#5C5C5C]">Category:</span> {item.category}
                                    </div>
                                    <div className="sm:hidden">
                                        <span className="text-[12px] text-[#5C5C5C]">Quantity:</span> {item.quantity} bag
                                    </div>
                                    <div className="sm:hidden">
                                        <span className="text-[12px] text-[#5C5C5C]">Price:</span> PKR {item.price}
                                    </div>

                                </div>
                            ))}

                        </div>
                    </div>

                    {/* Coupon div */}
                    <div>

                        <h2 className="text-[18px] font-bold font-Montserrat text-Golden mb-2 mt-2 pb-2">Coupon</h2>

                        <div className="flex w-full sm:w-[310px] mb-4 overflow-hidden rounded border border-Input_Border">

                            <input
                                name="coupon"
                                value={formData.coupon}
                                onChange={handleChange}
                                placeholder="Coupon code"
                                className="flex-1 px-2 py-1 text-[10px] font-normal font-Montserrat text-black 
                                    placeholder:text-[10px] bg-Input_Bg placeholder:text-Black placeholder:font:normal focus:outline-none"
                            />
                            <button
                                type="button"
                                className="px-4 py-2 text-[10px] font-normal font-Montserrat text-black bg-white 
                                    hover:bg-gray-100 transition-all"
                            >
                                Apply
                            </button>
                        </div>

                    </div>


                    {/*Total Price and shipping*/}
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center items-start gap-3 mb-5">

                        <div className="flex items-center gap-2">

                            <span className="text-[14px] text-GrayText font-Montserrat font-normal">
                                Shipping Price :
                            </span>
                            <span className="text-[14px] font-semibold text-Black font-Montserrat">
                                1000
                            </span>

                            <Info
                                size={16}
                                className="text-[#7B7B7B] cursor-pointer"
                            />
                        </div>

                        <div className="flex items-center gap-2 text-[14px] text-GrayText font-Montserrat font-normal">
                            Total Price :
                            <span className="text-[16px] font-semibold text-Black font-Montserrat">PKR {total}</span>
                        </div>

                    </div>

                    {/* Separator */}
                    <div className="h-[1px] w-full bg-[#D9D9D9] mb-2 "></div>

                    {/* Shipping Details */}
                    <div>
                        <h2 className="text-[18px] font-Montserrat font-bold text-Golden mb-2">Shipping Details</h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">

                            {/* Country */}
                            <div className="flex flex-col">

                                <label className="text-[10px] text-Black font-Montserrat font-semibold mb-2">Country</label>
                                <input
                                    name="country"
                                    value={formData.country}
                                    onChange={handleChange}
                                    disabled
                                    className={`w-full rounded border: 1px solid Input_Border px-1 py-1 text-[10px] font-semibold text-Forest_Green font-Montserrat 

                                            placeholder:text-[10px] placeholder:text-Input_Text placeholder:font-normal 

                                            ${formData.country
                                            ? 'bg-Input_Bg border border-Input_Border '
                                            : 'bg-Input_Bg border border-Input_Border'}  `}
                                />
                            </div>

                            {/* Province */}
                            <div className="flex flex-col relative">
                                <label className="text-[10px] text-Black font-Montserrat font-semibold mb-1">
                                    Province
                                </label>

                                <div className="relative">
                                    <select
                                        name="state"
                                        value={formData.state}
                                        onChange={handleChange}
                                        className="appearance-none w-full rounded border border-Input_Border px-1 py-1 text-[10px] font-normal text-Input_Text font-Montserrat bg-Input_Bg focus:outline-none focus:ring-0"
                                    >
                                        <option value="">Select province</option>
                                        <option value="Punjab">Punjab</option>
                                        <option value="Sindh">Sindh</option>
                                        <option value="Balochistan">Balochistan</option>
                                        <option value="Khyber Pakhtunkhwa">Khyber Pakhtunkhwa</option>
                                    </select>

                                    {/* dropdown icon */}
                                    <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
                                        <ChevronDown size={16} className="text-Forest_Green" />
                                    </div>
                                </div>
                            </div>


                            {/* District */}
                            <div className="flex flex-col relative">
                                <label className="text-[10px] text-Black font-Montserrat font-semibold mb-1">District</label>
                                <div className="relative">

                                    <select
                                        name="district"
                                        value={formData.district}
                                        onChange={handleChange}
                                        className="appearance-none w-full rounded border border-Input_Border px-1 py-1 text-[10px] font-normal text-Input_Text font-Montserrat bg-Input_Bg focus:outline-none focus:ring-0"
                                    >
                                        <option value="">Select district</option>
                                        <option value="Lahore">Lahore</option>
                                        <option value="Karachi">Karachi</option>
                                        <option value="Quetta">Quetta</option>
                                        <option value="Peshawar">Peshawar</option>
                                    </select>

                                    {/* dropdown icon */}
                                    <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
                                        <ChevronDown size={16} className="text-Forest_Green" />
                                    </div>

                                </div>
                            </div>


                            {/* City */}
                            <div className="flex flex-col relative">
                                <label className="text-[10px] text-Black font-Montserrat font-semibold mb-1">City</label>
                                <div className="relative">
                                    <select
                                        name="city"
                                        value={formData.city}
                                        onChange={handleChange}
                                        className="appearance-none w-full rounded border border-Input_Border px-1 py-1 text-[10px] font-normal text-Input_Text font-Montserrat bg-Input_Bg focus:outline-none focus:ring-0"
                                    >
                                        <option value="">Select city</option>
                                        <option value="Lahore">Lahore</option>
                                        <option value="Karachi">Karachi</option>
                                        <option value="Quetta">Quetta</option>
                                        <option value="Peshawar">Peshawar</option>
                                        <option value="Multan">Multan</option>
                                        <option value="Peshawar">Peshawar</option>
                                    </select>

                                    {/* dropdown icon */}
                                    <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
                                        <ChevronDown size={16} className="text-Forest_Green" />
                                    </div>

                                </div>
                            </div>

                            {/* Address */}
                            <div className="flex flex-col">

                                <label className="text-[10px] text-Black font-Montserrat font-semibold mb-1">Street Address</label>
                                <input
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    placeholder="street address"
                                    className={`w-full rounded px-1 py-1 text-[12px] font-semibold text-Black font-Montserrat 

                                        placeholder:text-[10px] placeholder:text-Input_Text placeholder:font-normal 
                                            ${formData.address
                                            ? 'bg-white  border-transparent px-0'
                                            : 'bg-Input_Bg border border-Input_Border'} 
                                             focus:outline-none focus:ring-0`}
                                />

                            </div>

                            {/* Postal Code */}
                            <div className="flex flex-col">

                                <label className="text-[10px] text-Black font-Montserrat font-semibold mb-1">Postal Code</label>
                                <input
                                    name="postalCode"
                                    value={formData.postalCode}
                                    placeholder="Postal code"
                                    onChange={handleChange}
                                    className={`w-full rounded px-1 py-1 text-[12px] font-semibold text-Black font-Montserrat 

                                        placeholder:text-[10px] placeholder:text-Input_Text placeholder:font-normal 
                                            ${formData.postalCode
                                            ? 'bg-white  border-transparent px-0'
                                            : 'bg-Input_Bg border border-Input_Border'} 
                                             focus:outline-none focus:ring-0`}
                                />

                            </div>
                        </div>

                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-5 justify-start pt-5 pb-5">

                        <div className="w-full sm:w-[160px]">

                            <button
                                type="submit"
                                className="w-full bg-Forest_Green hover:bg-green-700 text-white py-2 px-6 rounded-full"
                            >
                                Confirm Order
                            </button>

                        </div>

                        <div className="w-full sm:w-[160px]">

                            <button
                                type="button"
                                onClick={handleCancel}
                                className="w-full border text-Golden hover:bg-Forest_Green hover:text-white border-Forest_Green py-2 px-6 rounded-full"
                            >
                                Cancel
                            </button>

                        </div>
                    </div>

                    <StatusDialog
                        isOpen={dialogData.isOpen}
                        type={dialogData.type}
                        onClose={() => setDialogData({ ...dialogData, isOpen: false })}
                    />
                </form>

            </div >
        </div >
    );

};

export default ContactInformation;

