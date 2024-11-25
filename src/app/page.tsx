"use client";

import React, { useEffect, useState } from "react";
import Library from "./components/library";
import { Book } from "./components/bookinterface";
import { useRouter } from "next/navigation";
import Navbar from "./components/navbar";

const Page: React.FC = () => {
    const [books, setBooks] = useState<Book[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
	const fetchBooks = async () => {
	    try {
		const response = await fetch("/api/books");
		if (!response.ok) {
		    throw new Error("Failed to fetch books");
		}
		const data = await response.json();
		setBooks(data.items || []);
		setLoading(false);
	    } catch (err: any) {
		setError(err.message);
		setLoading(false);
	    }
	};

	fetchBooks();
    }, []);

    const deleteBook = async (id: string) => {
	try {
	    const response = await fetch(`/api/books/${id}`, {
		method: "DELETE",
	    });

	    if (!response.ok) {
		throw new Error("Failed to delete book");
	    }

	    setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
	} catch (error) {
	    console.error("Error deleting book:", error);
	}
    };

    const handleAddBook = () => {
	router.push("/addbook");
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
	<div>
	    <Navbar />;
	    <Library books={books} deleteBook={deleteBook} handleAddBook={handleAddBook} />
	</div>
    );
}

export default Page;
