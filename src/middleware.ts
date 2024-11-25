
import { NextResponse, NextRequest } from "next/server";
import { authConfig } from "./auth.config";
import NextAuth from "next-auth";

const { auth } = NextAuth(authConfig);

export async function middleware(request: any) {
    const nextURL= new URL(request.url);
    const session = await auth();
    const isAuthenticated = (session?.user) ? true : false;
    console.log("middleware", isAuthenticated, nextURL.pathname);
    
    const reqURL = new URL(request.url);
    if (!isAuthenticated && reqURL.pathname !=="/login" && reqURL.pathname !=="/signup") {
        console.log("laksdjflakdsjfkladsjflkajdflksajlkj");
	    return NextResponse.redirect(new URL("/login", request.url));
    } else {
	    return NextResponse.next();
    }
}

export const config = {
    matcher: [
	"/addbook",
    "/"
    ]
}
