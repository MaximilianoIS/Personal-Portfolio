import React, { useState } from 'react';
import { NewsList } from './Home';
import { SectionTitle } from './Layout';
import { Text } from './Text';
import { experience, links, physics, skills } from './data';

const circled = ['①', '②', '③', '④', '⑤', '⑥'];

export function PageHeader({ title, intro }: { title: string; intro?: string }) {
    return (
        <header className="page__header">
            <h1 className="page__title">{title}</h1>
            {intro && <p className="lead page__intro">{intro}</p>}
        </header>
    );
}

// Past physics research as a numbered accordion (used on the Projects page)
export function PhysicsList() {
    const [open, setOpen] = useState<number | null>(0);
    return (
        <ul className="accordion">
            {physics.map((item, i) => {
                const isOpen = open === i;
                return (
                    <li key={item.title} className={isOpen ? 'is-open' : ''}>
                        <button onClick={() => setOpen(isOpen ? null : i)} aria-expanded={isOpen}>
                            <span className="accordion__num">{circled[i]}</span>
                            <span className="accordion__title">{item.title}</span>
                            <span className="accordion__chev" aria-hidden>⌄</span>
                        </button>
                        <div className="accordion__body" hidden={!isOpen}>
                            <p className="accordion__meta">{item.where} · {item.when}</p>
                            <p>{item.text}</p>
                        </div>
                    </li>
                );
            })}
        </ul>
    );
}

export function HistoryPage() {
    return (
        <main className="wrap page">
            <PageHeader
                title="History"
                intro="Research internships, positions and education, most recent first."
            />
            <section className="section section--tight">
                <ul className="cv-list">
                    {experience.map((r, i) => (
                        <li key={i}>
                            <span className="cv-list__when"><Text>{r.when}</Text></span>
                            <span className="cv-list__what">{r.what}</span>
                            <span className="cv-list__where"><Text>{r.where}</Text></span>
                        </li>
                    ))}
                </ul>
            </section>
            <section className="section section--tight">
                <SectionTitle>Skills</SectionTitle>
                <div className="tags tags--large">
                    {skills.map((s) => <span key={s}>{s}</span>)}
                </div>
                <p className="page__note">Spanish (native) · English (IELTS Academic 8.0) · Korean (functional)</p>
            </section>
        </main>
    );
}

export function NewsPage() {
    return (
        <main className="wrap page">
            <PageHeader title="News" />
            <section className="section section--tight">
                <NewsList />
            </section>
        </main>
    );
}

export function ContactPage() {
    return (
        <main className="wrap page">
            <PageHeader
                title="Contact"
                intro="Open to research collaborations and internships in forecasting, alternative data and credit risk. Email is the best way to reach me."
            />
            <section className="section section--tight">
                <ul className="link-list link-list--page">
                    <li>
                        <a href={`mailto:${links.email}`}>
                            <span>{links.email}</span>
                            <span className="link-list__meta">Email</span>
                        </a>
                    </li>
                    <li>
                        <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
                            <span>LinkedIn</span>
                            <span className="link-list__meta">↗</span>
                        </a>
                    </li>
                    <li>
                        <a href={links.lab} target="_blank" rel="noopener noreferrer">
                            <span>IMPACT Lab, AI X School, GIST</span>
                            <span className="link-list__meta">Gwangju, South Korea ↗</span>
                        </a>
                    </li>
                </ul>
                <p className="credit">
                    Site design adapted from a portfolio template by Arnau Ros (CC BY 4.0).
                </p>
            </section>
        </main>
    );
}
