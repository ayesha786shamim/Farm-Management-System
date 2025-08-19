import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signup, SignupData, SignupResponse } from '../../services/loginServices';

const SignupForm: React.FC = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [role] = useState('user');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const onSwitchToLogin = () => {
        navigate('/AuthPage/LoginForm');
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        const newUser: SignupData = {
            firstName,
            lastName,
            username,
            email,
            password,
        };

        try {
            setLoading(true);

            const response: SignupResponse | null = await signup(newUser);


            alert('Signup successful!');
            console.log('New User:', response);

            localStorage.setItem('selectedRole', role);

            onSwitchToLogin();

        } catch (error: any) {

            console.error('Signup failed:', error);

            alert(error.message || 'Error');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 max-w-md w-full">

                <form onSubmit={handleSubmit} className="space-y-4">
                    <h2 className="block text-[20px] text-Forest_Green font-Montserrat font-bold mb-6">
                        Sign Up
                    </h2>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="text-[10px] text-Black font-Poppins font-bold mb-2">
                                First Name
                            </label>
                            <input
                                type="text"
                                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                required
                            />
                        </div>

                        <div>
                            <label className="text-[10px] text-Black font-Poppins font-bold mb-2">
                                Last Name
                            </label>
                            <input
                                type="text"
                                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                required
                            />
                        </div>
                        
                    </div>

                    <div>
                        <label className="text-[10px] text-Black font-Poppins font-bold mb-2">
                            Username
                        </label>
                        <input
                            type="text"
                            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label className="text-[10px] text-Black font-Poppins font-bold mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label className="text-[10px] text-Black font-Poppins font-bold mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label className="text-[10px] text-Black font-Poppins font-bold mb-2">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-Forest_Green text-white py-2 rounded-md hover:bg-opacity-90"
                        disabled={loading}
                    >
                        {loading ? 'Signing up...' : 'Sign Up'}
                    </button>

                    <p className="text-center text-[10px] text-Black font-Poppins font-bold mt-3">
                        Already have an account?{' '}
                        <button
                            type="button"
                            className="text-primary underline text-Forest_Green"
                            onClick={onSwitchToLogin}
                        >
                            Login
                        </button>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default SignupForm;




// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const SignupForm: React.FC = () => {
//     const [firstName, setFirstName] = useState('');
//     const [lastName, setLastName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');
//     const [role, setRole] = useState('user');

//     const navigate = useNavigate();


//     const onSwitchToLogin = () => {
//         navigate('/AuthPage/LoginForm');
//     }

//     const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault();

//         if (password !== confirmPassword) {
//             alert('Passwords do not match!');
//             return;
//         }

//         const user = { firstName, lastName, email, password, role };

//         localStorage.setItem('user', JSON.stringify(user));

//         alert('Signup successful!');

//         // Optionally store role separately if needed
//         localStorage.setItem('selectedRole', role);

//         // Switch to login form
//         onSwitchToLogin();
//     };

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100 flex items-center justify-center p-4">
//             <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 max-w-md w-full">
//                 <form onSubmit={handleSubmit} className="space-y-4">
//                     <h2 className="block text-[20px] text-Forest_Green font-Montserrat font-bold mb-6">
//                         Sign Up
//                     </h2>

//                     <div className="grid grid-cols-2 gap-4">
//                         <div>
//                             <label className="text-[10px] text-Black font-Poppins font-bold mb-2">First Name</label>
//                             <input
//                                 type="text"
//                                 className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
//                                 value={firstName}
//                                 onChange={(e) => setFirstName(e.target.value)}
//                                 required
//                             />
//                         </div>

//                         <div>
//                             <label className="text-[10px] text-Black font-Poppins font-bold mb-2">Last Name</label>
//                             <input
//                                 type="text"
//                                 className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
//                                 value={lastName}
//                                 onChange={(e) => setLastName(e.target.value)}
//                                 required
//                             />
//                         </div>
//                     </div>

//                     <div>
//                         <label className="text-[10px] text-Black font-Poppins font-bold mb-2">Email</label>
//                         <input
//                             type="email"
//                             className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             required
//                         />
//                     </div>

//                     <div>
//                         <label className="text-[10px] text-Black font-Poppins font-bold mb-2">Password</label>
//                         <input
//                             type="password"
//                             className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             required
//                         />
//                     </div>

//                     <div>
//                         <label className="text-[10px] text-Black font-Poppins font-bold mb-2">Confirm Password</label>
//                         <input
//                             type="password"
//                             className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
//                             value={confirmPassword}
//                             onChange={(e) => setConfirmPassword(e.target.value)}
//                             required
//                         />
//                     </div>


//                     <button
//                         type="submit"
//                         className="w-full bg-Forest_Green text-white py-2 rounded-md hover:bg-opacity-90"
//                     >
//                         Sign Up
//                     </button>

//                     <p className="text-center text-[10px] text-Black font-Poppins font-bold mt-3">
//                         Already have an account?
//                         <button
//                             type="button"
//                             className="text-primary underline text-Forest_Green"
//                             onClick={onSwitchToLogin}
//                         >
//                             Login
//                         </button>
//                     </p>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default SignupForm;
