'use client'

export default function Stats() {
    const stats = [
        {
            number: '10,000+',
            label: 'Aktive Server',
            icon: '🎮',
            delay: '0s'
        },
        {
            number: '99.9%',
            label: 'Uptime',
            icon: '⚡',
            delay: '0.1s'
        },
        {
            number: '50k+',
            label: 'Zufriedene Spieler',
            icon: '😊',
            delay: '0.2s'
        },
        {
            number: '<10ms',
            label: 'Ping in DE',
            icon: '📡',
            delay: '0.3s'
        },
    ]

    return (
        <section id="stats" className="py-16 relative">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="minecraft-card bg-white border-4 border-black p-6 text-center hover:scale-105 transition-transform"
                            style={{ animationDelay: stat.delay }}
                        >
                            <div className="text-4xl mb-3">{stat.icon}</div>
                            <div className="text-3xl md:text-4xl font-bold text-minecraft-grass mb-2">
                                {stat.number}
                            </div>
                            <div className="text-gray-700 font-semibold">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
