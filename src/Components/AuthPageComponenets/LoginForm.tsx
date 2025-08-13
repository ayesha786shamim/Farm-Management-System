import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext';


const LoginForm: React.FC = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();


    if (email === 'admin@gmail.com' && password === 'admin') {
      login();
      navigate('/MarketPlaceAdmin');
    }
    else if (email === 'user@gmail.com' && password === 'user') {
      login();
      navigate('/MarketPlace');
    }
    else {
      alert('Invalid credentials');
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
          onChange={(event) => setEmail(event.target.value)}
          required
        />
      </div>

      <div>
        <label className="text-[10px] text-Black font-Poppins font-bold mb-2">Password</label>
        <input
          type="password"
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
      </div>

      <button type="submit" className="w-full bg-Forest_Green text-white py-2 rounded-md hover:bg-opacity-90">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
