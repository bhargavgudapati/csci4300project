
import { auth } from "@/auth";
import connectMongoDB from "@/libs/mongodb";
import Book from "@/models/bookSchema";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function GET() {
    await connectMongoDB();
    const session = await auth();
    console.log("server says session email is: ", session?.user?.email);
    const items = await Book.find({ owner: session?.user?.email });
    return NextResponse.json({ items });
}

export async function POST(request: NextRequest) {
    const { title, author, image, owner, status } = await request.json();
    // Validate input
    if (!title || !author) {
	return NextResponse.json({ message: "Title and author are required" }, { status: 400 });
    } else {
	await connectMongoDB();
	Book.create( { title, author, image, owner, status} );
	return NextResponse.json( { message: "added the book" }, { status: 200 });
    }
}
