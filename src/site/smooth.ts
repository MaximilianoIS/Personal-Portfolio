// Smooth scrolling (Lenis). Native scroll stays underneath, so sticky elements,
// keyboard scrolling and anchors keep working; wheel/trackpad input is eased.
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

let lenis: Lenis | null = null;

const reduceMotion = () =>
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function startSmoothScroll() {
    if (lenis || reduceMotion()) return () => {};
    lenis = new Lenis({
        duration: 1.1,
        easing: (t) => 1 - Math.pow(1 - t, 4), // ease-out quart
        smoothWheel: true,
        wheelMultiplier: 0.9,
    });
    let raf = 0;
    const loop = (time: number) => {
        lenis?.raf(time);
        raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
        cancelAnimationFrame(raf);
        lenis?.destroy();
        lenis = null;
    };
}

// Glide to an element id (or the top), offset for breathing room.
export function smoothScrollTo(target?: string, opts: { immediate?: boolean } = {}) {
    const el = target ? document.getElementById(target) : null;
    if (target && !el) return;
    if (lenis) {
        lenis.scrollTo(el ?? 0, {
            offset: el ? -32 : 0,
            duration: opts.immediate ? 0 : 1.2,
            immediate: opts.immediate,
            easing: (t) => 1 - Math.pow(1 - t, 4),
        });
        return;
    }
    if (el) el.scrollIntoView({ behavior: opts.immediate ? 'auto' : 'smooth' });
    else window.scrollTo({ top: 0, behavior: opts.immediate ? 'auto' : 'smooth' });
}
