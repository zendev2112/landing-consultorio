import React, { useState } from 'react'
import styles from './FAQ.module.css'

type FAQItem = {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question:
      '¿En qué se diferencia Zenón Ponce Odontología de otras clínicas de la región?',
    answer:
      'Somos el único centro odontológico en un radio de 200 km con diagnóstico 3D, laboratorio digital propio y un equipo interdisciplinario que trabaja de manera coordinada y sin derivaciones. Eso significa que todo el proceso — diagnóstico, planificación y tratamiento — ocurre en un solo lugar, en Coronel Suárez, sin traslados y con el mismo equipo que te conoce desde el primer día.',
  },
  {
    question: '¿Qué es el diseño de sonrisa y cómo sé si es para mí?',
    answer:
      'El diseño de sonrisa es un tratamiento estético personalizado que mejora la forma, el color y la proporción de tus dientes según tu rostro y tu estilo de vida. En Zenón Ponce Odontología lo planificamos con tecnología digital, lo que nos permite mostrarte el resultado antes de empezar. Es para vos si querés recuperar la confianza al sonreír, si tenés dientes desgastados, manchados o desalineados, o simplemente si sentís que tu sonrisa no te representa. La primera consulta es el mejor punto de partida.',
  },
  {
    question: '¿Cómo es la primera consulta?',
    answer:
      'La primera consulta dura aproximadamente 30 minutos y está diseñada para darte un panorama completo de tu salud bucal. Incluye escaneo digital y un plan de tratamiento claro con opciones y tiempos reales. No vas a salir con dudas: explicamos cada paso, respondemos todo lo que necesitás saber y acordamos juntos cómo seguir. Sin presiones, sin apuros.',
  },
  {
    question:
      '¿Cómo sé si necesito un implante o hay otra solución para mi diente?',
    answer:
      'No siempre el implante es la primera opción. En Zenón Ponce Odontología evaluamos cada caso con diagnóstico 3D para determinar cuál es el tratamiento más conveniente según tu situación — ya sea rehabilitación, prótesis, o implante. Lo importante es que tengas opciones claras y reales antes de tomar cualquier decisión. Eso es exactamente lo que hacemos en la primera consulta: escucharte, diagnosticar con precisión y explicarte el camino más adecuado para vos.',
  },
]

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i))
  }

  return (
    <section className={styles.seccionFaq} id="faq">
      <div className={styles.inner}>
        <b className={styles.preguntasFrecuentes}>Preguntas frecuentes</b>
        <div className={styles.faqList}>
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div key={i} className={styles.faqItem}>
                <div className={styles.divider} />
                <button
                  className={styles.header}
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                >
                  <b className={styles.question}>{faq.question}</b>
                  <img
                    className={`${styles.icon} ${isOpen ? styles.iconOpen : ''}`}
                    src="/flecha-der.svg"
                    alt=""
                    aria-hidden="true"
                  />
                </button>
                <div
                  className={`${styles.answerWrapper} ${isOpen ? styles.answerOpen : ''}`}
                >
                  <div className={styles.answerInner}>
                    <p className={styles.answer}>{faq.answer}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FAQ
