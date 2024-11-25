
import styles from './signoutbutton.module.css';
import React from 'react';
import { useRouter } from 'next/navigation';

const SignOutButton: React.FC<{}> = () => {
    const router = useRouter();
    
    const handleSignOut = () => {
	router.push("/login");
    };

    return (
	<button onClick={handleSignOut} className={`${styles.signoutbutton}`}>Sign Out</button> 
    );
};


export default SignOutButton;
