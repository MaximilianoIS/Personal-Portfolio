import React from "react";
import gistLogo from '../assets/images/gist-logo.png';
import unamLogo from '../assets/images/unam-logo.png';
import '../assets/styles/Timeline.scss';

interface HistoryEntry {
    date: string;
    org: string;
    location: string;
    role: string;
    description: string;
    logo: string;
    logoAlt: string;
    tag?: string;
}

const entries: HistoryEntry[] = [
    {
        date: "Oct 2025 — Present",
        org: "IMPACT Lab · GIST",
        location: "Gwangju, Korea",
        role: "Research Intern — NLP & AI",
        description: "Data analyst for an AI foreign media monitoring project under the Korean Ministry of Culture, Sports and Tourism. Applying NLP methods to extract topics, sentiment, and trends from international media signals.",
        logo: gistLogo,
        logoAlt: "GIST",
        tag: "NLP · AI",
    },
    {
        date: "July 2025 — Sept 2025",
        org: "Mexican Physics Society · UNAM",
        location: "Remote, Mexico",
        role: "Research Intern — Quantum Information",
        description: "Studied spin squeezing in optical lattice systems with spin–orbit coupling. Implemented exact diagonalization code for many-body quantum dynamics under Dr. Santiago Caballero Benitez.",
        logo: unamLogo,
        logoAlt: "UNAM",
        tag: "Quantum · Many-body",
    },
    {
        date: "Mar 2025 — June 2025",
        org: "AI Semiconductors Lab · GIST",
        location: "Gwangju, Korea",
        role: "Research Intern — Computational Materials",
        description: "Photoluminescence (PL) measurements on GaAs and introductory DFT calculations using Quantum Espresso, focused on deformation potential estimation.",
        logo: gistLogo,
        logoAlt: "GIST",
        tag: "DFT · Materials",
    },
    {
        date: "July 2024 — Aug 2024",
        org: "High Energy Density Physics Lab · GIST",
        location: "Gwangju, Korea",
        role: "Research Intern — Experimental Physics",
        description: "Trained in laser and optics at a 150 TW laser facility. Analyzed Coherent Transition Radiation experiment data and supported laser shot operations.",
        logo: gistLogo,
        logoAlt: "GIST",
        tag: "Laser · Optics",
    },
    {
        date: "Sept 2023 — July 2024",
        org: "Mathematical Sciences Lab · GIST",
        location: "Gwangju, Korea",
        role: "Research Intern — Computational Mathematics",
        description: "Developed Monte Carlo fast diffusion algorithms for the Laplace equation on conductor surfaces. Presented at GIST Embassy Welcome Day, Seoul (Oct 2024).",
        logo: gistLogo,
        logoAlt: "GIST",
        tag: "Monte Carlo · HPC",
    },
    {
        date: "Aug 2022 — Present",
        org: "Gwangju Institute of Science and Technology",
        location: "Gwangju, Korea",
        role: "B.Sc. Physics",
        description: "Minors in Artificial Intelligence Convergence and Mathematical Sciences. GPA 3.26 / 4.5. Core courses: Quantum Mechanics, Quantum Information Science, Computational Physics, Machine Learning & Deep Learning.",
        logo: gistLogo,
        logoAlt: "GIST",
        tag: "Education",
    },
];

function Timeline() {
    return (
        <div id="history">
            <div className="items-container">
                <h1>History</h1>
                <div className="history-timeline">
                    {entries.map((entry, i) => (
                        <div className="history-entry" key={i}>

                            {/* Left: logo + vertical connector */}
                            <div className="history-left">
                                <div className="history-logo">
                                    <img src={entry.logo} alt={entry.logoAlt} />
                                </div>
                                {i < entries.length - 1 && (
                                    <div className="history-connector" />
                                )}
                            </div>

                            {/* Right: text content */}
                            <div className="history-body">
                                <div className="history-meta">
                                    <span className="history-date">{entry.date}</span>
                                    <span className="history-sep">·</span>
                                    <span className="history-location">{entry.location}</span>
                                    {entry.tag && (
                                        <span className="history-tag">{entry.tag}</span>
                                    )}
                                </div>
                                <div className="history-org">{entry.org}</div>
                                <h3 className="history-role">{entry.role}</h3>
                                <div className="history-desc-block">
                                    <p className="history-desc">{entry.description}</p>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Timeline;
