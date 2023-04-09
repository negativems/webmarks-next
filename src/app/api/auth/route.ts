export async function GET(request: Request) {
   console.log('request', new URL(request.url).searchParams);

   return new Response('Hello World');
}
