import { notFound } from "next/navigation";
import { changelog } from "@/data/changelog";

export async function generateStaticParams() {
    return changelog.map((entry) => ({
        slug: entry.slug
    }));
}

export default function ChangelogDetail({ params }: { params: { slug: string } }) {
    const entry = changelog.find((e) => e.slug === params.slug);
    if (!entry) return notFound();


    return (
        <main className="section">
            <div className="container">
                <div className="section-header">
                    <span className="section-badge">Release Notes</span>
                    <h1 className="section-title">Version {entry.version}</h1>
                    <p className="section-subtitle">{entry.date}</p>
                </div>

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
                    <p style={{ color: "var(--text-secondary)", marginBottom: "24px" }}>
                        {entry.summary}
                    </p>

                    <ul>
                        {entry.changes.map((c, i) => (
                            <li key={i} style={{ marginBottom: "8px" }}>
                                • {c}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </main>
    );
}
