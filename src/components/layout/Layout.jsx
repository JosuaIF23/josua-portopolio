import useLenis from '../../hooks/useLenis'
import Navbar from './Navbar'

export default function Layout({ children }) {
  useLenis()

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh' }}>
      <Navbar />
      <main>{children}</main>
    </div>
  )
}
