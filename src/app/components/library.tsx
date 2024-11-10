import React from 'react';
import BookCard from '../components/bookcard';  // Import BookCard correctly
import './library.module.css'

interface Book {
  id: number;
  title: string;
  author: string;
}

interface LibraryProps {
  books: Book[];  // Expecting an array of books as a prop
}

const Library: React.FC<LibraryProps> = ({ books }) => {
  return (
    <div className="library-container">
      <h2>My Library</h2>
      <div className="book-list">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />  // Passing the book prop correctly
        ))}
      </div>
    </div>
  );
};

export default Library;