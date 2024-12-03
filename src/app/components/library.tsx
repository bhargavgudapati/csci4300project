'use client';

import React from "react";
import BookCard from "../components/bookcard";
import styles from "./library.module.css";
import { Book } from "../components/bookinterface";

interface LibraryProps {
  books: Book[];
  deleteBook: (id: string) => Promise<void>;
  handleAddBook: () => void;
  updateBookStatus: (id: string, newStatus: string) => void;
}

const Library: React.FC<LibraryProps> = ({ books = [], deleteBook, handleAddBook, updateBookStatus }) => {
  
  return (
    <div className={styles.libraryContainer}>
      <h2 className={styles.libraryTitle}>My Library</h2>

      <div className={styles.addButtonContainer}>
        <button className={styles.addBookButton} onClick={handleAddBook}>
          Add Book
        </button>
      </div>

      <div className={styles.bookList}>
      {books.length > 0 ? (
          books.map((book, index) => (
            <BookCard
              key={book._id || index}
              book={book}
              deleteBook={deleteBook}
              updateBookStatus={updateBookStatus} // Pass updateBookStatus to BookCard
            />
          ))
        ) : (
          <p>No books available.</p>
        )}
      </div>
    </div>
  );
};

export default Library;
