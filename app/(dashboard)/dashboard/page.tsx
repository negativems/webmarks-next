import { ClerkProvider } from '@clerk/nextjs';
import { type AppProps } from 'next/app';

const App = function ({ Component, pageProps }: AppProps) {
   return (<>
      <ClerkProvider {...pageProps} >
         <Component {...pageProps} />
      </ClerkProvider>
   </>);
};

export default App;
