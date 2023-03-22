import Link from 'next/link';

export default function Hero(): JSX.Element {
   return (
      <div className="hero">
         <div className="container mx-auto flex justify-between relative z-10">
            <div className="left flex flex-col gap-20 flex-1">
               <h1 className="drop-shadow-solid-md">The simplest way to manage your bookmarks</h1>
               <div className="buttons">
                  <Link href="#" className="bg-accent-light px-6 py-3 rounded-lg shadow-solid-xl hover:bg-accent font-bold duration-150 hover:px-7 hover:py-4 active:bg-accent-dark focus:ring focus:bg-accent-light ring-accent-dark">Start now</Link>
               </div>
            </div>
            <div className="right flex-1 flex justify-end">
               <div className="square w-80 h-80 bg-gray-300 rounded-2xl shadow-solid-xl p-5">
                  asd
               </div>
            </div>
         </div>
      </div>
   );
}
