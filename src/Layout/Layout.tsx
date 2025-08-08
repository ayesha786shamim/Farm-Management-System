import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../Components/SideBar/Sidebar";
import TopPanel from "../Components/TopPanel/TopPanel";
import { routeConfig } from "../routeConfig";

const Layout = () => {

    const location = useLocation();

    const path = location.pathname;

    const { title, showNotification, showUserInfo, showOrderHistory, showSearch, showSettings, showVerticalBar } = routeConfig[path] || {};

    return (
        <div className="flex h-screen w-screen overflow-hidden">

            <Sidebar />

            <div className="flex-1 flex flex-col overflow-hidden bg-Background_Color">

                <TopPanel

                    title={title}
                    showNotification={showNotification}
                    showUserInfo={showUserInfo}
                    showOrderHistory={showOrderHistory}
                    showSearch={showSearch}
                    showSettings={showSettings}
                    showVerticalBar={showVerticalBar}

                />

                <div className="p-4 overflow-auto scrollbar-hide">

                    <Outlet />

                </div>
            </div>
        </div>
    );
};

export default Layout;

