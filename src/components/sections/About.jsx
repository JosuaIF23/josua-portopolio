import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '../../utils/gsapInit';
import SectionHeading from '../ui/SectionHeading';

const STATS = [
  { value: '3.45', label: 'GPA Score' },
  { value: '4+', label: 'Projects Built' },
  { value: '58', label: 'Students Mentored' },
  { value: '4', label: 'Certifications' },
];

const SKILLS = {
  Frontend: ['React', 'Vue.js', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'],
  Backend: ['Laravel', 'PHP', 'Node.js', 'PostgreSQL', 'MySQL', 'Inertia.js'],
  Mobile: ['Flutter / Dart', 'Swift', 'Kotlin', 'React Native'],
  Tools: ['Figma', 'Git', 'Postman', 'Python', 'R', 'Android Studio'],
};

const EDUCATION = [
  {
    year: 'Aug 2023 – Present',
    degree: 'S1 Informatika — GPA 3.45/4.00',
    school: 'Institut Teknologi Del, Toba, Indonesia',
    note: 'Representative for Apple Foundation 2025 Program',
  },
  {
    year: 'Aug 2020 – Jun 2023',
    degree: 'IPA (Natural Sciences)',
    school: 'SMA Negeri 1 Balige, Toba, Indonesia',
    note: 'Analytical & problem-solving focus',
  },
];

export default function About() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        '.about-left',
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        },
      );

      gsap.fromTo(
        '.about-stat',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.about-stats',
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        },
      );

      gsap.fromTo(
        '.skill-pill',
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.4,
          stagger: 0.04,
          ease: 'back.out(1.5)',
          scrollTrigger: {
            trigger: '.skills-section',
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        },
      );
    },
    { scope: containerRef },
  );

  return (
    <section
      id="about"
      ref={containerRef}
      className="section-padding"
      style={{ backgroundColor: 'var(--bg-secondary)' }}
    >
      <div className="container-max">
        <SectionHeading
          eyebrow="About Me"
          title="Building Scalable Digital Solutions"
          subtitle="Third-year Informatics student at Institut Teknologi Del, passionate about Full-Stack Web Development, Mobile Apps, and Software Engineering."
        />

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
          {/* Left: Bio */}
          <div className="about-left">
            <p
              className="text-base leading-relaxed mb-6"
              style={{ color: 'var(--text-secondary)' }}
            >
              I'm a third-year Informatics student at Institut Teknologi Del
              with a strong focus on Full-Stack Web Development and Software
              Engineering. I'm experienced in building scalable applications
              using Laravel, React, Flutter, and Swift — from backend APIs to
              polished mobile interfaces.
            </p>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: 'var(--text-secondary)' }}
            >
              Beyond coding, I've served as a Teaching Assistant mentoring 58
              students in C programming, and as Vice Head of Communication &
              Information at BEM IT Del. I'm driven by a proactive approach to
              mastering modern technologies and delivering user-centered digital
              solutions.
            </p>

            {/* Education */}
            <h3
              className="font-semibold text-lg mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              Education
            </h3>
            <div className="space-y-4">
              {EDUCATION.map((edu) => (
                <div
                  key={edu.degree}
                  className="flex gap-4 items-start p-4 rounded-xl"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    border: '1px solid var(--border)',
                  }}
                >
                  <div
                    className="text-xs font-semibold px-2 py-1 rounded-lg whitespace-nowrap mt-0.5"
                    style={{ backgroundColor: 'var(--accent)', color: 'white' }}
                  >
                    {edu.year}
                  </div>
                  <div>
                    <p
                      className="font-semibold"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {edu.degree}
                    </p>
                    <p
                      className="text-sm"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {edu.school}
                    </p>
                    <p
                      className="text-xs mt-1"
                      style={{ color: 'var(--accent)' }}
                    >
                      {edu.note}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Skills */}
          <div className="skills-section">
            <h3
              className="font-semibold text-lg mb-6"
              style={{ color: 'var(--text-primary)' }}
            >
              Skills & Technologies
            </h3>
            <div className="space-y-6">
              {Object.entries(SKILLS).map(([category, skills]) => (
                <div key={category}>
                  <p
                    className="text-xs font-semibold tracking-widest uppercase mb-3"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {category}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="skill-pill text-sm px-3 py-1.5 rounded-full font-medium"
                        style={{
                          backgroundColor: 'var(--bg-card)',
                          border: '1px solid var(--border)',
                          color: 'var(--text-primary)',
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="about-stats grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="about-stat card p-6 text-center hover:shadow-lg transition-shadow"
            >
              <p
                className="font-serif text-4xl font-bold mb-2"
                style={{ color: 'var(--accent)' }}
              >
                {stat.value}
              </p>
              <p
                className="text-sm font-medium"
                style={{ color: 'var(--text-secondary)' }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
