
'use client';
import React, { useState } from 'react';
import styles from '../components/login.module.css';
import Navbar from './navbar';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

async function doLogout() {
    const router = useRouter();
    console.log("logging out");
    router.push("/login");
    const x = () => {};
    await x();;
}

async function doLogin() {
    const router = useRouter();
}

const LoginPage: React.FC = () => {

    let [user, setUser] = useState("");

    const onLoginSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("redirecting to " + user + "\'s page");
        console.log("signing in...");
    }

    return (
	<div>
	    <Navbar />
            <div className={styles.loginPage}>            
		<div className={styles.formContainer}>
		    <form onSubmit={onLoginSubmit}>
			<label>Username</label>
			<input value={user} onChange={e => setUser(e.target.value)} type="text" placeholder="Enter username" />                  
			<label>Password</label>
			<input type="password" placeholder="Enter password" />
			<button type="submit">Sign In</button>
                    </form>
		</div>

		<p>Your personal library, organized and noted</p>

		<button
                    className={styles.signUpBtn}
                    onClick={() => alert("Redirect to Sign Up")}
		>
                     Sign Up
		</button>
            </div>
	</div>
    );
};

export default LoginPage;
