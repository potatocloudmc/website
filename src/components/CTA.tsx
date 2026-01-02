'use client'

import { Sparkles } from 'lucide-react'
import Link from "next/link";

export default function CTA() {
    return (

        <>

            <section className={"section section-alt"}>

                <div className="container">
                    <div className={"cta-box"}>
                        <span className={"section-badge"}>Get Started</span>
                        <h3>Start your Minecraft Server</h3>

                        <p>
                            PotatoCloud manages your Minecraft Server easy,
                            Fast, Scalable - Ready in Seconds.
                        </p>

                        <div className={"hero-buttons"}>
                            <Link href={"/docs"} className={"btn-primary"}>
                                Documentation
                            </Link>
                            <Link href={"/changelog"} className={"btn-secondary"}>
                                Changelog
                            </Link>
                        </div>

                    </div>
                </div>

            </section>

        </>

    )
}
