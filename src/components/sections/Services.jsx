import { useRef } from 'react';
import { Code, DeviceMobile, ChartBar } from '@phosphor-icons/react';
import { useGSAP } from '@gsap/react';
import { gsap } from '../../utils/gsapInit';
import SectionHeading from '../ui/SectionHeading';
import ServiceCard from '../ui/ServiceCard';

const SERVICES = [
  {
    icon: Code,
    title: 'Full-Stack Web Development',
    description:
      'Building scalable monolithic and SPA web apps using Laravel, React, and Vue.js — complete with REST APIs, RBAC authentication, and PostgreSQL database design.',
  },
  {
    icon: DeviceMobile,
    title: 'Mobile Development',
    description:
      'Developing cross-platform mobile apps with Flutter/Dart and native iOS apps with Swift — integrating device frameworks like HealthKit and Pedometer for richer experiences.',
  },
  {
    icon: ChartBar,
    title: 'Data Analysis & Python',
    description:
      'Applying Python and R for data analysis, machine learning experiments, and backend scripting — turning raw data into actionable insights through clean, reproducible code.',
  },
];

export default function Services() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        '.service-card',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.services-grid',
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        },
      );
    },
    { scope: containerRef },
  );

  return (
    <section
      id="services"
      ref={containerRef}
      className="section-padding"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="container-max">
        <SectionHeading
          eyebrow="What I Do"
          title="Services I Offer"
          subtitle="From concept to deployment, I provide end-to-end solutions tailored to your unique needs and goals."
          center
        />

        <div className="services-grid grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <div key={service.title} className="service-card h-full">
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
