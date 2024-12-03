
import connectMongoDB from "@/libs/mongodb";
import Book from "@/models/bookSchema";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import mongoose from "mongoose";

interface RouteParams {
  params: { id: string };
}

export async function GET(request: NextRequest, { params }: RouteParams) {
  const { id } = await params;
  await connectMongoDB();
  const item = await Book.findOne({ _id: id });
  return NextResponse.json({ item }, { status: 200 });
}

export async function PUT(request: NextRequest, { params }: RouteParams) {
  const { id } = await params;
  const { title: title, author: author, image: image, owner: owner, status: status } = await request.json();
  await connectMongoDB();
  await Book.findByIdAndUpdate(id, { title, author, image, owner, status });
  return NextResponse.json({ message: "Item Updated" }, { status: 200 });
}


export async function DELETE(
  req: Request,
  { params }: RouteParams
) {
  const { id } = await params;

  await connectMongoDB();

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return NextResponse.json({ message: "Invalid Book ID" }, { status: 400 });
  }

  try {
    const deletedItem = await Book.findByIdAndDelete(id);

    if (!deletedItem) {
      return NextResponse.json({ message: "Book not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Book deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting book:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}