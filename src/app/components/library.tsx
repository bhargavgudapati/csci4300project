import React from 'react';
import BookCard from '../components/bookcard';
import styles from './library.module.css';

import { useNavigate } from 'react-router-dom';

interface Book {
  id: number;
  title: string;
  author: string;
}

interface LibraryProps {
  books: Book[]; 
}


const Library: React.FC<LibraryProps> = ({ books }) => {
  const navigate = useNavigate();

  const handleAddBook = () => {
    navigate('/addbook');
  };

  return (
    <div className={styles.libraryContainer}>
      <h2 className={styles.libraryTitle}>My Library</h2>
      <div className={styles.bookList}>
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
      <div className={styles.addButtonContainer}>
      <button className={styles.addBookButton} onClick={handleAddBook}>
        Add Book
      </button>
      </div>
    </div>
  );
};

export default Library;