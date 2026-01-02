import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import {Mailbox} from "lucide-react";

export default function ImpressumPage() {
    return (
        <>

            <Header />



            <main className="section">
                <div className="container">
                    {/* Header */}

                    <div className="section-header">

                        <span className="section-badge">Rechtliches</span>
                        <h1 className="section-title">Impressum</h1>
                        <p className="section-subtitle">
                            Angaben gemäß § 5 TMG
                        </p>
                    </div>


                    {/* Content Card */}
                    <div
                        style={{
                            maxWidth: "800px",
                            margin: "0 auto",
                            background: "var(--bg-card)",
                            border: "1px solid var(--border)",
                            borderRadius: "16px",
                            padding: "32px",
                        }}
                    >
                        <BackButton />
                        {/* Betreiber */}
                        <h2 style={{ fontSize: "20px", marginBottom: "8px" }}>
                            Betreiber
                        </h2>
                        <p style={{ color: "var(--text-secondary)", marginBottom: "24px" }}>
                            Max Mustermann<br />
                            Musterstraße 1<br />
                            12345 Musterstadt<br />
                            Deutschland
                        </p>

                        {/* Kontakt */}
                        <h2 style={{ fontSize: "20px", marginBottom: "8px" }}>
                            Kontakt
                        </h2>
                        <p style={{ color: "var(--text-secondary)", marginBottom: "24px" }}>
                            E-Mail: <a href={"mailto:kontakt@potatocloud.de"}>kontakt@potatocloud.de</a>  <br />
                            Discord: PotatoCloud
                        </p>

                        {/* Verantwortlich */}
                        <h2 style={{ fontSize: "20px", marginBottom: "8px" }}>
                            Verantwortlich für den Inhalt
                        </h2>
                        <p style={{ color: "var(--text-secondary)", marginBottom: "24px" }}>
                            Max Mustermann
                        </p>

                        {/* Haftung */}
                        <h2 style={{ fontSize: "20px", marginBottom: "8px" }}>
                            Haftungsausschluss
                        </h2>
                        <p style={{ color: "var(--text-secondary)", fontSize: "14px" }}>
                            Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt.
                            Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
                            können wir jedoch keine Gewähr übernehmen.
                        </p>
                    </div>
                </div>
            </main>

            <Footer />

        </>
    )
}