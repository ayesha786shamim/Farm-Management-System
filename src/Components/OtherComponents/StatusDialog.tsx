import React from 'react';
import { Check, X, AlertTriangle } from 'lucide-react';

interface StatusDialogProps {
    isOpen: boolean;
}

const StatusDialog: React.FC<StatusDialogProps> = ({ isOpen }) => {

    if (!isOpen) {

        return null;
    }

    const defaultTitle = "Your order has been placed successfully!"


    const defaultMessage = "Our team will reach out to you with the next steps and further details regarding your purchase."

    return (
        <div className="fixed inset-0 bg-Gray bg-opacity-50 flex items-center justify-center p-4 z-50">


            <div className="bg-white rounded-lg shadow-xl w-[500px] h-[296px] mx-4 relative">

                {/* Content */}
                <div className="pt-10 pb-10 pl-8 pr-8 text-center">

                    {/* Icon */}
                    <div
                        className={`w-[70px] h-[70px] rounded-full flex items-center justify-center mx-auto mb-6 bg-Forest_Green`}
                    >
                        <Check size={32} className="text-white" />
                    </div>

                    {/* Title */}
                    <h2 className="text-[18px] text-Forest_Green font-Montserrat font-bold mb-4 text-center">

                        {defaultTitle}

                    </h2>

                    {/* Message */}
                    <p className="text-[12px] text-Gray font-Montserrat font-normal text-center">

                        {defaultMessage}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default StatusDialog;
