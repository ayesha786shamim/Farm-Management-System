import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavItemProps {
    name: string;
    icon: React.ReactNode;
    path: string;
    
    onItemClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ name, icon, path, onItemClick }) => {

    const location = useLocation(); 

    const currentPath = location.pathname;

    const isActive = currentPath.startsWith(path);

    return (
        <Link
            to={path}

            className={`w-full h-12 flex items-center py-4 transition-all rounded-l-3xl pl-6 group
                ${isActive
                    ? 'bg-Forest_Green'
                    : 'hover:bg-Forest_Green '
                }`}
        >
            
            <div
                className={`w-[17.5px] h-[17.5px] flex items-center justify-center 
                    ${isActive
                        ? 'text-white'
                        : 'text-Golden group-hover:text-white'
                    }`}
            >
                {icon}

            </div>

            <span
                className={`ml-4 text-[14px] font-medium font-Montserrat 
                    ${isActive
                        ? 'text-white'
                        : 'text-Text_Color group-hover:text-white '
                    }`}
            >
                {name}

            </span>
        </Link>
    );
};

export default React.memo(NavItem);
