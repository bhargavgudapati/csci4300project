import mongoose, { Schema, Document, Model } from "mongoose";

interface IBook extends Document {
    title: string;
    author: string;
}

const bookSchema = new Schema<IBook> ({
    title: { type: String, required: true }, 
    author: { type: String, required: true }, 
});

const Book: Model<IBook> = mongoose.models.Item || mongoose.model<IBook>("Item", bookSchema);
export default Book;