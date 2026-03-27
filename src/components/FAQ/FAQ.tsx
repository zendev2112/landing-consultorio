import styles from './FAQ.module.css'

const FAQ: React.FC = () => {
  return (
    <section className={styles.faq} id="faq">
      <div className={`container ${styles.faq__inner}`}>
        <h2 className={styles.faq__title}>Preguntas Frecuentes</h2>
        <p className={styles.faq__subtitle}>Placeholder</p>
      </div>
    </section>
  )
}

export default FAQ
