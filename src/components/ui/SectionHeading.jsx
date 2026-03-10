export default function SectionHeading({ eyebrow, title, subtitle, center = false }) {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      {eyebrow && (
        <span
          className="inline-block text-sm font-semibold tracking-widest uppercase mb-3"
          style={{ color: 'var(--accent)' }}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className="font-serif text-4xl md:text-5xl font-bold mb-4 leading-tight"
        style={{ color: 'var(--text-primary)' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="text-lg max-w-2xl leading-relaxed"
          style={{ color: 'var(--text-secondary)', marginLeft: center ? 'auto' : undefined, marginRight: center ? 'auto' : undefined }}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
