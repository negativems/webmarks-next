'use client';
import SearchBar from '@components/dashboard/SearchBar';
import { Text } from '@tremor/react';
import Link from 'next/link';

const bookmarks = [
   {
      name: 'Google',
      url: 'https://google.com',
      tags: ['search', 'google'],
      color: 'orange'
   },
   {
      name: 'Facebook',
      url: 'https://facebook.com',
      tags: ['social', 'facebook'],
      color: 'blue'
   }
];

export default function MostUsed() {
   return (
      <div className="relative">
         <SearchBar />

         <div className="bookmarks mt-10 flex flex-wrap gap-4">
            {
               bookmarks.map(({ url, name, tags, color }, index) => (
                  <Link href={url} className="flex justify-between border rounded-xl w-full px-10 py-5 hover:bg-gray-100" key={index}>
                     <Text>{name}</Text>
                     <div className="tags flex gap-3">
                        {
                           tags.map((tag, index) => (
                              <Link href={'?tags=' + tag} className={`tag bg-${color}-300 rounded-lg px-3 py-1 text-xs`} key={index}>
                                 {tag}
                              </Link>
                           ))
                        }
                     </div>
                  </Link>
               ))
            }
         </div>
      </div>
   );
}
