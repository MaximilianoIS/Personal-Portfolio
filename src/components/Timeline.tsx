import React from "react";
import gistLogo from '../assets/images/gist-logo.png';
import unamLogo from '../assets/images/unam-logo.png';
import '../assets/styles/Timeline.scss';

interface HistoryEntry {
    date: string;
    shortDate: string;   // e.g. "2025"
    org: string;
    location: string;
    role: string;
    description: string;
    logo: string;
    logoAlt: string;
    tags: string[];
    type: 'research' | 'education';
}

const entries: HistoryEntry[] = [
    {
        date: "Oct 2025 — Present",
        shortDate: "2025",
        org: "IMPACT Lab · GIST",
        location: "Gwangju, Korea",
        role: "Research Intern — NLP & AI",
        description: "Data analyst for an AI foreign media monitoring project under the Korean Ministry of Culture, Sports and Tourism. Applying NLP methods to extract topics, sentiment, and trends from international media signals.",
        logo: gistLogo,
        logoAlt: "GIST",
        tags: ["NLP", "AI"],
        type: 'research',
    },
    {
        date: "July — Sept 2025",
        shortDate: "2025",
        org: "Mexican Physics Society · UNAM",
        location: "Remote, Mexico",
        role: "Research Intern — Quantum Information",
        description: "Studied spin squeezing in optical lattice systems with spin–orbit coupling. Implemented exact diagonalization code for many-body quantum dynamics under Dr. Santiago Caballero Benitez.",
        logo: unamLogo,
        logoAlt: "UNAM",
        tags: ["Quantum", "Many-body"],
        type: 'research',
    },
    {
        date: "Mar — June 2025",
        shortDate: "2025",
        org: "AI Semiconductors Lab · GIST",
        location: "Gwangju, Korea",
        role: "Research Intern — Computational Materials",
        description: "Photoluminescence (PL) measurements on GaAs and introductory DFT calculations using Quantum Espresso, focused on deformation potential estimation.",
        logo: gistLogo,
        logoAlt: "GIST",
        tags: ["DFT", "Materials"],
        type: 'research',
    },
    {
        date: "July — Aug 2024",
        shortDate: "2024",
        org: "High Energy Density Physics Lab · GIST",
        location: "Gwangju, Korea",
        role: "Research Intern — Experimental Physics",
        description: "Trained in laser and optics at a 150 TW laser facility. Analyzed Coherent Transition Radiation experiment data and supported laser shot operations.",
        logo: gistLogo,
        logoAlt: "GIST",
        tags: ["Laser", "Optics"],
        type: 'research',
    },
    {
        date: "Sept 2023 — July 2024",
        shortDate: "2023",
        org: "Mathematical Sciences Lab · GIST",
        location: "Gwangju, Korea",
        role: "Research Intern — Computational Mathematics",
        description: "Developed Monte Carlo fast diffusion algorithms for the Laplace equation on conductor surfaces. Presented at GIST Embassy Welcome Day, Seoul (Oct 2024).",
        logo: gistLogo,
        logoAlt: "GIST",
        tags: ["Monte Carlo", "HPC"],
        type: 'research',
    },
    {
        date: "Aug 2022 — Present",
        shortDate: "B.Sc.",
        org: "Gwangju Institute of Science & Technology",
        location: "Gwangju, Korea",
        role: "B.Sc. Physics",
        description: "Minors in AI Convergence and Mathematical Sciences. GPA 3.26/4.5. Core: Quantum Mechanics, Quantum Information, Computational Physics, ML & Deep Learning.",
        logo: gistLogo,
        logoAlt: "GIST",
        tags: ["Education"],
        type: 'education',
    },
];

function Timeline() {
    return (
        <div id="history">
            <div className="items-container">
                <h1>History</h1>
                <div className="history-grid">
                    {entries.map((entry, i) => (
                        <article className={`history-card history-card--${entry.type}`} key={i}>

                            {/* Top row: logo + org + date */}
                            <div className="history-card__header">
                                <img src={entry.logo} alt={entry.logoAlt} className="history-card__logo" />
                                <div className="history-card__org-block">
                                    <span className="history-card__org">{entry.org}</span>
                                    <span className="history-card__location">{entry.location}</span>
                                </div>
                                <span className="history-card__date">{entry.shortDate}</span>
                            </div>

                            {/* Role */}
                            <h3 className="history-card__role">{entry.role}</h3>

                            {/* Duration */}
                            <span className="history-card__duration">{entry.date}</span>

                            {/* Description */}
                            <p className="history-card__desc">{entry.description}</p>

                            {/* Tags */}
                            <div className="history-card__tags">
                                {entry.tags.map((tag, j) => (
                                    <span key={j} className="history-card__tag">{tag}</span>
                                ))}
                            </div>

                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Timeline;
