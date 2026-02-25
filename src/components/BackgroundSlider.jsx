import { useEffect, useMemo, useState } from 'react'

const DEFAULT_INTERVAL = 6000

const BackgroundSlider = ({ images = [], interval = DEFAULT_INTERVAL }) => {
  const slides = useMemo(() => images.filter(Boolean), [images])
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (!slides.length) return
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length)
    }, interval)
    return () => clearInterval(id)
  }, [slides, interval])

  if (!slides.length) return null

  return (
    <div className="hero-bg" aria-hidden="true">
      {slides.map((s, i) => (
        <div
          key={s.src + i}
          className={`bg-slide ${i === index ? 'active' : ''}`}
          style={{ backgroundImage: `url(${s.src})` }}
          role="img"
          aria-label={s.alt || ''}
        />
      ))}
      <div className="hero-gridlines" />
      <div className="hero-overlay" />
    </div>
  )
}

export default BackgroundSlider
