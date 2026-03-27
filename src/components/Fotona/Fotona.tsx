import styles from './Fotona.module.css'

const Fotona: React.FC = () => {
  return (
    <section className={styles.fotona} id="fotona">
      <div className={`container ${styles.fotona__inner}`}>
        <h2 className={styles.fotona__title}>Fotona</h2>
        <p className={styles.fotona__subtitle}>Placeholder</p>
      </div>
    </section>
  )
}

export default Fotona
