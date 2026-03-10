import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Services from '../components/sections/Services';
import Portfolio from '../components/sections/Portfolio';
import Contact from '../components/sections/Contact';

export default function Home() {
  return (
    <>
      <section id="hero">
        <Hero />
      </section>
      <About />
      <Services />
      <Portfolio />
      <Contact />

      {/* Footer */}
      <footer
        className="py-8 text-center text-sm border-t"
        style={{
          backgroundColor: 'var(--bg-secondary)',
          borderColor: 'var(--border)',
          color: 'var(--text-secondary)',
        }}
      >
        <p>
          © {new Date().getFullYear()} Josua Asido Prima Silalahi Crafted with{' '}
          <span style={{ color: 'var(--accent)' }}>♥</span> using React &
          Tailwind.
        </p>
      </footer>
    </>
  );
}
