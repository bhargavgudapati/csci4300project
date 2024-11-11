import React from 'react';
import { useNavigate } from 'react-router-dom';

const MyLibraryButton: React.FC = () => {
  const navigate = useNavigate();

  const handleLibraryClick = () => {
    navigate('/'); // Navigate to the library page
  };

  return (
    <button onClick={handleLibraryClick} style={libraryButtonStyles}>
      My Library
    </button>
  );
};

const libraryButtonStyles: React.CSSProperties = {
  position: 'fixed',
  top: '20px',
  left: '20px',
  padding: '10px 15px',
  backgroundColor: '#28a745',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontWeight: 'bold',
};

export default MyLibraryButton;