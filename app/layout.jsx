import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/page";
import Footer from "./components/footer/page";
import { Montserrat } from 'next/font/google';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});


export const metadata = {
  title: "URAZ VİP TRANSFER - Antalya Havalimanı VIP Transfer Hizmeti",
  description: "Antalya Havalimanı'ndan tüm destinasyonlara VIP transfer hizmeti. Lüks araçlar, profesyonel şoförler, 7/24 hizmet. Mercedes, BMW lüks araç filosu ile konforlu seyahat.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
        <script type="text/javascript">
          {`
            (function() {
              emailjs.init("8zmAtR8eZVXS3DJRc");
            })();
          `}
        </script>
      </head>
      <body className={`min-h-screen w-full transition-colors duration-300 bg-black text-white ${montserrat.className} overflow-x-hidden`}>

          <Navbar />
          {children}
          <Footer />

      </body>
    </html>
  );
}
