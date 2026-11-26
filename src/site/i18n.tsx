import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { Lang, SiteContent, translations } from './translations';

const STORAGE_KEY = 'portfolio_lang';
const SUPPORTED: Lang[] = ['en', 'es', 'ko'];

const isLang = (v: string | null | undefined): v is Lang =>
    !!v && (SUPPORTED as string[]).includes(v.toLowerCase());

const matchBrowserLang = (tag: string): Lang | null => {
    const base = tag.toLowerCase().split('-')[0];
    return isLang(base) ? base : null;
};

function getUrlLang(): Lang | null {
    if (typeof window === 'undefined') return null;
    // Check standard query string (?lang=es)
    const searchParam = new URLSearchParams(window.location.search).get('lang');
    if (isLang(searchParam)) return searchParam.toLowerCase() as Lang;
    // Also check query string inside hash route (#/projects?lang=es)
    const hashQuery = window.location.hash.split('?')[1];
    if (hashQuery) {
        const hashParam = new URLSearchParams(hashQuery).get('lang');
        if (isLang(hashParam)) return hashParam.toLowerCase() as Lang;
    }
    return null;
}

export function detectInitialLang(): Lang {
    // 1. Explicit URL parameter (?lang=es / ?lang=ko / ?lang=en)
    const fromUrl = getUrlLang();
    if (fromUrl) return fromUrl;

    // 2. Saved manual preference in localStorage
    try {
        const saved = window.localStorage.getItem(STORAGE_KEY);
        if (isLang(saved)) return saved.toLowerCase() as Lang;
    } catch {
        // ignore storage errors (e.g., restricted private mode)
    }

    // 3. Automatic browser language detection
    if (typeof navigator !== 'undefined') {
        const candidates = navigator.languages && navigator.languages.length > 0
            ? navigator.languages
            : [navigator.language];
        for (const tag of candidates) {
            if (!tag) continue;
            const matched = matchBrowserLang(tag);
            if (matched) return matched;
        }
    }

    return 'en';
}

interface LanguageContextValue {
    lang: Lang;
    setLang: (next: Lang) => void;
    content: SiteContent;
}

const LanguageContext = createContext<LanguageContextValue>({
    lang: 'en',
    setLang: () => {},
    content: translations.en,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [lang, setLangState] = useState<Lang>(detectInitialLang);

    const setLang = useCallback((next: Lang) => {
        setLangState(next);
        try {
            window.localStorage.setItem(STORAGE_KEY, next);
        } catch {
            // ignore storage errors
        }
        // Keep URL query param in sync if the visitor arrived via ?lang=
        try {
            const url = new URL(window.location.href);
            if (url.searchParams.has('lang')) {
                url.searchParams.set('lang', next);
                window.history.replaceState({}, '', url.toString());
            }
        } catch {
            // ignore URL errors
        }
    }, []);

    useEffect(() => {
        const content = translations[lang];
        document.documentElement.lang = lang;
        const meta = document.querySelector('meta[name="description"]');
        if (meta) meta.setAttribute('content', content.ui.metaDescription);
    }, [lang]);

    return (
        <LanguageContext.Provider value={{ lang, setLang, content: translations[lang] }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLang() {
    return useContext(LanguageContext);
}
