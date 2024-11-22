"use client";

import React, { useEffect, useState } from 'react';
import BookCard from '../app/components/bookcard'; // Ensure this path is correct
import styles from './components/library.module.css';
import { useNavigate } from 'react-router-dom';

interface Book {
  id: string; // MongoDB ObjectId or other unique string identifier
  title: string;
  author: string;
}

const Library: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('/api/items');
        if (!response.ok) {
          throw new Error('Failed to fetch books');
        }
        const data = await response.json();
        setBooks(data.items); // Assuming the API returns { items: [...] }
        setLoading(false);
      } catch (err: any) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  const handleAddBook = () => {
    navigate('/addbook');
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className={styles.libraryContainer}>
      <h2 className={styles.libraryTitle}>My Library</h2>
      <div className={styles.bookList}>
        {books.map((book) => (
          <BookCard key={book.id} book={book} /> // Renders each book
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

