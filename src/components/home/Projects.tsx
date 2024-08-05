import { Section, Title } from './Basic'
import Link from 'next/link'
import { DATA } from '@/data/resume'
import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Icons } from '../icons'
import { LinkButton } from '../ui/linkButton'
import BlurFade from '../animation/blur-fade'
import BlurImage from './BlurImage';

export default async function Projects() {

    const BLUR_FADE_DELAY = 0.04;

    // let {data:projects, error} = await getProjects()
    // console.log(projects)

    // if(error) return <div>Error : {error.message}</div>
    const projects = DATA.projects

    return (
        <>
            <Section className='max-w-[1000px] mx-auto space-y-8' id='projects'>
                <Title className='text-center'>Projects</Title>
                <div className='grid sm:grid-cols-2 gap-4 place-content-center'>
                    {/* <div className='projects grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5'> */}
                    {projects?.map((project: ProjectType, i: number) => project?.isPublished && (
                        <BlurFade
                            key={project.title}
                            delay={BLUR_FADE_DELAY * 12 + i * 0.05}
                        >
                            <Card
                                key={i}
                                className={
                                    "flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full pb-2"
                                }
                            >
                                <Link
                                    href={project?.href || "#"}
                                    className={cn("cursor-pointer aspect-video overflow-hidden flex justify-center items-center")}
                                >
                                    {project?.image && (
                                        <BlurImage
                                            src={project?.image}
                                            alt={project?.title}
                                            className="max-w-full overflow-hidden object-cover object-top"
                                        />
                                    )}
                                    {project?.video && (
                                        <video muted loop autoPlay className='object-cover'>
                                            <source src={project?.video} type="video/mp4" />
                                            <source src={project?.video} type="video/webm" />
                                        </video>
                                    )}
                                </Link>
                                <CardHeader className="px-4">
                                    <div className="space-y-2">
                                        <CardTitle className="mt-1 text-xl">{project?.title}</CardTitle>
                                        <time className="font-sans text-xs">{project?.dates}</time>
                                        <div className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
                                            {project?.description}
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent className="mt-auto flex flex-col px-4">
                                    {project?.tags && project?.tags.length > 0 && (
                                        <div className="mt-2 flex flex-wrap gap-1">
                                            {project?.tags?.map((tag) => (
                                                <Badge
                                                    variant="secondary"
                                                    key={tag}
                                                >
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </div>
                                    )}
                                </CardContent>
                                <CardFooter className="px-4">
                                    {project?.links && project?.links.length > 0 && (
                                        <div className="flex flex-row flex-wrap items-start gap-3">
                                            {project?.links?.map((link, idx) => (
                                                <LinkButton href={link?.href} key={idx} size={'sm'} className="flex gap-2 px-2 !py-0.5 text-[12px]" target="_blank">
                                                    {link.icon}
                                                    <Icons.globe className='size-3' />
                                                    {link.type}
                                                </LinkButton>
                                            ))}
                                        </div>
                                    )}
                                </CardFooter>
                            </Card>
                        </BlurFade>
                    ))}
                </div>
            </Section>
        </>
    )
}