import Link from 'next/link';
import { LogginIcon, Logo } from './Icons';

export default function Header(): JSX.Element {
   return (
      <header className="flex items-center">
         <div className="container mx-auto flex justify-between items-center h-full">
            <div className="logo-container flex items-center gap-5 flex-1">
               <Logo className="drop-shadow-2xl h-full" />
               <span className="logo-text">WEBMARKS</span>
            </div>
            <div className="navbar flex gap-20 flex-1">
               <Link href="/" className="active">HOME</Link>
               <Link href="/features">FEATURES</Link>
               <Link href="/about">ABOUT</Link>
            </div>
            <div className="login flex items-center flex-1 justify-end">
               <Link href="/account" className="login font-bold py-3 px-5 rounded-xl bg-accent-light hover:bg-accent-dark">
                  <LogginIcon className="mr-3 inline"/>
                  <span>LOGIN</span>
               </Link>
            </div>
         </div>
      </header>
   );
}
