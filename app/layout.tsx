import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import PageTransition from "@/components/ui/PageTransition";

export const metadata: Metadata = {
  title: "CompIQ",
  description: "Compensation Intelligence Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body className="bg-slate-950">

        <Navbar />
        <PageTransition>
          {children}
        </PageTransition>
        
        <Footer />

      </body>
    </html>
  );
}