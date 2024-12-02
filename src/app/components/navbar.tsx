
"use client";
import styles from './navbar.module.css';
import React from 'react';
import SignOutButton from './signoutbutton';
import { SessionProvider, useSession } from "next-auth/react";
import Image from 'next/image';

const BaseNavbar: React.FC<{}> = () => {
    const { data, status } = useSession();
    if (status == "authenticated") {
		const firstname = data?.user?.name;
		console.log(firstname);
		return (
			<nav className={`${styles.nav}`}>
				NovelNotes
				<span className={`${styles.leftside}`}>
					<span className={styles.loggedintext}>Welcome, {firstname}!</span>
					<Image 
						src={data.user?.image || "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.t8GsH1Q3v-NLfvTKIHIc3QHaHa%26pid%3DApi&f=1&ipt=d5d8bff4127c1c7164d65ac4d3e85fa773b3e347f05385139e39ef64dc91e543&ipo=images"}
						alt={"profile picture"}
						width="30"
						height="30"
						className={styles['profilepicture']}
					/>
					<SignOutButton />
				</span>
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
