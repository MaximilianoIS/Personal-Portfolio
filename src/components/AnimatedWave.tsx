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
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    const draw = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      const lineColor = darkMode
        ? 'rgba(255, 255, 255,'
        : 'rgba(90, 80, 70,';

      const numWaves = 18;

      for (let i = 0; i < numWaves; i++) {
        const t = i / (numWaves - 1);

        // spread waves across the full vertical space
        const yBase = h * 0.05 + t * h * 0.9;

        // waves in the middle are bolder/more visible
        const peakiness = 1 - Math.abs(t - 0.5) * 1.6;
        const opacity = 0.04 + Math.max(0, peakiness) * 0.14;
        const amplitude = 18 + t * 38 + Math.sin(t * Math.PI) * 22;
        const frequency = 0.006 + t * 0.003;
        const speed = 0.18 + t * 0.22;
        const phase = (i % 3) * 2.1; // stagger phases so waves don't align

        ctx.beginPath();
        for (let x = 0; x <= w; x += 1.5) {
          const y =
            yBase +
            Math.sin(x * frequency + time * speed + phase) * amplitude +
            Math.sin(x * frequency * 2.3 + time * speed * 0.7 + phase) * (amplitude * 0.3);
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }

        ctx.strokeStyle = `${lineColor} ${opacity})`;
        ctx.lineWidth = 0.9;
        ctx.stroke();
      }

      time += 0.012;
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
