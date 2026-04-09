import { FunctionComponent, useState, useEffect, useRef } from 'react'
import styles from './Luz.module.css'

interface LuzProps {
  variant?: 'desktop' | 'tablet-hero' | 'mobile'
}

const Luz: FunctionComponent<LuzProps> = ({ variant = 'desktop' }) => {
  const [expanded, setExpanded] = useState(false)
  const isTouchRef = useRef(false)

  const variantClass =
    variant === 'tablet-hero'
      ? styles.variantTabletHero
      : variant === 'mobile'
        ? styles.variantMobile
        : styles.variantDesktop

  // Collapse when user returns from WhatsApp
  useEffect(() => {
    const handleFocus = () => setExpanded(false)
    window.addEventListener('focus', handleFocus)
    return () => window.removeEventListener('focus', handleFocus)
  }, [])

  const handleTouchStart = () => {
    isTouchRef.current = true
  }

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isTouchRef.current) {
      isTouchRef.current = false
      if (!expanded) {
        // First tap: expand, don't navigate yet
        e.preventDefault()
        setExpanded(true)
        return
      }
      // Second tap: collapse and navigate
      setExpanded(false)
      return
    }
    // Mouse click: collapse and navigate
    setExpanded(false)
  }

  return (
    <a
      className={`${styles.luz} ${variantClass} ${expanded ? styles.luzExpanded : ''}`}
      href="https://wa.me/5492926476050?text=Hola,%20vengo%20de%20la%20web.%20Quiero%20sacar%20un%20turno"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chateá con Luz"
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      onTouchStart={handleTouchStart}
      onClick={handleClick}
    >
      <span className={styles.iconWrapper}>
        <img
          className={styles.eyesOpen}
          src="/luz-ojos-abiertos.svg"
          alt=""
          aria-hidden="true"
        />
        <img
          className={styles.eyesClosed}
          src="/luz-ojos-cerrados.svg"
          alt=""
          aria-hidden="true"
        />
      </span>
      <span className={styles.label} aria-hidden="true">
        Chateá con Luz
      </span>
    </a>
  )
}

export default Luz
