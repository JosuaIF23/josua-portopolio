export default function FilterBar({ categories, active, onChange }) {
  return (
    <div className="flex flex-wrap gap-3 justify-center mb-12">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border"
          style={
            active === cat
              ? {
                  backgroundColor: 'var(--accent)',
                  borderColor: 'var(--accent)',
                  color: '#ffffff',
                }
              : {
                  backgroundColor: 'transparent',
                  borderColor: 'var(--border)',
                  color: 'var(--text-secondary)',
                }
          }
        >
          {cat}
        </button>
      ))}
    </div>
  )
}
