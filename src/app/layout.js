import { Geist, Geist_Mono,Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import NextAuthProvider from "@/Providers/NextAuthProvider";
import TopLoader from "@/components/TopLoader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const playfair= Playfair_Display({
  subsets:["latin"],
  weight: ["400", "500", "800"],
})

export const metadata = {
  title: "Shope Ease",
  description: "Generated Shope Ease",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}  antialiased`}
      >
        <TopLoader>
          <NextAuthProvider>
         {children}
        <Toaster  reverseOrder={false} />
        </NextAuthProvider>
        </TopLoader>
        
      </body>
    </html>
  );
}
