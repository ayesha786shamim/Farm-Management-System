import React, { useState } from 'react';
import { Check, X } from 'lucide-react';

interface Notification {
    id: string;
    type: 'order' | 'payment' | 'approval' | 'stock' | 'rejection';
    title: string;
    description: string;
    timestamp: string;
    isRead: boolean;
    image?: string;
}

const Notifications = () => {

    const getCurrentTimestamp = (): string => {

        const now = new Date();

        const date = now.toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
        });

        const time = now.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
        });
        
        return `${date}\n${time}`;
    };

    const [notifications, setNotifications] = useState<Notification[]>([
        {
            id: '1',
            type: 'order',
            title: 'You have a new Order.',
            description: '100kg wheat order by Basit Ali',
            timestamp: getCurrentTimestamp(),
            isRead: false,
            image: '/images/image1.svg'
        },
        {
            id: '2',
            type: 'payment',
            title: 'You have received Payment From Ali ...',
            description: 'Amount: 35000 PKR',
            timestamp: getCurrentTimestamp(),
            isRead: false,
            image: '/images/image2.svg'
        },
        {
            id: '3',
            type: 'approval',
            title: 'Your Request of wheat Has been...',
            description: 'The request of wheat Product has been approved',
            timestamp: getCurrentTimestamp(),
            isRead: false
        },
        {
            id: '4',
            type: 'stock',
            title: 'Your Wheat stock has dropped below 25 kg',
            description: 'Increase your most sold product',
            timestamp: getCurrentTimestamp(),
            isRead: false,
            image: '/images/image1.svg'
        },
        {
            id: '5',
            type: 'rejection',
            title: 'Your Request for Rice Has been...',
            description: 'The request of wheat Product has been rejected',
            timestamp: getCurrentTimestamp(),
            isRead: false
        }
    ]);

    const markAllAsRead = () => {


    };

    return (
        <div className="w-[274px] h-[275px] mx-auto bg-white2 rounded-lg shadow-md shadow-md shadow-gray-600 overflow-hidden">

            {/* Header */}

            <div className="bg-white px-6 py-2 border-b">

                <div className="flex items-center justify-between">

                    <h1 className="text-Forest_Green font-Montserrat font-bold text-[10px]">Notifications</h1>
                    <button
                        onClick={markAllAsRead}

                        className="text-Black font-Montserrat font-semibold text-[8px]"
                    >
                        Mark all Read
                    </button>
                </div>
            </div>

            {/* Notifications List */}

            <div className="divide-y divide-Ice_Blue">

                {notifications.map((notification) => (

                    <div
                        key={notification.id}

                        className={`px-3 py-2 hover:bg-gray-50 transition-colors cursor-pointer
                            }`}
                    >
                        <div className="flex items-start space-x-4">

                            {/* Image */}

                            <div className="flex-shrink-0">

                                {notification.image ? (

                                    <div className="w-[25px] h-[25px] rounded-full  flex items-center justify-center overflow-hidden">
                                        <img
                                            src={notification.image}
                                            alt={notification.type}
                                        />
                                    </div>

                                ) : notification.type === 'approval' ? (

                                    <div className="w-[25px] h-[25px] rounded-full bg-Forest_Green flex items-center justify-center">
                                        <Check className="w-[9px] h-[7px] text-white" />
                                    </div>

                                ) : notification.type === 'rejection' ? (

                                    <div className="w-[25px] h-[25px] rounded-full bg-Red flex items-center justify-center">
                                        <X className="w-[7px] h-[7px] text-white" />
                                    </div>

                                ) : null}
                            </div>

                            {/* //Notification details */}
                            <div className="flex-1 space-y-[2px]">

                                <div className="flex justify-between">

                                    <p className="text-Black font-Montserrat font-medium text-[7px]">
                                        {notification.title}
                                    </p>

                                    <span className="text-Black font-Montserrat font-semibold text-[6px] whitespace-nowrap">
                                        {notification.timestamp.split('\n')[0]}
                                    </span>

                                </div>

                                <div className="flex justify-between ">

                                    <p className="text-Gray font-Montserrat font-normal text-[7px]">
                                        {notification.description}
                                    </p>

                                    <span className="text-Gray font-Montserrat font-semibold text-[6px] whitespace-nowrap">
                                        {notification.timestamp.split('\n')[1]}
                                    </span>

                                </div>

                            </div>


                        </div>
                    </div>
                ))}
            </div>

            {/* Show All Button */}
            <div className="px-6 bg-white2 border-t">
                <button className="w-full text-center text-Black font-Montserrat font-semibold text-[8px] hover:text-Gray transition-colors">
                    Show All
                </button>
            </div>
        </div>
    );
};

export default Notifications;
