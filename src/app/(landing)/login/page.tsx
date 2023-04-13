'use client';
import { GithubIcon, GoogleIcon } from '@components/Icons';
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import Link from 'next/link';
import { useState } from 'react';

export default async function Page() {
   const [supabase] = useState(() => createBrowserSupabaseClient());

   const handleSignUp = async () => {
      const { error } = await supabase.auth.signUp({
         email: document.getElementById('email').value,
         password: document.getElementById('password').value
      });

      if (error) {
         alert(error.message);
      }
   };

   const handleLogin = async () => {
      const { error } = await supabase.auth.signUp({
         email: document.getElementById('email').value,
         password: document.getElementById('password').value
      });

      if (error) {
         alert(error.message);
      }
   };

   const handleGithubLogin = async () => {
      const { error } = await supabase.auth.signInWithOAuth({
         provider: 'github'
      });

      if (error) {
         alert(error.message);
      }
   };

   const handleLogout = async () => {
      await supabase.auth.signOut();
   };

   return (
      <main className="container p-0 my-10">
         <form className="bg-white shadow-solid-xl flex flex-col w-[500px] p-10 rounded-2xl mx-auto" action='#' onSubmit={
            (e) => {
               e.preventDefault();
            }
         }>
            <header className="text-center">
               <span className="text-2xl font-bold block mb-3">Login</span>
               <span className="block w-1/2 mx-auto mb-10">Enter your details to get sign in to your account</span>
            </header>
            <div className="content mb-10 flex flex-col gap-5">
               <input type="text" placeholder="Email" id="email" className="block w-full p-2 border border-gray-400 rounded-md" />
               <input type="password" placeholder="Password" id="password" className="block w-full p-2 border border-gray-400 rounded-md" />
               <button type="submit" className="block bg-accent w-full p-3 hover:bg-accent-dark duration-300 rounded-md">Sign in</button>
            </div>
            <footer className="text-center">
               <div className="other-logins flex flex-col gap-5">
                  <span>Or sign in with</span>
                  <div className="loggins flex justify-between text-white font-bold">
                     <Link href="/api/auth/callback/google" className="google-loggin bg-red-600 py-3 px-5 flex gap-5 rounded-md items-center hover:bg-red-700">
                        <GoogleIcon />
                        <span>Google</span>
                     </Link>
                     <button className="github-loggin bg-gray-700 py-3 px-5 flex gap-5 rounded-md items-center hover:bg-gray-800 shadow-solid-md" onClick={handleGithubLogin}>
                        <GithubIcon className="invert" />
                        <span>GitHub</span>
                     </button>
                  </div>
                  <span className="mt-5">Don&#39;t have an account? <Link href="register" className="font-bold">Register now</Link></span>
               </div>
            </footer>
         </form>
      </main>
   );
}
