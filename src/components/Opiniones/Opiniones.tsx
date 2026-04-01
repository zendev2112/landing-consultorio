import React, { useState } from 'react'
import styles from './Opiniones.module.css'

interface Opinion {
  quote: React.ReactNode
  author: string
}

const opinions: Opinion[] = [
  {
    quote: (
      <>
        “La <b>tecnología digital que usan es increíble</b>. Me hicieron un
        diseño de sonrisa en minutos y el resultado superó mis expectativas. Un
        equipo súper profesional, detallista y cálido.”
      </>
    ),
    author: 'Julián Mollo',
  },
  {
    quote: (
      <>
        “Tenía mucho miedo a los implantes, pero la calidez de Zenón y su equipo
        me dio mucha tranquilidad. El proceso fue rápido,{' '}
        <b>sin dolor y muy preciso</b>. Los recomiendo totalmente.”
      </>
    ),
    author: 'María García',
  },
  {
    quote: (
      <>
        “Excelente atención desde el primer día. Valoro mucho la puntualidad y
        la claridad con la que explican cada tratamiento. Se nota que están
        <b>a la vanguardia en odontología</b> moderna.”
      </>
    ),
    author: 'Fernando Sánchez',
  },
]

const Opiniones: React.FC = () => {
  const [current, setCurrent] = useState(0)
  const [prev, setPrev] = useState<number | null>(null)
  const [animating, setAnimating] = useState(false)

  const navigate = (dir: number) => {
    if (animating) return
    const next = (current + dir + opinions.length) % opinions.length
    setPrev(current)
    setCurrent(next)
    setAnimating(true)
    setTimeout(() => {
      setPrev(null)
      setAnimating(false)
    }, 1800)
  }

  return (
    <section className={styles.opiniones} id="opiniones">
      <div className={styles.inner}>
        <div className={styles.laOpininDeContainer}>
          <span>La opinión de </span>
          <b>nuestros pacientes</b>
        </div>
        <div className={styles.cardOpinion}>
          <div className={styles.tituloOpinion}>
            <b className={styles.laMejorManera}>
              La mejor manera de contar lo que hacemos, es a través de quienes
              confían en nosotros.
            </b>
          </div>
          <div className={styles.fraseWrapper}>
            {prev !== null && (
              <div className={`${styles.fraseOpinion} ${styles.fraseOut}`}>
                <div className={styles.quisqueRutrumAeneanContainer}>
                  {opinions[prev].quote}
                </div>
                <b className={styles.julinMollo}>{opinions[prev].author}</b>
              </div>
            )}
            <div
              className={`${styles.fraseOpinion} ${animating ? styles.fraseIn : ''}`}
            >
              <div className={styles.quisqueRutrumAeneanContainer}>
                {opinions[current].quote}
              </div>
              <b className={styles.julinMollo}>{opinions[current].author}</b>
            </div>
          </div>
        </div>
        <div className={styles.flechas}>
          <button
            className={styles.flechaBtn}
            onClick={() => navigate(-1)}
            aria-label="Opinión anterior"
          >
            <img src="/flecha-izq.svg" width="23.9" height="23.9" alt="" />
          </button>
          <button
            className={styles.flechaBtn}
            onClick={() => navigate(1)}
            aria-label="Opinión siguiente"
          >
            <img src="/flecha-der.svg" width="23.9" height="23.9" alt="" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Opiniones
