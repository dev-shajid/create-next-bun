import Nav from "@/components/home/Nav"
import { ThemeProvider } from "@/components/theme/theme-provider"
import '@/styles/prism.css'

async function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode
  modal: React.ReactNode
}>) {
  return (
    <ThemeProvider>
      <div className="flex min-h-screen flex-col">
        <main className="grow">
          <Nav />
          {children}
        </main>
      </div>
    </ThemeProvider>
  )
}

PublicLayout.theme = "dark"

export default PublicLayout