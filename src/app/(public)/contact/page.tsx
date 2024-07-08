import { Title1 } from '@/components/Title'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "Contact | Template",
};

export default function page() {
    return (
        <Title1 className="text-center mt-12">Contact Page</Title1>
    )
}
