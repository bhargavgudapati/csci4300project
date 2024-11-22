import React, { useState } from 'react';
import styles from './addbook.module.css';
import { useNavigate  } from 'react-router-dom';

interface Book {
  id: number;
  title: string;
  author: string;
}

interface AddBookProps {
  addBook: (newBook: Book) => void;
}

const AddBook: React.FC = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newBook = { title, author };

    try {
      // Send book to the server
      const response = await fetch('/api/items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newBook),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || 'Failed to add the book');
      }

      console.log('Book added successfully');
      // Navigate back to the library page
      navigate('/');
    } catch (error: any) {
      console.error('Error adding the book:', error.message);
      setError(error.message);
    }
  };

  return (
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
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="author">Author</label>
          <input 
            type="text" 
            id="author" 
            value={author} 
            onChange={(e) => setAuthor(e.target.value)} 
          />
        </div>
        <button type="submit" className={styles.submitButton}>Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;