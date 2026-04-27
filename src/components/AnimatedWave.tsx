import React, { useEffect, useRef, useState } from 'react';

function AnimatedWave() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDark, setIsDark] = useState(false);

  // Auto-detect dark mode from DOM class
  useEffect(() => {
    const check = () =>
      setIsDark(document.querySelector('.dark-mode') !== null);

    check();
    const observer = new MutationObserver(check);
    observer.observe(document.body, { attributes: true, subtree: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width  = canvas.offsetWidth  * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.scale(dpr, dpr);
    };

    const drawCurve = (
      offset: number,
      angle: number,
      amplitude: number,
      frequency: number,
      speed: number,
      phase: number,
      opacity: number,
    ) => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      const diag = Math.sqrt(w * w + h * h);
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      const cx = w / 2;
      const cy = h / 2;

      // Use lighter, higher-opacity lines in dark mode so they're visible
      const r = isDark ? 190 : 80;
      const g = isDark ? 200 : 70;
      const b = isDark ? 220 : 60;
      const finalOpacity = isDark ? opacity * 2.2 : opacity;

      ctx.beginPath();
      let first = true;
      for (let t = -diag; t <= diag; t += 2) {
        const wave = amplitude * Math.sin(t * frequency + time * speed + phase);
        const x = cx + cos * t - sin * (offset + wave);
        const y = cy + sin * t + cos * (offset + wave);
        if (first) { ctx.moveTo(x, y); first = false; }
        else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${finalOpacity})`;
      ctx.lineWidth = isDark ? 0.7 : 0.8;
      ctx.stroke();
    };

    const draw = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      const maxSpread = Math.max(w, h);

      // Family A — near-horizontal
      const numA = 20;
      for (let i = 0; i < numA; i++) {
        const t = i / (numA - 1) - 0.5;
        const peakiness = 1 - Math.abs(t) * 1.4;
        drawCurve(t * maxSpread, 0.08, 38 + Math.abs(t) * 80, 0.008,
          0.22 + Math.abs(t) * 0.12, i * 0.9,
          0.05 + Math.max(0, peakiness) * 0.13);
      }

      // Family B — 45° diagonal
      const numB = 18;
      for (let i = 0; i < numB; i++) {
        const t = i / (numB - 1) - 0.5;
        const peakiness = 1 - Math.abs(t) * 1.4;
        drawCurve(t * maxSpread, Math.PI / 4, 30 + Math.abs(t) * 65, 0.008,
          0.18 + Math.abs(t) * 0.1, i * 1.1,
          0.038 + Math.max(0, peakiness) * 0.10);
      }

      // Family C — counter-diagonal
      const numC = 14;
      for (let i = 0; i < numC; i++) {
        const t = i / (numC - 1) - 0.5;
        drawCurve(t * maxSpread * 0.85, -Math.PI / 5, 24 + Math.abs(t) * 55, 0.009,
          0.16, i * 1.3,
          0.028 + Math.max(0, 1 - Math.abs(t) * 2) * 0.065);
      }

      time += 0.013;
      animationId = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener('resize', resize);
    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
    />
  );
}

export default AnimatedWave;
