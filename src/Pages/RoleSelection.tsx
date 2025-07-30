import React  from 'react';
import RoleSelect from '../Components/AuthPageComponenets/RoleSelect';

const RoleSelection: React.FC = () => {

    console.log('Role Selection page rendered');


    return (
        <div className="flex flex-col h-full w-full bg-transparent">


            {/* Role Select */}
            <RoleSelect />


        </div>
    );
};

export default RoleSelection;
