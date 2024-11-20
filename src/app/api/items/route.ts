import connectMongoDB from "@/libs/mongodb";
import Item from "@/models/itemSchema";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    try {
        // Connect to MongoDB
        await connectMongoDB();

        // Retrieve all items from the collection
        const items = await Item.find();

        // Return the items as a JSON response
        return NextResponse.json({ items }, { status: 200 });
    } catch (error) {
        console.error("Error fetching items:", error);
        // Return an error response if something goes wrong
        return NextResponse.json({ message: "Failed to fetch items" }, { status: 500 });
    }
}

export async function POST(request: NextRequest) {
    try {
        // Parse the request body
        const { title, author } = await request.json();

        console.log("Received data:", { title, author });

        // Connect to the MongoDB database
        await connectMongoDB();

        // Create a new item in the database
        const newItem = await Item.create({ title, author });

        // Return a success response
        return NextResponse.json({ message: "Item added successfully", item: newItem }, { status: 201 } );
    } catch (error) {
        console.error("Error adding item:", error);
        // Return an error response if something goes wrong
        return NextResponse.json({ message: "Failed to add item" }, { status: 500 });
    }
}

