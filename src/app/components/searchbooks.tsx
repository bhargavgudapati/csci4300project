
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
    return (
        <div className={styles.addBookList}>
            {bookList.map((x) => {
                return <AddBookCard title={x.title} author={x.author} image={x.image} key={Math.random()}/>
            })}
        </div>
    );
}

export default SearchBooks;