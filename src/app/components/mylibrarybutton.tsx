import React from 'react';
import { useRouter } from 'next/router';

const MyLibraryButton: React.FC = () => {
  const router = useRouter();

  const handleLibraryClick = () => {
    router.push('/');
  };

  return (
    <button onClick={handleLibraryClick} style={libraryButtonStyles}>
      My Library
    </button>
  );
};

export const libraryButtonStyles: React.CSSProperties = {
  position: 'fixed',
  bottom: '20px',
  left: '50%',
  transform: 'translateX(-50%)',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  padding: '10px 20px',
  borderRadius: '5px',
  fontSize: '16px',
  cursor: 'pointer',
  zIndex: '1000',
};

export default MyLibraryButton;