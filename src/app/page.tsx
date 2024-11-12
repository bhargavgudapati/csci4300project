'use client';

import React, { useState } from 'react';
import Library from './components/library';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddBook from './components/addbook';
import LoginPage from './components/login';
import Link from 'next/link';

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
      { id: 3, title: "Book Title 3", author: "Author 3" }
      // Add more book objects as needed
  ];

  return (
    <div>
      <nav>
        NovelNotes
      </nav>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                {isAuthenticated ? (
                  <Library books={books} />  // Render other pages here if authenticated
                ) : (
                  <LoginPage />  // Render login page if not authenticated
                )}
              </div>
            }
          />
          <Route path="/addbook" element={<AddBook />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Page;

