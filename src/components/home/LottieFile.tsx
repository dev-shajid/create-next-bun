'use client'


import React, { useEffect, useState } from 'react'
import Lottie from 'react-lottie-player'

export default function LottieFile({ file }: { file?: any }) {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        // Runs on the client, so document is available
        setIsClient(true);
    }, []);

    if (!isClient) return null; // Or a loading spinner, or nothing

    if (!file) return null
    return (
        <Lottie
            loop
            animationData={file}
            play
            // style={{ width: 640, height: 640 }}
            className='lg:max-w-[600px] max-w-[500px] w-full'
        />
    )
}
