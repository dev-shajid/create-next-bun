import { cn } from '@/lib/utils'
import React from 'react'
import { BsCheckCircle, BsExclamationTriangle } from 'react-icons/bs'

export default function FormToast({ message, success = true }: { message?: string, success: boolean }) {
    if (!message) return null
    return (
        <div className={cn(
            'p-3 rounded-md flex items-center gap-x-2 text-sm',
            success ? 'bg-emerald-500/15 text-emerald-500' : 'bg-destructive/20 text-destructive'
        )}>
            {
                success ?
                    <BsCheckCircle className='size-4' /> :
                    <BsExclamationTriangle className='size-4' />
            }
            <p>{message}</p>
        </div>
    )
}
