// import React from 'react';
// import { Bell, Search, Settings, Package } from 'lucide-react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import Notifications from '../OtherComponents/Notifications';
// import '../../Styles/Product-style.css';

// const TopPanel: React.FC = () => {

//     console.log('Top Panel Displayed');

//     const location = useLocation();

//     const navigate = useNavigate();

//     const handleOrderHistoryClick = () => {

//         navigate('/MarketPlace/OrderHistory');
//     };

//     const [showNotifications, setShowNotifications] = React.useState(false);

//     const role = localStorage.getItem("selectedRole");

//     return (
//         <div className="bg-transparent px-6 pt-6 pb-3">

//             <div className="w-full flex justify-between items-center">


//                 {/*notification and User Profile  section */}
//                 <div className="flex justify-between items-center ">

//                     {/* Notification Icon and User Details */}
//                     <div className="flex items-left">

//                         {/* notification Bell*/}
//                         <div className="relative">
//                             <button
//                                 onClick={() => setShowNotifications(!showNotifications)}

//                                 className="p-2 rounded-full bg-white border-2 border-Ice_Blue 
//                                 hover:bg-Forest_Green text-Forest_Green hover:text-white 
//                                 transition-colors relative"
//                             >
//                                 <Bell className="w-[15px] h-[15px] text-current" />
//                                 <div className="absolute top-0 right-0 translate-x-1/8 -translate-y-1/8 w-2 h-2 bg-Forest_Green rounded-full"></div>
//                             </button>

//                             {/* Notification Panel */}
//                             {showNotifications && (

//                                 <div className="absolute left-0 top-full mt-2 z-50">
//                                     <Notifications />
//                                 </div>

//                             )}
//                         </div>

//                     </div>

//                     {/* Vertical Separator */}
//                     <div className="h-[30px] border-l-2 border-[#D9D9D9] mx-5"></div>

//                     {/* user Detail */}
//                     <div className="flex items-center space-x-3">
//                         <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-Golden">
//                             <img
//                                 src="/images/avatar.png"
//                                 alt=""
//                                 className="w-[40px] h-[40px] object-cover"
//                             />
//                         </div>
//                         <div>
//                             <h3 className="input-font input-font-semibold text-Black text-[14px]">Albert John </h3>
//                             <p className="input-font input-font-normal text-Gray text-[11px]">User_Email@gmail.com</p>
//                         </div>
//                     </div>
//                 </div>



//                 {/* page Title section
//                 <div className="text-center flex-1">
//                     {
//                         role === 'admin' ? (
//                             <h1 className="text-[24px] input-fontBold input-font text-Black">My Products</h1>
//                         ) : (
//                             <h1 className="text-[24px] input-fontBold input-font text-Black">MarketPlace</h1>
//                         )
//                     }
//                 </div> */}



//                 {/* page Title section*/}
//                 {location.pathname === '/MarketPlace/OrderHistory/Inventory' ? (
//                     <div className="text-center flex-1">
//                         <h1 className="text-[24px] input-fontBold input-font text-Black">Inventory</h1>
//                     </div>
//                 ) : (
//                     <div className="text-center flex-1">
//                         {
//                             role === 'admin' ? (
//                                 <h1 className="text-[24px] input-fontBold input-font text-Black">My Products</h1>
//                             ) : (
//                                 <h1 className="text-[24px] input-fontBold input-font text-Black">MarketPlace</h1>
//                             )
//                         }
//                     </div>
//                 )}



//                 {/*Order History and search and settings section */}
//                 <div className="flex items-center space-x-2 ">



//                     {/* Order History Button
//                     {location.pathname !== '/MarketPlace/OrderHistory' && location.pathname !== '/MarketPlace/ProductDetail' ? (

//                         <div className='flex justify-center items-center'>

//                             <button
//                                 onClick={handleOrderHistoryClick}
//                                 className=" w-[131px] bg-Forest_Green hover:bg-Dark_Green text-white text-[14px] 
//                                     input-fontPoppins input-font-semibold 
//                                     px-4 py-2 rounded-3xl flex "
//                             >
//                                 <span>Order History</span>
//                             </button>

//                         </div>
//                     ): (<div className="w-[131px] h-[40px]"></div>)} */}



//                     {/*Order History Button */}
//                     {location.pathname === '/MarketPlace' ? (

//                         <div className='flex justify-center items-center'>

//                             <button
//                                 onClick={handleOrderHistoryClick}
//                                 className=" w-[131px] bg-Forest_Green hover:bg-Dark_Green text-white text-[14px] 
//                                     input-fontPoppins input-font-semibold 
//                                     px-4 py-2 rounded-3xl flex "
//                             >
//                                 <span>Order History</span>
//                             </button>

//                         </div>
//                     ) : (<div className="w-[131px] h-[40px]"></div>)}





//                     {/* Search + Settings */}
//                     <button className="p-2 rounded-full bg-white border-2 border-Ice_Blue 
//                             hover:bg-Forest_Green text-Forest_Green hover:text-white  
//                             transition-colors">
//                         <Search className="w-[15px] h-[15px] text-current" />
//                     </button>

//                     <button className="p-2 rounded-full bg-white border-2 border-Ice_Blue 
//                             hover:bg-Forest_Green text-Forest_Green hover:text-white 
//                             transition-colors">
//                         <Settings className="w-[15px] h-[15px] text-current" />
//                     </button>

//                 </div>
//             </div>

//         </div >
//     );
// };

// export default TopPanel;



import React from 'react';
import { Bell, Search, Settings, Package } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import Notifications from '../OtherComponents/Notifications';
import '../../Styles/Product-style.css';

interface TopPanelProps {
    title: string;
    showNotification: boolean;
    showUserInfo: boolean;
    showOrderHistory: boolean;
    showSearch: boolean;
    showSettings: boolean;
    showVerticalBar: boolean;
}

const TopPanel: React.FC<TopPanelProps> = ({ title, showNotification, showUserInfo, showOrderHistory, showSearch, showSettings, showVerticalBar, }) => {


    console.log('Top Panel Displayed');

    const location = useLocation();

    const navigate = useNavigate();

    const handleOrderHistoryClick = () => {

        navigate('/MarketPlace/OrderHistory');
    };

    const [showNotifications, setShowNotifications] = React.useState(false);

    const role = localStorage.getItem("selectedRole");

    return (
        <div className="bg-transparent px-6 pt-6 pb-3">

            <div className="w-full flex justify-between items-center">


                {/*notification and User Profile  section */}
                <div className="flex justify-between items-center ">

                    {/* Notification Icon and User Details */}
                    <div className="flex items-left">

                        {/* notification Bell*/}
                        {showNotification && (
                            <div className="relative">
                                <button
                                    onClick={() => setShowNotifications(!showNotifications)}

                                    className="p-2 rounded-full bg-white border-2 border-Ice_Blue 
                                hover:bg-Forest_Green text-Forest_Green hover:text-white 
                                transition-colors relative"
                                >
                                    <Bell className="w-[15px] h-[15px] text-current" />
                                    <div className="absolute top-0 right-0 translate-x-1/8 -translate-y-1/8 w-2 h-2 bg-Forest_Green rounded-full"></div>
                                </button>


                                {/* Notification Panel */}
                                {showNotifications && (

                                    <div className='absolute left-0 top-full mt-2 z-50'>
                                        <Notifications />
                                    </div>
                                )}

                            </div>
                        )}

                    </div>

                    {/* Vertical Separator
                    <div className="h-[30px] border-l-2 border-[#D9D9D9] mx-5"></div> */}


                    {showVerticalBar ? (
                        <div className="h-[30px] border-l-2 border-[#D9D9D9] mx-3"></div>
                    ): (<div className=" mx-3"></div>)}


                    {/* user Detail */}
                    {showUserInfo && (
                        <div className="flex items-center space-x-3">

                            <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-Golden">

                                <img
                                    src="/images/avatar.png"
                                    alt=""
                                    className="w-[40px] h-[40px] object-cover"
                                />

                            </div>

                            <div>
                                <h3 className="input-font input-font-semibold text-Black text-[14px]">Albert John </h3>

                                <p className="input-font input-font-normal text-Gray text-[11px]">User_Email@gmail.com</p>
                            </div>
                        </div>
                    )}

                </div>



                {/* page Title section
                <div className="text-center flex-1">
                    {
                        role === 'admin' ? (
                            <h1 className="text-[24px] input-fontBold input-font text-Black">My Products</h1>
                        ) : (
                            <h1 className="text-[24px] input-fontBold input-font text-Black">MarketPlace</h1>
                        )
                    }
                </div> */}



                {/* page Title section
                {location.pathname === '/MarketPlace/OrderHistory/Inventory' ? (
                    <div className="text-center flex-1">
                        <h1 className="text-[24px] input-fontBold input-font text-Black">Inventory</h1>
                    </div>
                ) : (
                    <div className="text-center flex-1">
                        {
                            role === 'admin' ? (
                                <h1 className="text-[24px] input-fontBold input-font text-Black">My Products</h1>
                            ) : (
                                <h1 className="text-[24px] input-fontBold input-font text-Black">MarketPlace</h1>
                            )
                        }
                    </div>
                )} */}


                <div className="text-center flex-1">
                    {
                        <h1 className="text-[24px] input-fontBold input-font text-Black">{title}</h1>
                    }
                </div>




                {/*Order History and search and settings section */}
                <div className="flex items-center space-x-2 ">



                    {/* Order History Button
                    {location.pathname !== '/MarketPlace/OrderHistory' && location.pathname !== '/MarketPlace/ProductDetail' ? (

                        <div className='flex justify-center items-center'>

                            <button
                                onClick={handleClick}
                                className=" w-[131px] bg-Forest_Green hover:bg-Dark_Green text-white text-[14px] 
                                    input-fontPoppins input-font-semibold 
                                    px-4 py-2 rounded-3xl flex "
                            >
                                <span>Order History</span>
                            </button>

                        </div>
                    ): (<div className="w-[131px] h-[40px]"></div>)} */}


                    {/*Order History Button */}
                    {showOrderHistory && (

                        <div className='flex justify-center items-center'>

                            <button
                                onClick={handleOrderHistoryClick}
                                className=" w-[131px] bg-Forest_Green hover:bg-Dark_Green text-white text-[14px] 
                                    font-Poppins font-semibold 
                                    px-4 py-2 rounded-3xl flex "
                            >
                                <span>Order History</span>
                            </button>

                        </div>
                    )}




                    {/* Search + Settings */}
                    {showSearch && (
                        <button className="p-2 rounded-full bg-white border-2 border-Ice_Blue 
                            hover:bg-Forest_Green text-Forest_Green hover:text-white  
                            transition-colors">
                            <Search className="w-[15px] h-[15px] text-current" />
                        </button>
                    )}


                    {showSettings && (
                        <button className="p-2 rounded-full bg-white border-2 border-Ice_Blue 
                            hover:bg-Forest_Green text-Forest_Green hover:text-white 
                            transition-colors">
                            <Settings className="w-[15px] h-[15px] text-current" />
                        </button>
                    )}

                </div>
            </div>

        </div >
    );
};

export default TopPanel;
