
'use client';
import React, { useState } from 'react';
import styles from './addbook.module.css';
import { useRouter } from 'next/navigation';
import Navbar from './navbar';

interface Book {
    id: number;
    title: string;
    author: string;
}

const AddBook: React.FC<{}> = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');  
    const router = useRouter();
    const handleSubmit = (e: React.FormEvent) => {
	e.preventDefault();

	// Create a new book object
	const newBook: Book = {
	    id: Date.now(),
	    title,
	    author,
	};

	// Add the book to the list
	console.log('Book added:', { title, author });
	console.log("call a function to add the book to the database");
	// goes back library page
	router.push("/");
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
	</div>
    );
};

export default AddBook;
