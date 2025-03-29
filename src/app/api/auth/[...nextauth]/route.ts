import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Call your API to verify the user
        const res = await fetch("http://localhost:4000/api/v1/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(credentials),
        });

        const user = await res.json();
        console.log("user in route", user);

        if (res.ok && user) {
          return user; // Must return an object with `id`, `name`, or `email`
        }

        return null; // Authentication failed
      },
    }),
  ],
  session: {
    strategy: "jwt" as const,
  },
  callbacks: {
    async session({ session, token }:any) {
      session.user = token.user as any; // Ensure TypeScript understands the structure
      return session;
    },
    async jwt({ token, user }:any) {
      if (user) {
        token.user = user; // Store the entire user object in JWT token
      }
      return token;
    },
  },  
  secret: process.env.NEXTAUTH_SECRET, // Store this in .env.local
  pages: {
    signIn: "/login", // Redirect to your login page
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
