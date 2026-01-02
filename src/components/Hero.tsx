'use client'

import {Cloud, Download, DownloadCloud, Github, Zap} from 'lucide-react'
import Terminal from "@/components/Terminal";

export default function Hero() {
    const blocks = [
        { delay: '0s', top: '10%', left: '5%' },
        { delay: '1s', top: '60%', right: '8%' },
        { delay: '2s', bottom: '20%', left: '10%' },
        { delay: '0.5s', top: '30%', right: '15%' },
    ]

    return (
        <>

            <section className={"hero"}>
                <div className={"container"}>
                    <div className={"hero-content"}>
                        <div className={"hero-left"}>
                            <div className={"badge"}>
                                <span className={"badge-dot"}></span>
                                v1.4.1
                            </div>

                            <h1 className={"hero-title"}>PotatoCloud</h1>

                            <p className={"hero-subtitle"}>
                                A simple "cloud" system for Minecraft servers that is performant,
                                customizable and made to be simple and easy to use
                            </p>

                            <div className={"hero-buttons"}>
                                <a href={"https://github.com/potatocloudmc/potatocloud/releases/download/1.4.1/potatocloud-1.4.1.zip"} className={"btn-primary"}>
                                    <Download /> Download
                                </a>

                                <a href={"https://github.com/potatocloudmc/potatocloud"} className={"btn-secondary"}>
                                    <Github /> View on Github
                                </a>
                            </div>
                        </div>

                        <div className={"hero-right"}>
                            <Terminal />
                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}
