'use client';

import React, { useState } from 'react';
import Library from './components/library';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddBook from './components/addbook';
import LoginPage from './components/login';
import SignOutButton from './components/signoutbutton';
import MyLibraryButton from './components/mylibrarybutton';

const Page: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Change to `false` when ready for auth

  interface Book {
    id: number;
    title: string;
    author: string;
  }
  
  // example book array
 const [books, setBooks] = useState<Book[]>([
  { id: 1, title: "The Shining", author: "Stephen King" },
  { id: 2, title: "A Court of Thorns and Roses", author: "Sarah J. Maas" },
  { id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald" }
]);

const handleSignOut = () => {
  setIsAuthenticated(false);
};

// Function to add a new book to the books list
const addBook = (newBook: Book) => {
  setBooks([...books, newBook]);
};


return (
  <Router>
  <Routes>
    <Route
      path="/"
      element={
        <div>
          {isAuthenticated ? (
            <div>
              <SignOutButton onSignOut={handleSignOut} />
              <Library books={books} /> 
            </div>
          ) : (
            <LoginPage />
          )}
        </div>
      }
    />
    <Route
      path="/addbook"
      element={
        <div>
          <MyLibraryButton />
          <AddBook addBook={addBook} />
          
        </div>
      }
    />
    <Route path="/login" element={<LoginPage />} />
  </Routes>
</Router>
);
};

export default Page;

