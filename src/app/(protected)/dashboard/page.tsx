import { Title1 } from '@/components/Title'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "Dashboard | Template",
};

export default function page() {
    return (
        <Title1 className="text-center mt-12">Dashboard</Title1>
    )
}
