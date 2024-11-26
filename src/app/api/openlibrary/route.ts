
import { NextResponse, NextRequest } from "next/server";;

const OPEN_LIBRARY_API_URL = "https://openlibrary.org/search.json?fields=key,title,author_name,editions,editions.key&";

interface simplifiedBook {
    title: string,
    author: string,
    image: string
}

interface simplifiedResponse {
    booklist: simplifiedBook[]    
}


export async function POST(request: NextRequest) {
    const {bookTitle, bookAuthor} = await request.json();
    const response = await fetch(OPEN_LIBRARY_API_URL + "title=" + bookTitle + "&author=" + bookAuthor);
    const jsonfromresponse = await response.json();
    let stringjson = JSON.stringify(jsonfromresponse);
    let reparsed = JSON.parse(stringjson);
    let parsed = reparsed.docs.map((x: any) => {
        const key: string = x['editions']['docs'][0]['key'];
        const book: simplifiedBook = {
            title: x.title,
            author: x.author_name[0],
            image: "https://covers.openlibrary.org/b/olid/" + (key === undefined ? "" : key).replace("/books/", "") + "-M.jpg"
        } 
        return book;
    });
    let newresponse: simplifiedResponse = { booklist: parsed };
    return NextResponse.json( newresponse, { status: 200 });
}




