import Link from 'next/link';
import HeaderAuth from './HeaderAuth';
import HeaderLogo from './HeaderLogo';

export default function Header() {
   const pathname = '/';
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
            <HeaderAuth/>
         </div>
      </header>
   );
}
