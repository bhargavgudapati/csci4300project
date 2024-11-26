
"use client";
import React, { useState } from 'react';
import styles from '../components/login.module.css';
import { useRouter } from 'next/navigation';
import { doCredentialsLogin } from '../actions';

const LoginPage: React.FC = () => {

    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    const router = useRouter();
    
    const onLoginSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log("signing in...");
		const credStatus = await doCredentialsLogin(email, password);
		if (credStatus != null) {
			router.push("/");	
		}
		console.log("did the sign in");
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
