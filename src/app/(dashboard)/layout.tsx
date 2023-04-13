'use client';
import TopNotification from '@components/TopNotification';
import Dashboard from '@components/dashboard/Dashboard';
import Sidebar from '@components/dashboard/Sidebar';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import '../assets/styles/app.css';
import '../assets/styles/globals.css';

const DASHBOARD_PAGES = [
   '/dashboard',
   '/dashboard/most-used',
   '/dashboard/later'
];

export default function RootLayout({ children }: any) {
   const [showNotification, setShowNotification] = useState(false);
   useEffect(() => {
      setShowNotification(status === 'unauthenticated');
   }, [status]);

   const [selectedPage, setSelectedPage] = useState(0);

   // Set selectedPage based on the current route
   const path = usePathname();
   useEffect(() => {
      const currentPage = path;
      console.log(currentPage);

      const index = DASHBOARD_PAGES.indexOf(currentPage);
      if (index !== -1) {
         setSelectedPage(index);
      }
   }, [path]);

   return (
      <html lang="en">
         <body className="overflow-x-hidden bg-accent-light flex gap-6 min-h-screen p-6">
            {
               showNotification &&
            <TopNotification type='warning'>
               Remember that you are not logged, all the changes will be save at your browser cache.
            </TopNotification>
            }

            <Sidebar selectedPage={selectedPage} />
            <Dashboard>
               {children}
            </Dashboard>
         </body>
      </html>
   );
}
