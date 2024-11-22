'use client';

import React, { useEffect, useState } from 'react'; // Import useState
import { useRouter } from 'next/navigation';
import styles from './library.module.css';
import BookCard from '../components/bookcard'; // Adjust path as needed

// Define the Book interface
interface Book {
  id: string; // MongoDB ObjectId or other unique identifier
  title: string;
  author: string;
}

const Library: React.FC = () => {
  // Initialize state
  const [books, setBooks] = useState<Book[]>([]); // books is an empty array initially
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('/api/items');
        if (!response.ok) {
          throw new Error('Failed to fetch books');
        }
        const data = await response.json();
        console.log('Fetched books:', data.items);
        setBooks(data.items || []);
        setLoading(false);
      } catch (err: any) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  const handleAddBook = () => {
    router.push('/addbook');
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

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
