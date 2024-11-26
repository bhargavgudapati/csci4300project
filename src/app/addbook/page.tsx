
"use client";
import AddBook from '@/app/components/addbook';
import Navbar from '../components/navbar';

const Page: React.FC<{}> = () => {
    return (
	<div>
		<Navbar />
	    <AddBook />
	</div>
    );
}

export default Page;
