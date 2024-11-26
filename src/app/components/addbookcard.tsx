
import Image from "next/image"

interface AddBookCardProps {
    title: string,
    author: string,
    image: string
}

const AddBookCard: React.FC<AddBookCardProps> = ({ title, author, image }) => {

    const handleClick = () => {
        console.log("");
    }

    return (
        <div>
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