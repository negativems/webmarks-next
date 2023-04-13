import createClient from 'lib/supabase-server';
import Link from 'next/link';
import { GithubIcon, LogginIcon } from './Icons';

const notLogged = (
   <div className="login flex items-center flex-1 justify-end">
      <Link href="/login" className="flex gap-3 font-bold py-3 px-5 rounded-xl bg-accent-light hover:bg-accent-dark">
         <LogginIcon className="inline"/>
         <span>LOGIN</span>
      </Link>
   </div>
);

const logged = (user: any) => (
   <div className="login flex items-center flex-1 justify-end text-xs">
      <Link href="/logout" className="login font-bold py-3 px-5 rounded-xl hover:bg-accent-light">
         <GithubIcon className="inline mr-3 bg-accent-light rounded-full p-2 box-content" color="black"/>
         <span className="h-full align-middle">Logged as {user.email}</span>
      </Link>
   </div>
);

export default async function HeaderAuth() {
   const supabase = createClient();
   const { data: { user } } = await supabase.auth.getUser();

   return user ? logged(user) : notLogged;
};
