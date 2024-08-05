import Section from '@/components/Section'
import { LinkButton } from '@/components/ui/linkButton'
import React from 'react'

export default function NotFound() {
    return (
        <Section className='flex flex-col gap-4 justify-center items-center min-h-[100dvh]'>
            <h2>404! This Page could not found 🙁</h2>
            <LinkButton href='/'>Go To Home</LinkButton>
        </Section>
    )
}
