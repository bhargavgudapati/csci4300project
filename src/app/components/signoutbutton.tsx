import React from 'react';
import { useNavigate } from 'react-router-dom';

interface SignOutButtonProps {
  onSignOut: () => void;
}

const SignOutButton: React.FC<SignOutButtonProps> = ({ onSignOut }) => {
  const handleSignOut = () => {
    onSignOut();
  };

  return (
    <button onClick={handleSignOut} style={signOutButtonStyles}>
      Sign Out
    </button>
  );
};

const signOutButtonStyles: React.CSSProperties = {
  position: 'absolute',
  top: '15px',
  right: '20px',
  padding: '10px 15px',
  backgroundColor: '#dc3545',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontWeight: 'bold',
};

export default SignOutButton;