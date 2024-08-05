import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Layout from "@/components/Layout";
import NextTopLoader from 'nextjs-toploader';
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: '%s | Template',
    default: 'Home',
  },
  description: "Developed by @Shajid",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
        inter.className,
        'bg-muted'
      )}>
        <Layout>
          <NextTopLoader
            showSpinner={false}
            color="#4646d7"
          />
          {children}
        </Layout>
      </body>
    </html>
  );
}
