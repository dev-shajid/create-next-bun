import { getProjects } from '@/action/project';
import Section from '@/components/Section'
import { LinkButton } from '@/components/ui/linkButton';
import { Metadata } from 'next';
import React from 'react'
import ReorderProjects from './ReorderProjects';
import { PostgrestError } from '@supabase/supabase-js';



export const metadata: Metadata = {
    title: "Project | DEV.",
};



export default async function page() {
    const { data:projects, error }:{data:ProjectType[] | null, error:PostgrestError | null} = await getProjects()

    return (
        <Section className='space-y-4'>
            <div className="flex items-center justify-between">
                <h4>Project</h4>
                <LinkButton href="/project/create" className="ml-auto">Create Project</LinkButton>
            </div>

            <ReorderProjects projects={projects} />

        </Section>
    )
}