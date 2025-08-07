import React from 'react';
import { Check, X, AlertTriangle } from 'lucide-react';

interface StatusDialogProps {
    isOpen: boolean;
    onClose: () => void;
    type: 'success' | 'error';
}

const StatusDialog: React.FC<StatusDialogProps> = ({ isOpen = true, onClose, type = 'success' }) => {

    if (!isOpen) {

        return null;
    }

    const isSuccess = type === 'success';

    // Message passed based on the type error or successs
    const defaultTitle = isSuccess
        ? 'Your order has been placed successfully!'
        : 'Please fill all the fields ';

    const defaultMessage = isSuccess
        ? 'Our team will reach out to you with the next steps and further details regarding your purchase.'
        : 'All required fields must be completed before proceeding.';


    return (
        <div className="fixed inset-0 bg-Gray bg-opacity-50 flex items-center justify-center p-4 z-50">


            <div className="bg-white rounded-lg shadow-xl w-[500px] h-[296px] mx-4 relative">

                {/* Close button */}

                {onClose && (

                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                        <X size={20} />
                    </button>
                )}

                {/* Content */}
                <div className="pt-10 pb-10 pl-8 pr-8 text-center">

                    {/* Icon */}
                    <div
                        className={`w-[70px] h-[70px] rounded-full flex items-center justify-center mx-auto mb-6 
                            ${isSuccess
                                ? 'bg-Forest_Green'
                                : 'bg-yellow-500'
                            }`}
                    >

                        {isSuccess ? (
                            <Check size={32} className="text-white" />
                        ) : (
                            <AlertTriangle size={32} className="text-white" />
                        )}

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
