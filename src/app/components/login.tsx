
'use client';
import React, { useState } from 'react';
import styles from '../components/login.module.css';

const LoginPage: React.FC = () => {

    let [user, setUser] = useState("");

    const onLoginSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("redirecting to " + user + "\'s page");
        console.log("signing in...");
    }

    return (
        <div className={styles.loginPage}>
            <h1>NovelNotes</h1>
            
            {/* Container for form fields */}
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
    );
};

export default LoginPage;
