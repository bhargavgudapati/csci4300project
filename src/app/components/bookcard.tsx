import React from 'react';
import './bookcard.module.css'

interface Book {
  id: number;
  title: string;
  author: string;
  // Add any other properties needed for the book
}

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  return (
    <div className="book-card">
      <h3>{book.title}</h3>
      <p>{book.author}</p>
    </div>
  );
};

export default BookCard;