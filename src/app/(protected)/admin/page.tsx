import { getSession, getUser } from '@/action/auth';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "Dashboard | Template",
};

export default async function page() {
    const session = await getSession()
    const user = await getUser()
    // console.log({session, user})
    return (
        <h2 className="text-center mt-12">Dashboard</h2>
    )
}
