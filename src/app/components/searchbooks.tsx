
"use client";
import { useSession } from "next-auth/react";
import AddBookCard from "./addbookcard";
import { useRouter } from "next/router";

interface openlibBook {
    title: string,
    author: string,
    image: string
}

interface SearchBooksProps {
    bookList: openlibBook[],
}

const SearchBooks: React.FC<SearchBooksProps> = ({bookList}) => {
    return (
        <div>
            {bookList.map((x) => {
                return <AddBookCard title={x.title} author={x.author} image={x.image} key={Math.random()}/>
            })}
        </div>
    );
}

export default SearchBooks;