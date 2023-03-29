'use client';
import Hero from '@components/home/Hero';
// import { auth } from '@clerk/nextjs/app-beta';
import PlansSection from '@components/home/PlansSection';
import '../assets/styles/home.css';

export default function Home(): JSX.Element {
   return (<>
      <Hero />
      <main className="container">
         <PlansSection />
      </main>
   </>
   );
}
