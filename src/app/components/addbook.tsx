'use client';

import React, { useState } from 'react';
import styles from './addbook.module.css';
import { useRouter } from 'next/navigation';
import Navbar from './navbar';

interface Book {
  id: string;
  title: string;
  author: string;
}

const AddBook: React.FC = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [showError, setShowError] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newBook: Omit<Book, 'id'> = { title, author };

    try {
      const response = await fetch('/api/items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newBook),
      });

      if (!response.ok) {
        throw new Error('Failed to add the book');
      }

      console.log('Book added successfully:', newBook);
      router.push('/');
    } catch (error) {
      console.error('Error adding book:', error);
      setShowError(true);
    }
  };

  return (
    <div>
      <Navbar />
      <div className={styles.addBookContainer}>
        <h1 className={styles.pageTitle}>Add a New Book</h1>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="author">Author</label>
            <input
              type="text"
              id="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
            />
          </div>
          <button type="submit" className={styles.submitButton}>
            Add Book
          </button>
        </form>
      </div>

      {/* Error Popup */}
      {showError && (
        <div className={styles.errorPopup}>
          <div className={styles.errorContent}>
            <p>Error adding book</p>
            <button
              className={styles.closeButton}
              onClick={() => setShowError(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddBook;
