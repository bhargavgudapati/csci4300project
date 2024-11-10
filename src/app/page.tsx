'use client';

import React, { useState } from 'react';
import Library from './components/library';
import AddBook from './components/addbook';

const LoginPage: React.FC = () => {
    return (
      <div className="login-page">
            <h1>NovelNotes</h1>
            
            {/* Container for form fields */}
            <div className="form-container">
                <form>
                    <label>Username</label>
                    <input type="text" placeholder="Enter username" />
                    <label>Password</label>
                    <input type="password" placeholder="Enter password" />
                    <button type="submit">Sign In</button>
                </form>
            </div>

            <p>Your personal library, organized and noted</p>

          
            <button className="sign-up-btn" onClick={() => alert("Redirect to Sign Up")}>
                Sign Up
            </button>
        </div>
    );
};

//export default LoginPage;

const Page: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Change to `false` when ready for auth

  interface Book {
    id: number;
    title: string;
    author: string;
  }
  

    // Sample books array to pass to Library
    const books: Book[] = [
      { id: 1, title: "Book Title 1", author: "Author 1" },
      { id: 2, title: "Book Title 2", author: "Author 2" },
      // Add more book objects as needed
  ];

  return (
      <div>
          {isAuthenticated ? (
               // <Library books={books} />  // Render other pages here if authenticated
              <AddBook />
          ) : (
              <LoginPage />  // Render login page if not authenticated
          )}
      </div>
  );
};

export default Page;

