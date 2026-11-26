import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Logo, SectionTitle } from './Layout';
import { Authors, Text } from './Text';
import { Paper } from './data';
import { useLang } from './i18n';
import { NumberTicker } from './motion';

const pad = (n: number) => String(n).padStart(2, '0');
const expand = {
    initial: { height: 0, opacity: 0 },
    animate: {
        height: 'auto',
        opacity: 1,
        transition: { height: { duration: 0.5, ease: [0.32, 0.72, 0, 1] }, opacity: { duration: 0.35, delay: 0.08 } },
    },
    exit: {
        height: 0,
        opacity: 0,
        transition: { height: { duration: 0.4, ease: [0.32, 0.72, 0, 1] }, opacity: { duration: 0.18 } },
    },
} as const;

function Intro() {
    const { content } = useLang();
    const { intro } = content;
    return (
        <section className="intro" id="about">
            <div className="intro__head">
                <h1 className="intro__headline">
                    {intro.headline.map((p, i) => (
                        <span key={i} className={p.muted ? 'intro__muted' : undefined}>{p.text}</span>
                    ))}
                </h1>
                <Logo className="intro__mark" />
            </div>
            <div className="intro__bio">
                {intro.bio.map((p, i) => <p key={i}><Text>{p}</Text></p>)}
            </div>
            {intro.availability && (
                <p className="intro__availability">
                    <span className="intro__availability-dot" aria-hidden />
                    <span><Text>{intro.availability}</Text></span>
                </p>
            )}
        </section>
    );
}

export function NewsList({ limit }: { limit?: number }) {
    const { content } = useLang();
    const items = limit ? content.news.slice(0, limit) : content.news;
    return (
        <ul className="news">
            {items.map((n, i) => (
                <li key={i} className="news__row">
                    <span className="news__date"><Text>{n.date}</Text></span>
                    <span className="news__text"><Text>{n.text}</Text></span>
                </li>
            ))}
        </ul>
    );
}

// Latest item in a quiet bar; click to expand the rest.
function NewsBar() {
    const [open, setOpen] = useState(false);
    const { content } = useLang();
    const [first, ...rest] = content.news;
    return (
        <div className="newsbar">
            <button className="newsbar__row" onClick={() => setOpen(!open)} aria-expanded={open}>
                <span className="news__date"><Text>{first.date}</Text></span>
                <span className="newsbar__text"><Text>{first.text}</Text></span>
                <span className={`newsbar__chev${open ? ' is-open' : ''}`} aria-hidden>⌄</span>
            </button>
            <AnimatePresence initial={false}>
                {open && (
                    <motion.div className="newsbar__more" {...expand}>
                        {rest.map((n, i) => (
                            <div key={i} className="newsbar__item">
                                <span className="news__date"><Text>{n.date}</Text></span>
                                <span><Text>{n.text}</Text></span>
                            </div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

// One publication: image left, text right (as on hyewon.me); "Details" opens below.
function PubRow({ p, i }: { p: Paper; i: number }) {
    const [open, setOpen] = useState(false);
    const { content } = useLang();
    const { buttons } = content.ui;
    return (
        <article className="pub" style={{ '--accent': p.accent } as React.CSSProperties}>
            <button className="pub__image" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={buttons.detailsAria(p.title)}>
                <img src={p.image} alt={p.imageAlt} loading="lazy" />
            </button>
            <div className="pub__body">
                <p className="pub__label">
                    <span className="pub__num">{pad(i + 1)}</span>
                    <span>{p.status}</span>
                </p>
                <h3 className="pub__title"><Text>{p.title}</Text></h3>
                <p className="pub__authors"><Authors>{p.authors}</Authors></p>
                {p.journal ? (
                    <div className="journal">
                        <img src={p.journal.logo} alt={p.journal.publisher} className="journal__logo" />
                        <p className="journal__meta">
                            <span className="journal__name">{p.journal.name}</span>
                            <span className="journal__rank"><Text>{p.journal.rank}</Text></span>
                        </p>
                    </div>
                ) : (
                    <p className="pub__venue"><Text>{p.venue}</Text></p>
                )}
                <div className="pub__actions">
                    <button className="chip" onClick={() => setOpen(!open)} aria-expanded={open}>
                        {open ? buttons.hideDetails : buttons.details} <span aria-hidden>{open ? '−' : '+'}</span>
                    </button>
                </div>
            </div>

            <AnimatePresence initial={false}>
                {open && (
                    <motion.div className="pub__detail" {...expand}>
                        <div className="pub__detail-inner">
                            <p className="pub__result"><Text>{p.result}</Text></p>
                            {p.stats && (
                                <dl className="stats">
                                    {p.stats.map((st) => (
                                        <div key={st.label}>
                                            <dt><NumberTicker value={st.value} decimals={st.decimals} suffix={st.suffix} /></dt>
                                            <dd>{st.label}</dd>
                                        </div>
                                    ))}
                                </dl>
                            )}
                            <dl className="pub__grid">
                                {p.details.map((d) => (
                                    <div key={d.label}>
                                        <dt>{d.label}</dt>
                                        <dd><Text>{d.text}</Text></dd>
                                    </div>
                                ))}
                            </dl>
                            <div className="pub__foot">
                                <div className="tags">{p.tags.map((t) => <span key={t}>{t}</span>)}</div>
                                {p.note && <span className="paper-detail__note">{p.note}</span>}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </article>
    );
}

function Publications() {
    const { content } = useLang();
    return (
        <section className="section" id="publications">
            <SectionTitle>{content.ui.sections.publications}</SectionTitle>
            <div className="pubs">
                {content.papers.map((p, i) => <PubRow key={p.id} p={p} i={i} />)}
            </div>
        </section>
    );
}

function Awards() {
    const { content } = useLang();
    return (
        <section className="section" id="awards">
            <SectionTitle>{content.ui.sections.awards}</SectionTitle>
            <ul className="awards">
                {content.awards.map((a, i) => {
                    const body = (
                        <>
                            <span className="awards__date"><Text>{a.date}</Text></span>
                            <span className="awards__main">
                                <span className="awards__title"><Text>{a.title}</Text></span>
                                <span className="awards__detail"><Text>{a.detail}</Text></span>
                            </span>
                            <span className="awards__logos">
                                {a.logos?.map((l) => (
                                    <img key={l.alt} src={l.src} alt={l.alt} className={`awards__logo ${l.className}`} />
                                ))}
                            </span>
                            <span className="awards__arrow" aria-hidden>{a.link ? '↗' : ''}</span>
                        </>
                    );
                    return (
                        <li key={i}>
                            {a.link ? (
                                <a href={a.link} target="_blank" rel="noopener noreferrer" className="awards__row">{body}</a>
                            ) : (
                                <div className="awards__row">{body}</div>
                            )}
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}

export default function Home() {
    return (
        <main className="page page--home">
            <Intro />
            <NewsBar />
            <Publications />
            <Awards />
        </main>
    );
}
