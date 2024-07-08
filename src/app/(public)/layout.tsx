import Header from "@/components/Header"

export default async function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode
  modal: React.ReactNode
}>) {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="grow">
        <Header publicRoute />
        {children}
      </main>
    </div>
  )
}
