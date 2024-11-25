
import styles from './navbar.module.css';
import React from 'react';
import SignOutButton from './signoutbutton';
import { SessionProvider, useSession } from "next-auth/react";

const BaseNavbar: React.FC<{}> = () => {
    const { data, status } = useSession();
    if (status == "authenticated") {
	const firstname = data?.user?.name;
	return (
	    <nav className={`${styles.nav}`}>
						 NovelNotes
						 Welcome, {firstname}!
		<SignOutButton />
	    </nav>
	);
    } else {
	return (
	    <nav className={`${styles.navloggedout}`}>
							  NovelNotes
	    </nav>
	);
    }
}

const Navbar: React.FC<{}> = () => {    
    return (
	<div>
	    <SessionProvider>
		<BaseNavbar />
	    </SessionProvider>
	</div>
    );
}

export default Navbar;
