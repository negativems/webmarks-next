'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import HeaderLogo from './HeaderLogo';
import { LogginIcon } from './Icons';
import { useSession } from 'next-auth/react';

const notLogged = (
   <div className="login flex items-center flex-1 justify-end">
      <Link href="/login" className="login font-bold py-3 px-5 rounded-xl bg-accent-light hover:bg-accent-dark">
         <LogginIcon className="mr-3 inline"/>
         <span>LOGIN</span>
      </Link>
   </div>
);

const logged = (username: string) => (
   <div className="login flex items-center flex-1 justify-end">
      <Link href="/profile" className="login font-bold py-3 px-5 rounded-xl bg-accent-light hover:bg-accent-dark">
         <span>Logged as {username}</span>
      </Link>
   </div>
);

export default function Header(): JSX.Element {
   const pathname = usePathname();
   const currentPath = pathname === '/' ? 0 : pathname === '/features' ? 1 : 2;
   const headerLinks = [
      { href: '/', label: 'HOME' },
      { href: '/features', label: 'FEATURES' },
      { href: '/about', label: 'ABOUT' }
   ] as any;
   headerLinks[currentPath].active = true;

   const { data: session } = useSession();

   return (
      <header className="flex items-center bg-transparent relative z-20">
         <div className="container mx-auto flex justify-between items-center h-full">
            <div className="logo-container flex-1 relative h-full">
               <HeaderLogo />
            </div>
            <div className="navbar flex gap-12 flex-1">
               {headerLinks.map((link: any) => (
                  <Link key={link.href} href={link.href} className={(link.active === true ? 'active ' : ' ') + 'w-full text-center'}>{link.label}</Link>
               ))}
            </div>
            {session ? logged(session.user.name) : notLogged}
         </div>
      </header>
   );
}
