import { ArrowSquareOut, GithubLogo } from '@phosphor-icons/react'

export default function PortfolioCard({ project, onClick }) {
  const { title, category, description, techStack, imageUrl, liveLink, repoLink } = project

  return (
    <div
      className="card overflow-hidden group cursor-pointer hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
      onClick={onClick}
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-video">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium text-white bg-white/20 backdrop-blur-sm hover:bg-white/40 transition-colors"
          >
            <ArrowSquareOut size={14} /> Live
          </a>
          <a
            href={repoLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium text-white bg-white/20 backdrop-blur-sm hover:bg-white/40 transition-colors"
          >
            <GithubLogo size={14} /> Code
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <span
          className="text-xs font-semibold tracking-widest uppercase"
          style={{ color: 'var(--accent)' }}
        >
          {category}
        </span>
        <h3
          className="font-semibold text-lg mt-1 mb-2"
          style={{ color: 'var(--text-primary)' }}
        >
          {title}
        </h3>
        <p
          className="text-sm leading-relaxed mb-4 line-clamp-2"
          style={{ color: 'var(--text-secondary)' }}
        >
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2.5 py-1 rounded-full font-medium"
              style={{
                backgroundColor: 'var(--bg-secondary)',
                color: 'var(--text-secondary)',
                border: '1px solid var(--border)',
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
