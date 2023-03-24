import { type NextAuthOptions } from 'next-auth';
import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
   providers: [
      CredentialsProvider({
         name: 'Credentials',
         credentials: {
            username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
            password: { label: 'Password', type: 'password' }
         },
         async authorize(credentials, req) {
            const { username, password } = credentials as any;
            const res = await fetch('http://localhost:3000/api/auth/login', {
               method: 'POST',
               headers: { 'Content-Type': 'application/json' },
               body: JSON.stringify({ username, password })
            });

            const user = await res.json();

            if (res.ok && user) {
               return user;
            } else {
               throw new Error(user.message);
            }
         }
      })
   ]
};

export default NextAuth(authOptions);
