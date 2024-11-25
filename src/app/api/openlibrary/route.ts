
import { NextResponse, NextRequest } from "next/server";;

const OPEN_LIBRARY_API_URL = "https://openlibrary.org/search.json?fields=key,title,author_name,editions,editions.key&";

export async function POST(request: NextRequest) {
    const {bookTitle, bookAuthor} = await request.json();
    return await fetch(OPEN_LIBRARY_API_URL + "title=" + bookTitle + "&author=" + bookAuthor);
}




