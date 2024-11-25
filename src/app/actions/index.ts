
'use server';
import { signIn, signOut } from "@/auth";

export async function doCredentialsLogin(email: string, password: string) {
    return await signIn("credentials", { email, password, redirect: false });
}

export async function doLogout() {
    await signOut({ redirectTo: "/login" });
}