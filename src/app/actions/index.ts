
'use server';
import { signIn, signOut } from "@/auth";

async function doCredentialsLogin(formdata: FormData) {
    const email = formdata.get("email");
    const password = formdata.get("password");
    return await signIn("credentials", { email, password, redirect: false });
}

