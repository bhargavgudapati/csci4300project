
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
	<div>
		 NOTE: THE CSS SHOULD BE FIXED HERE, VERY UGLY RN.
	    <div>
		<form onSubmit={onSignupSubmit}>
		    <label>Username</label>
		    <input type="text" placeholder="enter username here..." onChange={e => setNewUser(e.target.value)}/>
		    <label>First Name</label>
		    <input type="text" placeholder="enter your first name here..." onChange={e => setName(e.target.value)}/>
		    <label>Email</label>
		    <input type="email" placeholder="enter an email here..." onChange={e => setEmail(e.target.value)}/>
		    <label>Password</label>
		    <input type="password" placeholder="enter password here..." onChange={e => setPassword(e.target.value)}/>
		    <button type="submit">Sign Up!</button>
		</form>
	    </div>
	</div>
    );
}

export default SignUp;
