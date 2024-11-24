
import connectMongoDB from "@/libs/mongodb";
import Item from "@/models/itemSchema";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function GET() {
    await connectMongoDB();
    const items = await Item.find();
    return NextResponse.json({ items });
}

export async function POST(request: NextRequest) {
    const { title, author } = await request.json();

    // Validate input
    if (!title || !author) {
	return NextResponse.json({ message: "Title and author are required" }, { status: 400 });
    } else {
	await connectMongoDB();
	
    }
}
