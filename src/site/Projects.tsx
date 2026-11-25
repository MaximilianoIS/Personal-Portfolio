import React from 'react';
import { SectionTitle } from './Layout';
import { PageHeader, PhysicsList } from './Pages';
import { Text } from './Text';
import { minorProjects } from './data';

const ext = { target: '_blank', rel: 'noopener noreferrer' };

export default function Projects() {
    return (
        <main className="wrap page">
            <PageHeader
                title="Projects"
                intro="Before turning to markets, I trained as a physicist: quantum many-body simulation, materials and laser experiments, and Monte Carlo methods on HPC clusters. That background in stochastic simulation now underpins my work on forecasting and risk."
            />
            <section className="section section--tight" id="physics">
                <SectionTitle>Research in physics</SectionTitle>
                <PhysicsList />
            </section>
            <section className="section section--tight" id="other-projects">
                <SectionTitle>Other projects</SectionTitle>
                <ul className="archive">
                    {minorProjects.map((p) => (
                        <li key={p.title}>
                            <span className="archive__year"><Text>{p.year}</Text></span>
                            <div className="archive__main">
                                <h3>{p.title}</h3>
                                <p>{p.text}</p>
                            </div>
                            <span className="archive__kind">{p.kind}</span>
                            <span className="archive__links">
                                {p.link && <a href={p.link} {...ext}>View ↗</a>}
                                {p.code && <a href={p.code} {...ext}>Code ↗</a>}
                            </span>
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    );
}
