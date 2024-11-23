"use client";

import React, { useEffect, useState } from "react";
import Library from "./components/library";
import { Book } from "./components/bookinterface";

const Page: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch books from books API
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("/api/items");
        if (!response.ok) {
          throw new Error("Failed to fetch books");
        }
        const data = await response.json();
  
        // Add unique IDs if missing
        const booksWithId = data.items.map((book: any, index: number) => ({
          ...book,
          id: book.id || `book-${index}`,
        }));
  
        setBooks(booksWithId);
        setLoading(false);
      } catch (err: any) {
        setError(err.message);
        setLoading(false);
      }
    };
  
    fetchBooks();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return <Library books={books} />;
};

export default Page;