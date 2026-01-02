'use client';

import {
    Cloud,
    Github,
    Twitter,
    MessageCircle,
    Newspaper,
    MessageCircleCode,
    Heart,
    CopyrightIcon,
    Paperclip
} from 'lucide-react'

export default function Footer() {

    const footerLinks = {
        product: [
            { name: 'Features', href: '#features' },
            { name: 'Preise', href: '#pricing' },
            { name: 'Status', href: '#' },
            { name: 'Roadmap', href: '#' },
        ],
        company: [
            { name: 'Github', href: 'https://github.com/potatocloud-mc'},
        ],
        legal: [
            { name: 'Datenschutz', href: '#' },
            { name: 'AGB', href: '#' },
            { name: 'Impressum', href: '#' },
            { name: 'Cookie-Richtlinien', href: '#' },
        ],
        support: [
            { name: 'Hilfe-Center', href: '#' },
            { name: 'Discord', href: '#' },
            { name: 'Dokumentation', href: '#' },
            { name: 'API', href: '#' },
        ],
    }

    return (

        <>

            <footer className={"footer"}>

                <div className={"container"}>
                    <div className={"footer-content"}>
                        <div className={"footer-left"}>
                            <div className={"logo"}>
                                <div className={"logo-icon"}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                                        <circle cx="12" cy="7" r="4"></circle>
                                    </svg>
                                </div>
                                <span className={"logo-text"}>PotatoCloud</span>
                            </div>
                            <p className={"footer-text"}>A simple cloud system for Minecraft</p>
                        </div>

                        <div className={"footer-links"}>

                            <a href={"https://github.com/potatocloudmc"} target={"_blank"}><Github className={"w-6 h-6"} /></a>
                            <a href={"https://github.com/potatocloudmc/potatocloud/wiki"}><Newspaper className={"w-6 h-6"}/> </a>
                            <a href={"https://dc.potatocloud.de"}><MessageCircleCode className={"w-6 h-6"} /> </a>
                        </div>

                        <div className={"left-0 footer-links"}>
                            <a href={"/legal/impressum"}><Paperclip /> </a>
                        </div>
                    </div>

                    <div className={"footer-bottom"}>
                        <p>&copy; {new Date().getFullYear()} PotatoCloud • Made with {"<3"} </p>
                    </div>

                </div>

            </footer>

        </>

    )

}