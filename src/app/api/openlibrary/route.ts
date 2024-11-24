
import { NextResponse, NextRequest } from "next/server";;

const OPEN_LIBRARY_API_URL = "https://openlibrary.org/search.json?";

export async function GET(request: NextRequest) {
    const {bookTitle, bookAuthor} = await request.json();
    const response = await fetch(OPEN_LIBRARY_API_URL + "title=" + bookTitle + "&author=" + bookAuthor);
    return NextResponse.json( response.json(), { status: 200 });
}




