'use client';
import Login from '@components/login';
import SupabaseProvider from 'app/providers/supabase-provider';

export default function Page() {
   return (
      // <main className="container p-0 my-10">
      //    <form className="bg-white shadow-solid-xl flex flex-col w-[500px] p-10 rounded-2xl mx-auto">
      //       <header className="text-center">
      //          <span className="text-2xl font-bold block mb-3">Login</span>
      //          <span className="block w-1/2 mx-auto mb-10">Enter your details to get sign in to your account</span>
      //       </header>
      //       <div className="content mb-10 flex flex-col gap-5">
      //          <input type="text" placeholder="Email" className="block w-full p-2 border border-gray-400 rounded-md" />
      //          <input type="password" placeholder="Password" className="block w-full p-2 border border-gray-400 rounded-md" />
      //          <button type="submit" className="block bg-accent w-full p-3 hover:bg-accent-dark duration-300 rounded-md" onClick={() => signIn()}>Sign in</button>
      //       </div>
      //       <footer className="text-center">
      //          <div className="other-logins flex flex-col gap-5">
      //             <span>Or sign in with</span>
      //             <div className="loggins flex justify-between">
      //                <Link href="/api/auth/callback/google" className="google-loggin bg-red-300 py-3 px-5 flex gap-2 rounded-md">
      //                   <GoogleIcon />
      //                   <span>Google</span>
      //                </Link>
      //                <Link href="/api/auth/callback/github" className="github-loggin bg-black py-3 px-5 flex gap-2 rounded-md text-white hover:bg-gray-900 shadow-solid-md">
      //                   <GithubIcon />
      //                   <span>GitHub</span>
      //                </Link>
      //             </div>
      //             <span className="mt-5">Don&#39;t have an account? <Link href="register" className="font-bold">Register now</Link></span>
      //          </div>
      //       </footer>
      //    </form>
      // </main>
      <SupabaseProvider>
         <Login />
      </SupabaseProvider>
   );
}
