import dynamic from 'next/dynamic';

const LottieFile = dynamic(() => import('./LottieFile'), { ssr: false });
import React from 'react'
import { Section, Title } from './Basic'
import animationData from '@/../public/images/about.json'

// TODO: Follow this website: https://www.stefantopalovic.com/

const About = () => {
    return (
        <div id='about'>
            <Section>
                <Title className='text-center'>About Me</Title>
                <div className='md:flex justify-center items-center gap-4'>
                    <div className='md:!max-w-[40%] md:aspect-square lg:min-h-[400px] sm:min-h-[300px] text-center min-h-[358px]'>
                        <LottieFile file={animationData} />
                    </div>
                    <div className='my-df8'>
                        <div className='text-muted-foreground text-justify md:max-w-md'>
                            I'm Mohammed Sajidul Islam Shajid, a competitive programmer, passionate about Web Development. With a focus on efficient problem-solving, I enjoy creating projects. My portfolio showcases clean, scalable code. Constantly learning, I stay updated with the latest technologies and seek new challenges. Let's connect and explore the exciting world of coding together!
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    )
}


export default About