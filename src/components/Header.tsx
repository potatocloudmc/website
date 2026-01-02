'use client'

import Link from 'next/link'
import {Cloud, Github} from "lucide-react";

export default function Header() {
    return (

        <>

            <header className={"header"}>
                <div className={"container"}>
                    <div className={"nav"}>
                        <div className={"logo"}>
                            <div className={"logo-icon"}>
                                <Cloud className={"w-8 h-8"} />
                            </div>
                            <Link href={"/"}> <span className={"logo-text"}>PotatoCloud</span></Link>
                        </div>

                        <div className={"nav-links"}>
                            <Link href={"/changelog"}>Changelogs</Link>
                            <a href={"https://github.com/potatocloudmc"} target={"_blank"} className={"btn-primary"}><Github /> GitHub</a>
                        </div>
                    </div>
                </div>
            </header>

        </>

    )
}
