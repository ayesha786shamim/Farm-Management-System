import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface SignupFormProps {

  onSwitchToLogin: () => void;
}

const SignupForm: React.FC<SignupFormProps> = ({ onSwitchToLogin }) => {

  const [firstName, setFirstName] = useState('');

  const [lastName, setLastName] = useState('');

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();


  useEffect(() => {

    const role = localStorage.getItem('selectedRole');

    if (role === 'admin') {

      navigate(-1)

    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {

    e.preventDefault();

    if (password !== confirmPassword) {

      alert('Passwords do not match!');

      return;

    }

    const user = { firstName, lastName, email, password, };

    localStorage.setItem('user', JSON.stringify(user));

    alert('Signup successful!');

    onSwitchToLogin();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">

      <h2 className="block text-[20px] text-Forest_Green font-Montserrat font-bold mb-6">Sign Up</h2>

      <div className="grid grid-cols-2 gap-4">

        <div>

          <label className="text-[10px] text-Black font-Poppins font-bold mb-2">First Name</label>

          <input
            type="text"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />

        </div>

        <div>

          <label className="text-[10px] text-Black font-Poppins font-bold mb-2">Last Name</label>

          <input
            type="text"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
            required
          />

        </div>

      </div>

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

      <div>
        <label className="text-[10px] text-Black font-Poppins font-bold mb-2">Confirm Password</label>

        <input
          type="password"
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
          required
        />

      </div>

      <button
        type="submit"
        className="w-full bg-Forest_Green text-white py-2 rounded-md hover:bg-opacity-90"
      >
        Sign Up
      </button>

      <p className="text-center text-[10px] text-Black font-Poppins font-bold mt-3">

        Already have an account?

        <button
          type="button"

          className="text-primary underline text-Forest_Green"

          onClick={onSwitchToLogin}
        >
          Login
        </button>

      </p>

    </form>
  );
};

export default SignupForm;
