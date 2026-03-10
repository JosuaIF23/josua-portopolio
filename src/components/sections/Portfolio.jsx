import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '../../utils/gsapInit'
import SectionHeading from '../ui/SectionHeading'
import FilterBar from '../ui/FilterBar'
import PortfolioCard from '../ui/PortfolioCard'
import Lightbox from '../ui/Lightbox'
import { portfolioData, categories } from '../../data/portfolioData'

export default function Portfolio() {
  const containerRef = useRef(null)
  const gridRef = useRef(null)
  const [activeFilter, setActiveFilter] = useState('All')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const filtered =
    activeFilter === 'All'
      ? portfolioData
      : portfolioData.filter((p) => p.category === activeFilter)

  const slides = portfolioData.map((p) => ({
    src: p.imageUrl,
    title: p.title,
    description: p.description,
  }))

  // Initial entrance animation
  useGSAP(
    () => {
      gsap.fromTo(
        '.portfolio-card',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    },
    { scope: containerRef }
  )

  const handleFilterChange = (cat) => {
    if (cat === activeFilter) return

    // Animate out
    gsap.to('.portfolio-card', {
      y: 20,
      opacity: 0,
      duration: 0.25,
      stagger: 0.04,
      ease: 'power2.in',
      onComplete: () => {
        setActiveFilter(cat)
        // Animate in handled by next effect
        gsap.fromTo(
          '.portfolio-card',
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.35, stagger: 0.07, ease: 'power3.out' }
        )
      },
    })
  }

  const openLightbox = (project) => {
    const idx = portfolioData.findIndex((p) => p.id === project.id)
    setLightboxIndex(idx)
    setLightboxOpen(true)
  }

  return (
    <section
      id="portfolio"
      ref={containerRef}
      className="section-padding"
      style={{ backgroundColor: 'var(--bg-secondary)' }}
    >
      <div className="container-max">
        <SectionHeading
          eyebrow="My Work"
          title="Featured Projects"
          subtitle="A selection of projects I've worked on, showcasing my range of skills and passion for great digital experiences."
          center
        />

        <FilterBar
          categories={categories}
          active={activeFilter}
          onChange={handleFilterChange}
        />

        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filtered.map((project) => (
            <div key={project.id} className="portfolio-card">
              <PortfolioCard project={project} onClick={() => openLightbox(project)} />
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center py-16" style={{ color: 'var(--text-secondary)' }}>
            No projects in this category yet.
          </p>
        )}
      </div>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={slides}
        index={lightboxIndex}
      />
    </section>
  )
}
