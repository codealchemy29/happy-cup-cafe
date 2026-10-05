import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { CartDrawer } from "@/components/CartDrawer";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CartProvider } from "@/context/CartContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Happyy Cup Cafe | Cozy Cafe in Thane",
  description:
    "The Happyy Cup Cafe in Manpada, Thane — coffee, croissants, comfort food and cozy moments. Explore our menu and visit us.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-[#FFF8F0] text-[#2C211B]">
        <CartProvider>
          <div className="min-h-screen bg-[radial-gradient(circle_at_top,#FCEDE8_0%,#FFF8F0_32%,#FFF8F0_100%)]">
            <Navbar />
            {children}
            <Footer />
            <WhatsAppButton />
            <CartDrawer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
