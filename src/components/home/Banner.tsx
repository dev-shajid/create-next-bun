import dynamic from 'next/dynamic';

const LottieFile = dynamic(() => import('./LottieFile'), { ssr: false });
import animationData from '@/../public/images/banner.json'
import { Section } from './Basic'
import { LinkButton } from '../ui/linkButton'


export default function Banner() {

    return (
        <>
            <Section className='flex flex-col-reverse md:flex-row justify-between items-center !my-0'>
                <div className='fixed z-[-1] left-[28%] top-0 h-[150px] w-[200px] rotate-12 rounded-3xl bg-gradient-to-l from-blue-600 to-sky-400 blur-3xl filter block opacity-20 lg:top-32 lg:-right-20 lg:h-72 lg:w-[350px] xl:h-80 xl:w-[500px]'></div>
                <div className='fixed z-[-1] left-[10%] top-50% h-[150px] w-[200px] rotate-12 rounded-3xl bg-gradient-to-l bg-purple-600 to-indigo-600 blur-3xl filter block opacity-20 lg:top-44 lg:-right-20 lg:h-72 lg:w-[350px] xl:h-80 xl:w-[500px]'></div>
                <div className='fixed z-[-1] bottom-44 -left-64 h-[150px] w-[900px] -rotate-45 rounded-3xl bg-gradient-to-r from-violet-500 to-indigo-500 opacity-20 blur-3xl filter block lg:bottom-24 lg:-left-20 lg:h-28 lg:w-[250px] lg:-rotate-12 lg:xl:h-40 xl:w-[400px]'></div>

                <div className='sm:space-y-4 space-y-2 z-10'>
                    <div className='text-2xl lg:text-5xl sm:text-4xl font-semibold'>Hey, 👋</div>
                    <div className='text-2xl lg:text-5xl sm:text-4xl font-semibold'>myself <span className=''>Shajid</span></div>
                    <div
                        className='text-xl md:text-2xl lg:text-3xl font-semibold bg-indigo-500 p-1 rounded-sm inline-block text-white'
                    >
                        Fullstack Web Developer
                    </div>
                    <div className='text-sm md:text-base text-muted-foreground'>
                        I've been practicing web development for last 3 years and still learning, completed many project.
                    </div>
                    <div className="flex gap-4">
                        <LinkButton href='/#projects'>Projects</LinkButton>
                        {/* <div className='border border-gray-400 md:px-8 md:py-2 px-4 py-1 md:text-base text-sm rounded-sm md:rounded cursor-pointer'>Contact</div> */}
                    </div>
                </div>

                <div className='lg:min-h-[600px] md:min-h-[415px] md:min-w-[400px] sm:min-h-[500px] min-h-[358px]'>
                    <LottieFile file={animationData} />
                </div>
            </Section>
        </>
    )
}
