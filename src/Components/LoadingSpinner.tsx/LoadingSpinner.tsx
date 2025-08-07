import React from 'react';

const LoadingSpinner: React.FC = () => {
    return (
        <div className="flex justify-center items-center h-full w-full py-60">
            <div className="relative w-12 h-12">
                <div className="absolute inset-0 border-4 border-t-Forest_Green border-b-transparent border-l-Forest_Green border-r-transparent rounded-full animate-spin" />
                <div className="absolute inset-2 border-2 border-t-transparent border-b-Forest_Green border-l-transparent border-r-Forest_Green rounded-full animate-spin reverse" />
            </div>
        </div>
    );
};

export default LoadingSpinner;
