// ─────────────────────────────────────────────────────────────
// All site content lives here. Anything wrapped in [[ ]] is a
// placeholder that still needs to be confirmed — the <Text>
// component renders it highlighted so it is easy to spot.
// ─────────────────────────────────────────────────────────────

import elsevierLogo from '../assets/images/elsevier-logo.png';
import iquhackDuck from '../assets/images/iquhack-duck.png';
import mitLogo from '../assets/images/mit-logo.png';
import foreignFlowsImg from '../assets/images/paper-foreign-flows.webp';
import fplpCover from '../assets/images/fplp_cover.jpg';
import atLogo from '../assets/images/at-logo.svg';

// Unsplash placeholders, cropped server-side to 3:2 so every card frames the same way
const img = (id: string, w = 1200) =>
    `https://images.unsplash.com/photo-${id}?w=${w}&h=${Math.round((w * 2) / 3)}&q=80&auto=format&fit=crop&crop=entropy`;

export const links = {
    email: 'maximiliano@gm.gist.ac.kr',
    linkedin: 'https://www.linkedin.com/in/maximiliano-islas-solis-42b717418',
    github: 'https://github.com/MaximilianoIS',
    lab: 'https://impact.gist.ac.kr/main/main.php',
    orcid: 'https://orcid.org/0009-0001-7470-3273',
    cv: 'https://drive.google.com/file/d/1n-eA36HnJzpID_4gmrDsKMNfF8gA5osz/view?usp=sharing', // [[confirm this is the latest CV]]
};

// Bio markup: **bold**, ::gist:: / ::mx:: / ::kr:: inline logos, [label](url) link, [[placeholder]].
export const intro = {
    // dark first clause, grey second clause — like hyewon.me
    headline: [
        { text: 'Hi, I’m Maximiliano.' },
        { text: ' I build explainable forecasts for financial & commodity markets.', muted: true },
    ],
    bio: [
        'I am an M.S. student in **AI Policy & Strategy** at ::gist:: [Gwangju Institute of Science and Technology (GIST)](https://www.gist.ac.kr/en/main.html), ::kr:: South Korea, working in the [IMPACT Lab](https://impact.gist.ac.kr/main/main.php) under [Prof. Duk-Jo Kong](https://impact.gist.ac.kr/team/professor.php). I am honored to be supported by the ::mx:: [SECIHTI Graduate Scholarship](https://secihti.mx/) from the Government of Mexico. I received my B.Sc. in Physics, with a minor in AI, from GIST in 2026.',
        'My research applies **machine learning and alternative data** — news text, LLM-derived sentiment and macro-financial signals — to **forecasting in equity and commodity markets**, with an emphasis on **explainability**. My physics background in **Monte Carlo and stochastic simulation** carries over to risk. I am also interested in credit risk for digital banking and the **systemic risk of AI trading agents**.',
    ],
    interests: ['ML for financial markets', 'Alternative data & NLP', 'Stochastic simulation'],
};

export interface NewsItem { date: string; text: string; }

export const news: NewsItem[] = [
    { date: 'Nov 2026', text: 'Excellence Award (aT President’s Award) at the AI Agricultural Price Forecasting Online Hackathon (aT), leading the IMPACT Lab team on vegetable price forecasting.' },
    { date: 'Sep 2026', text: 'Attended UN ESCAP CICTSTI-5, Bangkok.' },
    { date: 'Aug 2026', text: 'Started the M.S. in AI Policy & Strategy at GIST, IMPACT Lab.' },
    { date: 'Jul 2026', text: 'Attended the Asian Quantitative Finance Conference (AQFC), Pohang.' },
    { date: 'May 2026', text: 'Talk at Quantum Future Korea 2026, National Assembly, Seoul.' },
];

export interface Award { date: string; title: string; detail: string; link?: string; logos?: { src: string; alt: string; className: string }[]; }

export const awards: Award[] = [
    {
        date: 'Nov 2026',
        title: '**Excellence Award**, aT President’s Award',
        detail: 'AI Agricultural Price Forecasting Online Hackathon, Korea Agro-Fisheries & Food Trade Corp. Led the IMPACT Lab team on vegetable price forecasting.',
        logos: [{ src: atLogo, alt: 'aT — Korea Agro-Fisheries & Food Trade Corp.', className: 'awards__logo--at' }],
    },
    {
        date: 'Feb 2025',
        title: '**1st Place**, MIT iQuHACK 2025',
        detail: 'Quantum Rings remote challenge: integer factorization with Shor’s algorithm.',
        link: 'https://www.iquise.mit.edu/iQuHACK/2025-01-31',
        logos: [
            { src: iquhackDuck, alt: 'iQuHACK', className: 'awards__logo--duck' },
            { src: mitLogo, alt: 'MIT', className: 'awards__logo--mit' },
        ],
    },
];

export type PaperStatus = 'Working paper' | 'In preparation' | 'Submitted' | 'Planned';

export interface Paper {
    id: string;
    status: PaperStatus;
    title: string;
    authors: string;      // the owner's name is bolded automatically
    note?: string;        // e.g. "* equal contribution"
    venue: string;
    journal?: { name: string; publisher: string; logo: string; rank: string };
    result: string;       // one-line key result; ==phrase== gets the highlighter
    stats?: { value: number; decimals?: number; suffix?: string; label: string }[];
    image: string;
    imageAlt: string;
    details: { label: string; text: string }[];
    tags: string[];
    accent: string;       // theme colour: markets / commodities / physics
}

export const papers: Paper[] = [
    {
        id: 'foreign-flows',
        status: 'In preparation',
        title: 'Explainable Forecasting of Foreign Investor Trading: News versus Macro-Financial Signals',
        authors: 'John Park*, Maximiliano Islas Solis*, Jiwoong Heo, Seohyun Lee, Duk-Jo Kong',
        note: '* equal contribution',
        venue: 'Target journal',
        journal: {
            name: 'Expert Systems with Applications',
            publisher: 'Elsevier',
            logo: elsevierLogo,
            rank: 'Q1 · Artificial Intelligence',
        },
        result: 'Macro-financial signals give ==the only consistent gain (mean AUC 0.647 → 0.685)==; LLM sentiment adds nothing significant.',
        stats: [
            { value: 150, label: 'KRX semiconductor firms' },
            { value: 2780, label: 'trading days, 2015–2026' },
            { value: 1.15, decimals: 2, suffix: 'M', label: 'news articles' },
            { value: 0.713, decimals: 3, label: 'best AUC (LightGBM)' },
        ],
        image: foreignFlowsImg,
        imageAlt: 'Samsung and SK hynix, Korea’s largest semiconductor firms',
        details: [
            { label: 'Problem', text: 'Predict next-day net-buy vs. net-sell direction of foreign investors across 150 KRX semiconductor firms, 2015–2026 (2,780 trading days).' },
            { label: 'Data', text: 'KRX investor flows; 1.15M news articles (NAVER News, MCST NOW platform, GDELT, NYT); 13 macro-financial variables.' },
            { label: 'Method', text: 'LDA topics and LLM sentiment (EXAONE-3.5-7.8B, 4-bit) in a nested ablation over 10 models (RF, XGBoost, LightGBM, iTransformer, LSTM variants, DA-RNN); SHAP; DeLong and Diebold–Mariano tests.' },
            { label: 'Result', text: 'Macro signals improve 9 of 10 models; best is LightGBM at AUC 0.713, reaching 0.90 on the largest-flow days. Risk-off responses are asymmetric.' },
        ],
        tags: ['LightGBM', 'LLM sentiment', 'SHAP', 'Time series'],
        accent: '#2f6fb0',
    },
    {
        id: 'agri-prices',
        status: 'Working paper',
        title: '[[Working title]] Forecasting Korean Agri-Food Prices',
        authors: 'Maximiliano Islas Solis [[co-authors]]',
        venue: 'Target venue type: Journal of Commodity Markets',
        result: 'Forecasting Korean agricultural commodity prices from aT / Nongnet market data. [[key result once available]]',
        image: img('1542838132-92c53300491e'),
        imageAlt: 'Placeholder: vegetables at a market',
        details: [
            { label: 'Problem', text: 'Short-horizon price forecasting for Korean agricultural commodities.' },
            { label: 'Data', text: 'aT / Nongnet wholesale and retail price database. [[other sources]]' },
            { label: 'Method', text: '[[models and evaluation]]' },
            { label: 'Next', text: 'Possible extension to energy forecasting (Korean SMP / grid demand).' },
        ],
        tags: ['Commodities', 'Forecasting'],
        accent: '#2f8a57',
    },
    {
        id: 'first-passage',
        status: 'In preparation',
        title: 'First-Passage-Based Last-Passage Algorithm for Charge Density on a Conducting Surface',
        authors: 'Jinseong Son, Maximiliano Islas Solis, Tsoggerel Tsogbadrakh, Chi-Ok Hwang',
        venue: 'Target: Advanced Theory and Simulations',
        result: 'A random-walk Monte Carlo method for electrostatic charge density on conductors — ==the same first-passage machinery used in derivatives pricing and risk==.',
        image: fplpCover,
        imageAlt: 'Conducting cube inside a sphere with a point charge q at distance d',
        details: [
            { label: 'Problem', text: 'Estimate charge density on conducting surfaces without meshing the domain.' },
            { label: 'Method', text: 'First-passage random walks combined with last-passage boundary sampling.' },
            { label: 'Role', text: 'Produced the simulation results (Fortran / C, MPI on HPC clusters).' },
        ],
        tags: ['Monte Carlo', 'Stochastic processes', 'MPI'],
        accent: '#7651c2',
    },
];

export const planned = {
    title: 'LLM trading agents and financial risk',
    text: 'Multi-agent LLM market simulation to study herding and collusion risk when many trading agents share the same underlying models. Thesis direction; target ICAIF 2027.',
    image: img('1620712943543-bcc4688e7485', 600),
};

export interface PhysicsItem { title: string; where: string; when: string; text: string; }

export const physics: PhysicsItem[] = [
    {
        title: 'Spin squeezing in spin–orbit-coupled optical lattices',
        where: 'UNAM · Mexican Physics Society',
        when: 'Jul – Sep 2025',
        text: 'Effective spin models for spin–orbit-coupled optical lattices and exact-diagonalization simulations of many-body dynamics, under Dr. Santiago Caballero-Benítez. B.Sc. thesis topic.',
    },
    {
        title: 'Photoluminescence and DFT on GaAs',
        where: 'AI Semiconductors Lab · GIST',
        when: 'Mar – Jun 2025',
        text: 'Photoluminescence measurements on GaAs and DFT calculations in Quantum ESPRESSO for deformation-potential estimation. Also assisted a DFT manuscript revision on rare-earth co-doped fluoride crystals.',
    },
    {
        title: 'Coherent Transition Radiation at a 150 TW laser',
        where: 'High Energy Density Physics Lab · GIST',
        when: 'Jul – Aug 2024',
        text: 'Laser and optics training at a 150 TW facility; analysis of Coherent Transition Radiation experiment data and support for laser shot operations.',
    },
    {
        title: 'Monte Carlo diffusion for the Laplace equation',
        where: 'Mathematical Sciences Lab · GIST',
        when: 'Sep 2023 – Jul 2024',
        text: 'Fast Monte Carlo diffusion algorithms for the Laplace equation on conductor surfaces — the starting point of the first-passage paper above. Presented at GIST Embassy Welcome Day, Seoul (Oct 2024).',
    },
];

export interface Role { when: string; what: string; where: string; logo?: 'gist' | 'unam'; labs?: { name: string; topic: string; when: string }[]; }

export const experience: Role[] = [
    { when: 'Aug 2026 – Aug 2028 (exp.)', what: 'M.S., AI Policy & Strategy', where: 'AI X School, GIST · IMPACT Lab (Prof. Duk-Jo Kong)', logo: 'gist' },
    {
        when: 'Sep 2023 – Jul 2026',
        what: 'Undergraduate Research Intern',
        where: 'GIST · four labs',
        logo: 'gist',
        labs: [
            { name: 'IMPACT Lab', topic: 'NLP & AI', when: 'Oct 2025 – Jul 2026' },
            { name: 'AI Semiconductors Lab', topic: 'Computational materials', when: 'Mar – Jun 2025' },
            { name: 'High Energy Density Physics Lab', topic: 'Experimental physics', when: 'Jul – Aug 2024' },
            { name: 'Mathematical Sciences Lab', topic: 'Computational mathematics', when: 'Sep 2023 – Jul 2024' },
        ],
    },
    { when: 'Jul – Sep 2025', what: 'Research Intern, Quantum Information', where: 'UNAM · Mexican Physics Society (remote)', logo: 'unam' },
    { when: 'Aug 2022 – Aug 2026', what: 'B.Sc. Physics', where: 'GIST · Minor in AI', logo: 'gist' },
];

// Certifications & tests (History page). Add CFA Investment Foundations / FRM Part I
// here once earned or booked — e.g. { when: 'May 2027', name: 'FRM Part I', detail: 'Candidate (GARP)' }.
export interface Certification { when: string; name: string; detail: string; logo?: 'cfa' | 'ielts'; }

export const certifications: Certification[] = [
    { when: '15 Dec 2025', name: 'CFA Institute Investment Foundations Certificate', detail: 'Completed', logo: 'cfa' },
    { when: 'Jan 2025', name: 'IELTS Academic', detail: 'Overall band 8.0', logo: 'ielts' },
];

export const skills = [
    'Python', 'PyTorch', 'LightGBM', 'XGBoost', 'SHAP', 'LLMs & NLP', 'Time-series forecasting',
    'Topic models', 'Monte Carlo', 'Stochastic simulation', 'Fortran', 'C / C++', 'MPI', 'GPU / HPC',
    'Quantum ESPRESSO',
];

export interface MinorProject { year: string; title: string; kind: string; text: string; link?: string; code?: string; }

export const minorProjects: MinorProject[] = [
    { year: '2025', title: 'Global News Big-Data Analysis', kind: 'Course project (PBL)', text: 'NLP pipeline over 2M+ articles for the Korean Ministry of Culture, Sports and Tourism’s foreign-media monitoring (NOW platform).', link: '/ai-industry-report.pdf' },
    { year: '2025', title: 'MIT iQuHACK 2025 — 1st place', kind: 'Hackathon', text: 'Quantum Rings remote challenge: factorization with Shor’s algorithm.', link: 'https://www.iquise.mit.edu/iQuHACK/2025-01-31', code: 'https://github.com/MaximilianoIS/quantum-fact' },
    { year: '[[year]]', title: 'EconDecode', kind: 'Hackathon', text: 'Web app teaching young people about the economy through live news and an LLM chatbot. GIST AI Hackathon.', link: 'https://econdecode.onrender.com/', code: 'https://github.com/MaximilianoIS/EconDecode' },
    { year: '[[year]]', title: 'AItinerary', kind: 'Side project', text: 'LLM-powered travel planner that builds and adapts day-by-day itineraries.', link: 'https://youtu.be/nWdPdh-t_8Q', code: 'https://github.com/MaximilianoIS/AItinerary' },
    { year: '[[year]]', title: 'Korean car identification', kind: 'Course project', text: 'Computer-vision pipeline that detects and classifies Korean car models from footage.', code: 'https://github.com/MaximilianoIS/Korean-Car-Identification-for-Crime-Detection' },
];
