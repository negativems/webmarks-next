import { createMiddlewareSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';

import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
   const pathname = req.nextUrl.pathname;
   const res = NextResponse.next();

   if (pathname.startsWith('/logout')) {
      console.log('Middleware: /logout');
      const supabase = createMiddlewareSupabaseClient({ req, res });
      await supabase.auth.signOut();

      // Delete cookies

      return NextResponse.redirect(new URL('/login', req.nextUrl.origin).toString());
   }

   const supabase = createMiddlewareSupabaseClient({ req, res });
   await supabase.auth.getSession();
   return res;
}
