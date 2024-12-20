
import { authConfig } from "./auth.config";
import NextAuth, { CredentialsSignin } from "next-auth";
import  CredentialsProvider  from "next-auth/providers/credentials";
import User from "./models/userSchema";
import connectMongoDB from "./libs/mongodb";
import bcrypt from "bcryptjs";

export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut
} = NextAuth({
    ...authConfig,
    providers: [
	CredentialsProvider({
	    credentials: {
			email: {},
			password: {}
	    },
	    async authorize(credentials) {
			if (!credentials) {
				return null;
			} else {
				try {
					connectMongoDB();
					const user = await User.findOne({ email: credentials.email }).lean();
					if (user) {
						const isMatch = await bcrypt.compare(credentials.password as string, user.password);
						if (isMatch) {
							return {
								id: user._id.toString(),
								email: user.email,
								name: user.firstname,
								image: user.imagelink	    
							};
						} else {
							console.log("email or password not correct");
							return null;
						}
					} else {
						console.log("the user was not found");
						return null;
					}
				} catch (error: any){
					console.log("an error occured: ", error);
					return null;
				}
			}
	    }
	})
    ]
});
 
