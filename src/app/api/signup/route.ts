
import connectMongoDB from "@/libs/mongodb";
import User from "@/models/userSchema";
import { NextResponse, NextRequest } from "next/server";

const bcrypt = require("bcryptjs");

export async function POST(request: NextRequest) {
    await connectMongoDB();
    const { firstname, username, email, password } = await request.json();
    //let hashedPassword = bcrypt.hash(password);
    await User.create({ firstname, username, email, password });
    return NextResponse.json( { message: "added the user" }, { status: 200 });
}
