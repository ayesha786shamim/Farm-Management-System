import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface LoginFormProps {
  onSwitchToSignup: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSwitchToSignup }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const role = localStorage.getItem('selectedRole');

    if (role === 'admin') {

      if (email === 'admin@gmail.com' && password === 'admin') {

        navigate('/MarketPlaceAdmin');

      } else {

        alert('Invalid admin credentials');

      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="block text-[20px] text-Forest_Green font-Montserrat font-bold mb-6">Login</h2>

      <div>
        <label className="text-[10px] text-Black font-Poppins font-bold mb-2">Email</label>

        <input
          type="email"
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

      </div>

      <div>
        <label className="text-[10px] text-Black font-Poppins font-bold mb-2">Password</label>

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
      >
        Login
      </button>

      <p className="text-center text-[10px] text-Black font-Poppins font-bold mt-3">
        Don’t have an account?
        <button
          type="button"
          className="text-primary underline text-Forest_Green"
          onClick={onSwitchToSignup}
        >
          Sign Up
        </button>
      </p>
    </form>
  );
};

export default LoginForm;
