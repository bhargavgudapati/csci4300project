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
  const [bookStatus, setBookStatus] = useState(book.status || 'Want to Read');

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newStatus = e.target.value;
    setBookStatus(newStatus);
    updateBookStatus(book.id, newStatus); // Notify parent of status change
  };

  return (
    <div className={styles.bookCard}>
      <Image
        alt="book"
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.S1Acr290KfA4gxDLDvKojwHaE8%26pid%3DApi&f=1&ipt=fe1be22d849fcde62d4a6cce00832d54f3771ba0a0d432152f2bdd4551a91686&ipo=images"
        width="200"
        height="200"
      />
       <button
        className={styles.deleteButton}
        onClick={() => deleteBook(book.id)}
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