import Header from "@/components/Header"
import ProtectedNavComponent from "@/components/ProtectedNavItems"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | Template",
};

export default async function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex">
      <ProtectedNavComponent />
      <div className="flex flex-1 min-h-screen flex-col">
        <main className="grow">
          <Header />
          {children}
        </main>
      </div>
    </div>
  )
}