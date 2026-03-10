import { useEffect, useRef } from 'react';
import { ArrowDown, ArrowRight, DownloadIcon } from '@phosphor-icons/react';
import { gsap } from '../../utils/gsapInit';
import { useGSAP } from '@gsap/react';

const ROLES = ['Fullstack Developer', 'Problem Solver'];

export default function Hero() {
  const containerRef = useRef(null);
  const roleRef = useRef(null);
  const bgLayerRef = useRef(null);
  const roleIndexRef = useRef(0);

  // Entrance animation + text cycling
  useGSAP(
    () => {
      const tl = gsap.timeline({ delay: 0.5 });

      tl.fromTo(
        '.hero-child',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.12, ease: 'power3.out' },
      );

      // TextPlugin cycling
      const cycleRole = () => {
        gsap.to(roleRef.current, {
          opacity: 0,
          y: -10,
          duration: 0.3,
          ease: 'power2.in',
          onComplete: () => {
            roleIndexRef.current = (roleIndexRef.current + 1) % ROLES.length;
            if (roleRef.current) {
              roleRef.current.textContent = ROLES[roleIndexRef.current];
              gsap.fromTo(
                roleRef.current,
                { opacity: 0, y: 10 },
                { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' },
              );
            }
          },
        });
      };

      const interval = setInterval(cycleRole, 2500);
      return () => clearInterval(interval);
    },
    { scope: containerRef },
  );

  // Mouse parallax
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!bgLayerRef.current) return;
      const { clientX, clientY } = e;
      const xMove = (clientX / window.innerWidth - 0.5) * 30;
      const yMove = (clientY / window.innerHeight - 0.5) * 20;
      gsap.to(bgLayerRef.current, {
        x: xMove,
        y: yMove,
        duration: 1.5,
        ease: 'power2.out',
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      {/* Decorative background layer */}
      <div
        ref={bgLayerRef}
        className="absolute inset-0 pointer-events-none select-none"
      >
        <div
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ backgroundColor: 'var(--accent)' }}
        />
        <div
          className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl opacity-10"
          style={{ backgroundColor: 'var(--accent)' }}
        />
      </div>

      <div className="container-max section-padding w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <span
              className="hero-child inline-block text-sm font-semibold tracking-widest uppercase mb-4"
              style={{ color: 'var(--accent)' }}
            >
              Hello, I'm
            </span>

            <h1
              className="hero-child font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              Josua Asido Prima Silalahi
            </h1>

            <div className="hero-child flex items-center gap-3 mb-6 text-2xl md:text-3xl font-light">
              <span style={{ color: 'var(--text-secondary)' }}>I'm a</span>
              <span
                ref={roleRef}
                className="font-semibold"
                style={{ color: 'var(--accent)' }}
              >
                {ROLES[0]}
              </span>
            </div>

            <p
              className="hero-child text-lg leading-relaxed mb-10 max-w-lg"
              style={{ color: 'var(--text-secondary)' }}
            >
              Computer Science student at IT Del with a strong focus on
              Full-stack development (Web & Mobile) and Machine Learning.
              Committed to leveraging AI to enhance user experiences and solve
              complex technical challenges
            </p>

            <div className="hero-child flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection('#portfolio')}
                className="btn-primary"
              >
                View My Work <ArrowRight size={18} />
              </button>
              <button
                onClick={() => scrollToSection('#contact')}
                className="btn-outline"
              >
                Contact Me
              </button>
              <a
                href="/cv.pdf"
                download="CV_Josua_Asido_Prima_Silalahi.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  border: '1px solid var(--border)',
                  color: 'var(--text-primary)',
                }}
              >
                <DownloadIcon size={18} /> Resume
              </a>
            </div>
          </div>

          {/* Right: Avatar / Visual */}
          <div className="hero-child flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative ring */}
              <div
                className="absolute -inset-4 rounded-full opacity-20 animate-pulse"
                style={{ border: '2px solid var(--accent)' }}
              />
              <div
                className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl"
                style={{ border: '4px solid var(--accent)' }}
              >
                <img
                  src="/images/projects/me.png"
                  alt="Josua Asido Prima Silalahi"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating badge */}
              <div
                className="absolute -bottom-4 -left-4 card px-4 py-3 shadow-xl"
                style={{ backgroundColor: 'var(--bg-card)' }}
              >
                <p
                  className="text-xs font-medium"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  Available for work
                </p>
                <p
                  className="text-sm font-bold"
                  style={{ color: 'var(--accent)' }}
                >
                  ● Open to projects
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span
            className="text-xs font-medium"
            style={{ color: 'var(--text-secondary)' }}
          >
            Scroll
          </span>
          <ArrowDown size={16} style={{ color: 'var(--text-secondary)' }} />
        </div>
      </div>
    </section>
  );
}
