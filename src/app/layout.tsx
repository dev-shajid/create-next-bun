import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
import Layout from "@/components/Layout";
import NextTopLoader from 'nextjs-toploader';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  // title: "Home | Template",
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
      <body className={inter.className}>
        <ThemeProvider>
          <Layout>
            <NextTopLoader
              showSpinner={false}
              color="#4646d7"
            />
            {children}
          </Layout>
        </ThemeProvider>
      </body>
    </html>
  );
}
