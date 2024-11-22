import connectMongoDB from "@/libs/mongodb";
import Item from "@/models/itemSchema";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import axios from "axios";

const OPEN_LIBRARY_API_URL = "https://openlibrary.org/search.json";

export async function GET() {
  await connectMongoDB();
  const items = await Item.find();
  return NextResponse.json({ items });
}

export async function POST(request: NextRequest) {
  const { title, author } = await request.json();

  // Validate input
  if (!title || !author) {
    return NextResponse.json({ message: "Title and author are required" }, { status: 400 });
  }

  await connectMongoDB();

  try {
    // Query Open Library API
    const response = await axios.get(OPEN_LIBRARY_API_URL, {
      params: { title, author },
    });

    const books = response.data.docs;

    if (books && books.length > 0) {
      // Book found in Open Library
      const book = books[0]; // Use the first result
      console.log("Book found in Open Library:", book);

      // Save the book to MongoDB
      const newItem = await Item.create({
        title,
        author,
        openLibraryId: book.key, // Save Open Library's unique key for the book
      });

      return NextResponse.json(
        { message: "Book added successfully", item: newItem },
        { status: 201 }
      );
    } else {
      // Book not found in Open Library
      return NextResponse.json({ message: "Book not found in Open Library" }, { status: 404 });
    }
  } catch (error: any) {
    console.error("Error querying Open Library API:", error.message);
    return NextResponse.json(
      { message: "Error querying Open Library API", error: error.message },
      { status: 500 }
    );
  }
}
