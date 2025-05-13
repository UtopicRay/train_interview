import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";



const geistMona = Mona_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Train interview",
  description: "Train for your next job. Practice with IA agent and enjoy it",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistMona.className} antialiased pattern dark`}
      >
        <main className="dark">
        {children}
        </main>
        <Toaster/>
      </body>
    </html>
  );
}
