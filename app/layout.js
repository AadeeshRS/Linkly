import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata = {
  title: "Linkly - One Link, Infinite Possibilities",
  description: "Linkly is the ultimate link management platform that helps you share all your important links in one beautiful, customizable page. Connect with your audience, grow your online presence, and simplify your digital life with just one link.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <body className="antialiased bg-gradient-to-b from-violet-500 to-purple-600 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
