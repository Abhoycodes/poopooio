// src/AuthComponent.js
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import '../style.css';

const AuthComponent = () => {
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>; // Show a loading message while Auth0 is processing
  }

  return (
    <div className="auth-container">
      
      <h1 className='auth-title text-3xl md:text-4xl lg:text-5xl font-bold text-center'>Welcome to poo poo</h1>
      {!isAuthenticated ? (
        <button 
          onClick={() => loginWithRedirect()} 
          className="login-button"
        >
          Log In 
        </button>
      ) : (
        <div className="contacts bg-gray-800  p-4  rounded shadow-md">
          <img src={user.picture} alt={user.name} class=" w-12 h-12   rounded-full mx-auto mb-4"/>
          <div>
            <h2 class="text-white text-lg md:text-xl font-bold ">Hello, {user.name}</h2>
            <button 
            onClick={() => logout({ returnTo: window.location.origin })} 
            className="logout-button mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Log Out
          </button>
          </div>
          
         
        </div>
      )}
      
    </div>
  );
};

export default AuthComponent;