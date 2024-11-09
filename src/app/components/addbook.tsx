import React, { useState } from 'react';
import '../components/library.module.css'; // Optional: specific CSS for AddBook page

const AddBook: React.FC = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add the book to your collection (e.g., using a function or API call)
    console.log('Book added:', { title, author });
  };

  return (
    <div className="add-book-container">
      <h1 className="page-title">Add a New Book</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input 
            type="text" 
            id="title" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
          />
        </div>
        <div className="form-group">
          <label htmlFor="author">Author</label>
          <input 
            type="text" 
            id="author" 
            value={author} 
            onChange={(e) => setAuthor(e.target.value)} 
          />
        </div>
        <button type="submit" className="submit-button">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;