
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
        let key: string = "";
        try {
            key = "https://covers.openlibrary.org/b/olid/" + (x['editions']['docs'][0]['key']).replace("/books/", "") + "-M.jpg";
        } catch (error: any) {
            key = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.S1Acr290KfA4gxDLDvKojwHaE8%26pid%3DApi&f=1&ipt=ffcca1b76c3d5bdf8418192565d7ed2353d5fd72f61c1b124f307dffe3c8e715&ipo=images"
        }
        const book: simplifiedBook = {
            title: x.title,
            author: x.author_name[0],
            image: key
        } 
        return book;
    });
    let newresponse: simplifiedResponse = { booklist: parsed };
    return NextResponse.json( newresponse, { status: 200 });
}




