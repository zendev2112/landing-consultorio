import styles from './Tratamientos.module.css'

const Tratamientos: React.FC = () => {
  return (
    <section className={styles.tratamientos} id="tratamientos">
      <div className={`container ${styles.tratamientos__inner}`}>
        <h2 className={styles.tratamientos__title}>Tratamientos</h2>
        <p className={styles.tratamientos__subtitle}>Placeholder</p>
      </div>
    </section>
  )
}

export default Tratamientos
