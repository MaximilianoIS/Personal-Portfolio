// Native scrolling (no scroll hijacking). Only programmatic jumps — sidebar links,
// page changes — use the browser's built-in smooth behaviour.
export function startSmoothScroll() {
    return () => {};
}

export function smoothScrollTo(target?: string, opts: { immediate?: boolean } = {}) {
    const behavior: ScrollBehavior = opts.immediate ? 'auto' : 'smooth';
    if (!target) {
        window.scrollTo({ top: 0, behavior });
        return;
    }
    document.getElementById(target)?.scrollIntoView({ behavior, block: 'start' });
}
