
import mongoose, { Schema, Document, Model } from "mongoose";

interface IItem extends Document {
    title: string;
    author: string;
    image: string;
    owner: string;
    status: string;
}

const bookSchema = new Schema<IItem>({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
	    required: true
    },
    image: {
        type: String,
        required: true
    },
    owner: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
})

const Book: Model<IItem> = mongoose.models.Book || mongoose.model<IItem>("Book", bookSchema);
export default Book;
