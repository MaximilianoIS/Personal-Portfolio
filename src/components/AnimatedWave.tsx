import React, { useEffect, useRef } from 'react';

interface Props {
  darkMode?: boolean;
}

function AnimatedWave({ darkMode = false }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.scale(dpr, dpr);
    };

    // Draw one parametric wave curve along a rotated axis
    const drawCurve = (
      offset: number,       // base offset along perpendicular axis
      angle: number,        // rotation angle of the wave family
      amplitude: number,
      frequency: number,
      speed: number,
      phase: number,
      opacity: number,
      lineColor: string,
    ) => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      const diag = Math.sqrt(w * w + h * h);
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      const cx = w / 2;
      const cy = h / 2;

      ctx.beginPath();
      let first = true;
      for (let t = -diag; t <= diag; t += 2) {
        // parametric point along rotated axis
        const wave = amplitude * Math.sin(t * frequency + time * speed + phase);
        // rotated coords
        const x = cx + cos * t - sin * (offset + wave);
        const y = cy + sin * t + cos * (offset + wave);
        if (first) { ctx.moveTo(x, y); first = false; }
        else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = `${lineColor} ${opacity})`;
      ctx.lineWidth = 0.8;
      ctx.stroke();
    };

    const draw = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      const lineColor = darkMode
        ? 'rgba(180, 190, 210,'
        : 'rgba(80, 70, 60,';

      // ── Family A: near-horizontal waves (angle ~0°) ────────────
      const numA = 20;
      const spreadA = Math.max(w, h) * 1.0;
      for (let i = 0; i < numA; i++) {
        const t = (i / (numA - 1)) - 0.5;          // -0.5 … +0.5
        const offset = t * spreadA;
        const peakiness = 1 - Math.abs(t) * 1.4;
        const opacity = 0.035 + Math.max(0, peakiness) * 0.09;
        const amplitude = 24 + Math.abs(t) * 60;
        drawCurve(offset, 0.08, amplitude, 0.007, 0.15 + Math.abs(t) * 0.1, i * 0.9, opacity, lineColor);
      }

      // ── Family B: diagonal waves (~45° angle) ─────────────────
      const numB = 18;
      const spreadB = Math.max(w, h) * 1.0;
      for (let i = 0; i < numB; i++) {
        const t = (i / (numB - 1)) - 0.5;
        const offset = t * spreadB;
        const peakiness = 1 - Math.abs(t) * 1.4;
        const opacity = 0.025 + Math.max(0, peakiness) * 0.07;
        const amplitude = 20 + Math.abs(t) * 50;
        drawCurve(offset, Math.PI / 4, amplitude, 0.007, 0.12 + Math.abs(t) * 0.08, i * 1.1, opacity, lineColor);
      }

      // ── Family C: counter-diagonal (~-35°) for richer mesh ────
      const numC = 14;
      const spreadC = Math.max(w, h) * 0.85;
      for (let i = 0; i < numC; i++) {
        const t = (i / (numC - 1)) - 0.5;
        const offset = t * spreadC;
        const opacity = 0.018 + Math.max(0, 1 - Math.abs(t) * 2) * 0.045;
        const amplitude = 16 + Math.abs(t) * 40;
        drawCurve(offset, -Math.PI / 5, amplitude, 0.009, 0.1, i * 1.3, opacity, lineColor);
      }

      time += 0.008;
      animationId = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener('resize', resize);
    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, [darkMode]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
      }}
    />
  );
}

export default AnimatedWave;
