'use client';

import React from 'react';
import styles from './components/login.module.css'; // Import the CSS module

const LoginPage: React.FC = () => {
    return (
        <div className={styles['login-page']}>
            <h1>NovelNotes</h1>
            
            {/* Container for form fields */}
            <div className={styles['form-container']}>
                <form>
                    <label>Username</label>
                    <input type="text" placeholder="Enter username" />
                    <label>Password</label>
                    <input type="password" placeholder="Enter password" />
                    <button type="submit">Sign In</button>
                </form>
            </div>

            <p>Your personal library, organized and noted</p>

          
            <button className={styles['sign-up-btn']} onClick={() => alert("Redirect to Sign Up")}>
                Sign Up
            </button>
        </div>
    );
};

export default LoginPage;