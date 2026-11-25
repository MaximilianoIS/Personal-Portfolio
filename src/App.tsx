import React, { useEffect, useState } from 'react';
import { AnimatePresence, MotionConfig, motion } from 'motion/react';
import { Route, Sidebar } from './site/Layout';
import Home from './site/Home';
import Projects from './site/Projects';
import { ContactPage, HistoryPage, NewsPage } from './site/Pages';
import { smoothScrollTo, startSmoothScroll } from './site/smooth';
import './site/site.scss';

// Previous design is preserved on the `backup/original-site` branch.

const routes: Route[] = ['projects', 'history', 'news', 'contact'];

// old addresses keep working
const aliases: Record<string, Route> = { physics: 'projects', experience: 'history' };

const parse = (hash: string): Route => {
    const raw = hash.replace(/^#\/?/, '').split('/')[0];
    const r = (aliases[raw] || raw) as Route;
    return routes.includes(r) ? r : 'home';
};

const pages: Record<Route, React.ReactElement> = {
    home: <Home />,
    projects: <Projects />,
    history: <HistoryPage />,
    news: <NewsPage />,
    contact: <ContactPage />,
};

function App() {
    const [route, setRoute] = useState<Route>(parse(window.location.hash));

    useEffect(() => startSmoothScroll(), []);

    useEffect(() => {
        const onChange = () => setRoute(parse(window.location.hash));
        window.addEventListener('hashchange', onChange);
        return () => window.removeEventListener('hashchange', onChange);
    }, []);

    return (
        // reducedMotion="user": animations switch off for visitors who ask their OS for less motion
        <MotionConfig reducedMotion="user">
            <div className="shell">
                <Sidebar route={route} />
                <div className="shell__main">
                    <AnimatePresence mode="wait" onExitComplete={() => smoothScrollTo(undefined, { immediate: true })}>
                        <motion.div
                            key={route}
                            // old page lifts away, new one settles in from just below
                            initial={{ opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }}
                            exit={{ opacity: 0, y: -8, transition: { duration: 0.2, ease: [0.4, 0, 1, 1] } }}
                        >
                            {pages[route]}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </MotionConfig>
    );
}

export default App;
