'use client'

export default function Platforms() {
    const platforms = [
        { name: 'Paper', version: '1.20.4 - Latest' },
        { name: 'Velocity', version: '3.3.0 - Latest' },
        { name: 'Purpur', version: '1.20.4 - Latest' },
        { name: 'PandaSpigot', version: '1.8.8 - 1.8.9' },
        { name: 'Limbo', version: '1.21.8, 1.21.10' },
        { name: 'Custom Platforms', version: 'Add your own' },
    ]

    return (
        <section id="platforms" className="section">
            <div className="container-custom">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Supported <span className="gradient-text">Platforms</span>
                    </h2>
                    <p className="text-xl text-neutral-400">
                        Works with all major Minecraft server platforms
                    </p>
                </div>

                {/* Platforms Grid */}
                <div className="max-w-4xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {platforms.map((platform, index) => (
                        <div
                            key={index}
                            className="card flex items-center justify-between"
                        >
                            <div>
                                <div className="font-semibold text-white mb-1">{platform.name}</div>
                                <div className="text-sm text-neutral-500">{platform.version}</div>
                            </div>
                            <div className="text-2xl">✓</div>
                        </div>
                    ))}
                </div>

                {/* Optional Plugins */}
                <div className="mt-16 max-w-3xl mx-auto">
                    <div className="card text-center">
                        <div className="text-3xl mb-4">🧩</div>
                        <h3 className="text-xl font-semibold mb-2 text-white">Optional Plugins</h3>
                        <p className="text-neutral-400 mb-4">
                            Cloud Command, Notify, Proxy, Hub Command, and LabyMod plugins available
                        </p>
                        <span className="text-sm text-neutral-500">All included in the download</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
