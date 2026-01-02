"use client";

import { useEffect, useState } from "react";

type TypewriterProps = {
    text: string;
    speed?: number;
};

export default function Typewriter({ text, speed = 60 }: TypewriterProps) {
    const [displayedText, setDisplayedText] = useState("");
    const [hasRun, setHasRun] = useState(false);

    useEffect(() => {
        if (hasRun) return;

        let index = 0;

        const interval = setInterval(() => {
            setDisplayedText((prev) => prev + text[index]);
            index++;

            if (index === text.length) {
                clearInterval(interval);
                setHasRun(true);
            }
        }, speed);

        return () => clearInterval(interval);
    }, [text, speed, hasRun]);

    return <span>{displayedText}</span>;
}
