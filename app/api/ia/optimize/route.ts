import * as cheerio from 'cheerio';
import { NextResponse } from 'next/server';
import { Configuration, OpenAIApi } from 'openai';

export async function GET(request: Request) {
   const { searchParams } = new URL(request.url);
   const url = searchParams.get('url');

   if (!url) {
      return new Response('No URL provided', { status: 400 });
   }

   const response = await fetch(url);
   const html = await response.text();
   const $ = cheerio.load(html);

   $('script').remove();
   $('style').remove();
   const HTMLResult = $.html();

   const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY
   });
   const openai = new OpenAIApi(configuration);

   const content = `
Give me the keywords of this website to storage this data as tags for my bookmark website.
Limit the response to 5 elements.
Make it all in same line separated with comma:
${HTMLResult}
   `;

   console.log(content);

   // const completion = await openai.createChatCompletion({
   //    model: 'gpt-3.5-turbo',
   //    messages: [{ role: 'user', content }]
   // });

   // return NextResponse.json(completion.data.choices[0].message);
}
