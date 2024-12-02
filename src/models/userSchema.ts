
import mongoose, { Schema, Document, Model } from "mongoose";

interface IItem extends Document{
    firstname: string,
    username: string,
    imagelink: string,
    email: string,
    password: string
}


const userSchema = new Schema<IItem>({
    firstname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    imagelink: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

const User: Model<IItem> = mongoose.models.User || mongoose.model<IItem>("User", userSchema);

export default User;
