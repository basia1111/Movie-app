import "./globals.css";
import Footer from "@/components/layout /Footer";
import Header from "@/components/layout /Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Movie App",
  description: "Find all your favourite  movies in one place",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen h-screen">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
