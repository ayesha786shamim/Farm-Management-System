import React, { useState } from 'react';
import { Check, X } from 'lucide-react';

interface Notification {
    id: string;
    title: string;
    description: string;
    timestamp: string;
    image: string;
    type: 'approval' | 'others' | 'rejection';
    isRead: boolean;
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
            type: 'others',
            title: 'You have a new Order.',
            description: '100kg wheat order by Basit Ali',
            timestamp: getCurrentTimestamp(),
            image: '/images/image1.svg',
            isRead: false,
        },

        {
            id: '2',
            type: 'others',
            title: 'You have received payment from Ali',
            description: 'Amount: 35000 PKR',
            timestamp: getCurrentTimestamp(),
            image: '/images/image2.svg',
            isRead: false,
        },

        {
            id: '3',
            type: 'approval',
            title: 'Your request of wheat has been approved',
            description: 'The request of wheat Product has been approved',
            timestamp: getCurrentTimestamp(),
            image: '',
            isRead: false,
        },

        {
            id: '4',
            type: 'others',
            title: 'Your Wheat stock has dropped below 25 kg kgkgkgkgkgkgkgkgkgkgkgkgkgkg',
            description: 'Increase your most sold product',
            timestamp: getCurrentTimestamp(),
            image: '/images/image1.svg',
            isRead: false,
        },

        {
            id: '5',
            type: 'rejection',
            title: 'Your request for rice ha been rejected',
            description: 'The request of wheat Product has been rejected',
            timestamp: getCurrentTimestamp(),
            image: '',
            isRead: false,
        },

        {
            id: '6',
            type: 'rejection',
            title: 'Your request for rice ha been rejected aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            description: 'The request of wheat Product has been rejected',
            timestamp: getCurrentTimestamp(),
            image: '',
            isRead: false,
        },

        {
            id: '7',
            type: 'others',
            title: 'You have received payment from Ali',
            description: 'Amount: 35000 PKR',
            timestamp: getCurrentTimestamp(),
            image: '/images/image2.svg',
            isRead: false,
        },

        {
            id: '8',
            type: 'approval',
            title: 'Your request of wheat has been approved',
            description: 'The request of wheat Product has been approved',
            timestamp: getCurrentTimestamp(),
            image: '',
            isRead: false,
        },

        {
            id: '9',
            type: 'others',
            title: 'Your Wheat stock has dropped below 25 kg kgkgkgkgkgkgkgkgkgkgkgkgkgkg',
            description: 'Increase your most sold product',
            timestamp: getCurrentTimestamp(),
            image: '/images/image1.svg',
            isRead: false,
        },

        {
            id: '10',
            type: 'rejection',
            title: 'Your request for rice ha been rejected',
            description: 'The request of wheat Product has been rejected',
            timestamp: getCurrentTimestamp(),
            image: '',
            isRead: false,
        },

        {
            id: '11',
            type: 'rejection',
            title: 'Your request for rice ha been rejected aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            description: 'The request of wheat Product has been rejected',
            timestamp: getCurrentTimestamp(),
            image: '',
            isRead: false,
        },
        {
            id: '12',
            type: 'rejection',
            title: 'Your request for rice ha been rejected aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            description: 'The request of wheat Product has been rejected',
            timestamp: getCurrentTimestamp(),
            image: '',
            isRead: false,
        }, {
            id: '13',
            type: 'others',
            title: 'You have a new Order.',
            description: '100kg wheat order by Basit Ali',
            timestamp: getCurrentTimestamp(),
            image: '/images/image1.svg',
            isRead: false,
        },

        {
            id: '14',
            type: 'others',
            title: 'You have received payment from Ali',
            description: 'Amount: 35000 PKR',
            timestamp: getCurrentTimestamp(),
            image: '/images/image2.svg',
            isRead: false,
        },

        {
            id: '15',
            type: 'approval',
            title: 'Your request of wheat has been approved',
            description: 'The request of wheat Product has been approved',
            timestamp: getCurrentTimestamp(),
            image: '',
            isRead: false,
        },

        {
            id: '16',
            type: 'others',
            title: 'Your Wheat stock has dropped below 25 kg kgkgkgkgkgkgkgkgkgkgkgkgkgkg',
            description: 'Increase your most sold product',
            timestamp: getCurrentTimestamp(),
            image: '/images/image1.svg',
            isRead: false,
        },

    ]);

    const [showAll, setShowAll] = useState(false)

    const markAllRead = () => {

        setNotifications((prevNotification) =>

            prevNotification.map((notification) => (

                { ...notification, isRead: true }
            ))

        );
    };

    const ShowAllNotifications = () => {

        setShowAll(true)

    };

    const notificationDisplayed = showAll === true
        ? notifications
        : notifications.slice(0, 5)

    return (
        <div className="w-[275px] h-[309px] mx-auto bg-white2 rounded-lg shadow-md shadow-md shadow-gray-600 
        overflow-auto scrollbar-hide">

            <div>

                {/* Header */}
                <div className="bg-white px-6 py-2 border-b">

                    <div className="flex items-center justify-between">

                        <h1 className="text-Forest_Green font-Montserrat font-bold text-[10px]">
                            Notifications
                        </h1>

                        <button
                            onClick={markAllRead}

                            className="text-Black font-Montserrat font-semibold text-[8px]
                        hover:text-Gray transition-colors"
                        >
                            Mark all Read

                        </button>

                    </div>
                </div>

                {/* Notifications List */}
                <div className="divide-y divide-Ice_Blue shadow-lg">

                    {/* {notifications.map((notification) => ( */}

                    {notificationDisplayed.map((notification) => (

                        <div
                            key={notification.id}

                            className={`bg-[#F8F7EF] px-3 py-3 hover:bg-gray-50 transition-colors 

                            ${notification.isRead
                                    ? 'bg-gray-50'
                                    : ''
                                } `}
                        >


                            <div className="flex items-start space-x-4">

                                {/* Image */}

                                <div className="flex-shrink-0">

                                    {notification.image ? (

                                        <div className="w-[25px] h-[25px] rounded-full  flex items-center justify-center ">
                                            <img
                                                src={notification.image}
                                                alt={notification.type}
                                            />
                                        </div>

                                    ) : notification.type === 'approval' ? (

                                        <div className="w-[25px] h-[25px] rounded-full bg-Forest_Green flex items-center justify-center">
                                            <Check className="w-[10px] h-[11px] text-white" />
                                        </div>

                                    ) : notification.type === 'rejection' ? (

                                        <div className="w-[25px] h-[25px] rounded-full bg-Red flex items-center justify-center">
                                            <X className="w-[10px] h-[11px] text-white" />
                                        </div>

                                    ) : null}

                                </div>

                                {/* //Notification details */}
                                <div className="flex-1 min-w-0 space-y-[3px]">

                                    <div className="flex justify-between">

                                        <p className="text-Black font-Montserrat font-medium text-[7px] truncate">
                                            {notification.title}
                                        </p>

                                        <span className="text-[#2F2F2F] font-Montserrat font-semibold text-[6px] whitespace-nowrap">
                                            {notification.timestamp.split('\n')[0]}
                                        </span>

                                    </div>

                                    <div className="flex justify-between ">

                                        <p className="text-Gray font-Montserrat font-normal text-[7px] truncate">
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

            </div>


            {/* Show All Button */}

            {!showAll && (

                <div className=" px-6 py-2 bg-[#F8F7EF] border-t shadow-xl flex items-center justify-center">

                    <button
                        onClick={ShowAllNotifications}
                        className="text-Black font-Montserrat font-semibold text-[8px] 
                    hover:text-Gray transition-colors"
                    >
                        Show All
                    </button>
                </div>
            )}

        </div >
    );
};

export default Notifications;
