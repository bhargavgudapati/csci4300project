
'use client';
import React, { useState } from 'react';
import styles from '../components/login.module.css';
import { useRouter } from 'next/navigation';
import { signIn, signOut } from "@/auth";

async function doCredentialsLogin(email: string, password: string) {
    return await signIn("credentials", { email, password, redirect: false });
}

const LoginPage: React.FC = () => {

    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    const router = useRouter();
    
    const onLoginSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log("signing in...");
		await doCredentialsLogin(email, password);
		console.log("did the sign in");
		router.push("/");
    }

    const onSignupClick = () => {
	router.push("/signup");
    }

    return (
	<div>
            <div className={styles.loginPage}>
		<p><b>Enter your credentials here:</b></p>
		<div className={styles.formContainer}>
		    <form onSubmit={onLoginSubmit}>
			<label>Email</label>
			<input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Enter email" />                  
			<label>Password</label>
			<input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Enter password" />
			<button type="submit">Sign In</button>
                    </form>
		</div>

		<p>Your personal library, organized and noted</p>

		<button
                    className={styles.signUpBtn}
                    onClick={onSignupClick}
		>
                     Sign Up
		</button>
            </div>
	</div>
    );
};

export default LoginPage;
