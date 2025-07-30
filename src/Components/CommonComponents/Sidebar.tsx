import React, { useState } from 'react';
import { LayoutDashboard, Tractor, Warehouse, NotebookPen, Store, X, Menu } from 'lucide-react';
import NavItem from './NavItem';

const Sidebar: React.FC = () => {

    console.count('Sidebar render count');

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const role = localStorage.getItem("selectedRole");

    const sidebarItems = [

        { name: 'Dashboard', icon: <LayoutDashboard />, path: '/Dashboard' },
        { name: 'Manage Farm', icon: <Tractor />, path: '/ManageFarm' },
        { name: 'Warehouse', icon: <Warehouse />, path: '/Warehouse' },
        { name: 'Lands', icon: <NotebookPen />, path: '/Lands' },
        { name: 'Marketplace', icon: <Store />, path: '/MarketPlace' },

        // {
        //     name: 'Marketplace',
        //     icon: <Store />,
        //     path: role === 'admin' 
        //      ? '/MarketPlaceAdmin'
        //      : '/MarketPlace'
        // },
    ];

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (

        <div>
            {/* Mobile Hamburger Button */}
            <button
                onClick={toggleMobileMenu}
                
                className="lg:hidden fixed pl-4 pt-6 z-50 bg-transparent text-Forest_Green hover:Gray transition-colors"

                aria-label="Toggle menu"
            >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}

            </button>

            {/* Mobile LAYOUT*/}
            {isMobileMenuOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={closeMobileMenu}
                />
            )}

            {/* Sidebar */}
            <div className={`
                fixed lg:static inset-y-0 left-0 z-40
                w-64 h-screen bg-green-50 flex flex-col border border-gray-300
                transform transition-transform duration-300 ease-in-out

                ${isMobileMenuOpen
                    ? 'translate-x-0'
                    : '-translate-x-full lg:translate-x-0'}
            `}>


                {/* Logo and title part*/}
                <div className="px-5 py-9 border-b border-[#D1D5DB] ">

                    <div className="max-w-screen flex items-center justify-center space-x-3">

                        <img src="/images/FMS Logo.svg"
                            alt="FMS Logo"
                            className="object-contain"
                        />

                        <div className="leading-tight">

                            <h1 className="text-[17px] font-bold font-Niramit text-Forest_Green uppercase">
                                FARM MANAGEMENT
                            </h1>
                            <h1 className="text-[17px] font-bold font-Niramit text-Forest_Green uppercase">
                                SYSTEM
                            </h1>

                        </div>

                    </div>

                </div>

                {/* Navigation */}
                <div className="flex-1 pl-4 pr-0 py-4">

                    <div className="space-y-2">

                        {sidebarItems.map((item) => (

                            <NavItem name={item.name} icon={item.icon} path={item.path} />

                        ))}

                    </div>

                </div>
            </div>
        </div>
    );
};

export default React.memo(Sidebar);



