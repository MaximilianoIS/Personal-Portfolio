import React from 'react';
import gistLogo from '../assets/images/gist-wordmark.png';
import flagMx from '../assets/images/flag-mx.png';
import flagKr from '../assets/images/flag-kr.png';
import secihtiLogo from '../assets/images/secihti-logo.svg';
import { useLang } from './i18n';
import { Highlight } from './motion';

// [image, alt, extra class]
const inlineLogos: Record<string, [string, string, string]> = {
    gist: [gistLogo, 'GIST', 'inline-logo--wordmark'],
    mx: [flagMx, 'Mexico', 'inline-logo--flag'],
    kr: [flagKr, 'South Korea', 'inline-logo--flag'],
    secihti: [secihtiLogo, 'SECIHTI', 'inline-logo--secihti'],
};

// Renders a string with a tiny markup:
//   [[placeholder]]  → yellow mark (still to confirm)
//   ==phrase==       → animated highlighter stroke
//   **bold**         → strong
//   [label](url)     → underlined link
//   ::gist::         → small inline logo
const TOKEN = /(\[\[[^\]]*\]\]|==[^=]+==|\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\)|::\w+::)/g;

export function Text({ children }: { children: string }) {
    const { content } = useLang();
    const parts = children.split(TOKEN);
    return (
        <>
            {parts.map((p, i) => {
                if (!p) return null;
                if (p.startsWith('[[')) {
                    return (
                        <mark key={i} className="tbd" title={content.ui.placeholderTitle}>
                            {p.slice(2, -2)}
                        </mark>
                    );
                }
                if (p.startsWith('==')) return <Highlight key={i}>{p.slice(2, -2)}</Highlight>;
                if (p.startsWith('**')) return <strong key={i}>{p.slice(2, -2)}</strong>;
                if (p.startsWith('::')) {
                    const logo = inlineLogos[p.slice(2, -2)];
                    return logo ? <img key={i} src={logo[0]} alt={logo[1]} className={`inline-logo ${logo[2]}`} /> : null;
                }
                const link = p.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
                if (link) {
                    return (
                        <a key={i} href={link[2]} target="_blank" rel="noopener noreferrer" className="text-link">
                            {link[1]}
                        </a>
                    );
                }
                return <React.Fragment key={i}>{p}</React.Fragment>;
            })}
        </>
    );
}

// Author list with the site owner's name in bold.
export function Authors({ children }: { children: string }) {
    const me = 'Maximiliano Islas Solis';
    const parts = children.split(me);
    return (
        <>
            {parts.map((p, i) => (
                <React.Fragment key={i}>
                    <Text>{p}</Text>
                    {i < parts.length - 1 && <strong>{me}</strong>}
                </React.Fragment>
            ))}
        </>
    );
}
