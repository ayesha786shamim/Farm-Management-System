interface RouteStructure {

    title: string;
    showNotification: boolean;
    showUserInfo: boolean;
    showOrderHistory: boolean;
    showSearch: boolean;
    showSettings: boolean;
    showVerticalBar: boolean;

}

export const routeConfig: Record<string, RouteStructure> = {

    "/Dashboard": {
        title: "Dashboard",
        showNotification: false,
        showUserInfo: false,
        showOrderHistory: false,
        showSearch: false,
        showSettings: false,
        showVerticalBar: false,
    },

    "/MarketPlace": {
        title: "MarketPlace",
        showNotification: true,
        showUserInfo: true,
        showOrderHistory: true,
        showSearch: true,
        showSettings: true,
        showVerticalBar: true,
    },

    "/Warehouse": {
        title: "Warehouse",
        showNotification: false,
        showUserInfo: false,
        showOrderHistory: false,
        showSearch: false,
        showSettings: false,
        showVerticalBar: false,
    },

    "/Lands": {
        title: "Lands",
        showNotification: false,
        showUserInfo: false,
        showOrderHistory: false,
        showSearch: false,
        showSettings: false,
        showVerticalBar: false,
    },

    "/ManageFarm": {
        title: "Manage Farm",
        showNotification: false,
        showUserInfo: false,
        showOrderHistory: false,
        showSearch: false,
        showSettings: false,
        showVerticalBar: false,
    },

    "/MarketPlace/ProductDetail": {
        title: "MarketPlace",
        showNotification: true,
        showUserInfo: true,
        showOrderHistory: false,
        showSearch: true,
        showSettings: true,
        showVerticalBar: true,
    },

    "/MarketPlace/ProductDetail/Checkout": {
        title: "MarketPlace",
        showNotification: false,
        showUserInfo: false,
        showOrderHistory: false,
        showSearch: false,
        showSettings: false,
        showVerticalBar: false,
    },

    "/MarketPlace/OrderHistory": {
        title: "MarketPlace",
        showNotification: true,
        showUserInfo: true,
        showOrderHistory: false,
        showSearch: true,
        showSettings: true,
        showVerticalBar: true,
    },

    "/MarketPlace/OrderHistory/Inventory": {
        title: "Inventory",
        showNotification: false,
        showUserInfo: false,
        showOrderHistory: false,
        showSearch: false,
        showSettings: false,
        showVerticalBar: false,
    }

};
