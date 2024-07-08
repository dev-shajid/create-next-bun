import Section from '@/components/Section'
import { Title2 } from '@/components/Title'
import { Button } from '@/components/ui/button'
import { LinkButton } from '@/components/ui/linkButton'
import Link from 'next/link'
import React from 'react'

export default function NotFound() {
    return (
        <Section className='flex flex-col gap-4 justify-center items-center min-h-[100dvh]'>
            <Title2>404! This Page could not found 🙁</Title2>
            <LinkButton href='/'>Go To Home</LinkButton>
        </Section>
    )
}
