import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export default function Navigation() {
  const { token, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav style={navStyle}>
      <div>
        <Link to="/pokemon-selection" style={{ margin: '0 10px' }}>
          Pokemon Selection
        </Link>
        <Link to="/settings" style={{ margin: '0 10px' }}>
          Settings
        </Link>
      </div>
      <button onClick={handleLogout} style={logoutBtnStyle}>
        Logout
      </button>
    </nav>
  );
}

const navStyle = {
  padding: '1rem',
  backgroundColor: '#f4f4f4',
  marginBottom: '1rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};

const logoutBtnStyle = {
  background: '#dc3545',
  border: 'none',
  color: '#fff',
  borderRadius: '4px',
  padding: '8px 16px',
  cursor: 'pointer',
};
