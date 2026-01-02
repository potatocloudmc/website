import React from "react";

type RoadmapItem = {
    quarter: string;
    title: string;
    description: string;
    status: "planned" | "in-progress" | "completed";
};

const roadmap: RoadmapItem[] = [
    {
        quarter: "Q1 2025",
        title: "PotatoCloud 1.4.1 Release",
        description: "Verbesserte Server-Performance, neues Dashboard, automatische Backups",
        status: "completed",
    }
];

export default function Roadmap() {

    return (
        <>

            <section className={"section"}>
                <div className={"container"}>

                    <div className={"section-header"}>
                        <span className={"section-badge"}>Roadmap</span>
                        <h2 className={"section-title"}>
                            Was kommt als Nächstes?
                        </h2>
                        <p className={"section-subtitle"}>
                            Unsere Pläne für PotatoCloud - neue Features & Verbesserungen.
                        </p>
                    </div>

                    <div className={"flex flex-col gap-8"}>
                        {roadmap.map((item, index) => (
                            <div
                                key={index}
                                className="step"
                            >
                                <div className="step-number">
                                    {index + 1}
                                </div>
                                <div className="step-content">
                                    <h3>{item.title} <span style={{ color: "#91eb3d", fontWeight: 600 }}>({item.quarter})</span></h3>
                                    <p>{item.description}</p>
                                    <span
                                        style={{
                                            marginTop: "8px",
                                            display: "inline-block",
                                            fontSize: "12px",
                                            fontWeight: 600,
                                            color:
                                                item.status === "completed"
                                                    ? "#4ade80"
                                                    : item.status === "in-progress"
                                                        ? "#facc15"
                                                        : "#60a5fa",
                                        }}
                                    >
                  {item.status === "completed"
                      ? "Abgeschlossen"
                      : item.status === "in-progress"
                          ? "In Arbeit"
                          : "Geplant"}
                </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </>
    )

}