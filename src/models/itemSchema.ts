import mongoose, { Schema, Document, Model } from "mongoose";

interface IItem extends Document {
    title: string;
    author?: string;
}

const itemSchema = new Schema<IItem>({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
    }
})

const Item: Model<IItem> = mongoose.models.Item || mongoose.model<IItem>("Item", itemSchema);
export default Item;