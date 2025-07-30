import React, { useState, useEffect } from 'react';
import LoginForm from '../Components/AuthPageComponenets/LoginForm';
import SignupForm from '../Components/AuthPageComponenets/SignupForm';
import { useNavigate } from 'react-router-dom';

const AuthPage: React.FC = () => {

  console.log('AuthPage page rendered');

  const [isLogin, setIsLogin] = useState(true);

  const [role, setRole] = useState<string | null>(null);

  const navigate = useNavigate();

  useEffect(() => {

    const selectedRole = localStorage.getItem('selectedRole');

    if (!selectedRole) {

      navigate('/');

    } else {

      setRole(selectedRole);

    }
  }, []);

  if (!role)
    return null;

  return (

    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100 flex items-center justify-center p-4">

      <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 max-w-md w-full ">

        {isLogin ? (

          <LoginForm onSwitchToSignup={() => setIsLogin(false)} />

        ) : (

          <SignupForm onSwitchToLogin={() => setIsLogin(true)} />

        )}
      </div>
    </div>
  );
};

export default AuthPage;
