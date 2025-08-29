import { Outfit } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});


const lufga = localFont({
  src: "./fonts/Lufga.ttf",
  weight: "400",
  style: "normal",
  variable: "--font-lufga",
});

export const metadata = {
  title: "Jcrea",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`text-[#344054] overflow-x-hidden   ${outfit.variable} ${lufga.variable}  antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
