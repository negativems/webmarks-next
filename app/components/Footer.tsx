import Link from 'next/link';
import { BuyMeACoffeIcon, FooterCurve, Logo } from './Icons';

export default function Footer(): JSX.Element {
   return (
      <footer className="bg-accent-light relative overflow-hidden">
         <div className="container text-center mx-auto grid grid-cols-12 p-10 mb-10 relative z-10">
            <div className="about col-span-3">
               <h3 className="text-center">About</h3>
               <div className="text">
                  <p>This website is part of my final project of my degree, was made using NextJS.</p>
               </div>
            </div>
            <div className="logo flex flex-col gap-5 items-center col-span-6">
               <h2 className="text-2xl font-extrabold">WEBMARKS</h2>
               <Logo />
            </div>
            <div className="coffe col-span-3 flex flex-col items-center gap-5">
               <h3>Buy me a coffe</h3>
               <p>Please consider buy me a coffe if you think it deserves it.</p>

               <Link href="https://www.buymeacoffee.com/mohamedbh" className="font-bold" target="_blank" rel="noreferrer">
                  <BuyMeACoffeIcon />
               </Link>
            </div>
         </div>
         <FooterCurve />
      </footer>
   );
}
