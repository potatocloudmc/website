import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Impressum • PotatoCloud',
    description: 'A simple cloudsystem for Minecraft servers that is performant, customizable and made to be simple and easy to use',
    keywords: ['minecraft', 'server', 'hosting', 'cloud', 'gaming'],
    authors: [{ name: 'PotatoCloud Team and LabyNoah' }],
    openGraph: {
        title: 'PotatoCloud - Minecraft Server Hosting',
        description: 'Die beste Minecraft Cloud für deine Server',
        type: 'website',
    },
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="de">
        <head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;600;700&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        </head>
        <body className="font-fredoka">
        {children}
        </body>
        </html>
    )
}
