
"use client";

import AddBookCard from "./addbookcard";

interface openlibBook {
    title: string,
    author: string,
    image: string
}

interface SearchBooksProps {
    bookList: openlibBook[]
}

const SearchBooks: React.FC<SearchBooksProps> = ({bookList}) => {
    
    return (
        <div>
            {bookList.map((x) => (<AddBookCard title={x.title} author={x.author} image={x.image} key={Math.random()} />))}
        </div>
    );
}

export default SearchBooks;