'use client';

import React from "react";
import BookCard from "../components/bookcard"; // Adjust path based on your structure
import styles from "./library.module.css";
import { Book } from "../components/bookinterface"; // Import shared Book interface
import { useRouter } from "next/navigation";

interface LibraryProps {
  books: Book[]; // Define books as a required prop
}

const Library: React.FC<LibraryProps> = ({ books }) => {
  const router = useRouter();

  const handleAddBook = () => {
    router.push('/addbook'); // Navigate to the Add Book page
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
