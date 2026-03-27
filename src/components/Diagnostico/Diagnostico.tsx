import styles from './Diagnostico.module.css'

const Diagnostico: React.FC = () => {
  return (
    <section className={styles.diagnostico} id="diagnostico">
      <div className={`container ${styles.diagnostico__inner}`}>
        <h2 className={styles.diagnostico__title}>Diagnóstico</h2>
        <p className={styles.diagnostico__subtitle}>Placeholder</p>
      </div>
    </section>
  )
}

export default Diagnostico
