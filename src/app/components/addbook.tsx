'use client';

import React, { useState } from 'react';
import styles from './addbook.module.css';
import { useRouter } from 'next/navigation';
import { libraryButtonStyles } from './mylibrarybutton';
import SearchBooks from './searchbooks';

interface openlibBook {
	title: string,
	author: string,
	image: string
}

async function getBooks(bookTitle: string, bookAuthor: string) {
	if (bookTitle === "" || bookAuthor === "") {
		return null;
	}
	const response = await fetch("/api/openlibrary", {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			bookAuthor,
			bookTitle
		})
	});
	let { booklist } = await response.json();
	let mappedList: openlibBook[] = booklist.map((x: any) => {
		const newBook: openlibBook = {
			title: x['title'],
			author: x['author'],
			image: x['image']
		}
		return newBook;
	});
	return mappedList;
}

interface Book {
	id: string;
	title: string;
	author: string;
	bookStatus: string;
}

interface AddBookProps {
	onAddBook: (newBook: Book) => void; // Pass the new book to the parent
}

const AddBook: React.FC = () => {
	const [title, setTitle] = useState('');
	const [author, setAuthor] = useState('');
	const initialBookList: openlibBook[] = [];
	const [sendBooks, setSendBooks] = useState(initialBookList);
	const [showError, setShowError] = useState(false); // State to show error popup
	const router = useRouter();
	const [bookStatus, setBookStatus] = useState('Want to Read');

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		const x = await getBooks(title, author);
		setSendBooks(x || []);
	};

	const navigateToLibrary = () => {
		router.push('/'); // Navigate back to library page
	};

	return (
		<div>
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

					<div className={styles.formGroup}>
						<label htmlFor="status">Status</label>
						<select
							id="status"
							value={bookStatus}
							onChange={(e) => setBookStatus(e.target.value)}
						>
							<option value="Want to Read">Want to Read</option>
							<option value="Reading">Reading</option>
							<option value="Read">Read</option>
						</select>
					</div>

					<button type="submit" className={styles.submitButton}>Search For Books!</button>
				</form>
				<button
					style={libraryButtonStyles}
					onClick={navigateToLibrary}
				>
					Back to Library
				</button>
			</div>
			<div>
				<SearchBooks bookList={sendBooks} />
			</div>
			{/* Error Popup */}
			{showError && (
				<div className={styles.errorPopup}>
					<div className={styles.errorContent}>
						<p>Book Not Found. Please try again.</p>
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
