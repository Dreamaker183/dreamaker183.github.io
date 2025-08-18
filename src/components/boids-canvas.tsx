"use client";

import { useRef, useEffect } from 'react';
import { useBoids } from '@/hooks/use-boids';
import { useTheme } from 'next-themes';

const Boid = (x: number, y: number) => ({
  x,
  y,
  vx: Math.random() * 2 - 1,
  vy: Math.random() * 2 - 1,
});

export function BoidsCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { isEnabled } = useBoids();
  const { resolvedTheme } = useTheme();
  const boidsRef = useRef<ReturnType<typeof Boid>[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const animationFrameId = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      boidsRef.current = Array.from({ length: 50 }, () =>
        Boid(Math.random() * canvas.width, Math.random() * canvas.height)
      );
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const handleMouseMove = (event: MouseEvent) => {
      mouseRef.current = { x: event.clientX, y: event.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const boids = boidsRef.current;
      const mouse = mouseRef.current;
      const boidColor = resolvedTheme === 'dark' ? 'rgba(160, 180, 255, 0.7)' : 'rgba(30, 58, 138, 0.6)';

      const separationDistance = 20;
      const alignmentDistance = 40;
      const cohesionDistance = 40;
      const separationFactor = 0.05;
      const alignmentFactor = 0.05;
      const cohesionFactor = 0.0005;
      const mouseAvoidanceFactor = 0.2;
      const mouseAvoidanceDistance = 100;
      const maxSpeed = 2;

      boids.forEach(boid => {
        let avgVx = 0, avgVy = 0, avgX = 0, avgY = 0;
        let neighbors = 0;
        let sepVx = 0, sepVy = 0;

        boids.forEach(otherBoid => {
          if (boid === otherBoid) return;
          const dx = otherBoid.x - boid.x;
          const dy = otherBoid.y - boid.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < separationDistance) {
            sepVx -= dx;
            sepVy -= dy;
          }
          if (distance < alignmentDistance) {
            avgVx += otherBoid.vx;
            avgVy += otherBoid.vy;
            neighbors++;
          }
          if (distance < cohesionDistance) {
            avgX += otherBoid.x;
            avgY += otherBoid.y;
          }
        });
        
        if (neighbors > 0) {
          avgVx /= neighbors;
          avgVy /= neighbors;
          avgX /= neighbors;
          avgY /= neighbors;

          boid.vx += (avgVx - boid.vx) * alignmentFactor + (avgX - boid.x) * cohesionFactor;
          boid.vy += (avgVy - boid.vy) * alignmentFactor + (avgY - boid.y) * cohesionFactor;
        }

        boid.vx += sepVx * separationFactor;
        boid.vy += sepVy * separationFactor;
        
        const mouseDx = mouse.x - boid.x;
        const mouseDy = mouse.y - boid.y;
        const mouseDistance = Math.sqrt(mouseDx * mouseDx + mouseDy * mouseDy);

        if (mouseDistance < mouseAvoidanceDistance) {
            boid.vx -= mouseDx * mouseAvoidanceFactor;
            boid.vy -= mouseDy * mouseAvoidanceFactor;
        }

        const speed = Math.sqrt(boid.vx * boid.vx + boid.vy * boid.vy);
        if (speed > maxSpeed) {
          boid.vx = (boid.vx / speed) * maxSpeed;
          boid.vy = (boid.vy / speed) * maxSpeed;
        }

        boid.x += boid.vx;
        boid.y += boid.vy;

        if (boid.x > canvas.width) boid.x = 0;
        if (boid.x < 0) boid.x = canvas.width;
        if (boid.y > canvas.height) boid.y = 0;
        if (boid.y < 0) boid.y = canvas.height;
        
        ctx.fillStyle = boidColor;
        ctx.beginPath();
        ctx.arc(boid.x, boid.y, 3, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId.current = requestAnimationFrame(animate);
    };

    if (isEnabled) {
      animate();
    }

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [isEnabled, resolvedTheme]);


  if (!isEnabled) return null;

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none" />;
}
