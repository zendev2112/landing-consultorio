import styles from './Minutos.module.css'

const Minutos: React.FC = () => {
  return (
    <section className={styles.minutos} id="minutos">
      <div className={`container ${styles.minutos__inner}`}>
        <h2 className={styles.minutos__title}>Minutos</h2>
        <p className={styles.minutos__subtitle}>Placeholder</p>
      </div>
    </section>
  )
}

export default Minutos
