import type React from "react"
import { useNavigate } from 'react-router-dom';

import { User, Shield, ArrowRight } from "lucide-react"

const RoleSelect: React.FC = () => {

    const navigate = useNavigate()

    const handleRole = (role: 'user' | 'admin') => {

        localStorage.setItem('selectedRole', role);

        if (role === 'user') {

            navigate('/MarketPlace');

        } else {

            navigate('/AuthPage');

        }
    }

    return (

        <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100 flex items-center justify-center p-4">

            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 max-w-md w-full">

                <div className="text-center mb-8">

                    <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome</h1>

                    <p className="text-gray-600 text-lg">Please select your role to continue</p>

                </div>

                <div className="space-y-4">
                    <button

                        onClick={() => handleRole("user")}

                        className="w-full group relative overflow-hidden bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg"

                    >
                        <div className="flex items-center justify-center space-x-3">

                            <User className="w-6 h-6" />

                            <span className="text-lg">Continue as User</span>

                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />

                        </div>

                    </button>

                    <button
                        onClick={() => handleRole("admin")}

                        className="w-full group relative overflow-hidden bg-slate-700 hover:bg-slate-800 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                    >
                        <div className="flex items-center justify-center space-x-3">

                            <Shield className="w-6 h-6" />

                            <span className="text-lg">Continue as Admin</span>

                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />

                        </div>

                    </button>
                </div>
            </div>
        </div>
    )
}

export default RoleSelect
