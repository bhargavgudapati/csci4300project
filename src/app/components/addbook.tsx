import React, { useState } from 'react';
import styles from './addbook.module.css';

interface AddBookProps {
  bookAdder: () => void
}

const AddBook: React.FC = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTitle("");
    setAuthor("");
    console.log('Book added:', { title, author });
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