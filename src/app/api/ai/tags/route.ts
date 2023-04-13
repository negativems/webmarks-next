import * as cheerio from 'cheerio';
import { NextResponse } from 'next/server';
import { Configuration, OpenAIApi } from 'openai';

export async function GET(request: Request) {
   const { searchParams } = new URL(request.url);
   const url = searchParams.get('url');

   if (url === null || url === undefined) {
      return new Response('No URL provided', { status: 400 });
   }

   const response = await fetch(url);
   const html = await response.text();
   const $ = cheerio.load(html);

   const HTMLResult = {
      title: $('title').text(),
      h1: $.html('h1'),
      h2: $.html('h2'),
      // p: $.html('p')
   };

   const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY
   });
   const openai = new OpenAIApi(configuration);

   const content = `
I will give you an html tags from a website and you will give me the keywords of this website.
Example: News, Technology, Science, etc.
Limit the response to 5 elements.
Make it all in same line separated with comma:
${JSON.stringify(HTMLResult)}
   `;

   const completion = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content }]
   });

   return NextResponse.json(completion.data.choices[0].message?.content.split(',').map((item) => item.trim()));

   // const HTMLRaw = `
   // <html>
   //    <head>
   //       <title>${HTMLResult.title}</title>
   //       <meta charset="utf-8">
   //    </head>
   //    <body>
   //       <h1>${HTMLResult.h1}</h1>
   //       <h2>${HTMLResult.h2}</h2>
   //       <p>${HTMLResult.p}</p>
   //    </body>
   // </html>
   // `;

   // return new Response(HTMLRaw, {
   //    headers: {
   //       'content-type': 'text/html'
   //    },
   //    status: 200
   // });
}
