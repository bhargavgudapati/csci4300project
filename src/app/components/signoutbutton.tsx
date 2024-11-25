
"use client";
import styles from './signoutbutton.module.css';
import React from 'react';
import { useRouter } from 'next/navigation';
import { doLogout } from '../actions';

const SignOutButton: React.FC<{}> = () => {
    const router = useRouter();
    
    const handleSignOut = () => {
        doLogout();
    };

    return (
	    <button onClick={handleSignOut} className={`${styles.signoutbutton}`}>Sign Out</button> 
    );
};


export default SignOutButton;
