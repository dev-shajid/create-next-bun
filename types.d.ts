type ProjectType = {
    title: string;
    href?: string;
    isPublished: boolean;
    description: string;
    dates: string;
    tags: string[];
    image?: string;
    video?: string;
    links?: {
        icon?: React.ReactNode;
        type: string;
        href: string;
    }[];
} 

/**
 * createdAt
github
id
image
isPublished
live
order
tags ['Game', 'NextJS', 'NodeJS', 'SocketIO', 'Prisma', 'Tailwind Css']
title

 */