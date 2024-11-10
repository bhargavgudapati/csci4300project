import React from 'react';
import BookCard from '../components/bookcard';  // Import BookCard correctly
import styles from './library.module.css';

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
    <div className={styles.libraryContainer}>
      <h2>My Library</h2>
      <div className={styles.bookList}>
        {books.map((book) => (
          <BookCard key={book.id} book={book} />  // Passing the book prop correctly
        ))}
      </div>
    </div>
  );
};

export default Library;