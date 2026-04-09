import { FunctionComponent } from 'react'
import styles from './Luz.module.css'

interface LuzProps {
  variant?: 'desktop' | 'tablet-hero' | 'mobile'
}

const Luz: FunctionComponent<LuzProps> = ({ variant = 'desktop' }) => {
  const variantClass =
    variant === 'tablet-hero'
      ? styles.variantTabletHero
      : variant === 'mobile'
        ? styles.variantMobile
        : styles.variantDesktop

  return (
    <a
      className={`${styles.luz} ${variantClass}`}
      href="https://wa.me/5492926476050?text=Hola,%20vengo%20de%20la%20web.%20Quiero%20sacar%20un%20turno"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chateá con Luz"
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
