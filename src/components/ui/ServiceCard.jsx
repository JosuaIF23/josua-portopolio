import { useRef } from 'react'
import { gsap } from '../../utils/gsapInit'

export default function ServiceCard({ icon: Icon, title, description }) {
  const iconRef = useRef(null)

  const handleMouseEnter = () => {
    gsap.to(iconRef.current, {
      scale: 1.2,
      rotation: 5,
      duration: 0.3,
      ease: 'back.out(1.7)',
    })
  }

  const handleMouseLeave = () => {
    gsap.to(iconRef.current, {
      scale: 1,
      rotation: 0,
      duration: 0.3,
      ease: 'power2.out',
    })
  }

  return (
    <div
      className="card h-full flex flex-col p-8 group cursor-default hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 flex-shrink-0"
        style={{ backgroundColor: 'var(--accent)' + '1a' }}
      >
        <span ref={iconRef} className="inline-flex" style={{ color: 'var(--accent)' }}>
          <Icon size={28} weight="duotone" />
        </span>
      </div>
      <h3
        className="font-semibold text-xl mb-3"
        style={{ color: 'var(--text-primary)' }}
      >
        {title}
      </h3>
      <p className="leading-relaxed mt-auto" style={{ color: 'var(--text-secondary)' }}>
        {description}
      </p>
    </div>
  )
}
