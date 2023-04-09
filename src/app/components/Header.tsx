'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import HeaderLogo from './HeaderLogo';
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
      <Link href="/profile" className="login font-bold py-3 px-5 rounded-xl hover:bg-accent-light">
         <GithubIcon className="inline mr-3 bg-accent-light rounded-full p-2 box-content" color="black"/>
         <span className="h-full align-middle">Logged as {user.name}</span>
      </Link>
   </div>
);

export default function Header(): JSX.Element {
   const [user, setUser] = useState<any>(null);

   const pathname = usePathname();
   const currentPath = pathname === '/' ? 0 : pathname === '/features' ? 1 : 2;
   const headerLinks = [
      { href: '/', label: 'HOME' },
      { href: '/features', label: 'FEATURES' },
      { href: '/about', label: 'ABOUT' }
   ] as any;
   headerLinks[currentPath].active = true;

   return (
      <header className="flex items-center bg-transparent relative z-20">
         <div className="container mx-auto flex justify-between items-center h-full">
            <div className="logo-container flex-1 relative h-full">
               <HeaderLogo />
            </div>
            <div className="navbar flex gap-12 flex-1">
               {headerLinks.map((link: any) => (
                  <Link key={link.href} href={link.href} className={(link.active === true ? 'active ' : '') + 'w-full text-center'}>{link.label}</Link>
               ))}
            </div>
            {user ? logged(user) : notLogged}
         </div>
      </header>
   );
}
