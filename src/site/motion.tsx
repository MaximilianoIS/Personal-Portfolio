// Animation primitives, adapted from Fancy Components (MIT, fancycomponents.dev)
// and rewritten for this site's SCSS instead of Tailwind.
import React, { useEffect, useRef } from 'react';
import { animate, motion, useInView, useReducedMotion } from 'motion/react';

const ease = [0.22, 1, 0.36, 1] as const;

// ─── Section fade-and-rise on first view ───────────────────────
export function Reveal({
    children,
    className,
    delay = 0,
    as = 'div',
    id,
}: {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    as?: 'div' | 'section' | 'nav';
    id?: string;
}) {
    const Tag = motion[as];
    return (
        <Tag
            id={id}
            className={className}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px 0px -12% 0px' }}
            transition={{ duration: 0.8, ease, delay }}
        >
            {children}
        </Tag>
    );
}

// ─── Vertical cut reveal (headline) ───────────────────────────
// Each word rises from behind an invisible line, staggered.
export type CutPart = { text: string; href?: string; muted?: boolean };

export function CutReveal({ parts, className, stagger = 0.06, delay = 0.15 }: {
    parts: CutPart[];
    className?: string;
    stagger?: number;
    delay?: number;
}) {
    // Plain text splits into words; a linked phrase stays one unit so its underline is continuous.
    // Each unit remembers whether whitespace followed it, so "Lab," keeps its comma attached.
    const full = parts.map((p) => p.text).join('');
    const units: (CutPart & { space: boolean })[] = [];
    let pos = 0;
    parts.forEach((p) => {
        const tokens = p.href ? [p.text] : (p.text.match(/\S+/g) || []);
        tokens.forEach((t) => {
            const at = full.indexOf(t, pos);
            pos = at + t.length;
            units.push({ text: t, href: p.href, muted: p.muted, space: /\s/.test(full[pos] || '') });
        });
    });

    return (
        <h1 className={className}>
            {units.map((u, i) => {
                const inner = (
                    <motion.span
                        className="cut__inner"
                        initial={{ y: '110%' }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.9, ease, delay: delay + i * stagger }}
                    >
                        {u.text}
                    </motion.span>
                );
                return (
                    <React.Fragment key={i}>
                        <span className={u.muted ? 'cut cut--muted' : 'cut'}>
                            {u.href ? (
                                <a href={u.href} target="_blank" rel="noopener noreferrer">{inner}</a>
                            ) : inner}
                        </span>
                        {u.space && ' '}
                    </React.Fragment>
                );
            })}
        </h1>
    );
}

// ─── Text highlighter ─────────────────────────────────────────
// A marker stroke sweeps left-to-right when the text scrolls into view.
export function Highlight({ children, delay = 0.25 }: { children: React.ReactNode; delay?: number }) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: '0px 0px -15% 0px' });
    return (
        <motion.span
            ref={ref}
            className="highlight"
            initial={{ backgroundSize: '0% 100%' }}
            animate={{ backgroundSize: inView ? '100% 100%' : '0% 100%' }}
            transition={{ duration: 1, ease, delay }}
        >
            {children}
        </motion.span>
    );
}

// ─── Number ticker ────────────────────────────────────────────
export function NumberTicker({ value, decimals = 0, prefix = '', suffix = '' }: {
    value: number;
    decimals?: number;
    prefix?: string;
    suffix?: string;
}) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true });
    const reduce = useReducedMotion();
    const fmt = (n: number) =>
        prefix + n.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals }) + suffix;

    useEffect(() => {
        const el = ref.current;
        if (!el || !inView) return;
        if (reduce) {
            el.textContent = fmt(value);
            return;
        }
        const controls = animate(0, value, {
            duration: 1.6,
            ease,
            onUpdate: (v) => { el.textContent = fmt(v); },
        });
        return () => controls.stop();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inView, value]);

    return <span ref={ref} className="ticker-num">{fmt(0)}</span>;
}
