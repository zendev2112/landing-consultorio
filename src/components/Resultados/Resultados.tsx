import styles from './Resultados.module.css'

const Resultados: React.FC = () => {
  return (
    <section className={styles.resultados} id="resultados">
      <div className={`container ${styles.resultados__inner}`}>
        <h2 className={styles.resultados__title}>Resultados</h2>
        <p className={styles.resultados__subtitle}>Placeholder</p>
      </div>
    </section>
  )
}

export default Resultados
