'use client'

import React, { useState, useEffect } from 'react'
import { Cloud, Upload, Shield, Zap, Users } from 'lucide-react'

export function PotatoCloudHome() {
    const [scrollY, setScrollY] = useState(0)
    const [hoveredFeature, setHoveredFeature] = useState<number | null>(null)

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const features = [
        {
            icon: <Upload className="w-8 h-8"/>,
            title: "Kartoffel-Schnell",
            description: "Upload deine Dateien so schnell wie eine Kartoffel aus dem Ofen fliegt"
        },
        {
            icon: <Shield className="w-8 h-8"/>,
            title: "Bio-Sicher",
            description: "Deine Daten geschützt wie Kartoffeln in der Erde"
        },
        {
            icon: <Zap className="w-8 h-8"/>,
            title: "Stärke-Power",
            description: "Unbegrenzte Speicher-Stärke für all deine Projekte"
        },
        {
            icon: <Users className="w-8 h-8"/>,
            title: "Team-Ernte",
            description: "Gemeinsam ernten und teilen in der Cloud"
        }
    ]

    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 via-green-50 to-yellow-50 overflow-hidden">
            {/* Floating potato decorations */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div
                    className="potato-blob absolute w-32 h-32 opacity-10"
                    style={{
                        top: '10%',
                        left: '5%',
                        transform: `translateY(${scrollY * 0.2}px)`,
                        animationDelay: '0s'
                    }}
                />
                <div
                    className="potato-blob absolute w-24 h-24 opacity-10"
                    style={{
                        top: '60%',
                        right: '8%',
                        transform: `translateY(${scrollY * -0.15}px)`,
                        animationDelay: '2s'
                    }}
                />
                <div
                    className="potato-blob absolute w-40 h-40 opacity-10"
                    style={{
                        bottom: '15%',
                        left: '15%',
                        transform: `translateY(${scrollY * 0.1}px)`,
                        animationDelay: '4s'
                    }}
                />
            </div>

            {/* Header */}
            <header className="relative z-10 container mx-auto px-6 py-8">
                <nav className="flex items-center justify-between">
                    <div className="flex items-center gap-3 group">
                        <div
                            className="w-14 h-14 potato-blob glow-green flex items-center justify-center wiggle-animation">
                            <Cloud className="w-8 h-8 text-white"/>
                        </div>
                        <span
                            className="text-4xl font-bold bg-gradient-to-r from-green-700 via-green-600 to-green-500 bg-clip-text text-transparent">
              PotatoCloud
            </span>
                    </div>
                    <div className="flex gap-6 items-center">
                        <a href="#features"
                           className="text-green-800 hover:text-green-600 font-semibold transition-colors">
                            Features
                        </a>
                        <a href="#pricing"
                           className="text-green-800 hover:text-green-600 font-semibold transition-colors">
                            Preise
                        </a>
                        <button
                            className="px-6 py-3 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-full font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 glow-green">
                            Jetzt starten
                        </button>
                    </div>
                </nav>
            </header>

            {/* Hero Section */}
            <section className="relative z-10 container mx-auto px-6 py-20 text-center">
                <div className="float-animation inline-block mb-8">
                    <div
                        className="w-32 h-32 potato-blob glow-green flex items-center justify-center mx-auto potato-texture">
                        <Cloud className="w-16 h-16 text-white"/>
                    </div>
                </div>

                <h1 className="text-7xl md:text-8xl font-bold mb-6 text-outline text-white">
                    A simple Cloudsystem
                    <br/>
                    for minecraft servers
                </h1>

                <p className="text-2xl text-green-800 mb-12 max-w-2xl mx-auto font-medium">
                    Speichere deine Daten wie frische Kartoffeln in unserem bio-zertifizierten Cloud-Keller 🥔
                </p>

                <div className="flex gap-6 justify-center items-center flex-wrap">
                    <button
                        className="px-10 py-5 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-full text-xl font-bold hover:shadow-2xl hover:scale-110 transition-all duration-300 glow-green">
                        Kostenlos anmelden
                    </button>
                    <button
                        className="px-10 py-5 bg-white text-green-700 rounded-full text-xl font-bold hover:shadow-xl hover:scale-105 transition-all duration-300 border-4 border-green-600">
                        Demo ansehen
                    </button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 max-w-4xl mx-auto">
                    {[
                        {number: '10M+', label: 'Kartoffeln gespeichert'},
                        {number: '99.9%', label: 'Knollen-Verfügbarkeit'},
                        {number: '0', label: 'Schädlinge in der Cloud'}
                    ].map((stat, index) => (
                        <div
                            key={index}
                            className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-2xl border-4 border-green-200"
                            style={{animationDelay: `${index * 100}ms`}}
                        >
                            <div className="text-5xl font-bold text-green-700 mb-2">{stat.number}</div>
                            <div className="text-green-800 font-semibold text-lg">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="relative z-10 container mx-auto px-6 py-24">
                <h2 className="text-6xl font-bold text-center mb-4 text-green-800">
                    Unsere Super-Stärken
                </h2>
                <p className="text-center text-xl text-green-700 mb-16">
                    Alles was du brauchst, um deine Daten kartoffelig zu verwalten
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="feature-card bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-4 border-green-200 hover:border-green-400"
                            onMouseEnter={() => setHoveredFeature(index)}
                            onMouseLeave={() => setHoveredFeature(null)}
                            style={{animationDelay: `${index * 150}ms`}}
                        >
                            <div
                                className={`w-20 h-20 potato-blob flex items-center justify-center mb-6 text-white transition-all duration-300 ${
                                    hoveredFeature === index ? 'glow-green scale-110' : ''
                                }`}
                            >
                                {feature.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-green-800 mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-green-700 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative z-10 container mx-auto px-6 py-24">
                <div
                    className="bg-gradient-to-r from-green-600 to-green-500 rounded-[4rem] p-16 text-center shadow-2xl potato-texture relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        {[...Array(6)].map((_, i) => (
                            <div
                                key={i}
                                className="potato-blob absolute"
                                style={{
                                    width: `${Math.random() * 100 + 50}px`,
                                    height: `${Math.random() * 100 + 50}px`,
                                    top: `${Math.random() * 100}%`,
                                    left: `${Math.random() * 100}%`,
                                    animationDelay: `${i}s`,
                                    background: 'white'
                                }}
                            />
                        ))}
                    </div>

                    <h2 className="text-6xl font-bold text-white mb-6 relative z-10">
                        Bereit für die Ernte?
                    </h2>
                    <p className="text-2xl text-green-50 mb-10 max-w-2xl mx-auto relative z-10">
                        Starte jetzt mit 50 GB kostenlosen Kartoffel-Speicher!
                    </p>
                    <button
                        className="px-12 py-6 bg-white text-green-700 rounded-full text-2xl font-bold hover:shadow-2xl hover:scale-110 transition-all duration-300 relative z-10">
                        Jetzt kostenlos starten 🥔
                    </button>
                </div>
            </section>

            {/* Footer */}
            <footer className="relative z-10 container mx-auto px-6 py-12 border-t-4 border-green-200">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="flex items-center gap-3 mb-6 md:mb-0">
                        <div className="w-12 h-12 potato-blob flex items-center justify-center">
                            <Cloud className="w-6 h-6 text-white"/>
                        </div>
                        <span className="text-2xl font-bold text-green-700">PotatoCloud</span>
                    </div>

                    <div className="flex gap-8 text-green-700 font-semibold">
                        <a href="#" className="hover:text-green-500 transition-colors">Datenschutz</a>
                        <a href="#" className="hover:text-green-500 transition-colors">AGB</a>
                        <a href="#" className="hover:text-green-500 transition-colors">Kontakt</a>
                    </div>
                </div>

                <div className="text-center mt-8 text-green-600">
                    <p className="font-medium">© 2026 PotatoCloud - Die knolligste Cloud seit 1850 🥔</p>
                </div>
            </footer>
        </div>
    )
}
