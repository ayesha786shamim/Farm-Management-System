// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../../Context/AuthContext';

// const LoginForm: React.FC = () => {

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [loading, setLoading] = useState(false);

//   const navigate = useNavigate();
//   const { login } = useAuth();

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);

//     // Retrieve stored user from localStorage
//     const storedUser = localStorage.getItem('user');
//     if (!storedUser) {
//       alert('No user found. Please sign up first.');
//       setLoading(false);
//       return;
//     }

//     const user = JSON.parse(storedUser);

//     // Check credentials
//     if (email === user.email && password === user.password) {
//       login('mock-token');

//       // Redirect based on role
//       if (user.role === 'admin') {
//         navigate('/MarketPlaceAdmin');
//       } else {
//         navigate('/MarketPlace');
//       }
//     } else {
//       alert('Invalid credentials');
//     }

//     setLoading(false);
//   };


//   const onSwitchToSignup = () => {
//     navigate('/AuthPage/SignupForm');
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100 flex items-center justify-center p-4">
//       <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 max-w-md w-full">
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <h2 className="block text-[20px] text-Forest_Green font-Montserrat font-bold mb-6">Login</h2>

//           <div>
//             <label className="text-[10px] text-Black font-Poppins font-bold mb-2">Email</label>
//             <input
//               type="email"
//               className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>

//           <div>
//             <label className="text-[10px] text-Black font-Poppins font-bold mb-2">Password</label>
//             <input
//               type="password"
//               className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-Forest_Green text-white py-2 rounded-md hover:bg-opacity-90"
//             disabled={loading}
//           >
//             {loading ? 'Logging in...' : 'Login'}
//           </button>

//           <p className="text-center text-[10px] text-Black font-Poppins font-bold mt-3">
//             Don’t have an account?
//             <button
//               type="button"
//               className="text-primary underline text-Forest_Green"
//               onClick={onSwitchToSignup}
//             >
//               Sign Up
//             </button>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginForm;



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext';
import { login as loginApi, LoginData, LoginResponse } from '../../services/loginServices';

const LoginForm: React.FC = () => {

  const [username, setUsername] = useState('');

  const [password, setPassword] = useState('');
  
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    const data: LoginData = { username, password };

    try {

      const response: LoginResponse | null = await loginApi(data);

      if (!response) {

        alert('Login failed');
        setLoading(false);
        return;
      }

      login(response.accessToken);
      console.log("Login successful! Token:", response.accessToken);
      console.log(response);



      navigate('/MarketPlace');


    } catch (error: any) {

      console.error('Login failed:', error);

      alert(error.message || 'Invalid credentials');

    } finally {
      setLoading(false);
    }
  };

  const onSwitchToSignup = () => {
    navigate('/AuthPage/SignupForm');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 max-w-md w-full">

        <form onSubmit={handleSubmit} className="space-y-4">

          <h2 className="text-[20px] text-Forest_Green font-Montserrat font-bold mb-6">
            Login
          </h2>

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

          <button
            type="submit"
            className="w-full bg-Forest_Green text-white py-2 rounded-md hover:bg-opacity-90"
            disabled={loading}
          >
            {loading ? 'Logging in' : 'Login'}
          </button>

          <p className="text-center text-[10px] text-Black font-Poppins font-bold mt-3">
            Don’t have an account?{' '}
            <button
              type="button"
              className="text-primary underline text-Forest_Green"
              onClick={onSwitchToSignup}
            >
              Sign Up
            </button>
          </p>

        </form>
      </div>
    </div>
  );
};

export default LoginForm;

