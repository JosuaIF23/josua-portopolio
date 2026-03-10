import { useEffect } from 'react'
import Lenis from 'lenis'
import { gsap } from '../utils/gsapInit'

let lenisInstance = null

export function getLenis() {
  return lenisInstance
}

export default function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    })

    lenisInstance = lenis

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
      lenisInstance = null
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000)
      })
    }
  }, [])
}
