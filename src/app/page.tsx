
'use client';

import React, { useState, createContext, useContext } from 'react';
import Library from './components/library';
import Navbar from './components/navbar';
/*
import MyLibraryButton from './components/mylibrarybutton';
 */

interface Book {
	id: number;
	title: string;
	author: string;
}

//const [isAuthenticated, setIsAuthenticated] = useState(true); // Change to `false` when ready for auth
//const loggedInContext = createContext(isAuthenticated);

const bookList: Book[] = [
    { id: 1, title: "The Shining", author: "Stephen King" },
    { id: 2, title: "A Court of Thorns and Roses", author: "Sarah J. Maas" },
    { id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald" }
];

const Page: React.FC = () => {
    return (
	<div>
	    <Navbar />
	    <Library books={bookList} />
	</div>
    );
};

export default Page;

