
import styles from './navbar.module.css';
import React from 'react';
import SignOutButton from './signoutbutton';

const Navbar: React.FC<{}> = () => {
    return (
	<div>
	    <nav className={`${styles.nav}`}>
		     NovelNotes<SignOutButton />
	    </nav>
	</div>
    );
}

export default Navbar;
