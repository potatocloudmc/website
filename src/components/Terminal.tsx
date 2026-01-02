"use client";

import { useState } from "react";
import { Typewriter } from "react-simple-typewriter";

export default function Terminal() {
    const [step, setStep] = useState(0);

    return (
        <>
            <div className={"terminal"}>
                <div className={"terminal-dots"}>
                    <span className={"dot-red"}></span>
                    <span className={"dot-yellow"}></span>
                    <span className={"dot-green"}></span>
                </div>
                <span className={"terminal-title"}>PotatoCloud Terminal</span>
            </div>

            <div className={"terminal-content"}>
                {/* COMMAND */}
                <div className={"terminal-line"}>
                    <span className={"prompt"}>$</span>
                    <span className={"command"}>
            {step === 0 && (
                <Typewriter
                    words={["java -jar potatocloud-1.4.1.jar"]}
                    typeSpeed={40}
                    cursor
                    onLoopDone={() => setTimeout(() => setStep(1), 500)}
                />
            )}
          </span>
                </div>

                {/* INFO 1 */}
                {step >= 1 && (
                    <div className={"terminal-line"}>
                        <span className={"info"}>INFO</span>{" "}
                        <Typewriter
                            words={["Starting PotatoCloud 1.4.1..."]}
                            typeSpeed={50}
                            cursor={false}
                            onLoopDone={() => setTimeout(() => setStep(2), 400)}
                        />
                    </div>
                )}

                {/* INFO 2 */}
                {step >= 2 && (
                    <div className={"terminal-line"}>
                        <span className={"info"}>INFO</span>{" "}
                        <Typewriter
                            words={["Loading configuration"]}
                            typeSpeed={45}
                            cursor={false}
                            onLoopDone={() => setTimeout(() => setStep(3), 400)}
                        />
                    </div>
                )}

                {/* OK */}
                {step >= 3 && (
                    <div className={"terminal-line"}>
                        <span className={"ok"}>OK</span>{" "}
                        <Typewriter
                            words={["PotatoCloud started successfully"]}
                            typeSpeed={45}
                            cursor={false}
                        />
                    </div>
                )}
            </div>
        </>
    );
}
