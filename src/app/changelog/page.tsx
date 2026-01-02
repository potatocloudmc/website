"use client";

import { useState } from "react";
import Link from "next/link";
import { changelog, ReleaseType } from "@/data/changelog";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const filters: (ReleaseType | "all")[] = ["all", "major", "minor", "patch"];

export default function ChangelogPage() {
    const [filter, setFilter] = useState<ReleaseType | "all">("all");
    const [search, setSearch] = useState("");

    const filtered = changelog.filter((entry) => {
        const matchesFilter = filter === "all" || entry.type === filter;
        const matchesSearch =
            entry.version.toLowerCase().includes(search.toLowerCase()) ||
            entry.summary.toLowerCase().includes(search.toLowerCase());

        return matchesFilter && matchesSearch;
    });

    return (

        <>

            <Header />

            <main className="section">
                <div className="container">

                    {/* Header */}
                    <div className="section-header">
                        <span className="section-badge">Changelog</span>
                        <h1 className="section-title">Releases</h1>
                        <p className="section-subtitle">
                            Alle Versionen & Änderungen von PotatoCloud
                        </p>
                    </div>

                    {/* Toolbar */}
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            flexWrap: "wrap",
                            gap: "16px",
                            marginBottom: "32px",
                        }}
                    >
                        {/* Filters */}
                        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                            {filters.map((f) => (
                                <button
                                    key={f}
                                    onClick={() => setFilter(f)}
                                    style={{
                                        padding: "6px 14px",
                                        borderRadius: "999px",
                                        fontSize: "13px",
                                        border: "1px solid var(--border)",
                                        background:
                                            filter === f ? "rgba(145,235,61,0.15)" : "transparent",
                                        color:
                                            filter === f
                                                ? "var(--accent)"
                                                : "var(--text-secondary)",
                                        cursor: "pointer",
                                    }}
                                >
                                    {f === "all"
                                        ? "All Releases"
                                        : f.charAt(0).toUpperCase() + f.slice(1)}
                                </button>
                            ))}
                        </div>

                        {/* Search */}
                        <input
                            placeholder="Search changelog entries..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            style={{
                                background: "var(--bg-card)",
                                border: "1px solid var(--border)",
                                borderRadius: "8px",
                                padding: "10px 14px",
                                color: "var(--text-primary)",
                                minWidth: "260px",
                            }}
                        />
                    </div>

                    {/* Releases */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                        {filtered.map((entry) => (
                            <div
                                key={entry.slug}
                                style={{
                                    background: "linear-gradient(180deg, #0f0f0f, #080808)",
                                    border: "1px solid var(--border)",
                                    borderRadius: "16px",
                                    padding: "28px",
                                }}
                            >
                                {/* Meta */}
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        marginBottom: "12px",
                                    }}
                                >
                                    <div style={{ color: "var(--text-secondary)", fontSize: "13px" }}>
                                        v{entry.version} · {entry.date} · {entry.author}
                                    </div>

                                    <span
                                        style={{
                                            padding: "4px 10px",
                                            borderRadius: "999px",
                                            fontSize: "11px",
                                            fontWeight: 700,
                                            background:
                                                entry.type === "major"
                                                    ? "#7c2d12"
                                                    : entry.type === "minor"
                                                        ? "#1e40af"
                                                        : "#14532d",
                                            color: "#fff",
                                        }}
                                    >
                  {entry.type.toUpperCase()}
                </span>
                                </div>

                                {/* Content */}
                                <h2 style={{ fontSize: "22px", fontWeight: 800 }}>
                                    Version {entry.version}
                                </h2>
                                <p
                                    style={{
                                        color: "var(--text-secondary)",
                                        margin: "8px 0 16px",
                                    }}
                                >
                                    {entry.summary}
                                </p>

                                <Link
                                    href={`/changelog/${entry.slug}`}
                                    style={{
                                        color: "var(--accent)",
                                        fontWeight: 600,
                                        fontSize: "14px",
                                        textDecoration: "none",
                                    }}
                                    className={"btn-secondary"}
                                >
                                    Read Release Notes →
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />

        </>

    );
}
