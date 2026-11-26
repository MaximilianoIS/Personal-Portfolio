import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLinkedinIn, faOrcid } from '@fortawesome/free-brands-svg-icons';
import { faCopy } from '@fortawesome/free-regular-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import portrait from '../assets/images/portrait.webp';
import { links } from './data';
import { useLang } from './i18n';
import { Lang } from './translations';
import { smoothScrollTo } from './smooth';

export type Route = 'home' | 'projects' | 'history' | 'news' | 'contact';

export const goHomeTo = (id?: string) => {
    if (window.location.hash && window.location.hash !== '#/') {
        window.location.hash = '/';
        // wait for the page cross-fade (App.tsx) before gliding to the section
        setTimeout(() => smoothScrollTo(id), 420);
    } else {
        smoothScrollTo(id);
    }
};

// Logo: a first-passage random walk — the method behind the FPLP paper.
// The ellipse is the conducting surface; a walker starts inside (open circle),
// wanders until it first hits the boundary (filled dot). The path comes from a
// seeded simulation, not drawn by hand.
const WALK = '21,16.5 23.9,17.4 27,17.6 29.4,15.9 32.2,14.8 33.6,17.2 32.1,19.2 35.1,18.5 37.8,19.8 38.7,17.1 40.1,14.6 41.7,12.3 44.6,11.2 45.1,13.9 46.5,11.4 48.1,13.8 50.3,11.8 49.1,9.5 47.7,7.5 50.6,6.6 50,4';

export function Logo({ className = 'logo' }: { className?: string }) {
    const { content } = useLang();
    return (
        <svg className={className} viewBox="-1 -1 66 32" role="img" aria-label={content.ui.logoAlt}>
            <ellipse cx="32" cy="15" rx="30.75" ry="13.75" fill="none" stroke="currentColor" strokeWidth="1.4" />
            <polyline points={WALK} fill="none" stroke="currentColor" strokeWidth="1.15" strokeLinejoin="round" strokeLinecap="round" />
            <circle cx="21" cy="16.5" r="1.5" fill="var(--bg)" stroke="currentColor" strokeWidth="0.9" />
            <circle className="logo__hit-point" cx="50" cy="4" r="2.3" />
        </svg>
    );
}

export const socials: [string, string, IconDefinition, string][] = [
    ['LinkedIn', links.linkedin, faLinkedinIn, 'linkedin'],
    ['GitHub', links.github, faGithub, 'github'],
    ['ORCID', links.orcid, faOrcid, 'orcid'],
];

const languages: { code: Lang; short: string; name: string }[] = [
    { code: 'en', short: 'EN', name: 'English' },
    { code: 'es', short: 'ES', name: 'Español' },
    { code: 'ko', short: 'KO', name: '한국어' },
];

function LangSwitch() {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const { lang, setLang, content } = useLang();
    const current = languages.find((l) => l.code === lang) || languages[0];

    useEffect(() => {
        if (!open) return;
        const onDown = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
        };
        const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
        document.addEventListener('mousedown', onDown);
        document.addEventListener('keydown', onKey);
        return () => {
            document.removeEventListener('mousedown', onDown);
            document.removeEventListener('keydown', onKey);
        };
    }, [open]);

    return (
        <div className="lang" ref={ref}>
            <button
                className="lang__toggle"
                onClick={() => setOpen(!open)}
                aria-haspopup="menu"
                aria-expanded={open}
                aria-label={`${content.ui.languageLabel}: ${current.name}`}
            >
                {current.short} <span className="lang__chev" aria-hidden>⌄</span>
            </button>
            <AnimatePresence>
                {open && (
                    <motion.ul
                        className="lang__menu"
                        role="menu"
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 4 }}
                        transition={{ duration: 0.14 }}
                    >
                        {languages.map((l) => (
                            <li key={l.code} role="none">
                                <button
                                    role="menuitem"
                                    lang={l.code}
                                    className={`lang__item${l.code === current.code ? ' is-active' : ''}`}
                                    onClick={() => {
                                        setLang(l.code);
                                        setOpen(false);
                                    }}
                                >
                                    <span>{l.name}</span>
                                    {l.code === current.code && <span aria-hidden>✓</span>}
                                </button>
                            </li>
                        ))}
                    </motion.ul>
                )}
            </AnimatePresence>
        </div>
    );
}

// Email shown large; one click copies it (falls back to mailto if the browser blocks the clipboard)
function CopyEmail() {
    const [copied, setCopied] = useState(false);
    const { content } = useLang();
    const copy = async () => {
        try {
            await navigator.clipboard.writeText(links.email);
            setCopied(true);
            setTimeout(() => setCopied(false), 1800);
        } catch {
            window.location.href = `mailto:${links.email}`;
        }
    };
    return (
        <button className={`copy-email${copied ? ' is-copied' : ''}`} onClick={copy} title={content.ui.copyEmailTitle}>
            <span className="copy-email__address">{links.email}</span>
            <span className="copy-email__icon" aria-hidden>
                <FontAwesomeIcon icon={copied ? faCheck : faCopy} />
            </span>
            <span className="sr-only" role="status">{copied ? content.ui.emailCopied : ''}</span>
        </button>
    );
}

// Left column, sticky on desktop — layout after hyewon.me
export function Sidebar({ route }: { route: Route }) {
    const [open, setOpen] = useState(false);
    const { content } = useLang();
    const { ui } = content;

    const nav: { key: string; label: string; go: () => void; route?: Route }[] = [
        { key: 'about', label: ui.nav.about, go: () => goHomeTo() },
        { key: 'publications', label: ui.nav.publications, go: () => goHomeTo('publications') },
        { key: 'awards', label: ui.nav.awards, go: () => goHomeTo('awards') },
        { key: 'projects', label: ui.nav.projects, go: () => { window.location.hash = '/projects'; }, route: 'projects' },
        { key: 'history', label: ui.nav.history, go: () => { window.location.hash = '/history'; }, route: 'history' },
    ];

    return (
        <aside className="sidebar">
            <div className="sidebar__inner">
                <div className="sidebar__head">
                    <button className="sidebar__name" onClick={() => { setOpen(false); goHomeTo(); }}>
                        Maximiliano Islas Solis
                    </button>
                    <button className="sidebar__toggle" aria-expanded={open} onClick={() => setOpen(!open)}>
                        {open ? ui.close : ui.menu}
                    </button>
                </div>

                <div className="sidebar__photo">
                    <img src={portrait} alt={ui.portraitAlt} />
                </div>

                <nav className={`sidebar__nav${open ? ' is-open' : ''}`}>
                    {nav.map((n) => (
                        <button
                            key={n.key}
                            className={n.route === route || (n.key === 'about' && route === 'home') ? 'is-active' : undefined}
                            onClick={() => { setOpen(false); n.go(); }}
                        >
                            {n.label}
                        </button>
                    ))}
                    <a href={links.cv} target="_blank" rel="noopener noreferrer">{ui.nav.cv}</a>
                </nav>

                <div className="sidebar__foot">
                    <CopyEmail />
                    <div className="socials">
                        {socials.map(([label, href, icon, key]) => (
                            <a
                                key={label}
                                href={href}
                                aria-label={label}
                                title={label}
                                className={`socials__item icon--${key}`}
                                {...(href.startsWith('mailto') ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
                            >
                                <FontAwesomeIcon icon={icon} fixedWidth />
                            </a>
                        ))}
                    </div>
                    <div className="sidebar__meta">
                        <span>© {new Date().getFullYear()} M. Islas Solis</span>
                        <LangSwitch />
                    </div>
                </div>
            </div>
        </aside>
    );
}

export function SectionTitle({ children, aside }: { children: React.ReactNode; aside?: React.ReactNode }) {
    return (
        <div className="section-title">
            <h2>{children}</h2>
            {aside && <div className="section-title__aside">{aside}</div>}
        </div>
    );
}
