'use client';
import Hero from '@components/home/Hero';
import PlansSection from '@components/home/PlansSection';
import '../assets/styles/home.css';

export default function Home() {
   return (<>
      <Hero />
      <main className="container">
         <PlansSection />
      </main>
   </>
   );
}
