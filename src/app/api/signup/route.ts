
import connectMongoDB from "@/libs/mongodb";
import User from "@/models/userSchema";
import { NextResponse, NextRequest } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(request: NextRequest) {
    await connectMongoDB();
    const { firstname, username, imagelink, email, password } = await request.json();
    let hashedPassword = await bcrypt.hash(password, 5);
    try {
        const result = await User.create({ firstname, username, imagelink, email, password: hashedPassword });
    } catch (error: any) {
        return NextResponse.json( { message: "there was an error", success: false }, { status: 404 });
    }
    return NextResponse.json( { message: "added the user", success: true }, { status: 200 });
}
