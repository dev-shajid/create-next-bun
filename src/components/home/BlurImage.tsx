'use client'

import Image from 'next/image'
import React, { useState } from 'react'

export default function BlurImage({ src, alt, className, id = 0 }: { src: string, alt?: string, className?: string, id?: number }) {
    const [loading, setLoading] = useState(true)
    return (
        <Image
            src={src}
            alt={alt || src}
            width={500}
            height={400}
            placeholder='blur'
            blurDataURL={src}
            loading='lazy'
            className={`transition w-auto ease-in-out duration-500 ${loading ? 'blur-xl scale-125' : 'blur-0 scale-100'} ${className}`}
            onLoad={() => setTimeout(() => setLoading(false), id * 200)}
        />
    )
}
