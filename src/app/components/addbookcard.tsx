
"use client";
import { useSession } from "next-auth/react"
import Image from "next/image"
import { useRouter } from "next/navigation";
import styles from './addbookcard.module.css';

interface AddBookCardProps {
    title: string,
    author: string,
    image: string
}

const AddBookCard: React.FC<AddBookCardProps> = ({ title, author, image}) => {
    let { data, status } = useSession();
    let router = useRouter();
    const addToDatabase = async (title: string, author: string, image: string) => {
        console.log("the id is", data?.user?.email);
		let response = await fetch("/api/books", {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				title,
                author,
                image,
                owner: data?.user?.email,
                status: "Want to Read"
			})
        });
        return await response.json();
    }

    const handleClick = async () => {
        await addToDatabase(title, author, image);
        router.push("/");
    }

    return (
        <div className={styles.addBookCard}>
            <Image
                alt="book"
                src={image}
                width="200"
                height="200"
            />
            <h3>{title}</h3>
            <p>{author}</p>

            <button onClick={handleClick}>Add This Book</button>
        </div>
    );
}

export default AddBookCard;