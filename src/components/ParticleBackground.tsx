'use client';

import React, { useEffect, useRef } from 'react';

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particlesArray: Particle[] = [];
    let animationFrameId: number;

    const colors = ['#0d9488', '#0891b2', '#0284c7']; // Teal 600, Cyan 600, Sky 600

    const mouse = {
      x: null as number | null,
      y: null as number | null,
      radius: 100
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.x;
      mouse.y = event.y;
    };

    const handleMouseOut = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseOut);

    class Particle {
      x: number;
      y: number;
      directionX: number;
      directionY: number;
      size: number;
      color: string;
      baseX: number;
      baseY: number;
      density: number;

      constructor(x: number, y: number, directionX: number, directionY: number, size: number, color: string) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = (Math.random() * 30) + 1;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        // Drawing short dashes/data streams
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x + this.directionX * 5, this.y + this.directionY * 5);
        ctx.strokeStyle = this.color;
        ctx.lineWidth = this.size;
        ctx.stroke();
      }

      update() {
        // Regular movement
        this.x += this.directionX;
        this.y += this.directionY;

        // Bounce off edges
        if (this.x < 0 || this.x > canvas!.width) {
          this.directionX = -this.directionX;
        }
        if (this.y < 0 || this.y > canvas!.height) {
          this.directionY = -this.directionY;
        }

        // Mouse collision detection & repulsion
        if (mouse.x != null && mouse.y != null) {
          let dx = mouse.x - this.x;
          let dy = mouse.y - this.y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < mouse.radius) {
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            
            // Push away from mouse
            const force = (mouse.radius - distance) / mouse.radius;
            const directionX = forceDirectionX * force * this.density * 0.6;
            const directionY = forceDirectionY * force * this.density * 0.6;
            
            this.x -= directionX;
            this.y -= directionY;
          }
        }

        this.draw();
      }
    }

    const init = () => {
      particlesArray = [];
      const numberOfParticles = 150; // Balanced density
      
      for (let i = 0; i < numberOfParticles; i++) {
        const size = Math.random() * 1.5 + 0.5; // Balanced thickness
        const x = Math.random() * canvas!.width;
        const y = Math.random() * canvas!.height;
        const directionX = (Math.random() - 0.5) * 1.5; // Slow movement
        const directionY = (Math.random() - 0.5) * 1.5;
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
      }
    };

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
      }
    };

    handleResize(); // sets initial bounds and calls init()
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseOut);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 pointer-events-none z-[-1]"
    />
  );
};

export default ParticleBackground;
