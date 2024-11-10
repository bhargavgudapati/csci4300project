import React from 'react';
import styles from '../components/login.module.css';

const LoginPage: React.FC = () => {
    return (
        <div className={styles.loginPage}>
            <h1>NovelNotes</h1>
            
            {/* Container for form fields */}
            <div className={styles.formContainer}>
                <form>
                    <label>Username</label>
                    <input type="text" placeholder="Enter username" />
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