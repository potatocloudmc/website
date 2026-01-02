export type ReleaseType = "major" | "minor" | "patch";

export type ChangelogEntry = {
    slug: string;
    version: string;
    date: string;
    author: string;
    summary: string;
    type: ReleaseType;
    changes: string[];
};

export const changelog: ChangelogEntry[] = [
    {
        slug: "v3-0-0-pre-7",
        version: "3.0.0-pre-7",
        date: "01. Januar 2026",
        author: "jirmjahu",
        summary: "Big structure changes",
        type: "minor",
        changes: [
            "Refactored internal cloud architecture",
            "Improved module loading system",
            "New API base for future features",
        ],
    },
    {
        slug: "v3-0-0-pre-6-2",
        version: "3.0.0-pre-6.2",
        date: "20. November 2025",
        author: "HttpMarco",
        summary: "Important bugfix update for some platforms",
        type: "patch",
        changes: [
            "Fixed startup crash on Linux",
            "Resolved proxy disconnect issue",
        ],
    },
];