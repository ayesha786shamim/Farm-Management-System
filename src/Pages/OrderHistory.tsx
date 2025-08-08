import React from 'react';
import History from '../Components/OtherComponents/History';


const OrderHistory: React.FC = () => {
    return (
        <div className="flex flex-col w-full bg-transparent ">

            {/* History */}
            <div className="flex-1 h-auto sm:h-auto">
                    <History />
            </div>

        </div>
    );
};

export default OrderHistory;
