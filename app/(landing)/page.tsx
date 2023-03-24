'use client';
import { useEffect } from 'react';
import '../assets/styles/home.css';
import Hero from '../components/home/Hero';
import PlansSection from '../components/home/PlansSection';

export default function Home(): JSX.Element {
   useEffect(() => {
      // Make the navbar transparent when the user is on the top of the page
      const navbar = document.querySelector('header') as HTMLElement;
      const hero = document.querySelector('.hero');
      const heroHeight = hero?.clientHeight ?? 0;
      const navbarHeight = navbar?.clientHeight ?? 0;
      const navbarOffset = heroHeight - navbarHeight;

      const handleScroll = (): void => {
         console.log(window.scrollY, navbarOffset);

         if (window.scrollY > navbarOffset) {
            navbar.classList.add('bg-white');
            navbar.classList.remove('bg-transparent');
         } else {
            navbar.classList.add('bg-transparent');
            navbar.classList.remove('bg-white');
         }
      };

      window.addEventListener('scroll', handleScroll);
      return () => { window.removeEventListener('scroll', handleScroll); }; // this will clean up the event every time the component is re-rendered
   });

   return (<>
      <Hero />
      <main className="container">
         <PlansSection />
      </main>
   </>
   );
}
