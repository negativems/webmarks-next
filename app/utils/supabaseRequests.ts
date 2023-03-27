import { supabaseClient } from './supabaseClient';
interface getBookmarksProps {
   userId: string
   token: string
};

export const getBookmarks = async ({ userId, token }: getBookmarksProps) => {
   const supabase = await supabaseClient(token);
   const { data, error } = await supabase.from('bookmarks').select('*').eq('user_id', userId);

   if (error) {
      console.log('error', error);
   }

   return data;
};
