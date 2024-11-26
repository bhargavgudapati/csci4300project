'use client';

import React, { useState } from 'react';
import styles from './bookcard.module.css';
import Image from 'next/image';
import { Book } from './bookinterface';

interface BookCardProps {
  book: Book;
  deleteBook: (id: string) => void;
  updateBookStatus: (id: string, status: string) => void;
}

const BookCard: React.FC<BookCardProps> = ({ book, deleteBook, updateBookStatus }) => {
  const [bookStatus, setBookStatus] = useState(book.status);

  const handleStatusChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newStatus = e.target.value;
    setBookStatus(newStatus);
    updateBookStatus(book._id, newStatus); // Notify parent of status change
  };

  console.log(book._id);
  return (
    <div className={styles.bookCard}>
      <Image
        alt="book"
        src={book.image}
        width="200"
        height="200"
      />
       <button
        className={styles.deleteButton}
        onClick={() => deleteBook(book._id)}
        title="Delete Book"
      >
        X
      </button>
      <h3>{book.title}</h3>
      <p>{book.author}</p>

      <label>Status:</label>
      <select value={bookStatus} onChange={handleStatusChange}>
        <option value="Want to Read">Want to Read</option>
        <option value="Reading">Reading</option>
        <option value="Read">Read</option>
      </select>
    </div>
  );
};

export default BookCard;