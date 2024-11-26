
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
        const booksReturned = await response.json();
        setBooks(booksReturned.items || []);
        setLoading(false);
      } catch (err: any) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchBooks();
  }, []);

  const deleteBook = async (id: string) => {
    console.log("the id is " + id);
    try {
      const response = await fetch("/api/books/" + id, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete book");
      }

      setBooks((prevBooks) => prevBooks.filter((book) => book._id !== id));
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  const handleAddBook = () => {
    router.push("/addbook");
  };

  const updateBookStatus = (id: string, newStatus: string) => {
    setBooks((prevBooks) =>
      prevBooks.map((book) =>
        book._id === id ? { ...book, status: newStatus } : book
      )
    );
  };

  if (error) return <div>Error: {error}</div>;
  return (
    <div>
      <Navbar />
      <Library
        books={books}
        deleteBook={deleteBook}
        handleAddBook={handleAddBook}
        updateBookStatus={updateBookStatus} // Pass this to Library
      />
    </div>
  );
}

export default Page;
