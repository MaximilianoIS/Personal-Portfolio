import React from 'react';
import { SectionTitle } from './Layout';
import { PageHeader, PhysicsList } from './Pages';
import { Text } from './Text';
import { useLang } from './i18n';

const ext = { target: '_blank', rel: 'noopener noreferrer' };

export default function Projects() {
    const { content } = useLang();
    const { ui, minorProjects } = content;
    return (
        <main className="wrap page">
            <PageHeader
                title={ui.pages.projectsTitle}
                intro={ui.pages.projectsIntro}
            />
            <section className="section section--tight" id="physics">
                <SectionTitle>{ui.sections.physics}</SectionTitle>
                <PhysicsList />
            </section>
            <section className="section section--tight" id="other-projects">
                <SectionTitle>{ui.sections.otherProjects}</SectionTitle>
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
                                {p.link && <a href={p.link} {...ext}>{ui.buttons.view}</a>}
                                {p.code && <a href={p.code} {...ext}>{ui.buttons.code}</a>}
                            </span>
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    );
}
