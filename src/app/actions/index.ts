
'use server';
import { signIn, signOut } from "@/auth";

export async function doCredentialsLogin(email: string, password: string) {
    try {
        const response = await signIn("credentials", { email, password, redirect: false });
        return response;
    } catch (error: any) {
        return null;
    }
}

export async function doLogout() {
    await signOut({ redirectTo: "/login" });
}