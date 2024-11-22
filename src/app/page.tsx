"use client";

import React, { useEffect, useState } from "react";
import Library from "./components/library"; // Adjust path based on your structure
import { Book } from "./components/bookinterface"; // Ensure this path points to your shared interface

const Page: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]); // Initialize as an empty array
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch books from the API
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("/api/items"); // Adjust endpoint if necessary
        if (!response.ok) {
          throw new Error("Failed to fetch books");
        }
        const data = await response.json();
        setBooks(data.items || []); // Ensure books is always an array
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