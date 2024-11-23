'use client';

import React from "react";
import BookCard from "../components/bookcard";
import styles from "./library.module.css";
import { Book } from "../components/bookinterface";

interface LibraryProps {
  books: Book[];
  deleteBook: (id: string) => Promise<void>;
  handleAddBook: () => void;
}

const Library: React.FC<LibraryProps> = ({ books = [], deleteBook, handleAddBook }) => {
  return (
    <div className={styles.libraryContainer}>
      <h2 className={styles.libraryTitle}>My Library</h2>

      {/* Add Book Button */}
      <div className={styles.addButtonContainer}>
        <button className={styles.addBookButton} onClick={handleAddBook}>
          Add Book
        </button>
      </div>

      {/* Book List */}
      <div className={styles.bookList}>
        {books.length > 0 ? (
         books.map((book, index) => (
          <BookCard key={book.id || index} book={book} deleteBook={deleteBook} />
        ))
        ) : (
          <p>No books available.</p>
        )}
      </div>
    </div>
  );
};

export default Library;
