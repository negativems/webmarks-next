import '../assets/styles/globals.css';
import Footer from '../components/Footer';
import Header from '../components/Header';

export const metadata = {
   title: 'Webmarks - The simplest way to manage your bookmarks',
   description: 'Webmarks is a simple bookmark manager that allows you to organize your bookmarks in a simple and intuitive way.'
};

interface Props {
   children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
   return (
      <html lang="en">
         <body className="overflow-x-hidden bg-gray-100">
            <Header />
            {children}
            <Footer />
         </body>
      </html>
   );
}
