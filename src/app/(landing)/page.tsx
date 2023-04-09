'use client';
import Hero from '@components/home/Hero';
import PlansSection from '@components/home/PlansSection';
import '../assets/styles/home.css';
import { useSupabase } from 'app/providers/supabase-provider';

export default function Home() {
   const { supabase } = useSupabase();

   supabase.auth.getSession().then((user) => {
      console.log('user', user);
   }).catch(console.error);

   return (<>
      <Hero />
      <main className="container">
         <PlansSection />
      </main>
   </>
   );
}
