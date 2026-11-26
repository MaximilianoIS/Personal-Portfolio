import {
    Award,
    Certification,
    MinorProject,
    NewsItem,
    Paper,
    PhysicsItem,
    Role,
    awards as enAwards,
    certifications as enCertifications,
    experience as enExperience,
    intro as enIntro,
    minorProjects as enMinorProjects,
    news as enNews,
    papers as enPapers,
    physics as enPhysics,
    skills as enSkills,
} from './data';

export type Lang = 'en' | 'es' | 'ko';

export interface SiteUI {
    metaDescription: string;
    nav: {
        about: string;
        publications: string;
        awards: string;
        projects: string;
        history: string;
        cv: string;
    };
    menu: string;
    close: string;
    copyEmailTitle: string;
    emailCopied: string;
    languageLabel: string;
    portraitAlt: string;
    logoAlt: string;
    sections: {
        publications: string;
        awards: string;
        physics: string;
        otherProjects: string;
        certifications: string;
        skills: string;
    };
    buttons: {
        details: string;
        hideDetails: string;
        detailsAria: (title: string) => string;
        showLabs: (count: number) => string;
        hideLabs: string;
        view: string;
        code: string;
    };
    pages: {
        projectsTitle: string;
        projectsIntro: string;
        historyTitle: string;
        historyIntro: string;
        languagesNote: string;
        newsTitle: string;
        contactTitle: string;
        contactIntro: string;
        contactEmailMeta: string;
        contactLocationMeta: string;
        contactCredit: string;
    };
    placeholderTitle: string;
}

export interface SiteContent {
    ui: SiteUI;
    intro: {
        headline: { text: string; muted?: boolean }[];
        bio: string[];
        availability: string;
    };
    news: NewsItem[];
    awards: Award[];
    papers: Paper[];
    physics: PhysicsItem[];
    experience: Role[];
    certifications: Certification[];
    skills: string[];
    minorProjects: MinorProject[];
}

const en: SiteContent = {
    ui: {
        metaDescription: 'Maximiliano Islas Solis — M.S. student at GIST (IMPACT Lab) working on explainable ML forecasting for financial and commodity markets.',
        nav: {
            about: 'About',
            publications: 'Publications',
            awards: 'Awards',
            projects: 'Projects',
            history: 'History',
            cv: 'CV',
        },
        menu: 'Menu',
        close: 'Close',
        copyEmailTitle: 'Click to copy',
        emailCopied: 'Email copied',
        languageLabel: 'Language',
        portraitAlt: 'Portrait of Maximiliano Islas Solis',
        logoAlt: 'First-passage random walk',
        sections: {
            publications: 'Publications',
            awards: 'Awards',
            physics: 'Research in physics',
            otherProjects: 'Other projects',
            certifications: 'Certifications',
            skills: 'Skills',
        },
        buttons: {
            details: 'Details',
            hideDetails: 'Hide details',
            detailsAria: (title) => `Details: ${title}`,
            showLabs: (count) => `Show ${count} labs`,
            hideLabs: 'Hide labs',
            view: 'View ↗',
            code: 'Code ↗',
        },
        pages: {
            projectsTitle: 'Projects',
            projectsIntro: 'Before turning to markets, I trained as a physicist: quantum many-body simulation, materials and laser experiments, and Monte Carlo methods on HPC clusters. That background in stochastic simulation now underpins my work on forecasting and risk.',
            historyTitle: 'History',
            historyIntro: 'Research internships, positions and education, most recent first.',
            languagesNote: 'Spanish (native) · English (fluent) · Korean (functional)',
            newsTitle: 'News',
            contactTitle: 'Contact',
            contactIntro: 'Open to research collaborations and internships in forecasting, alternative data and credit risk. Email is the best way to reach me.',
            contactEmailMeta: 'Email',
            contactLocationMeta: 'Gwangju, South Korea ↗',
            contactCredit: 'Site design adapted from a portfolio template by Arnau Ros (CC BY 4.0).',
        },
        placeholderTitle: 'Placeholder — needs confirming',
    },
    intro: {
        headline: enIntro.headline,
        bio: enIntro.bio,
        availability: enIntro.availability,
    },
    news: enNews,
    awards: enAwards,
    papers: enPapers,
    physics: enPhysics,
    experience: enExperience,
    certifications: enCertifications,
    skills: enSkills,
    minorProjects: enMinorProjects,
};

const es: SiteContent = {
    ui: {
        metaDescription: 'Maximiliano Islas Solis — Estudiante de maestría en GIST (IMPACT Lab) enfocado en pronóstico con ML explicable para mercados financieros y de materias primas.',
        nav: {
            about: 'Inicio',
            publications: 'Publicaciones',
            awards: 'Premios',
            projects: 'Proyectos',
            history: 'Trayectoria',
            cv: 'CV',
        },
        menu: 'Menú',
        close: 'Cerrar',
        copyEmailTitle: 'Clic para copiar',
        emailCopied: 'Correo copiado',
        languageLabel: 'Idioma',
        portraitAlt: 'Retrato de Maximiliano Islas Solis',
        logoAlt: 'Caminata aleatoria de primer paso',
        sections: {
            publications: 'Publicaciones',
            awards: 'Premios',
            physics: 'Investigación en física',
            otherProjects: 'Otros proyectos',
            certifications: 'Certificaciones',
            skills: 'Habilidades',
        },
        buttons: {
            details: 'Detalles',
            hideDetails: 'Ocultar detalles',
            detailsAria: (title) => `Detalles: ${title}`,
            showLabs: (count) => `Ver ${count} laboratorios`,
            hideLabs: 'Ocultar laboratorios',
            view: 'Ver ↗',
            code: 'Código ↗',
        },
        pages: {
            projectsTitle: 'Proyectos',
            projectsIntro: 'Antes de enfocarme en mercados, me formé como físico: simulación cuántica de muchos cuerpos, experimentos de materiales y láseres, y métodos de Monte Carlo en clústeres HPC. Esa base en simulación estocástica respalda hoy mi trabajo en pronóstico y riesgos.',
            historyTitle: 'Trayectoria',
            historyIntro: 'Prácticas de investigación, experiencia y formación académica, de la más reciente a la anterior.',
            languagesNote: 'Español (nativo) · Inglés (fluido) · Coreano (funcional)',
            newsTitle: 'Novedades',
            contactTitle: 'Contacto',
            contactIntro: 'Abierto a colaboraciones de investigación y prácticas en pronóstico, datos alternativos y riesgo de crédito. El correo electrónico es la mejor vía de contacto.',
            contactEmailMeta: 'Correo',
            contactLocationMeta: 'Gwangju, Corea del Sur ↗',
            contactCredit: 'Diseño adaptado de una plantilla de portafolio por Arnau Ros (CC BY 4.0).',
        },
        placeholderTitle: 'Marcador provisional — por confirmar',
    },
    intro: {
        headline: [
            { text: 'Hola, soy Maximiliano.' },
            { text: ' Desarrollo pronósticos explicables para mercados financieros y de materias primas.', muted: true },
        ],
        bio: [
            'Soy estudiante de maestría en **Política y Estrategia de IA** en ::gist:: [Gwangju Institute of Science and Technology (GIST)](https://www.gist.ac.kr/en/main.html), ::kr:: Corea del Sur, dentro del [IMPACT Lab](https://impact.gist.ac.kr/main/main.php) bajo la dirección del [Prof. Duk-Jo Kong](https://impact.gist.ac.kr/team/professor.php). Cuento con el apoyo de la ::mx:: [Beca de Posgrado SECIHTI](https://secihti.mx/) del Gobierno de México. Obtuve la licenciatura en Física, con especialidad en IA, en GIST en 2026.',
            'Mi investigación aplica **machine learning y datos alternativos** —texto de noticias, sentimiento derivado de LLMs y señales macrofinancieras— al **pronóstico en mercados accionarios y de materias primas**, con énfasis en la **explicabilidad**. Mi formación en física en **Monte Carlo y simulación estocástica** se traslada directamente al análisis de riesgos. También me interesan el riesgo de crédito en banca digital y el **riesgo sistémico de agentes de trading con IA**.',
        ],
        availability: 'Disponible para prácticas de verano 2027 en Ciencia de Datos, Machine Learning y Riesgos (México, Corea del Sur, Reino Unido).',
    },
    news: [
        { date: 'Nov 2026', text: 'Premio a la Excelencia (aT President’s Award) en el Hackatón en línea de Pronóstico de Precios Agrícolas con IA (aT), liderando al equipo de IMPACT Lab en pronóstico de precios de hortalizas.' },
        { date: 'Sep 2026', text: 'Asistencia a UN ESCAP CICTSTI-5, Bangkok.' },
        { date: 'Ago 2026', text: 'Inicio de la maestría en Política y Estrategia de IA en GIST, IMPACT Lab.' },
        { date: 'Jul 2026', text: 'Asistencia a la Asian Quantitative Finance Conference (AQFC), Pohang.' },
        { date: 'May 2026', text: 'Ponencia en Quantum Future Korea 2026, Asamblea Nacional, Seúl.' },
    ],
    awards: [
        {
            ...enAwards[0],
            date: 'Nov 2026',
            title: '**Premio a la Excelencia**, aT President’s Award',
            detail: 'Hackatón en línea de Pronóstico de Precios Agrícolas con IA, Korea Agro-Fisheries & Food Trade Corp. (aT). Lideré al equipo de IMPACT Lab en pronóstico de precios de hortalizas.',
        },
        {
            ...enAwards[1],
            date: 'Feb 2025',
            title: '**1.er lugar**, MIT iQuHACK 2025',
            detail: 'Reto remoto de Quantum Rings: factorización de enteros con el algoritmo de Shor.',
        },
    ],
    papers: [
        {
            ...enPapers[0],
            status: 'En preparación',
            note: '* contribución equitativa',
            venue: 'Revista objetivo',
            journal: enPapers[0].journal
                ? { ...enPapers[0].journal, rank: 'Q1 · Inteligencia Artificial' }
                : undefined,
            result: 'Las señales macrofinancieras aportan ==la única mejora consistente (AUC medio 0.647 → 0.685)==; el sentimiento de LLMs no añade una mejora significativa.',
            stats: [
                { value: 150, label: 'empresas de semiconductores en KRX' },
                { value: 2780, label: 'días bursátiles, 2015–2026' },
                { value: 1.15, decimals: 2, suffix: 'M', label: 'artículos de noticias' },
                { value: 0.713, decimals: 3, label: 'mejor AUC (LightGBM)' },
            ],
            imageAlt: 'Samsung y SK hynix, las mayores empresas de semiconductores de Corea',
            details: [
                { label: 'Problema', text: 'Predecir la dirección neta de compra vs. venta del día siguiente de inversionistas extranjeros en 150 empresas de semiconductores del KRX, 2015–2026 (2,780 días bursátiles).' },
                { label: 'Datos', text: 'Flujos de inversionistas del KRX; 1.15M de artículos de noticias (NAVER News, plataforma NOW del MCST, GDELT, NYT); 13 variables macrofinancieras.' },
                { label: 'Método', text: 'Tópicos LDA y sentimiento con LLM (EXAONE-3.5-7.8B, 4-bit) en una ablación anidada de 10 modelos (RF, XGBoost, LightGBM, iTransformer, variantes de LSTM, DA-RNN); SHAP; pruebas de DeLong y Diebold–Mariano.' },
                { label: 'Resultado', text: 'Las señales macro mejoran 9 de 10 modelos; el mejor es LightGBM con AUC 0.713, alcanzando 0.90 en los días de mayor flujo. Las respuestas de aversión al riesgo son asimétricas.' },
            ],
            tags: ['LightGBM', 'Sentimiento LLM', 'SHAP', 'Series de tiempo'],
        },
        {
            ...enPapers[1],
            status: 'Documento de trabajo',
            title: '[[Título provisional]] Forecasting Korean Agri-Food Prices',
            authors: 'Maximiliano Islas Solis [[coautores]]',
            venue: 'Revista objetivo: Journal of Commodity Markets',
            result: 'Pronóstico de precios de materias primas agroalimentarias de Corea con datos de mercado de aT / Nongnet. [[resultado clave cuando esté disponible]]',
            imageAlt: 'Provisional: verduras en un mercado',
            details: [
                { label: 'Problema', text: 'Pronóstico de precios a corto horizonte para materias primas agrícolas de Corea.' },
                { label: 'Datos', text: 'Base de datos de precios mayoristas y minoristas de aT / Nongnet. [[otras fuentes]]' },
                { label: 'Método', text: '[[modelos y evaluación]]' },
                { label: 'Siguiente paso', text: 'Posible extensión a pronóstico energético (SMP coreano / demanda de red).' },
            ],
            tags: ['Materias primas', 'Pronóstico'],
        },
        {
            ...enPapers[2],
            status: 'En preparación',
            venue: 'Objetivo: Advanced Theory and Simulations',
            result: 'Método Monte Carlo de caminatas aleatorias para densidad de carga electrostática en conductores — ==la misma maquinaria de primer paso utilizada en valuación de derivados y riesgo==.',
            imageAlt: 'Cubo conductor dentro de una esfera con una carga puntual q a distancia d',
            details: [
                { label: 'Problema', text: 'Estimar la densidad de carga en superficies conductoras sin mallar el dominio.' },
                { label: 'Método', text: 'Caminatas aleatorias de primer paso combinadas con muestreo de frontera de último paso.' },
                { label: 'Rol', text: 'Produje los resultados de simulación (Fortran / C, MPI en clústeres HPC).' },
            ],
            tags: ['Monte Carlo', 'Procesos estocásticos', 'MPI'],
        },
    ],
    physics: [
        {
            title: 'Compresión de espín en redes ópticas con acoplamiento espín–órbita',
            where: 'UNAM · Sociedad Mexicana de Física',
            when: 'Jul – Sep 2025',
            text: 'Modelos efectivos de espín para redes ópticas con acoplamiento espín–órbita y simulaciones por diagonalización exacta de dinámica de muchos cuerpos, bajo la dirección del Dr. Santiago Caballero-Benítez. Tema de tesis de licenciatura.',
        },
        {
            title: 'Fotoluminiscencia y DFT en GaAs',
            where: 'AI Semiconductors Lab · GIST',
            when: 'Mar – Jun 2025',
            text: 'Mediciones de fotoluminiscencia en GaAs y cálculos DFT en Quantum ESPRESSO para estimación de potenciales de deformación. También apoyé la revisión de un manuscrito DFT sobre cristales de fluoruro co-dopados con tierras raras.',
        },
        {
            title: 'Radiación de Transición Coherente en un láser de 150 TW',
            where: 'High Energy Density Physics Lab · GIST',
            when: 'Jul – Ago 2024',
            text: 'Capacitación en láseres y óptica en una instalación de 150 TW; análisis de datos experimentales de Radiación de Transición Coherente y apoyo en la operación de disparos láser.',
        },
        {
            title: 'Difusión Monte Carlo para la ecuación de Laplace',
            where: 'Mathematical Sciences Lab · GIST',
            when: 'Sep 2023 – Jul 2024',
            text: 'Algoritmos rápidos de difusión Monte Carlo para la ecuación de Laplace en superficies conductoras — el punto de partida del artículo de primer paso. Presentado en GIST Embassy Welcome Day, Seúl (Oct 2024).',
        },
    ],
    experience: [
        { when: 'Ago 2026 – Ago 2028 (esp.)', what: 'Maestría en Política y Estrategia de IA', where: 'AI X School, GIST · IMPACT Lab (Prof. Duk-Jo Kong)', logo: 'gist' },
        {
            when: 'Sep 2023 – Jul 2026',
            what: 'Practicante de Investigación de Licenciatura',
            where: 'GIST · cuatro laboratorios',
            logo: 'gist',
            labs: [
                { name: 'IMPACT Lab', topic: 'NLP e IA', when: 'Oct 2025 – Jul 2026' },
                { name: 'AI Semiconductors Lab', topic: 'Materiales computacionales', when: 'Mar – Jun 2025' },
                { name: 'High Energy Density Physics Lab', topic: 'Física experimental', when: 'Jul – Ago 2024' },
                { name: 'Mathematical Sciences Lab', topic: 'Matemáticas computacionales', when: 'Sep 2023 – Jul 2024' },
            ],
        },
        { when: 'Jul – Sep 2025', what: 'Practicante de Investigación, Información Cuántica', where: 'UNAM · Sociedad Mexicana de Física (remoto)', logo: 'unam' },
        { when: 'Ago 2022 – Ago 2026', what: 'Licenciatura en Física', where: 'GIST · Especialidad en IA', logo: 'gist' },
    ],
    certifications: [
        { when: '15 Dic 2025', name: 'CFA Institute Investment Foundations Certificate', detail: 'Completado', logo: 'cfa' },
        { when: 'Ene 2025', name: 'IELTS Academic', detail: 'Banda general 8.0', logo: 'ielts' },
    ],
    skills: [
        'Python', 'SQL', 'pandas', 'scikit-learn', 'PyTorch',
        'LightGBM', 'XGBoost', 'SHAP', 'Pruebas estadísticas',
        'Pronóstico de series de tiempo', 'Modelos fundacionales de series de tiempo',
        'LLMs y NLP', 'Frameworks multiagente', 'Modelos de tópicos',
        'Monte Carlo', 'Simulación estocástica', 'Fortran', 'C / C++', 'MPI', 'GPU / HPC',
        'Quantum ESPRESSO',
    ],
    minorProjects: [
        {
            ...enMinorProjects[0],
            kind: 'Proyecto de curso (PBL)',
            text: 'Pipeline de NLP sobre más de 2M de artículos para el monitoreo de medios extranjeros del Ministerio de Cultura, Deportes y Turismo de Corea (plataforma NOW).',
        },
        {
            ...enMinorProjects[1],
            title: 'MIT iQuHACK 2025 — 1.er lugar',
            kind: 'Hackatón',
            text: 'Reto remoto de Quantum Rings: factorización con el algoritmo de Shor.',
        },
        {
            ...enMinorProjects[2],
            year: '[[año]]',
            kind: 'Hackatón',
            text: 'Aplicación web que enseña economía a jóvenes mediante noticias en vivo y un chatbot con LLM. GIST AI Hackathon.',
        },
        {
            ...enMinorProjects[3],
            year: '[[año]]',
            kind: 'Proyecto personal',
            text: 'Planificador de viajes con LLM que genera y adapta itinerarios día por día.',
        },
        {
            ...enMinorProjects[4],
            year: '[[año]]',
            title: 'Identificación de automóviles coreanos',
            kind: 'Proyecto de curso',
            text: 'Pipeline de visión por computadora que detecta y clasifica modelos de autos coreanos en video.',
        },
    ],
};

const ko: SiteContent = {
    ui: {
        metaDescription: 'Maximiliano Islas Solis — GIST IMPACT Lab 석사과정. 금융 및 원자재 시장을 위한 설명 가능한 머신러닝 예측 연구.',
        nav: {
            about: '소개',
            publications: '논문',
            awards: '수상',
            projects: '프로젝트',
            history: '이력',
            cv: 'CV',
        },
        menu: '메뉴',
        close: '닫기',
        copyEmailTitle: '클릭하여 복사',
        emailCopied: '이메일이 복사되었습니다',
        languageLabel: '언어',
        portraitAlt: 'Maximiliano Islas Solis 프로필 사진',
        logoAlt: '최초 도달 랜덤 워크',
        sections: {
            publications: '논문',
            awards: '수상',
            physics: '물리학 연구',
            otherProjects: '기타 프로젝트',
            certifications: '자격 및 어학',
            skills: '기술 스택',
        },
        buttons: {
            details: '자세히',
            hideDetails: '접기',
            detailsAria: (title) => `자세히 보기: ${title}`,
            showLabs: (count) => `연구실 ${count}곳 보기`,
            hideLabs: '연구실 숨기기',
            view: '보기 ↗',
            code: '코드 ↗',
        },
        pages: {
            projectsTitle: '프로젝트',
            projectsIntro: '시장 예측 연구에 앞서 양자 다체 시뮬레이션, 소재·레이저 실험, HPC 클러스터 기반 몬테카를로 방법론 등 물리학을 전공했습니다. 이러한 확률적 시뮬레이션 기반은 현재 예측 및 리스크 연구의 토대가 되고 있습니다.',
            historyTitle: '이력',
            historyIntro: '연구 인턴십, 경력 및 학력 사항(최신순).',
            languagesNote: '스페인어 (모국어) · 영어 (유창) · 한국어 (업무 소통 가능)',
            newsTitle: '소식',
            contactTitle: '연락처',
            contactIntro: '시계열 예측, 대안 데이터, 신용 리스크 분야의 연구 협업 및 인턴십 기회에 열려 있습니다. 이메일로 연락해 주시면 가장 빠르게 확인합니다.',
            contactEmailMeta: '이메일',
            contactLocationMeta: '대한민국 광주 ↗',
            contactCredit: '사이트 디자인은 Arnau Ros의 포트폴리오 템플릿(CC BY 4.0)을 바탕으로 재구성했습니다.',
        },
        placeholderTitle: '임시 항목 — 확인 필요',
    },
    intro: {
        headline: [
            { text: '안녕하세요, 막시밀리아노입니다.' },
            { text: ' 금융 및 원자재 시장을 위한 설명 가능한 예측 모델을 연구합니다.', muted: true },
        ],
        bio: [
            '::kr:: 대한민국 ::gist:: [광주과학기술원(GIST)](https://www.gist.ac.kr/en/main.html)에서 **AI 정책·전략** 석사과정에 재학 중이며, [Duk-Jo Kong 교수](https://impact.gist.ac.kr/team/professor.php)님 지도하에 [IMPACT Lab](https://impact.gist.ac.kr/main/main.php)에서 연구하고 있습니다. 멕시코 정부의 ::mx:: [SECIHTI 대학원 장학금](https://secihti.mx/)을 수혜 중이며, 2026년 GIST에서 물리학 학사(AI 부전공)를 취득했습니다.',
            '뉴스 텍스트, LLM 기반 감성 지표, 거시금융 신호 등 **머신러닝과 대안 데이터**를 활용해 **설명 가능성**에 중점을 둔 **주식·원자재 시장 예측**을 연구합니다. 물리학 전공을 통해 쌓은 **몬테카를로 및 확률적 시뮬레이션** 역량은 리스크 분석으로 확장되고 있으며, 디지털 뱅킹 신용 리스크와 **AI 트레이딩 에이전트의 시스템 리스크**에도 깊은 관심을 두고 있습니다.',
        ],
        availability: '2027년 여름 데이터 사이언스·머신러닝·리스크 분야 인턴십 지원 가능 (멕시코·한국·영국).',
    },
    news: [
        { date: '2026년 11월', text: '한국농수산식품유통공사(aT) AI 농산물 가격예측 온라인 해커톤 우수상(aT 사장상) 수상 — IMPACT Lab 팀장으로 채소 가격 예측 수행.' },
        { date: '2026년 9월', text: 'UN ESCAP CICTSTI-5(방콕) 참석.' },
        { date: '2026년 8월', text: 'GIST AI 정책·전략 석사과정 및 IMPACT Lab 합류.' },
        { date: '2026년 7월', text: '아시아 계량금융 학술대회(AQFC, 포항) 참석.' },
        { date: '2026년 5월', text: 'Quantum Future Korea 2026(서울 국회의사당) 발표.' },
    ],
    awards: [
        {
            ...enAwards[0],
            date: '2026.11',
            title: '**우수상**, aT 사장상',
            detail: '한국농수산식품유통공사(aT) AI 농산물 가격예측 온라인 해커톤. IMPACT Lab 팀장으로 채소 가격 예측 모델 개발 주도.',
        },
        {
            ...enAwards[1],
            date: '2025.02',
            title: '**1위**, MIT iQuHACK 2025',
            detail: 'Quantum Rings 원격 챌린지: Shor 알고리즘 기반 정수 소인수분해.',
        },
    ],
    papers: [
        {
            ...enPapers[0],
            status: '투고 준비 중',
            note: '* 공동 제1저자',
            venue: '목표 저널',
            journal: enPapers[0].journal
                ? { ...enPapers[0].journal, rank: 'Q1 · 인공지능' }
                : undefined,
            result: '거시금융 신호가 ==유일하게 일관된 성능 향상(평균 AUC 0.647 → 0.685)==을 보였으며, LLM 감성 지표는 유의미한 개선을 추가하지 못함.',
            stats: [
                { value: 150, label: 'KRX 반도체 기업' },
                { value: 2780, label: '거래일 (2015–2026)' },
                { value: 1.15, decimals: 2, suffix: 'M', label: '뉴스 기사 수' },
                { value: 0.713, decimals: 3, label: '최고 AUC (LightGBM)' },
            ],
            imageAlt: '대한민국 대표 반도체 기업 삼성전자 및 SK하이닉스',
            details: [
                { label: '문제', text: '2015–2026년(2,780 거래일) KRX 반도체 기업 150개사의 익일 외국인 투자자 순매수·순매도 방향 예측.' },
                { label: '데이터', text: 'KRX 투자자별 수급 데이터; 뉴스 기사 115만 건(네이버 뉴스, 문체부 NOW 플랫폼, GDELT, NYT); 거시금융 변수 13종.' },
                { label: '방법', text: 'LDA 토픽 모델링 및 LLM 감성 분석(EXAONE-3.5-7.8B, 4-bit)을 10개 모델(RF, XGBoost, LightGBM, iTransformer, LSTM 변형, DA-RNN)의 중첩 절제 실험에 적용; SHAP; DeLong 및 Diebold–Mariano 검정.' },
                { label: '결과', text: '거시 신호가 10개 중 9개 모델 성능을 개선했으며, LightGBM이 AUC 0.713으로 최고 성능(대규모 수급일 AUC 0.90)을 기록. 위험회피(Risk-off) 반응의 비대칭성 확인.' },
            ],
            tags: ['LightGBM', 'LLM 감성분석', 'SHAP', '시계열'],
        },
        {
            ...enPapers[1],
            status: '진행 중인 연구',
            title: '[[가제]] Forecasting Korean Agri-Food Prices',
            authors: 'Maximiliano Islas Solis [[공동저자]]',
            venue: '목표 저널 유형: Journal of Commodity Markets',
            result: 'aT / 농넷(Nongnet) 시장 데이터를 활용한 국내 농식품 가격 예측. [[확보 시 핵심 결과 추가]]',
            imageAlt: '임시 이미지: 시장의 채소',
            details: [
                { label: '문제', text: '국내 농산물 품목의 단기 가격 예측.' },
                { label: '데이터', text: 'aT / 농넷(Nongnet) 도·소매 가격 데이터베이스. [[기타 데이터 출처]]' },
                { label: '방법', text: '[[모델 및 평가 방법]]' },
                { label: '향후 계획', text: '에너지 예측(한국 SMP / 전력 수요)으로의 확장 검토.' },
            ],
            tags: ['원자재', '시계열 예측'],
        },
        {
            ...enPapers[2],
            status: '투고 준비 중',
            venue: '목표 저널: Advanced Theory and Simulations',
            result: '도체 표면의 정전기 전하 밀도를 계산하는 랜덤 워크 몬테카를로 알고리즘 — ==파생상품 가격결정과 리스크 분석에 쓰이는 동일한 최초 도달(first-passage) 수학적 구조==.',
            imageAlt: '거리 d의 점전하 q와 구 내부의 도체 정육면체',
            details: [
                { label: '문제', text: '도메인 격자(mesh) 생성 없이 도체 표면의 전하 밀도를 추정.' },
                { label: '방법', text: '최초 도달(first-passage) 랜덤 워크와 최종 도달(last-passage) 경계 샘플링 결합.' },
                { label: '역할', text: '시뮬레이션 결과 산출 (HPC 클러스터 환경 Fortran / C, MPI).' },
            ],
            tags: ['Monte Carlo', '확률과정', 'MPI'],
        },
    ],
    physics: [
        {
            title: '스핀–궤도 결합 광격자에서의 스핀 압축(Spin Squeezing)',
            where: 'UNAM · 멕시코물리학회',
            when: '2025.07 – 2025.09',
            text: 'Santiago Caballero-Benítez 박사 지도하에 스핀–궤도 결합 광격자의 유효 스핀 모델 구성 및 정확 대각화 기반 다체 동역학 시뮬레이션 수행. 학사 졸업논문 주제.',
        },
        {
            title: 'GaAs 광발광(PL) 측정 및 DFT 계산',
            where: 'AI Semiconductors Lab · GIST',
            when: '2025.03 – 2025.06',
            text: 'GaAs 광발광 실험 측정 및 변형 퍼텐셜 추정을 위한 Quantum ESPRESSO 기반 DFT 계산 수행. 희토류 공동 도핑 불화물 결정 DFT 논문 수정 작업 지원.',
        },
        {
            title: '150 TW 레이저 시설에서의 결맞음 전이 복사(CTR) 분석',
            where: 'High Energy Density Physics Lab · GIST',
            when: '2024.07 – 2024.08',
            text: '150 TW 레이저 시설 광학·레이저 실습 이수; 결맞음 전이 복사(CTR) 실험 데이터 분석 및 레이저 샷 운영 지원.',
        },
        {
            title: '라플라스 방정식을 위한 몬테카를로 확산 알고리즘',
            where: 'Mathematical Sciences Lab · GIST',
            when: '2023.09 – 2024.07',
            text: '도체 표면 라플라스 방정식을 위한 고속 몬테카를로 확산 알고리즘 개발 — 최초 도달 논문의 출발점. 서울 GIST Embassy Welcome Day 발표(2024년 10월).',
        },
    ],
    experience: [
        { when: '2026.08 – 2028.08 (예정)', what: 'AI 정책·전략 석사과정', where: 'AI X School, GIST · IMPACT Lab (Duk-Jo Kong 교수)', logo: 'gist' },
        {
            when: '2023.09 – 2026.07',
            what: '학부 연구 인턴',
            where: 'GIST · 연구실 4곳',
            logo: 'gist',
            labs: [
                { name: 'IMPACT Lab', topic: 'NLP 및 AI', when: '2025.10 – 2026.07' },
                { name: 'AI Semiconductors Lab', topic: '계산재료과학', when: '2025.03 – 2025.06' },
                { name: 'High Energy Density Physics Lab', topic: '실험물리학', when: '2024.07 – 2024.08' },
                { name: 'Mathematical Sciences Lab', topic: '계산수학', when: '2023.09 – 2024.07' },
            ],
        },
        { when: '2025.07 – 2025.09', what: '양자정보 연구 인턴', where: 'UNAM · 멕시코물리학회 (원격)', logo: 'unam' },
        { when: '2022.08 – 2026.08', what: '물리학 학사', where: 'GIST · AI 부전공', logo: 'gist' },
    ],
    certifications: [
        { when: '2025.12.15', name: 'CFA Institute Investment Foundations Certificate', detail: '취득 완료', logo: 'cfa' },
        { when: '2025.01', name: 'IELTS Academic', detail: 'Overall 8.0', logo: 'ielts' },
    ],
    skills: [
        'Python', 'SQL', 'pandas', 'scikit-learn', 'PyTorch',
        'LightGBM', 'XGBoost', 'SHAP', '통계적 검정',
        '시계열 예측', '시계열 파운데이션 모델',
        'LLMs & NLP', '멀티에이전트 프레임워크', '토픽 모델링',
        'Monte Carlo', '확률적 시뮬레이션', 'Fortran', 'C / C++', 'MPI', 'GPU / HPC',
        'Quantum ESPRESSO',
    ],
    minorProjects: [
        {
            ...enMinorProjects[0],
            kind: '산학 프로젝트 (PBL)',
            text: '문화체육관광부 해외 언론 모니터링(NOW 플랫폼)을 위한 200만 건 이상 기사 대상 NLP 파이프라인 구축.',
        },
        {
            ...enMinorProjects[1],
            title: 'MIT iQuHACK 2025 — 1위',
            kind: '해커톤',
            text: 'Quantum Rings 원격 챌린지: Shor 알고리즘을 활용한 소인수분해.',
        },
        {
            ...enMinorProjects[2],
            year: '[[연도]]',
            kind: '해커톤',
            text: '실시간 뉴스와 LLM 챗봇으로 청년층의 경제 이해를 돕는 웹 애플리케이션. GIST AI Hackathon.',
        },
        {
            ...enMinorProjects[3],
            year: '[[연도]]',
            kind: '사이드 프로젝트',
            text: '일별 여행 일정을 생성하고 동적으로 조정해 주는 LLM 기반 여행 플래너.',
        },
        {
            ...enMinorProjects[4],
            year: '[[연도]]',
            title: '국내 차량 모델 식별',
            kind: '강의 프로젝트',
            text: '영상에서 국내 차량 모델을 탐지·분류하는 컴퓨터 비전 파이프라인.',
        },
    ],
};

export const translations: Record<Lang, SiteContent> = { en, es, ko };
