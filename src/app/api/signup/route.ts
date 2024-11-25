
import connectMongoDB from "@/libs/mongodb";
import User from "@/models/userSchema";
import bcrypt from "bcryptjs";
import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
    await connectMongoDB();
    const { firstname, username, email, password } = await request.json();
    let hashedPassword = bcrypt.hash(password);
    await User.create({ firstname, username, email, password: hashedPassword });
    return NextResponse.json( { message: "added the user" }, { status: 200 });
}
