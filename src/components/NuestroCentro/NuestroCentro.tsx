import styles from './NuestroCentro.module.css'

const NuestroCentro: React.FC = () => {
  return (
    <section className={styles.nuestroCentro} id="nuestro-centro">
      <div className={`container ${styles.nuestroCentro__inner}`}>
        <h2 className={styles.nuestroCentro__title}>Nuestro Centro</h2>
        <p className={styles.nuestroCentro__subtitle}>Placeholder</p>
      </div>
    </section>
  )
}

export default NuestroCentro
