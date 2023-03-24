import Link from 'next/link';
import '../assets/styles/app.css';
import '../assets/styles/globals.css';
import { Logo } from '../components/Icons';
import TopNotification from '../components/TopNotification';

export default function RootLayout({ children }: any) {
   return (
      <html lang="en">
         <body className="overflow-x-hidden bg-accent-light flex gap-6 min-h-screen p-6">
            <div className="sidebar w-1/6 border border-red-600">
               <Logo className="mx-auto w-10" />

               <div className="quick-links">
                  <Link href="">All bookmarks</Link>
                  <Link href="">Most used</Link>
                  <Link href="">Saved to later</Link>
               </div>
            </div>
            <main className="bg-white flex-1 rounded-3xl">
               <TopNotification type='warning'>
                  Remember that you are not logged, all the changes will be save at your browser cache.
               </TopNotification>
               {children}
            </main>
         </body>
      </html>
   );
}
