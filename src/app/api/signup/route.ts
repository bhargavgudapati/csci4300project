
import connectMongoDB from "@/libs/mongodb";
import User from "@/models/userSchema";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
    await connectMongoDB();
    const { firstname, username, email, password } = await request.json();
    await User.create({ firstname, username, email, password });
    return NextResponse.json( { message: "added the user" }, { status: 200 });
}
