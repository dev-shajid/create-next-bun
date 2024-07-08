import Section from '@/components/Section'
import { Title1 } from '@/components/Title'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "Profile | Template",
};

const getPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    return data
}

export default async function page() {
    let posts: PostType[] = await getPosts()
    return (
        <Section>
            <Title1 className="text-center mt-12">Profile</Title1>
            <ul>
                {posts.map((post, i) => (
                    <li key={post.id}>{i + 1}. {post.title}</li>
                ))}
            </ul>
        </Section>
    )
}

type PostType = {
    id: number,
    title: string,
    body: string
}