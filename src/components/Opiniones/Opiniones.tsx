import styles from './Opiniones.module.css'

const Opiniones: React.FC = () => {
  return (
    <section className={styles.opiniones} id="opiniones">
      <div className={`container ${styles.opiniones__inner}`}>
        <h2 className={styles.opiniones__title}>Opiniones</h2>
        <p className={styles.opiniones__subtitle}>Placeholder</p>
      </div>
    </section>
  )
}

export default Opiniones
