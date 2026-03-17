import React, { useRef, useState, useEffect } from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';


//FPLP
import fplp_cover from '../assets/images/fplp_cover.jpg';
import terminal from '../assets/images/Screenshot 2026-03-11 at 0.24.06.png';
import walkOnPlanes from '../assets/images/wop.mp4';

//Thesis
import thesis_cover from '../assets/images/thesis_cover.png';

//Econometrics



//DFT & PL
import dft_cover from '../assets/images/BaTi.png';


//CTR
import ctr_cover from '../assets/images/CTR.png';


//iQuHACK
import mit_cover from '../assets/images/mit_cover.png';
import mit_certificate from '../assets/images/maximiliano_islas.png';



//PBL
import pbl_cover from '../assets/images/munchebu_cover.png';
import now_website from '../assets/images/Screenshot 2026-03-11 at 2.15.05.png';

//Impact hackathon
import global_news_cover from '../assets/images/impact_hackaton_cover.png';
import econdecode_demo from '../assets/images/Screenshot 2026-03-11 at 2.09.12.png';

//Hack_2Skill
import hack2skill_cover from '../assets/images/hack2skill_cover.jpg';

//Computer vision
import cv_cover from '../assets/images/computer_vision_cover.jpg';


import '../assets/styles/Project.scss';

const SCROLL_AMOUNT = 360;

// ── Autoplay video: plays when scrolled into view, pauses when not ──
function AutoplayVideo({ src }: { src: string }) {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    video.play().catch(() => {/* autoplay blocked — user will see controls */});
                } else {
                    video.pause();
                }
            },
            { threshold: 0.4 }   // starts playing when 40% visible
        );

        observer.observe(video);
        return () => observer.disconnect();
    }, []);

    return (
        <video
            ref={videoRef}
            className="panel-video"
            src={src}
            controls
            playsInline
            muted
            preload="metadata"
            loop
        />
    );
}

interface MediaItem {
    src: string;
    caption: string;
    wide?: boolean;    // spans full row
}

interface ProjectData {
    id: string;
    title: string;
    shortDesc: string;
    fullDesc: string;
    tech: string[];
    image: string;
    link: string;
    category: string;
    keyFormula?: string;            // highlighted math/key idea box
    extraImages?: MediaItem[];      // snapshot grid
    videoPlaceholder?: boolean;     // show video embed placeholder
    videoSrc?: string;              // actual local video file
    videoUrl?: string;              // YouTube or external video URL to embed
    videoLabel?: string;            // custom title for the video section
    paperUrl?: string;              // Google Drive / local paper link
    paperSectionLabel?: string;     // section separator title e.g. "Manuscript", "Thesis"
    paperLabel?: string;
    githubUrl?: string;             // GitHub repository link
    demoUrl?: string;               // live demo / YouTube link
    demoLabel?: string;             // button label (default: "Live Demo")
}

// Converts YouTube watch/share URLs → embeddable URLs
function toEmbedUrl(url: string): string {
    // youtu.be/ID
    const shortMatch = url.match(/youtu\.be\/([A-Za-z0-9_-]+)/);
    if (shortMatch) return `https://www.youtube.com/embed/${shortMatch[1]}`;
    // youtube.com/watch?v=ID
    const watchMatch = url.match(/[?&]v=([A-Za-z0-9_-]+)/);
    if (watchMatch) return `https://www.youtube.com/embed/${watchMatch[1]}`;
    // already an embed or other URL — use as-is
    return url;
}

const researchProjects: ProjectData[] = [
    {
        id: 'first-passage',
        title: 'First-Passage-Based Last-Passage',
        shortDesc: 'Monte Carlo algorithm to estimate electrostatic charge density on conductors by combining first-passage diffusion with last-passage boundary sampling.',
        fullDesc: 'This research develops a novel Monte Carlo algorithm that estimates electrostatic charge density on conductor surfaces. The method innovatively combines first-passage diffusion processes — which efficiently simulate Brownian motion near boundaries — with last-passage sampling to precisely estimate surface charge distributions. This hybrid approach significantly reduces computational cost compared to classical boundary element methods while maintaining high accuracy for complex geometries.',
        tech: ['Python', 'C', 'MPI', 'NumPy', 'Monte Carlo', 'Stochastic Processes'],
        image: fplp_cover,
        link: 'https://www.filmate.club/',
        category: 'Computational Physics',
        keyFormula: 'u(x) = 𝔼ₓ[ φ(Xτ) ]  —  Feynman-Kac representation',
        extraImages: [
            { src: mock10, caption: '↑  Main simulation overview  [ placeholder — replace with diagram ]', wide: true },
            { src: terminal, caption: 'C simulation code snapshot  [ placeholder ]' },
            { src: mock05, caption: 'MPI parallelization snapshot  [ placeholder ]' },
        ],
        videoSrc: walkOnPlanes,
        videoLabel: 'First Passage Animation',
        paperUrl: 'https://drive.google.com/file/d/1vhco9f1EE7ijbgKuUKRPiY3UhUUEaDLQ/view?usp=sharing',
        paperSectionLabel: 'Manuscript',
        paperLabel: 'First-Passage-Based Last-Passage — Manuscript',
    },
    {
        id: 'quantum-entanglement',
        title: 'Quantum Entanglement in Optical Lattices',
        shortDesc: '[Thesis] Investigating quantum entanglement in spin-orbit–coupled optical lattices by deriving effective spin interactions and simulating many-body dynamics with exact diagonalization.',
        fullDesc: 'This thesis investigates quantum entanglement in spin-orbit–coupled optical lattice systems. By deriving effective spin Hamiltonians from the microscopic physics of cold atoms in laser-generated potentials, we explore how spin-orbit coupling generates novel entangled ground states. Many-body quantum dynamics are simulated using exact diagonalization techniques, and entanglement entropy is computed across various coupling regimes to map the full quantum phase diagram.',
        tech: ['Python', 'Exact Diagonalization', 'Quantum Mechanics', 'SciPy', 'QuTiP', 'Linear Algebra'],
        image: thesis_cover,
        link: 'https://www.datumlearn.com/',
        category: 'Quantum Physics · Thesis',
        keyFormula: 'H = −J Σᵢ Sᵢ·Sⱼ  +  λ (L·S)  —  Effective Spin Hamiltonian',
        extraImages: [
            { src: mock07, caption: '↑  Optical lattice setup  [ placeholder — replace with your diagram ]', wide: true },
            { src: mock05, caption: 'Energy spectrum simulation  [ placeholder ]' },
            { src: mock04, caption: 'Entanglement entropy vs. coupling  [ placeholder ]' },
        ],
        videoPlaceholder: true,
        paperUrl: 'https://drive.google.com/file/d/1CNlGVHFFrJC0Clsv-IPPDVeJedd7bSct/view?usp=sharing',
        paperSectionLabel: 'Thesis',
        paperLabel: 'Quantum Entanglement in Optical Lattices — Thesis',
    },
    {
        id: 'ai-semiconductor',
        title: 'AI & Econometric Analysis of Semiconductor Markets',
        shortDesc: 'Forecasting framework combining AI-based text analysis with econometric time-series models to extract predictive signals from large-scale semiconductor news data.',
        fullDesc: 'This project develops a hybrid forecasting framework for semiconductor market analysis. Large-scale news and financial data are processed through NLP pipelines — using transformer-based sentiment analysis and topic modeling — to extract forward-looking signals. These signals are then integrated into classical econometric time-series models (VAR, ARIMAX) to produce market forecasts that outperform purely quantitative baselines across multiple prediction horizons.',
        tech: ['Python', 'NLP', 'Transformers', 'ARIMAX', 'VAR', 'Pandas', 'NLTK', 'scikit-learn'],
        image: mock05,
        link: 'https://www.byuh.edu/',
        category: 'AI · Economics',
        keyFormula: 'yₜ = α + Σ βᵢ yₜ₋ᵢ  +  γ · SentimentScore(t)',
        extraImages: [
            { src: mock05, caption: '↑  Sentiment pipeline architecture  [ placeholder ]', wide: true },
            { src: mock04, caption: 'Forecast accuracy vs. baseline  [ placeholder ]' },
            { src: mock03, caption: 'News topic clustering  [ placeholder ]' },
        ],
        paperUrl: 'https://drive.google.com/file/d/YOUR_PAPER_ID/view',
        paperSectionLabel: 'Working Paper',
        paperLabel: 'AI Semiconductor Forecasting — Working Paper',
    },
    {
        id: 'goas-dft',
        title: 'Photoluminescence & DFT Study on GaAs',
        shortDesc: 'Experimental and computational internship at the AI Semiconductors Lab (GIST): PL measurements on GaAs samples and beginner-level DFT calculations with Quantum ESPRESSO.',
        fullDesc: 'During this internship at the AI Semiconductors Lab under Prof. Youngdahl Daniel Jho, I gained hands-on experience with photoluminescence (PL) spectroscopy on gallium arsenide (GaAs) samples. This involved signal monitoring, CCD data acquisition, and systematic data collection workflows in an experimental setting.\n\nIn parallel, I studied the theoretical foundations of Density Functional Theory (DFT) and ran beginner-level calculations using Quantum ESPRESSO, with a focus on deformation potential estimation — a key parameter linking lattice strain to electronic band structure shifts.',
        tech: ['Python', 'Quantum ESPRESSO', 'DFT', 'MATLAB', 'LabVIEW', 'CCD Spectroscopy', 'GaAs'],
        image: dft_cover,
        link: '#',
        category: 'Experimental Physics · Materials Science',
        keyFormula: 'E_g(ε) = E_g(0) + Ξ_u · ε  —  Deformation potential coupling strain to bandgap',
        extraImages: [
            { src: mock07, caption: '↑  PL setup — GaAs sample with CCD detector  [ placeholder ]', wide: true },
            { src: mock05, caption: 'PL spectrum — signal vs. wavelength  [ placeholder ]' },
            { src: mock04, caption: 'Quantum ESPRESSO band structure output  [ placeholder ]' },
        ],
    },
    {
        id: 'hedp-laser',
        title: 'Coherent Transition Radiation',
        shortDesc: 'Experimental internship at the High Energy Density Physics Lab (GIST): laser and optics training on a 150 TW high-power laser facility, CTR data analysis.',
        fullDesc: 'At the High Energy Density Physics Lab under Prof. Byoung-ick Cho, I trained in laser and optics techniques in one of Korea\'s large-scale high-power laser facilities. My responsibilities included supporting laser shot operations — alignment checks, timing calibration, and safety protocols — as well as systematic data collection during experimental runs.\n\nThe main scientific focus was the Coherent Transition Radiation (CTR) experiment: a diagnostic technique that uses the radiation emitted as a relativistic electron beam crosses a material boundary to characterize the electron bunch structure. I contributed to the post-shot data analysis pipeline, processing CTR signals from the 150 TW laser-driven accelerator.',
        tech: ['Python', 'MATLAB', 'LabVIEW', 'Optics', 'High-Power Laser', 'CTR Diagnostics', 'Data Analysis'],
        image: ctr_cover,
        link: '#',
        category: 'Experimental Physics · High Energy Density',
        keyFormula: 'CTR ∝ |F(ω)|²  —  Form factor encodes electron bunch longitudinal structure',
        extraImages: [
            { src: mock09, caption: '↑  150 TW laser facility — beam path overview  [ placeholder ]', wide: true },
            { src: mock08, caption: 'CTR signal — raw detector output  [ placeholder ]' },
            { src: mock01, caption: 'Analyzed CTR spectrum vs. simulation  [ placeholder ]' },
        ],
    },
];

const personalProjects: ProjectData[] = [
    {
        id: 'iquihack-2025',
        title: 'MIT iQuHACK 2025 — 1st Place',
        shortDesc: 'Won 1st place in the Quantum Rings Remote Challenge at MIT\'s quantum computing hackathon, factorizing the largest semiprime number achieved that day using Shor\'s algorithm.',
        fullDesc: 'It started on Discord. I was looking for teammates and deliberately searched for students from Korea — I\'d heard strong quantum computing programs were coming out of there. That\'s how I met Javohir and Jaewon. Within minutes of connecting, we were already debating which challenge to tackle. We landed on integer factorization: we\'d all studied Shor\'s algorithm and were curious how far we could push it on a real quantum simulator.\n\nWhat followed was a full day of chaos — beautiful, exhausting chaos. We hammered the Quantum Rings simulator, read papers between runs, argued over implementation details, and rewrote chunks of code every few hours. The key innovation was an approximate IQFT and smart order-finding checks that dramatically reduced gate depth, letting us push the factorization further than brute-force approaches.\n\nBy the end of the day, we had factorized the highest semiprime (up to 26 bits) of any team. The next morning — 5 AM Korean time — we found out we had won.',
        tech: ['Python', 'Quantum Rings', 'Shor\'s Algorithm', 'QFT / IQFT', 'Number Theory', 'Qiskit'],
        image: mit_cover,
        link: 'https://www.iquise.mit.edu/iQuHACK/2025-01-31',
        category: 'Quantum Computing · Hackathon',
        keyFormula: 'N = p × q  →  QFT finds period r of f(x) = aˣ mod N  →  gcd(a^(r/2) ± 1, N)  —  Shor\'s Algorithm',
        extraImages: [
            { src: mit_certificate, caption: 'Winner certificate — 1st place, Quantum Rings Remote Challenge', wide: true },
            { src: mock08, caption: 'Quantum circuit diagram  [ placeholder ]' },
            { src: mock01, caption: 'Factorization results output  [ placeholder ]' },
        ],
        paperUrl: 'https://drive.google.com/file/d/1D2djtvS7fbA-pnuc0z7jLzJyWttTaM07/view?usp=drive_link',
        paperSectionLabel: 'Project Documentation',
        paperLabel: 'iQuHACK 2025',
        githubUrl: 'https://github.com/MaximilianoIS/quantum-fact',
        demoUrl: 'https://www.iquise.mit.edu/iQuHACK/2025-01-31',
        demoLabel: 'iQuHACK 2025 ↗',
    },
    {
        id: 'ai-industry-pbl',
        title: 'Global News Big-Data Analysis',
        shortDesc: 'AI pipeline for the Korean Ministry of Culture to extract geopolitical sentiment from 2M+ news articles. Project-Based Learning course at GIST, Dec 2025.',
        fullDesc: 'The Korean Ministry of Culture, Sports and Tourism runs the NOW platform — an archive of over 2 million global news articles about Korea spanning 2006 to 2025. Despite the scale, analysts could only do keyword counts. A classic "data rich, information poor" problem.\n\nFor this industry project-based learning course at GIST, I built the full pipeline from scratch. Since the platform has no public API, I automated data ingestion using Python and Selenium: the script iterates through monthly intervals to bypass server query limits, downloads discrete Excel files as checkpoints, then standardizes everything — unified column headers, deduplication, ISO country codes, and date formats — into one clean dataset.\n\nI then ran a comparative LLM experiment (Qwen 12B vs. Gemma 12B vs. Gemini 3.0 Pro) for article summarization, using the APEC 2025 Korea Summit as a case study. Gemma\'s summaries were fed into a fine-tuned MMBert model, which classified sentiment across ~6,000 summit articles. The results revealed a sharp divergence: Western allies (USA, India) were far more critical than regional partners (China, Malaysia).\n\nFinally, I proposed a Sentiment-based Impact Score drawing from Kahneman & Tversky\'s Prospect Theory — weighting negative coverage 1.5× more than positive — giving policymakers a risk-aware lens on national reputation.',
        tech: ['Python', 'Selenium', 'Pandas', 'MMBert', 'Gemma 12B', 'NLP', 'Sentiment Analysis', 'Behavioral Economics'],
        image: pbl_cover,
        link: '/ai-industry-report.pdf',
        category: 'AI · Industry · PBL',
        keyFormula: 'Impact Score = (1.0 × N_pos) + (0.1 × N_neu) + (−1.5 × N_neg)  —  Prospect Theory sentiment weighting',
        extraImages: [
            { src: now_website, caption: '↑  Automated data ingestion pipeline  [ placeholder — replace with your diagram ]', wide: true },
            { src: mock04, caption: 'Sentiment divergence by reporting nation  [ placeholder ]' },
            { src: mock03, caption: 'APEC 2025 temporal sentiment trends  [ placeholder ]' },
        ],
        paperUrl: 'https://drive.google.com/file/d/1RJIFmhnnjEzZ4kGz1Aj_HgJANnx1Wb8s/view?usp=sharing',
        paperSectionLabel: 'Research Report',
        paperLabel: 'Global News Big-Data Analysis — Final Report',
    },
    {
        id: 'econdecode',
        title: 'EconDecode',
        shortDesc: 'Web app that teaches youth about the economy through live news, company insights, and a Gemini-powered AI chatbot. Built for the GIST AI Hackathon.',
        fullDesc: 'EconDecode was born from a simple observation: economic news is everywhere, but almost nobody explains it in plain language to young people. I built this app for the GIST AI Hackathon to bridge that gap.\n\nThe platform has three core features. The Local & Global News tabs pull live headlines via NewsAPI and auto-detect your country, while the Global tab adapts coverage based on major trading partners using Gemini. The Company Insights section lets users track specific companies — showing stock trends, buzz summaries, and health sliders in a horizontally scrollable watchlist. The "Ask the Economy Bot" chatbot is powered by the Gemini API and answers plain-English questions about economics and current news.\n\nThe app is fully deployed and responsive, with light/dark theme switching and customizable global keyword filters.',
        tech: ['Flask', 'Python', 'JavaScript', 'Tailwind CSS', 'Gemini API', 'NewsAPI'],
        image: global_news_cover,
        link: 'https://econdecode.onrender.com/',
        category: 'AI · Web App · Hackathon',
        keyFormula: 'News headline → Gemini summarizer → Economy Bot  —  LLM-powered plain-language explainer pipeline',
        extraImages: [
            { src: econdecode_demo, caption: '↑  EconDecode dashboard — Local Economic News view  [ placeholder ]', wide: true },
            { src: mock03, caption: 'Company insights & watchlist  [ placeholder ]' },
            { src: mock02, caption: 'Ask the Economy Bot — chatbot UI  [ placeholder ]' },
        ],
        videoPlaceholder: false,
        githubUrl: 'https://github.com/MaximilianoIS/EconDecode',
        demoUrl: 'https://econdecode.onrender.com/',
        demoLabel: 'Live App',
    },
    {
        id: 'aitinerary',
        title: 'AItinerary',
        shortDesc: 'AI-powered smart travel planner that builds personalized day-by-day itineraries, adapts to preferences and dynamic changes, powered by the Gemini API.',
        fullDesc: 'AItinerary started as a question I kept asking myself when planning trips: why does building a good itinerary still take hours of searching, cross-referencing, and manual scheduling?\n\nThe app uses the Gemini API to generate fully personalized day-by-day travel plans based on the user\'s destination, dates, preferences, and travel style. Plans are displayed on an interactive map alongside a timestamped timeline — breakfast spots, landmark visits, transit suggestions — all in one view. Users can tweak preferences mid-plan and the itinerary adapts dynamically without starting over.\n\nThe project was built as a full-stack web app with a clean mobile-first UI and a YouTube demo walkthrough showing a 2:49 example trip through Paris.',
        tech: ['Python', 'Gemini API', 'JavaScript', 'Google Maps API', 'Flask', 'Tailwind CSS'],
        image: hack2skill_cover,
        link: 'https://youtu.be/nWdPdh-t_8Q',
        category: 'AI · Travel Tech',
        keyFormula: 'preferences + destination + dates → Gemini → structured itinerary + map overlay  —  LLM-driven trip planning',
        extraImages: [
            { src: mock08, caption: '↑  Map view with day-by-day itinerary overlay  [ placeholder ]', wide: true },
            { src: mock09, caption: 'Daily timeline — Eiffel Tower to Montmartre  [ placeholder ]' },
            { src: mock07, caption: 'Trip plan export view  [ placeholder ]' },
        ],
        videoUrl: 'https://youtu.be/nWdPdh-t_8Q',
        githubUrl: 'https://github.com/MaximilianoIS/AItinerary',
        demoUrl: 'https://hack2skill.com/',
        demoLabel: 'Hack2Skill',
    },
    {
        id: 'korean-car-id',
        title: 'Korean Car Identification for Crime Detection',
        shortDesc: 'Computer vision pipeline for detecting and classifying Korean car models from footage, built to support crime prevention and law enforcement.',
        fullDesc: 'Korean license plate databases and CCTV networks are extensive, but identifying specific car models from low-resolution or partial footage remains a manual bottleneck for law enforcement. This project builds a deep learning pipeline to automate that step.\n\nThe system detects vehicles in images or video frames, then classifies the car model using a trained convolutional neural network fine-tuned on a Korean vehicle dataset. The pipeline is designed to handle real-world challenges: varying lighting conditions, partial occlusions, and low-resolution input typical of CCTV footage.\n\nThe goal is to give investigators a fast first-pass filter — narrowing a pool of thousands of vehicles to a short list of likely matches — rather than replacing human judgment.',
        tech: ['Python', 'PyTorch', 'OpenCV', 'CNN', 'Transfer Learning', 'Computer Vision'],
        image: cv_cover,
        link: 'https://github.com/MaximilianoIS/Korean-Car-Identification-for-Crime-Detection',
        category: 'Computer Vision · AI',
        keyFormula: 'CCTV frame → detect (YOLO) → crop ROI → classify (CNN) → top-k model candidates',
        extraImages: [
            { src: mock09, caption: '↑  Detection + classification pipeline overview  [ placeholder ]', wide: true },
            { src: mock08, caption: 'Confusion matrix — model accuracy  [ placeholder ]' },
            { src: mock01, caption: 'Sample output — detected vehicle with class label  [ placeholder ]' },
        ],
        videoUrl: 'https://youtu.be/ZC5zQh7J92g',
        videoLabel: 'Demo',
        githubUrl: 'https://github.com/MaximilianoIS/Korean-Car-Identification-for-Crime-Detection',
    },
];

function Project() {
    const researchRef = useRef<HTMLDivElement>(null);
    const personalRef = useRef<HTMLDivElement>(null);

    const [expandedResearchId, setExpandedResearchId] = useState<string | null>(null);
    const [expandedPersonalId, setExpandedPersonalId] = useState<string | null>(null);

    const expandedResearch = researchProjects.find(p => p.id === expandedResearchId) ?? null;
    const expandedPersonal = personalProjects.find(p => p.id === expandedPersonalId) ?? null;
    const activeProject = expandedResearch ?? expandedPersonal ?? null;

    const scroll = (ref: React.RefObject<HTMLDivElement>, dir: number) => {
        if (ref.current) {
            ref.current.scrollBy({ left: dir * SCROLL_AMOUNT, behavior: 'smooth' });
        }
    };

    const handleResearchClick = (id: string) => {
        setExpandedPersonalId(null);
        setExpandedResearchId(prev => (prev === id ? null : id));
    };

    const handlePersonalClick = (id: string) => {
        setExpandedResearchId(null);
        setExpandedPersonalId(prev => (prev === id ? null : id));
    };

    const closePanel = () => {
        setExpandedResearchId(null);
        setExpandedPersonalId(null);
    };

    // Lock background scroll + hide navbar when panel is open
    useEffect(() => {
        if (activeProject) {
            document.body.style.overflow = 'hidden';
            document.body.classList.add('panel-open');
        } else {
            document.body.style.overflow = '';
            document.body.classList.remove('panel-open');
        }
        return () => {
            document.body.style.overflow = '';
            document.body.classList.remove('panel-open');
        };
    }, [activeProject]);

    // Close on Escape key
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') closePanel(); };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, []);

    const renderCards = (
        projects: ProjectData[],
        expandedId: string | null,
        onCardClick: (id: string) => void
    ) =>
        projects.map(project => (
            <div
                key={project.id}
                className={`project${expandedId === project.id ? ' project--active' : ''}`}
                onClick={() => onCardClick(project.id)}
                role="button"
                tabIndex={0}
                aria-expanded={expandedId === project.id}
                onKeyDown={e => e.key === 'Enter' && onCardClick(project.id)}
            >
                <div className="project-img">
                    <img src={project.image} alt={`${project.title} thumbnail`} />
                    <div className="project-img-overlay">
                        <span>{expandedId === project.id ? 'Close' : 'Explore'}</span>
                    </div>
                </div>
                <div className="project-body">
                    <span className="project-category">{project.category}</span>
                    <h2>{project.title}</h2>
                    <p>{project.shortDesc}</p>
                </div>
            </div>
        ));

    const renderDetailPanel = (project: ProjectData, onClose: () => void) => (
        <div className="project-detail-backdrop" onClick={onClose} aria-modal="true" role="dialog">
            <div
                className="project-detail-panel"
                onClick={e => e.stopPropagation()}
                aria-label={`${project.title} details`}
            >
                {/* Fixed header strip — X button always visible */}
                <div className="panel-header">
                    <button className="detail-close-btn" onClick={onClose} aria-label="Close">✕</button>
                </div>

                <div className="panel-body">
                    <div className="panel-content">
                        {/* ── Meta + title ── */}
                        <span className="detail-category">{project.category}</span>
                        <h2>{project.title}</h2>
                        <div className="panel-divider" />

                        {/* ── Description ── */}
                        {project.fullDesc.split('\n\n').map((para, i) => (
                            <p key={i} className="panel-description">{para}</p>
                        ))}

                        {/* ── Key formula / concept highlight ── */}
                        {project.keyFormula && (
                            <div className="panel-formula">
                                <span className="formula-label">Key expression</span>
                                <span className="formula-text">{project.keyFormula}</span>
                            </div>
                        )}

                        {/* ── Snapshot grid ── */}
                        {project.extraImages && project.extraImages.length > 0 && (
                            <div className="panel-media-section">
                                <h3 className="media-section-title">Snapshots</h3>
                                <div className="panel-media-grid">
                                    {project.extraImages.map((item, i) => (
                                        <div
                                            key={i}
                                            className={`media-item${item.wide ? ' media-item--wide' : ''}`}
                                        >
                                            <div className="media-img-wrap">
                                                <img src={item.src} alt={item.caption} />
                                                <span className="media-caption">{item.caption}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* ── Video — local file, YouTube embed, or placeholder ── */}
                        {(project.videoSrc || project.videoUrl || project.videoPlaceholder) && (
                            <div className="panel-video-section">
                                <h3 className="media-section-title">{project.videoLabel || 'Demo / Walkthrough'}</h3>
                                {project.videoSrc ? (
                                    <AutoplayVideo src={project.videoSrc} />
                                ) : project.videoUrl ? (
                                    <iframe
                                        className="panel-video panel-video--iframe"
                                        src={toEmbedUrl(project.videoUrl)}
                                        title="Demo / Walkthrough"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                ) : (
                                    <div className="panel-video-placeholder">
                                        <div className="play-btn-wrap">
                                            <div className="play-icon">▶</div>
                                        </div>
                                        <span className="video-note">Video embed coming soon — drop your URL here</span>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* ── Paper embed ── */}
                        {project.paperUrl && (
                            <div className="panel-paper-section">
                            {project.paperSectionLabel && (
                                <div className="panel-section-separator">
                                    <span className="panel-section-separator__line" />
                                    <h3 className="panel-section-separator__title">{project.paperSectionLabel}</h3>
                                    <span className="panel-section-separator__line" />
                                </div>
                            )}
                            <div className="panel-paper-embed">
                                <div className="paper-embed-header">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                        <polyline points="14 2 14 8 20 8" />
                                        <line x1="16" y1="13" x2="8" y2="13" />
                                        <line x1="16" y1="17" x2="8" y2="17" />
                                    </svg>
                                    <span>{project.paperLabel || 'Research Paper'}</span>
                                    <a
                                        href={project.paperUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="paper-open-link"
                                        onClick={e => e.stopPropagation()}
                                    >
                                        Open ↗
                                    </a>
                                </div>
                                <iframe
                                    src={project.paperUrl.replace('/view', '/preview')}
                                    className="paper-iframe"
                                    title={project.paperLabel || 'Research Paper'}
                                    allow="autoplay"
                                />
                            </div>
                            </div>
                        )}

                        {/* ── GitHub / Demo links ── */}
                        {(project.githubUrl || project.demoUrl) && (
                            <div className="detail-links">
                                {project.githubUrl && (
                                    <a href={project.githubUrl} target="_blank" rel="noreferrer"
                                       className="detail-link detail-link--github"
                                       onClick={e => e.stopPropagation()}>
                                        <svg viewBox="0 0 24 24" fill="currentColor" className="link-icon">
                                            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                                        </svg>
                                        GitHub
                                    </a>
                                )}
                                {project.demoUrl && (
                                    <a href={project.demoUrl} target="_blank" rel="noreferrer"
                                       className="detail-link detail-link--demo"
                                       onClick={e => e.stopPropagation()}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="link-icon">
                                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                                            <polyline points="15 3 21 3 21 9"/>
                                            <line x1="10" y1="14" x2="21" y2="3"/>
                                        </svg>
                                        {project.demoLabel || 'Live Demo'}
                                    </a>
                                )}
                            </div>
                        )}

                        {/* ── Tech tags ── */}
                        <div className="detail-tech">
                            {project.tech.map(t => (
                                <span key={t} className="tech-tag">{t}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="projects-container" id="projects">

            {/* ================= Research Projects ================= */}
            <div className="slider-header">
                <h1>Research Projects</h1>
                <div className="slider-controls">
                    <button onClick={() => scroll(researchRef, -1)} aria-label="Scroll left">&#8592;</button>
                    <button onClick={() => scroll(researchRef, 1)} aria-label="Scroll right">&#8594;</button>
                </div>
            </div>

            <div className="projects-slider" ref={researchRef}>
                {renderCards(researchProjects, expandedResearchId, handleResearchClick)}
            </div>

            {/* ================= Personal Projects ================= */}
            <div className="slider-header section-title">
                <h1>Personal Projects</h1>
                <div className="slider-controls">
                    <button onClick={() => scroll(personalRef, -1)} aria-label="Scroll left">&#8592;</button>
                    <button onClick={() => scroll(personalRef, 1)} aria-label="Scroll right">&#8594;</button>
                </div>
            </div>

            <div className="projects-slider" ref={personalRef}>
                {renderCards(personalProjects, expandedPersonalId, handlePersonalClick)}
            </div>

            {/* Fixed overlay panel */}
            {activeProject && renderDetailPanel(activeProject, closePanel)}

        </div>
    );
}

export default Project;
