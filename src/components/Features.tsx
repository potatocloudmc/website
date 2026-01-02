'use client'

import { Boxes, Zap, Monitor, FileText, Database, Terminal, Settings, Cpu } from 'lucide-react'

export default function Features() {
    const features = [
        {
            icon: Boxes,
            title: 'All Core Features',
            description: 'Static/dynamic servers, templates, and more out of the box',
        },
        {
            icon: Zap,
            title: 'Simple API',
            description: 'Easy to integrate and use for your custom plugins',
        },
        {
            icon: Monitor,
            title: 'Screen System',
            description: 'View service output live and execute commands',
        },
        {
            icon: FileText,
            title: 'Property System',
            description: 'Add custom data to players, services, and groups',
        },
        {
            icon: Database,
            title: 'No External Database',
            description: 'Runs out-of-the-box with minimal setup',
        },
        {
            icon: Terminal,
            title: 'Clean Console',
            description: 'Clear logs and structured output',
        },
        {
            icon: Settings,
            title: 'Customizable',
            description: 'Configure or disable features as needed',
        },
        {
            icon: Cpu,
            title: 'Platform System',
            description: 'Auto-update platforms or add custom ones',
        },
    ]

    return (
        <>

            <section className={"section"}>
                <div className={"container"}>
                    <div className={"section-header"}>
                        <span className={"section-badge"}>Features</span>
                        <h2 className={"section-title"}>Why PotatoCloud?</h2>
                        <p className={"section-subtitle"}>
                            All, what you need for a Modern Minecraft Network.
                        </p>
                    </div>

                    <div className={"features-grid"}>
                        {features.map((feature, index) => {
                            const Icon = feature.icon;

                            return (
                                <div className={"feature-card"} key={index}>
                                    <Icon
                                        size={36}
                                        strokeWidth={1.6}
                                        color={"var(--accent)"}
                                        style={{ marginBottom: "16px" }}
                                        />
                                    <h3>{feature.title}</h3>
                                    <p>{feature.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

        </>
    )
}
