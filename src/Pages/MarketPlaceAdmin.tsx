import React from 'react';
import TopPanel from '../Components/TopPanel/TopPanel';
import AdminAddProduct from '../Components/AdminAddProduct';

const MarketPlaceAdmin: React.FC = () => {

    console.log('Admin MarketPlace page rendered');



    return (
        <div className="flex flex-col h-full w-full bg-transparent">

            {/* // <div className="w-full min-h-screen overflow-y-auto bg-transparent"> */}

            {/* Top Panel */}
            {/* <TopPanel /> */}

            {/*Admin Add Product*/}
            <AdminAddProduct />


        </div>
    );
};

export default MarketPlaceAdmin;
