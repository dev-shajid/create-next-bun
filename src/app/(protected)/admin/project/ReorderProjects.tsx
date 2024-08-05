'use client'

import BlurImage from '@/components/home/BlurImage'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { LinkButton } from '@/components/ui/linkButton'
import React, { useState } from 'react'
import { FaRegEdit } from 'react-icons/fa'
import { MdDeleteOutline, MdDragIndicator } from 'react-icons/md'
import { Reorder } from "framer-motion";
import { updateProjectOrder } from '@/action/project'

export default function ReorderProjects({ projects }: { projects: ProjectType[] | null }) {
    const [items, setItems] = useState(projects);
    if (!projects) return null

    console.log(projects)

    return (
        <>
            <Card className='p-4 space-y-3'>
                <Reorder.Group
                    axis='y'
                    onReorder={(newOrder) => {
                        newOrder.forEach((project, index) => {
                            if (index == items?.find(e => e.id == project.id)?.order) return;
                            updateProjectOrder(project.id, index)
                                .then(data => console.log(data))
                        })
                        setItems(newOrder)
                    }}
                    values={projects}
                    className='space-y-3'
                >
                    {items?.map((project:ProjectType, index) => project.isPublished && (
                        <Reorder.Item
                            value={project}
                            key={project.id}
                        >
                            <Card className='flex items-center justify-between'>
                                <div className='flex items-center gap-4'>
                                    <div className="overflow-hidden max-w-[150px] w-full aspect-video rounded-md">
                                        <BlurImage src={project.image} className='w-full h-full object-cover' />
                                    </div>
                                    <div className='space-y-2'>
                                        <div className='font-medium text-base'>{project.title}</div>
                                        <div className='flex items-center gap-4'>
                                            <a target='_blank' href={project.live}><Button size='sm'>Live</Button></a>
                                            <a target='_blank' href={project.github}><Button size='sm'>Github</Button></a>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex items-center gap-4 mr-4'>
                                    <div className='flex items-center gap-4'>
                                        <LinkButton size='icon' href={`/project/edit/${project.id}`} className='text-sm'>
                                            <FaRegEdit />
                                        </LinkButton>
                                        <Button size='icon' className='text-sm p-1' variant='outline'>
                                            <MdDeleteOutline className='text-xl' />
                                        </Button>
                                    </div>
                                </div>
                            </Card>
                        </Reorder.Item>
                    ))}
                </Reorder.Group>
            </Card>
        </>
    )
}
