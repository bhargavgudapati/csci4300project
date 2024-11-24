'use client';

import React from 'react';
import styles from './bookcard.module.css';
import Image from 'next/image';
import { Book } from './bookinterface';

interface BookCardProps {
  book: Book;
  deleteBook: (id: string) => void;
}

const BookCard: React.FC<BookCardProps> = ({ book, deleteBook }) => {
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
    </div>
  );
};

export default BookCard;