
"use client";
import AddBookCard from "./addbookcard";
import styles from "./searchbooks.module.css";

interface openlibBook {
    title: string,
    author: string,
    image: string
}

interface SearchBooksProps {
    bookList: openlibBook[],
}

const SearchBooks: React.FC<SearchBooksProps> = ({bookList}) => {
    const books = bookList.map((x) => {
        return <AddBookCard title={x.title} author={x.author} image={x.image} key={Math.random()}/>
    });
    return (
        <div className={styles.addBookList}>
            {books.length > 0 ? books : <h2>No books were found.</h2>}
        </div>
    );
}

export default SearchBooks;