



async function getBooks(bookTitle: string, bookAuthor: string) {
    const response = await fetch("/api/openlibrary", {
        method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
            bookAuthor,
            bookTitle
		})
    });
}

const SearchBooks: React.FC<{}> = () => {

    return (
        <div>
            hello
        </div>
    );
}