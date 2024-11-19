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

const AddBook: React.FC<AddBookProps> = ({ addBook }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const navigate = useNavigate();
  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create a new book object
    const newBook: Book = {
      id: Date.now(),
      title,
      author,
    };

    // Add the book to the list
    addBook(newBook);
    console.log('Book added:', { title, author });
    // goes back library page
    navigate('/');
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