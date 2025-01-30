import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { loginWithMetamask } from '../services/authService';

const LoginPage = () => {
  const { login } = useContext(AuthContext); // login - method from the context
  
  const handleConnect = async () => {
    try {
      // Call the service function that handles all steps (nonce request, signing, verify)
      const user = await loginWithMetamask();
      // If successful, save the token
      login(user.token, user.id);
      
      // Redirect to the appropriate page (home / Pokémon selection)
      window.location.href = '/';
    } catch (error) {
      console.error('Login error:', error);
      // Optionally, display an error message to the user
    }
  };

  return (
    <div style={{
      display: "flex",
      width: "100%",
      height: "100vh",
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column'
    }}>       <h1>Login with Metamask</h1>
      <button onClick={handleConnect}>Connect via Metamask</button>
    </div>
  );
};

export default LoginPage;
