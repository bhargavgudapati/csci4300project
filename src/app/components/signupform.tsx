
'use client';
import React, { useState } from 'react';
import styles from './signupform.module.css';
import { useRouter } from 'next/navigation';

//creates new user and adds to the database
async function createUser(username: string, password: string, email: string, firstname: string) {
    const response = await fetch('api/signup', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			firstname,
			username,
			email,
			password
		})
    });
    return await response.json();
}

const SignUp: React.FC<{}> = () => {
	const router = useRouter();
    
    let [newUser, setNewUser] = useState("");
    let [newPassword, setPassword] = useState("");
    let [newEmail, setEmail] = useState("");
    let [newName, setName] = useState("");

    const onSignupSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("creating new user");
		createUser(newUser, newPassword, newEmail, newName)
		console.log("success creating");
		router.push('/login');
    }

    return (
        <div className={styles['form-container']}>
            <form className={styles['signup-form']} onSubmit={onSignupSubmit}>
                <h2>Sign Up</h2>
                <label>Username</label>
                <input
                    type="text"
                    placeholder="Enter username here"
                    onChange={(e) => setNewUser(e.target.value)}
                />
                <label>First Name</label>
                <input
                    type="text"
                    placeholder="Enter your first name"
                    onChange={(e) => setName(e.target.value)}
                />
                <label>Email</label>
                <input
                    type="email"
                    placeholder="Enter an email here"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label>Password</label>
                <input
                    type="password"
                    placeholder="Enter password here"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Sign Up!</button>
            </form>
        </div>
    );
}

export default SignUp;
