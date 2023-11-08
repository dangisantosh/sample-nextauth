import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import axios from "axios"; // Import axios with ES6 syntax

async function gettoken(loggerEmail) {
  try {
    const response = await axios.post("http://3000/api/authtoken", {
      loggerEmail: loggerEmail,
    });

    if (response.data.valid) {
      return true; // Token is valid
    }
  } catch (error) {
    // Handle errors or invalid tokens
  }

  return false; // Token is invalid
}

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn(user, account, profile) {
      const loggerEmail = user.email; 

      
      const response = await gettoken(loggerEmail);

      if (response) {
       console.log(response);
      }

      // Return true to allow the sign-in or false to prevent it
      return true;
    },
  },
});
