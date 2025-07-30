import React from 'react';
import InventoryDetail from '../Components/OtherComponents/InventoryDetail'

const Inventory: React.FC = () => {


    return (
        <div className="flex flex-col h-full w-full overflow-y-auto bg-transparent">

            <InventoryDetail/>
        </div>
            
    );
};

export default Inventory;
