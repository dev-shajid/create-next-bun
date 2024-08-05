
import About from '@/components/home/About'
import Banner from '@/components/home/Banner'
import Projects from '@/components/home/Projects'
import Skills from '@/components/home/Skills'

export default async function Home() {

  return (
    <main className='min-h-screen w-full'>
      <div className='container mx-auto px-4 mb-8'>
        <Banner />
        <About />
        <Projects />
        <Skills />
      </div>
    </main>
  )
}
