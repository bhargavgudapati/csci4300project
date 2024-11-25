
import { NextResponse, NextRequest } from "next/server";
import { authConfig } from "./auth.config";
import NextAuth from "next-auth";

const { auth } = NextAuth(authConfig);

export async function middleware(request: any) {
    const reqURL = new URL(request.url);

    const session = await auth();
    const isAuthenticated = session?.user ? true : false;

    console.log(`User authenticated: ${isAuthenticated}, Path: ${reqURL.pathname}`);
    if (!isAuthenticated && (reqURL.pathname === "/" || reqURL.pathname === "/addbook")) {
        return NextResponse.redirect(new URL("/login", reqURL));
    }
    return NextResponse.next();
}

export const config = {
    matcher: ["/", "/addbook"],
};