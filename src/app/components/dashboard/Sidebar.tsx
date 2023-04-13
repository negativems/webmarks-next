'use client';
import { Clock, ListBulletIcon, Logo, NumberedSquare } from '@components/Icons';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Sidebar({ selectedPage = 0 }: { selectedPage?: number }) {
   useEffect(() => {
      const links = document.querySelectorAll('.quick-links a');
      links.forEach((link, index) => {
         link.classList.remove('bg-accent', 'font-semibold');
         if (index === selectedPage) {
            link.classList.add('bg-accent', 'font-semibold');
         }
      });
   }, [selectedPage]);

   return (
      <div className="sidebar w-1/6">
         <Logo className="mx-auto w-10" />

         <div className="quick-links flex flex-col mt-10 gap-5">
            <Link href="/dashboard" className="p-5 hover:bg-accent flex gap-5 items-center rounded-lg">
               <ListBulletIcon className="w-5"/>
               <span>All bookmarks</span>
            </Link>
            <Link href="/dashboard/most-used" className="p-5 hover:bg-accent flex gap-5 items-center rounded-lg">
               <Clock className="w-5"/>
               <span>Most used</span>
            </Link>
            <Link href="/dashboard/later" className="p-5 hover:bg-accent flex gap-5 items-center rounded-lg">
               <NumberedSquare number={3} className="w-5"/>
               <span>Saved to later</span>
            </Link>
         </div>
      </div>
   );
};
