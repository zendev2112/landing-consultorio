import { FunctionComponent } from 'react'
import styles from './Hero.module.css'
import Luz from '../Luz/Luz'

const Hero: FunctionComponent = () => {
  return (
    <section className={styles.hero} id="inicio">
      <div className={styles.heroInner}>
        <div className={styles.heroLeft}>
          <div className={styles.textContent}>
            <h1 className={styles.title}>
              Volvé a{' '}
              <span className={styles.highlight}>
                <img
                  className={styles.decorativeVector}
                  src="/vector-1.svg"
                  alt=""
                  aria-hidden="true"
                />
                sonreír
              </span>
              <br />
              con confianza.
            </h1>
            <p className={styles.body}>
              Cuidamos tu salud bucodental,
              <br />
              desde el diagnóstico hasta el tratamiento.
            </p>
            <p className={styles.subtitle}>Y todo en el mismo lugar.</p>
            <a
              href="https://wa.me/5492926476050?text=Hola,%20vengo%20de%20la%20web.%20Quiero%20sacar%20un%20turno"
              target="_blank"
              rel="noopener noreferrer"
              className="cta"
            >
              AGENDÁ TU TURNO
            </a>
          </div>
        </div>
        <div className={styles.imageSector}>
          <div className={styles.imagePlaceholder}>
            <video
              className={styles.heroVideo}
              src="https://res.cloudinary.com/dptdloagw/video/upload/v1775480305/recorrida_zpo_qyc9cd.mov"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
          <Luz variant="tablet-hero" />
          <Luz variant="mobile" />
        </div>
      </div>
    </section>
  )
}

export default Hero
