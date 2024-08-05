import Header from "@/components/Header"
import ProtectedNav from "@/components/ProtectedNav";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Metadata } from "next";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Dashboard | Template",
};

export default async function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ThemeProvider>
    <Toaster
      position="top-center"
      reverseOrder={false}
    />
      <div className="flex">
        <ProtectedNav />
        <div className="flex flex-1 min-h-screen flex-col">
          <main className="grow bg-muted/15">
            <Header />
            {children}
          </main>
        </div>
      </div>
    </ThemeProvider>
  )
}