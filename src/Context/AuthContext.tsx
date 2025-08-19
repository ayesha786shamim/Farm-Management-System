import React, { createContext, useState, useContext } from "react";
import Cookies from "js-cookie";

interface AuthContextType {
    isAuthenticated: boolean;
    login: (token: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {

        // return localStorage.getItem("isAuthenticated") === "true";
        return Cookies.get("isAuthenticated") === "true";
    });

    const login = (token: string) => {
        setIsAuthenticated(true);
        // localStorage.setItem("isAuthenticated", "true");
        // localStorage.setItem("token", token);
        Cookies.set("isAuthenticated", "true");
        Cookies.set("token", token);
    };


    const logout = () => {
        setIsAuthenticated(false);
        // localStorage.removeItem("isAuthenticated");
        // localStorage.removeItem("token");
        Cookies.remove("isAuthenticated");
        Cookies.remove("token");

    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {

    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("useAuth must be used within AuthProvider");
    }

    return context;
};
