
'use client';
import Navbar from '@/app/components/navbar';
import SignUp from '@/app/components/signupform';
import { SessionProvider } from 'next-auth/react';

const Page = () => { 
    return (
	<div>
	    <Navbar />
	    <SignUp />
	</div>
    );
}

export default Page;
