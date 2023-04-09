import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { cookies, headers } from 'next/headers';

// do not cache this page
export const revalidate = 0;

export default async function ServerComponent() {
   const supabase = createServerComponentSupabaseClient({
      headers,
      cookies
   });
   const { data } = await supabase.from('bookmarks').select('*');
   console.log(data);

   return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
