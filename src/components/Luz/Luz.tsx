import { FunctionComponent } from 'react'
import styles from './Luz.module.css'

const Luz: FunctionComponent = () => {
  return (
    <a
      className={styles.luz}
      href="https://wa.me/5492926476050"
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
