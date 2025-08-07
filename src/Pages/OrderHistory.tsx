import React from 'react';
import TopPanel from '../Components/TopPanel/TopPanel';
import History from '../Components/OtherComponents/History';


const OrderHistory: React.FC = () => {
    return (
        <div className="flex flex-col w-full bg-transparent ">

            {/* Top Panel */}
            {/* <TopPanel /> */}

            {/* History */}
            <div className="flex-1 overflow-y-auto sm:overflow-visible max-h-[70vh] sm:max-h-full">
                    <History />
            </div>
        </div>
    );
};

export default OrderHistory;
