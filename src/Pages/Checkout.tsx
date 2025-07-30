import React from "react";
import CheckoutInformation from "../Components/OtherComponents/CheckoutInformation";


const Checkout: React.FC = () => {

    return (
        <div className="flex flex-col h-screen w-full overflow-hidden">
            <CheckoutInformation />
        </div>

    );
}
export default Checkout;