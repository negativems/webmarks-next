export default function GET(req, res) {
   return {
      status: 302,
      headers: {
         location: '/api/auth/logout'
      }
   };
}