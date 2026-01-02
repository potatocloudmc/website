'use client'

import { Download } from 'lucide-react'

export default function Installation() {
    const steps = [
        {
            number: '1',
            title: 'Install Java 21',
            description: 'Make sure you have Java 21 installed on your system',
        },
        {
            number: '2',
            title: 'Download PotatoCloud',
            description: 'Get the latest release from GitHub releases',
        },
        {
            number: '3',
            title: 'Extract & Run',
            description: 'Extract the ZIP and run start.bat (Windows) or start.sh (Linux/macOS)',
        },
        {
            number: '4',
            title: 'Create Groups',
            description: 'Use "group create" command to create lobby and proxy groups',
        },
        {
            number: '5',
            title: 'Join & Play',
            description: 'Connect to your server and start playing!',
        },
    ]

    return (
        <section id="installation" className="section bg-neutral-900/30">
            <div className="container-custom">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Get <span className="gradient-text">started</span>
                    </h2>
                    <p className="text-xl text-neutral-400">
                        Set up your cloud in 5 simple steps
                    </p>
                </div>

                {/* Steps */}
                <div className="max-w-3xl mx-auto space-y-4 mb-16">
                    {steps.map((step, index) => (
                        <div key={index} className="card flex gap-6 items-start">
                            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-potato-500 text-white font-bold text-xl flex items-center justify-center">
                                {step.number}
                            </div>
                            <div className="flex-1">
                                <h3 className="text-lg font-semibold mb-1 text-white">{step.title}</h3>
                                <p className="text-neutral-400">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="max-w-2xl mx-auto text-center">
                    <div className="card bg-neutral-900/80">
                        <div className="text-4xl mb-4">🚀</div>
                        <h3 className="text-2xl font-bold mb-3 text-white">Ready to start?</h3>
                        <p className="text-neutral-400 mb-6">
                            Download the latest release and get your cloud running in minutes
                        </p>
                        <a
                            href="https://github.com/potatocloud/releases"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary inline-flex items-center gap-2"
                        >
                            <Download className="w-5 h-5" />
                            Download Now
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
