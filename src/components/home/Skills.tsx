import { Title } from "@/components/home/Basic"
import BlurImage from "@/components/home/BlurImage"
import Section from "@/components/Section"
import { Card } from "@/components/ui/card"
import BlurFade from "../animation/blur-fade";
import BlurFadeText from "../animation/blur-fade-text";


export default function Skills() {

  const BLUR_FADE_DELAY = 0.04;
  return (
    <div id='skills'>
      <Section>
        {/* <div className='absolute top-[40%] right-[3%] w-[300px] h-[200px] bg-slate-300 rounded-full bg-gradient-to-l from-blue-600 to-indigo-400 opacity-20 blur-3xl filter'></div> */}
        <div className='max-w-5xl mx-auto py-10 space-y-8 px-4'>
          <BlurFade delay={BLUR_FADE_DELAY}><Title className='text-center'>Skills</Title></BlurFade>
          <div className='grid !grid-cols-4 gap-4 place-content-center'>
            {skills.map((e, i) => (
              <BlurFade
                key={i}
                delay={BLUR_FADE_DELAY * 12 + i * 0.05}
                className='grid'
              >
                <Card key={i} className='flex flex-col items-center justify-center py-2 h-full transform duration-200 sm:hover:scale-105 overflow-hidden'>
                  <BlurImage
                    src={e.img}
                    id={i}
                    alt="Logo"
                    className='max-w-12 w-full h-auto'
                  />
                  <div className='md:text-base text-xs font-medium mt-4 text-center'>{e.name}</div>
                </Card>
              </BlurFade>
            ))}
          </div>
        </div>
      </Section>
    </div>
  )
}


export const skills = [
  {
    img: '/images/skills/react.png',
    name: 'React JS'
  },
  {
    img: '/images/skills/nextjs.png',
    name: 'Next JS'
  },
  {
    img: '/images/skills/html.png',
    name: 'W3C HTML5 & CSS3'
  },
  {
    img: '/images/skills/tailwind.png',
    name: 'Tailwind CSS'
  },
  {
    img: '/images/skills/responsive.png',
    name: 'Responsive'
  },
  {
    img: '/images/skills/javascript.png',
    name: 'JavaScript'
  },
  {
    img: '/images/skills/node.png',
    name: 'Node JS'
  },
  {
    img: '/images/skills/mongodb.png',
    name: 'MongoDB'
  },
  {
    img: '/images/skills/document.png',
    name: 'Well Documented'
  },
  {
    img: '/images/skills/rest.png',
    name: 'Rest API'
  },
]