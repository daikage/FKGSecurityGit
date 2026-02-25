import { useEffect, useRef } from 'react'

const Reveal = ({ as: Tag = 'div', className = '', delay = 0, children, ...props }) => {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add('visible')
            obs.unobserve(el)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -10% 0px' }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const delayClass = delay ? ` delay-${delay}` : ''
  return (
    <Tag ref={ref} className={`reveal${delayClass} ${className}`} style={{ transitionDelay: delay ? `${delay * 100}ms` : undefined }} {...props}>
      {children}
    </Tag>
  )
}

export default Reveal
