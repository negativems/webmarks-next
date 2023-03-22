import Link from 'next/link';
import { Logo } from './Icons';

export default function HeaderLogo(): JSX.Element {
   return (
      <Link href="/" className="inline-flex h-full items-center cursor-pointer hover:scale-105 transition ease-in-out">
         <Logo className="shadowed h-14 mr-4" />
         <span className="logo-text">WEBMARKS</span>
      </Link>
   );
}
