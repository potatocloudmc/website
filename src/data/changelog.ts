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
        slug: "v1-4-1",
        version: "1.4.1",
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
];