
'use server';
import { signIn, signOut } from "@/auth";

export async function doCredentialsLogin(email: string, password: string) {
    try {
        const response = await signIn("credentials", { email, password, redirect: false });
        return response;
    } catch (error: any) {
        throw error;
    }
}

export async function doLogout() {
    await signOut({ redirectTo: "/login" });
}